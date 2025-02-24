"use client";

import React, { useOptimistic, useTransition } from 'react'
import { Button } from '../ui/button'
import { Bookmark, Share, ThumbsUp } from 'lucide-react'
import { toggleLike } from '@/actions/like-disllike';
import { Like } from '@prisma/client';

type LikeButtonProps = {
    articleId: string;
    likes: Like[];
    isLiked: boolean;
}

const LikeButton : React.FC<LikeButtonProps> = ({ articleId,likes,isLiked,}) => {

    const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes.length);
    const [isPending, startTransition] = useTransition();

    const handleLike = async () => {
    
        startTransition(async () => {
          setOptimisticLikes(isLiked ? optimisticLikes - 1 : optimisticLikes + 1); // Optimistically update UI
          await toggleLike(articleId);
        });
      };
    

 

  return (
    <div className='flex mb-12 gap-4 border-t pt-8'>
        <form action={handleLike}>
            <Button disabled={isPending} type="submit"className='gap-3' variant="ghost">
                <ThumbsUp className='h-5 w-5' />
                {optimisticLikes}
            </Button>
        </form>

        <Button variant="ghost" className=' gap-2'>
            <Bookmark className='h-5 w-5' />
        </Button>

        
        <Button variant="ghost" className=' gap-2'>
            <Share className='h-5 w-5' />
        </Button>
    </div>
  )
}

export default LikeButton