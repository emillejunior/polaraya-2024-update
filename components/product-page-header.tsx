import Image, { StaticImageData } from "next/image"

import ProductImage from "@/public/product-image.jpg"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export default function ProductPageHeader({
  heading,
  subheading,
  image,
  slug,
}: {
  heading: string
  subheading: string
  image?: StaticImageData
  slug?: string
}) {
  return (
    <div className="relative flex flex-col lg:flex-row items-center h-hero bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center lg:py-0 py-16 lg:h-full">
        <div className="w-full lg:w-1/2 lg:pr-24 flex flex-col justify-center lg:h-full">
          <div className="py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="px-2 py-0.5 bg-white rounded">
                  <BreadcrumbLink asChild>
                    <Link href="/">Beranda</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="px-2 py-0.5 bg-white rounded">
                  <BreadcrumbLink asChild>
                    <Link href="/produk">Produk</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {slug && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-gray-600">
                      {slug}
                      {/* <BreadcrumbLink asChild>
                        <Link href={`/products/${slug}`}>{slug}</Link>
                      </BreadcrumbLink> */}
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="text-lg">{subheading}</p>
          <div className="py-4">
            <Link
              href="https://wa.me/6281119167121"
              className={buttonVariants({ size: "lg" })}
              // className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden flex flex-col justify-center">
        <Image src={image || ProductImage} alt="Product Image" />
      </div>
    </div>
  )
}
