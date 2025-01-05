'use client'

import Link from 'next/link'
import { buttonVariants } from './Button'

type PaginationControlsProps = {
   page: number
   perPage: number
   hasNextPage: boolean
   hasPrevPage: boolean
   TotalPosts: number | undefined
}

function PaginationControls({
   page,
   perPage,
   hasPrevPage,
   hasNextPage,
   TotalPosts,
}: PaginationControlsProps) {
   return (
      <div className="flex items-center gap-spacing-7 py-spacing-12">
         {hasPrevPage ? <Link href={`${Number(page) - 1}`}>Previous</Link> : ''}

         <div>
            page {page} of {Math.ceil(Number(TotalPosts) / Number(perPage))}
         </div>

         {hasNextPage ? (
            <Link className={buttonVariants({ variant: 'secondary' })} href={`${Number(page) + 1}`}>
               Next
            </Link>
         ) : (
            ''
         )}
      </div>
   )
}

export default PaginationControls
