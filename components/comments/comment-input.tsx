"use client"

import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { createComment } from '@/actions/create-comment'

type CommentInputProps = {
    articleId: string;
}


const CommentInput: React.FC<CommentInputProps> = ({ articleId }) => {

    const [formState, action, isPending] = useActionState(createComment.bind(null, articleId), { errors: {} })


    return (
        <form action={action} className='mb-8'>
            <div className='flex gap-4'>
                <Avatar>
                    <AvatarImage src='' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1'>

                    <Input
                        type='text'
                        placeholder='Add a comment..'
                        name='body'
                    />
                    {formState.errors.body && <p className='text-red-500 text-sm'>{formState.errors.body}</p>}
                    <div className='flex justify-end mt-4'>
                        <Button type='submit' disabled={isPending}>{isPending? "loading.." : "Post comment" }</Button>
                    </div>
                    {formState.errors.formError && <div className='border-red-600 bg-red-100 p-2 border'>{formState.errors.formError}</div>}
                </div>
            </div>
        </form>
    )
}

export default CommentInput