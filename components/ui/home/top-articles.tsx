import React from 'react'
import { Card } from '../card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

function TopArticle() {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className={cn(
                "group relative overflow-hidden transition-all hover:scale-[1.02]",
                "border border-gray-200/50 dark:border-white/10",
                "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
            )}
            >
            <div className="p-6">
                <Link href={`/articles/${1234}`}>
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1739971600548-3360ae4b4c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Article Title"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="">
                            <AvatarFallback>
                                CN
                            </AvatarFallback>
                        </AvatarImage>
                    </Avatar>
                    <span>Author Name</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    Author name            </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis laborum dolorem odio. Autem laudantium nihil adipisci quas, officiis odit, nam nesciunt quaerat soluta commodi odio. At ut numquam blanditiis eos!</p>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>12 feb</span>
                <span>{12} min to read</span>
            </div>
            </Link>
            </div>
        </Card>
        </div>
    )
}

export default TopArticle