import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function AllArticlesPage() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Article Card */}

            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">

                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                        <Image
                            src=""
                            alt="Article Image"
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                         Title
                    </h3>
                    <p className="mt-2 text-muted-foreground">web dev</p>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage/>
                                <AvatarFallback>CN</AvatarFallback>    
                            </Avatar>
                            <span className="text-sm text-muted-foreground">Author</span>
                        </div>
                        <div className="text-sm text-muted-foreground">12 feb</div>
                    </div>
                </div>

            </Card>

        </div>
    )
}

export default AllArticlesPage