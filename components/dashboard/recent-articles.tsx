import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Link from 'next/link'
import { Prisma } from '@prisma/client'

type RecentArticlesProps = {
  articles: Prisma.ArticleGetPayload<{
    include: {
      comments: true
      author: {
        select: {
          name: true
          email: true
          imageUrl: true
        }
      }
    }
  }>[],
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All →
          </Button>
        </div>
      </CardHeader>
      {
        !articles.length ? (
          <CardContent>
            <div className="text-center text-muted-foreground">
              No articles found
            </div>
          </CardContent>
        ) : (<CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                articles.map((articles) => (
                  <TableRow key={articles.id}>
                    <TableCell className="font-medium">{articles.title}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Published
                      </span>
                    </TableCell>
                    <TableCell>{articles.comments.length}</TableCell>
                    <TableCell>{articles.createdAt.toDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link href={`/dashboard/articles/${articles.id}/edit`}>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </Link>
                        <DeleteButton />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              }


            </TableBody>
          </Table>
        </CardContent>)
      }


    </Card>
  )
}

export default RecentArticles;


const DeleteButton = () => {
  return (
    <form action="">
      <Button variant={"ghost"} size="sm" type="submit">Delete</Button>
    </form>
  )
}