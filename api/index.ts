"use server"

import { WordPressPostWithYoast } from "@/types"
// import { WordPressPostWithYoast } from "@/app/types"
import { getPlaiceholder } from "plaiceholder"

const WORDPRESS_API_URL = "https://blog.polaraya.com/wp-json/wp/v2"

interface FetchPostsResult {
  posts: WordPressPostWithYoast[]
  totalPosts: number
  totalPages: number
}

export const fetchPosts = async (
  perPage: number = 10,
  page: number = 1,
  fetchAll: boolean = false
): Promise<FetchPostsResult> => {
  console.log(
    `fetchPosts().. Fetching page #${page}, ${perPage} posts per page...`
  )

  // Conditionally add the `_fields` parameter if fetchAll is true
  const fieldsParam = fetchAll ? "&_fields=slug,modified" : ""
  const response = await fetch(
    `${WORDPRESS_API_URL}/posts?per_page=${perPage}&page=${page}${fieldsParam}`,
    {
      next: { revalidate: 60 * 5 }, // 5 minutes
    }
  )

  if (!response.ok) {
    throw new Error("fetchPosts: Network response was not ok")
  }

  const totalPostsHeader = response.headers.get("x-wp-total")
  const totalPagesHeader = response.headers.get("x-wp-totalpages")

  const totalPosts = totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0
  const data: WordPressPostWithYoast[] = await response.json()

  if (fetchAll && page < totalPages) {
    // Recursively fetch the next page and concatenate the results
    const nextPagePosts = await fetchPosts(perPage, page + 1, true)
    return {
      posts: data.concat(nextPagePosts.posts),
      totalPosts,
      totalPages,
    }
  }

  return {
    posts: data,
    totalPosts,
    totalPages,
  }
}

export const fetchAllPostSlugs = async (): Promise<string[]> => {
  let page = 1
  let slugs: string[] = []
  let hasMore = true

  while (hasMore) {
    try {
      console.log(`fetchAllPostSlugs: page ${page}`)
      const response = await fetch(
        `${WORDPRESS_API_URL}/posts?_fields=slug&per_page=100&page=${page}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const posts = await response.json()

      if (posts.length === 0) {
        hasMore = false
      } else {
        slugs = slugs.concat(posts.map((post: { slug: string }) => post.slug))
        page++
      }
    } catch (error) {
      console.error(
        "Error fetching post slugs, probably reached the end of slugs list",
        error
      )
      hasMore = false
    }
  }

  return slugs
}

async function fetchAllPosts(page = 1, posts = []): Promise<any[]> {
  const response = await fetch(`${WORDPRESS_API_URL}?per_page=100&page=${page}`)
  const data = await response.json()

  if (data.length > 0) {
    return fetchAllPosts(page + 1, posts.concat(data))
  }

  return posts
}

export const fetchPostBySlug = async (
  slug: string
): Promise<WordPressPostWithYoast | null> => {
  const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}`)

  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }
  const posts = await response.json()

  return posts[0]
}

export const fetchPostById = async (id: number) => {
  console.log(`fetchPostById().. Fetching post with id ${id}...`)
  const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}`)

  if (!response.ok) {
    throw new Error("fetchPostBySlug: Network response was not ok")
  }
  const data = await response.json()
  return data
}

export const fetchAuthor = async (id: number) => {
  console.log(`fetchAuthor().. Fetching author with id ${id}...`)

  const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}`)

  if (!response.ok) {
    throw new Error("fetchAuthor: Network response was not ok")
  }
  const data = await response.json()
  return data
}

export const fetchCategory = async (id: number) => {
  console.log(`fetchCategory().. Fetching category with id ${id}...`)

  const response = await fetch(`${WORDPRESS_API_URL}/categories/${id}`)

  if (!response.ok) {
    throw new Error("fetchCategory: Network response was not ok")
  }
  const data = await response.json()
  return data
}

export const fetchTag = async (id: number) => {
  console.log(`fetchTag().. Fetching tag with id ${id}...`)

  const response = await fetch(`${WORDPRESS_API_URL}/tags/${id}`)

  if (!response.ok) {
    throw new Error("fetchTag: Network response was not ok")
  }
  const data = await response.json()
  return data
}

export const fetchMedia = async (id: number) => {
  const response = await fetch(`${WORDPRESS_API_URL}/media/${id}`)
  console.log(
    `fetchMedia().. Fetching media with id ${id} status: ${response.status}`
  )

  if (!response.ok) {
    throw new Error("fetchMedia: Network response was not ok")
  }
  const data = await response.json()
  return data
}

export const fetchBlurImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

export async function fetchTotalPages(postsPerPage: number): Promise<number> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=1`)
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0")
  return Math.ceil(totalPosts / postsPerPage)
}
