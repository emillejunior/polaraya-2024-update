import { fetchTotalPages } from "@/api"
import BlogPage from "../../page"

export { generateMetadata } from "../../page"

export async function generateStaticParams() {
  const totalPages = await fetchTotalPages(9) // Assuming 9 posts per page
  const pagesArray = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
  return pagesArray
}

export default BlogPage
