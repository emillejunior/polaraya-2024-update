import { Loader2Icon } from "lucide-react"

export default function loading() {
  return (
    <div className="mx-auto py-40 flex justify-center items-center">
      <Loader2Icon className="size-24 animate-spin opacity-25" />
    </div>
  )
}
