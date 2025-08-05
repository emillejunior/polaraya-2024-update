// import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export function HeadingSection({
  heading,
  subheading,
  cta,
}: {
  heading: string
  subheading?: string
  cta?: { label: string; href: string }
}) {
  // dbf7f1
  return (
    <section>
      {/* <section className="bg-gradient-to-tr to-gray-50 from-gray-200"> */}
      {/* <MaxWidthWrapper> */}
      <div className="py-12 max-w-prose mx-auto">
        <div className="text-center p-4 flex flex-col items-center">
          <h2 className="font-bold text-4xl py-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-500">
              {heading}
            </span>
          </h2>
          {!!subheading && (
            <p className="text-base max-w-prose py-6 text-gray-600">
              {subheading}
            </p>
          )}
          {!!cta && (
            <div className="py-6">
              <Link
                href={cta.href}
                // href="https://wa.me/6281119167121"
                className={buttonVariants({ size: "lg" })}
                // className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                {cta.label}
                {/* Hubungi Kami */}
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </MaxWidthWrapper> */}
    </section>
  )
}
