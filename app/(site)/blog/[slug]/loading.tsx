import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Skeleton } from "@/components/ui/skeleton"

export default async function LoadingBlogPostPage() {
  return (
    <>
      <div className="py-2 sm:px-3 text-gray-600 bg-white sm:bg-gradient-to-b from-white to-gray-100 text-sm flex justify-between font-semibold">
        <MaxWidthWrapper>
          <div className="py-4 font-semibold">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>Beranda</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Blog</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>...</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="py-4 sm:py-8 text-center mx-auto">
            <Skeleton className=" py-4 sm:py-8 w-72 mx-auto" />
          </div>
          <div className="bg-gray-100 max-w-4xl mx-auto rounded-lg">
            <div className="aspect-video group overflow-hidden rounded-lg flex justify-center items-center">
              <Skeleton className="w-full h-36 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex justify-between py-2 px-3 ">
              <div className="flex flex-col">
                <div className="flex gap-1.5 items-center p-1">
                  <Skeleton className="w-5 h-5 bg-white" />
                  <Skeleton className="w-36 h-5 bg-white" />
                </div>
              </div>
              <div className="flex gap-1.5 items-center p-1">
                <Skeleton className="w-5 h-5 bg-white" />
                <Skeleton className="w-36 h-5 bg-white" />
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-8 bg-white my-4 sm:my-8 rounded-xl">
            <div className="py-4  bg-white blog-post max-w-prose mx-auto">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                </div>
                <Skeleton className="py-5 w-1/2 text-gray-700 text-pretty h-8 overflow-y-auto" />
                <div className="space-y-3">
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                </div>
                <Skeleton className="py-5 w-3/4 text-gray-700 text-pretty h-8 overflow-y-auto" />
                <div className="space-y-3">
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                  <Skeleton className="py-1.5 w-full text-gray-700 text-pretty h-4 overflow-y-auto" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
