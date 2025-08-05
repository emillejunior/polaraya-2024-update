import { StaticImageData } from "next/image"

export type FeaturedProject = {
  title?: string
  logo?: StaticImageData
  client?: {
    name: string
    logo?: StaticImageData
  }
  images: StaticImageData[]
}
export type WordPressPost = {
  yoast_head_json: {
    title: string
    description: string
    robots: {
      index: string
      follow: string
      // ... other robot directives
    }
    canonical: string
    og_locale: string
    og_type: string
    og_title: string
    og_description: string
    og_url: string
    og_site_name: string
    article_published_time: string
    article_modified_time: string
    og_image: Array<{
      width: number
      height: number
      url: string
      type: string
    }>
    twitter_card: string
    twitter_misc: {
      "Est. reading time": string
    }
    schema: {
      "@context": string
      "@graph": Array<any> // You can define more specific types if needed
    }
  }
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[] // You can define a more specific type if needed
  categories: number[]
  tags: number[]
  _embedded?: {
    author: Array<{
      id: number
      name: string
      url: string
      avatar_urls: {
        [key: string]: string
      }
    }>
    "wp:featuredmedia"?: Array<{
      id: number
      source_url: string
      alt_text: string
    }>
  }
}
type YoastSEO = {
  yoast_head: string
  yoast_head_json: {
    title: string
    robots: {
      index: "index" | "noindex"
      follow: "follow" | "nofollow"
      max_snippet: string
      max_image_preview: string
      max_video_preview: string
    }
    canonical: string
    og_locale: string
    og_type: string
    og_title: string
    og_url: string
    og_site_name: string
    og_image: {
      url: string
      width: number
      height: number
    }[]
    twitter_card: string
    schema: {
      "@context": string
      "@type": string
      "@id": string
    }[]
  }
}

export type WordPressPostWithYoast = WordPressPost & YoastSEO
