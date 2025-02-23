import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

function ArticleSearchInput() {
  return (
   <form className="mx-auto max-w-2xl">
    <div className="relative">
        <Search className="absolute top-1/2 left-3 w-5 h-5 text-gray-400 -translate-y-1/2" />
        <Input
            type="text"
            placeholder="Search Articles.."
            className="pl-10 w-full pr-4 py-6 text-lg  text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            name='search'
        />
    </div>
   </form>
  )
}

export default ArticleSearchInput