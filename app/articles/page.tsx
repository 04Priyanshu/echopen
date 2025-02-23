import AllArticlesPage from '@/components/articles/all-article-page'
import ArticleSearchInput from '@/components/articles/article-search-input'
import { Button } from '@/components/ui/button'
import React, { Suspense } from 'react'

function page() {
  return (
    <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* page header */}

            <div className="mb-12 space-y-6 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    All Articles
                </h1>
                {/* Search Bar */}
                <Suspense>
                    <ArticleSearchInput />
                </Suspense>
            </div>

            {/* All article page  */}
            <AllArticlesPage/>



            {/* Pagination */}


            <div className="mt-12 flex justify-center gap-2">
                <Button variant={"ghost"} size="sm">← Prev</Button>
                <Button variant={"ghost"} size="sm">1</Button>
                <Button variant={"ghost"} size="sm">2</Button>
                <Button variant={"ghost"} size="sm">3</Button>
                <Button variant={"ghost"} size="sm">Next →</Button>

            </div>
        </main>
    </div>
  )
}

export default page