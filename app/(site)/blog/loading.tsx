import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

export default async function LoadingBlogPage() {
  return (
    <div className="py-2 sm:px-3 bg-gradient-to-bl from-gray-50 to-gray-200">
      <MaxWidthWrapper>
        <div className="py-4 font-semibold">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Blog</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-12">
          <h1 className="px-2 py-5 lg:p-8 font-bold text-4xl">Blog</h1>
          <ul className="sm:px-4 sm:grid flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
            <BlogThumbSkeleton />
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

const BlogThumbSkeleton = () => (
  <li className="bg-white group overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-transparent hover:border-blue-300 shadow-md hover:shadow-xl hover:rotate-1 transition-all duration-500 scale-95 hover:scale-100">
    <div>
      <Skeleton className="h-48 overflow-hidden flex justify-center items-center" />
      <div className="px-5 pt-5">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
        </div>
        <div className="flex gap-2 items-center px-1 pb-6 pt-2">
          <Skeleton className="size-6 text-gray-600 rounded-full" />
          <Skeleton className="text-sm h-5 font-semibold text-gray-600 py-1 w-36" />
        </div>
      </div>
    </div>
    <div className="px-5 pb-3">
      <div className="pb-2 flex flex-col gap-2">
        <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
        <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
        <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
      </div>
    </div>
    <Skeleton className="flex justify-end bg-gradient-to-b from-gray-100 h-12 to-white p-2" />
  </li>
)
