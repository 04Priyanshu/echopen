import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../../input'

function SearchInput() {
    return (
        <div>
            <form action="">
                <div className="relative">
                    <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                    <Input
                        type='text'
                        placeholder='Search articles...'
                        name='search'
                        className='pl-10 w-48 focus-visible::ring-1 '
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchInput