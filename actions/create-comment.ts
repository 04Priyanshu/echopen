"use server"
import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import{z} from 'zod'

const CreateCommentSchema = z.object({
    body:z.string().min(1).max(1000)
})

type CreateCommentFormState = {
    errors:{
        body?:string[],
        formError?:string[]
    }
}

export const createComment = async (articleId:string,prevState:CreateCommentFormState,formData:FormData) : Promise<CreateCommentFormState>=>{
    const result=CreateCommentSchema.safeParse({
        body:formData.get('body')
    })

    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const {userId} = await auth();

    if(!userId){
        return {
            errors:{
                formError:['You must be loged in to comment']
            }
        }
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            clerkUserId:userId
        }
    });

    if(!existingUser){
        return {
            errors:{
                formError:['User not found']
            }
        }
    }

    try {
        await prisma.comment.create({
            data:{
                body:result.data.body,
                authorId:existingUser.id,
                articleId
            }
        })
    } catch (error : unknown) {
        if(error instanceof Error){
            return {
                errors:{
                    formError:[error.message]
                }
            }
        }else{
            return {
                errors:{
                    formError:['An error occured']
                }
            }
        }
        
    }

    revalidatePath(`/articles/${articleId}`)
    return {
        errors:{}
    }
        
}