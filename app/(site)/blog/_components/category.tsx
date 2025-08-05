import { fetchCategory } from "@/api"

export const Category = async ({ categoryId }: { categoryId: number }) => {
  const category = await fetchCategory(categoryId)

  return (
    <div className="px-1 py-0.5 text-sm border bg-white rounded">
      {category.name}
    </div>
  )
}
