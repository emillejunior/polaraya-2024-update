import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="text-center py-16">
        <div className="py-4">
          <h2 className="font-bold text-2xl">Not Found</h2>
          <p>We are sorry, but the page you are looking for does not exist.</p>
        </div>
        <Link className={buttonVariants()} href="/">
          Return Home
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
