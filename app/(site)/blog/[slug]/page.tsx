import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { parseISO, format } from "date-fns"
import { id } from "date-fns/locale"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import parse, {
  HTMLReactParserOptions,
  Element,
  // domToReact,
} from "html-react-parser"
import { CalendarIcon, TagIcon } from "lucide-react"

import Link from "next/link"
import FeaturedMedia from "../_components/featured-image"
import { fetchPostBySlug, fetchAllPostSlugs } from "@/api"
import { Category } from "../_components/category"
import { Tag } from "../_components/tag"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { WordPressPostWithYoast } from "@/types"
import { SITE_URL } from "@/app/sitemap"
import CustomImage from "../_components/custom-image"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  // Fetch the post data by slug
  const post: WordPressPostWithYoast | null = await fetchPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
      description: "This post could not be found.",
    }
  }

  // Use Yoast SEO data (if available) or fallback to default title and description
  const yoast = post.yoast_head_json

  return {
    title: yoast?.title || post.title.rendered,
    description:
      yoast?.og_description || yoast?.description || post.excerpt.rendered, // Use description fields correctly
    alternates: {
      // canonical: yoast?.canonical || `${SITE_URL}/blog/${post.slug}`,
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: yoast?.og_title || post.title.rendered,
      description: yoast?.og_description || post.excerpt.rendered, // Corrected access to OpenGraph description
      url: yoast?.og_url || post.link,
      siteName: yoast?.og_site_name,
      locale: yoast?.og_locale,
      type: (yoast?.og_type as "article" | "website") || "article", // Ensure type is from allowed values
      images:
        yoast?.og_image?.map((image) => ({
          url: image.url,
          width: image.width,
          height: image.height,
        })) || [],
    },
    twitter: {
      card:
        (yoast?.twitter_card as "summary" | "summary_large_image") || "summary", // Ensure card is one of the allowed types
      title: yoast?.title || post.title.rendered, // Twitter title
      description:
        yoast?.og_description || yoast?.description || post.excerpt.rendered, // Use description from og or main description
    },
  }
}

export async function generateStaticParams() {
  const slugs = await fetchAllPostSlugs()
  console.log("generateStaticParams.. slugs fetched:", slugs.length)

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const parsedDate = parseISO(post.date)

  // Format the date as needed using the Indonesian locale
  const formattedDate = format(parsedDate, "d MMMM yyyy", {
    locale: id,
  })
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "img") {
        return (
          <CustomImage
            src={domNode.attribs.src}
            alt={domNode.attribs.alt || ""}
            width={
              domNode.attribs.width
                ? parseInt(domNode.attribs.width, 10)
                : undefined
            }
            height={
              domNode.attribs.height
                ? parseInt(domNode.attribs.height, 10)
                : undefined
            }
          />
        )
      }
    },
  }

  return (
    <>
      <div className="py-2 sm:px-3 text-gray-600 bg-white sm:bg-gradient-to-b from-white to-gray-100 text-sm flex justify-between font-semibold">
        <MaxWidthWrapper>
          <div className="py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Beranda</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/blog/${slug}`}>{slug}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="py-4 sm:py-8 text-center mx-auto">
            <h1 className="text-3xl sm:text-4xl text-blue-950 font-extrabold py-4 sm:py-8">
              {post.title.rendered}
            </h1>
          </div>
          <div className="bg-gray-100 mx-auto rounded-lg">
            <div className="aspect-video group overflow-hidden rounded-lg flex justify-center items-center">
              <FeaturedMedia
                mediaId={post.featured_media}
                className="w-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex p-1 flex-col sm:flex-row justify-between py-2 px-3 ">
              <div className="flex flex-col">
                <div className="flex gap-1.5 items-center ">
                  <CalendarIcon className="size-4 text-gray-600" />
                  <span className="text-sm">{formattedDate}</span>
                </div>
              </div>
              <div className="flex items-center p-1 gap-1 text-sm">
                <TagIcon className="size-4 text-gray-600" />
                Categories:
                <div className="flex items-center gap-0.5">
                  <span className="text-gray-600 flex gap-1">
                    {post.categories.map((category) => (
                      <Category key={category} categoryId={category} />
                    ))}
                  </span>
                </div>
              </div>
              <div className="flex p-1 items-center gap-1 text-sm">
                <TagIcon className="size-4 text-gray-600" />
                Tags:
                <div className="flex items-center gap-0.5">
                  <span className="text-gray-600 flex gap-1">
                    {post.tags.map((tag) => (
                      <Tag key={tag} tagId={tag} />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-8 bg-white my-4 sm:my-8 rounded-xl">
            <div className="py-4  bg-white blog-post max-w-prose mx-auto">
              {parse(post.content.rendered, options)}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
