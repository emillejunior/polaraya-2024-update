import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { parseISO, format } from "date-fns"
import { id } from "date-fns/locale"
import parse from "html-react-parser"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import Link from "next/link"
import { FeaturedMediaThumbnail } from "./_components/featured-image-thumb"
import { ClockIcon } from "lucide-react"
import {
  fetchPosts,
  // fetchTotalPages
} from "@/api"
import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const { page } = await params
  const currentPage = parseInt(page || "1")
  // const totalPages = await fetchTotalPages(9) // Assuming 9 posts per page

  const baseUrl = "https://www.polaraya.com/blog"
  const currentUrl =
    currentPage === 1 ? baseUrl : `${baseUrl}/page/${currentPage}`

  const metadata: Metadata = {
    ...pageMeta.blog,
    title: `Blog - Page ${currentPage}`,
    alternates: {
      canonical: currentUrl,
    },
  }

  return metadata
}

// Remove the revalidate export

export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const currentPage = parseInt(page || "1")
  try {
    const data = await fetchPosts(9, currentPage)
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
              {data.posts.map((post) => {
                const parsedDate = parseISO(post.date)
                const formattedDate = format(parsedDate, "d MMMM yyyy", {
                  locale: id,
                })

                return (
                  <li
                    key={post.id}
                    className="bg-white group overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-transparent hover:border-blue-300 shadow-md hover:shadow-xl hover:rotate-1 transition-all duration-500 scale-95 hover:scale-100"
                  >
                    <header className="">
                      <div className="h-48 overflow-hidden flex justify-center items-center">
                        <FeaturedMediaThumbnail
                          mediaId={post.featured_media}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="px-5 pt-5">
                        <h2>
                          <Link
                            href={`/blog/${post.slug}/`}
                            className="text-xl text-balance font-bold hover:text-blue-800 text-blue-950 transition-colors"
                          >
                            {post.title.rendered}
                          </Link>
                        </h2>
                        <div className="flex gap-1.5 items-center p-1">
                          <ClockIcon className="size-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-600 py-1">
                            {formattedDate}
                          </span>
                        </div>
                      </div>
                    </header>
                    <div className="px-5 pb-3">
                      <div className="pb-2">
                        <div className="py-1.5 text-gray-700 text-pretty max-h-28 overflow-y-auto">
                          {parse(post.excerpt.rendered)}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end bg-gradient-to-b from-gray-100 to-white p-2">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className={buttonVariants({
                          variant: "link",
                          size: "sm",
                        })}
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="py-8">
              <Pagination>
                <PaginationContent>
                  {renderPagination({
                    currentPage,
                    totalPages: data.totalPages,
                  })}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    )
  } catch (err) {
    console.error(err)
    return (
      <div className="py-40 text-center">
        <p>Terjadi kesalahan pada server wordpress, coba beberapa saat lagi</p>
      </div>
    )
  }
}

const renderPagination = ({
  currentPage = 1,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) => {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <PaginationItem key={i}>
        <PaginationLink href={`/blog/page/${i}`} isActive={i === currentPage}>
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }
  return pages
}
