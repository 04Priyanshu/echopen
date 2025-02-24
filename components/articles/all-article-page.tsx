import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Search } from 'lucide-react'
import { Prisma } from '@prisma/client'

type SearchPageProps = {
    articles: Prisma.ArticleGetPayload<{
      include:{
        author:{
          select:{
            name:true,
            email:true,
            imageUrl:true
          }
        }
      }
    }>[];
  };

const AllArticlesPage : React.FC<SearchPageProps> = async({articles}) => {


    if (articles.length === 0) return <NoSearchResults />;


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Article Card */}

            {
                articles.map((article)=>(
                    <Card key={article.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">

                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                        <Image
                            src={article.featuredImage}
                            alt="Article Image"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                         {article.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm">{article.category}</p>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={article.author.imageUrl || ""}/>
                                <AvatarFallback>CN</AvatarFallback>    
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{article.author.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{article.createdAt.toDateString()}</div>
                    </div>
                </div>

            </Card>
                ))
            }

            

        </div>
    )
}

export default AllArticlesPage

export function NoSearchResults() {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        {/* Icon */}
        <div className="mb-4 rounded-full bg-muted p-4">
          <Search className="h-8 w-8 text-muted-foreground" />
        </div>
  
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground">
          No Results Found
        </h3>
  
        {/* Description */}
        <p className="mt-2 text-muted-foreground">
          We could not find any articles matching your search. Try a different
          keyword or phrase.
        </p>
      </div>
    );
  }