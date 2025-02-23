import React from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { prisma } from '@/lib/prisma';

const TopArticle = async () => {
    const articles = await prisma.article.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            comments: true,
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    });

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (//articles array hai jisme se 3 articles utha rahe hai
                <Card
                    key={article.id}
                    className={cn(
                        "group relative overflow-hidden transition-all hover:scale-[1.02]",
                        "border border-gray-200/50 dark:border-white/10",
                        "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
                    )}
                >
                    <div className="p-6">
                        <Link href={`/articles/${article.id}`}>
                            {/* Image: Null check added */}
                            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                                {article.featuredImage ? (
                                    <Image
                                        src={article.featuredImage}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-gray-300 dark:bg-gray-700">
                                        <span className="text-gray-600 dark:text-gray-400">No Image</span>
                                    </div>
                                )}
                            </div>

                            {/* ✅ Avatar: Fixed self-closing tag issue */}
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={article.author.imageUrl || "/default-avatar.png"} />
                                    <AvatarFallback>
                                        {article.author.name ? article.author.name.charAt(0) : "?"}
                                    </AvatarFallback>
                                </Avatar>
                                <span>{article.author.name || "Unknown Author"}</span>
                            </div>

                            {/* ✅ Title and Category */}
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                {article.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {article.category || "Uncategorized"}
                            </p>

                            {/* ✅ Date Handling */}
                            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>
                                    {article.createdAt ? new Date(article.createdAt).toDateString() : "Unknown Date"}
                                </span>
                                <span>{12} min to read</span>
                            </div>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default TopArticle;
