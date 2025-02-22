"use server"
import { auth } from '@clerk/nextjs/server'
import {z} from 'zod'
import {v2 as cloudinary , UploadApiResponse} from 'cloudinary'
import { prisma } from '@/lib/prisma'
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


 const createArticleSchema = z.object({
  title: z.string().min(5).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
})

type CreateArticlesFormstate ={
    errors:{
        title?: string[],
        category?: string[],
        featuredImage?: string[],
        content?: string[],
        formError?: string[]
    }
}

export const createArticle = async(prevState : CreateArticlesFormstate,formData : FormData) : Promise<CreateArticlesFormstate> => {
    const result = createArticleSchema.safeParse({
        title: formData.get('title') ,
        category: formData.get('category'), 
        content: formData.get('content') 
    })

    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const {userId} = await auth();
    if(!userId){
        return {
            errors: {
                formError: ['User not found']
            }
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            clerkUserId: userId
        }
    })

    if(!existingUser){
        return {
            errors: {
                formError: ['User not found']
            }
        }
    }

    //start creating artcles
    const imageFile = formData.get('featuredImage') as File | null;
    if(!imageFile || imageFile.name === 'undefined'){
        return {
            errors: {
                featuredImage: ['Featured Image is required']
            }
        }
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse : UploadApiResponse | undefined = await new Promise((resolve,reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {resource_type: 'auto'},
            (error,result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            }
        );

        uploadStream.end(buffer);
    })

    const imageUrl = uploadResponse?.secure_url;
    if(!imageUrl){
        return {
            errors: {
                featuredImage: ['Error uploading image']
            }
        }
    }

    try {
        await prisma.article.create({
            data: {
                title: result.data.title,
                category: result.data.category,
                content: result.data.content,
                featuredImage: imageUrl,
                authorId: existingUser.id
            }
        }) //fix this
    } 
    catch (error : unknown) {
        if(error instanceof Error){
            return {
                errors: {
                    formError: [error.message]
                }
            }
        }
        else{
            return {
                errors: {
                    formError: ['Error creating article']
                }
            }
        }

    }

    revalidatePath('/dashboard')
    redirect('/dashboard')
}
