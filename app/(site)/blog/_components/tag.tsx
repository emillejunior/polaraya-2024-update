import { fetchTag } from "@/api"

export const Tag = async ({ tagId }: { tagId: number }) => {
  const tag = await fetchTag(tagId)

  return (
    <div className="px-1 py-0.5 text-sm border bg-white rounded">
      {tag.name}
    </div>
  )
}
