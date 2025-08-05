import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
// import { parseISO, format } from "date-fns"
// import { id } from "date-fns/locale"
// import parse from "html-react-parser"
import Image from "next/image"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link"
// import FeaturedMediaThumbnail from "./_components/featured-image-thumb"
// import { ClockIcon } from "lucide-react"

import { Metadata } from "next"

import productImageDefault from "@/public/product-image.jpg"

import productImageClassic from "@/public/products/classic.jpg"
import productImageInteraktif from "@/public/products/smart-interaktif.jpg"
// import productImageImersif from "@/public/products/smart-interaktif.jpg"

import productImageApartemen from "@/public/products/apartemen.jpg"
import productImageRumtip from "@/public/products/rumahtipe.jpg"
import productImageSiteplan from "@/public/products/siteplan.jpg"
import productImageStudi from "@/public/products/studi.jpg"
import { pageMeta } from "@/api/data/meta"

export const metadata: Metadata = pageMeta.produkDanJasa

const productsByCategory = [
  {
    title: "Maket Klasik",
    slug: "klasik",
    href: "/produk/maket/klasik",
    image: productImageClassic,
  },
  {
    title: "Maket Smart-Interaktif",
    slug: "smart-interaktif",
    href: "/produk/maket/smart-interaktif",
    image: productImageInteraktif,
  },
  {
    title: "Maket Smart-Imersif",
    slug: "smart-imersif",
    href: "/produk/maket/smart-imersif",
    image: productImageDefault,
  },
]

const productsByType = [
  {
    title: "Maket Rumah Type",
    slug: "rumah-type",
    href: "/produk/maket/rumah-type",
    image: productImageRumtip,
  },
  {
    title: "Maket Apartemen",
    slug: "apartemen",
    href: "/produk/maket/apartemen",
    image: productImageApartemen,
  },
  {
    title: "Maket Siteplan",
    slug: "siteplan",
    href: "/produk/maket/siteplan",
    image: productImageSiteplan,
  },
  {
    title: "Maket Studi",
    slug: "studi",
    href: "/produk/maket/studi",
    image: productImageStudi,
  },
]

const otherServices = [
  {
    title: "Perbaikan Maket",
    slug: "perbaikan-maket",
    href: "/produk/jasa/perbaikan-maket",
    image: productImageDefault,
  },
  {
    title: "Mobilisasi Maket",
    slug: "mobilisasi-maket",
    href: "/produk/jasa/mobilisasi-maket",
    image: productImageDefault,
  },
]

export default async function ProductsPage() {
  return (
    <div className="bg-gradient-to-bl from-gray-50 to-gray-200">
      <MaxWidthWrapper>
        <div className="py-4 font-semibold">
          {/* <div className="py-4 lg:px-8 px-2 sm:px-4 font-semibold"> */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Produk</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-12">
          <h1 className="px-2 py-5 lg:p-8 font-bold text-4xl">Produk</h1>
          <div className="py-6">
            <h2 className="px-2 py-5 lg:p-8 font-bold text-xl">
              Maket berdasarkan teknologi
            </h2>
            <ul className="sm:px-4 sm:grid flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {productsByCategory.map((product) => {
                return (
                  <li
                    key={product.href}
                    className="bg-white group overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-transparent hover:border-blue-300 shadow-md hover:shadow-xl hover:rotate-1 transition-all duration-500 scale-95 hover:scale-100"
                  >
                    <header className="">
                      <div className="h-48 overflow-hidden flex justify-center items-center">
                        <Image
                          src={product.image}
                          // width={data.media_details.sizes.medium.width}
                          // height={data.media_details.sizes.medium.height}
                          alt={product.title}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h2>
                          <Link
                            href={`/produk/maket/${product.slug}`}
                            className="text-lg text-balance font-bold hover:text-blue-800 text-blue-950 transition-colors"
                          >
                            {product.title}
                          </Link>
                        </h2>
                      </div>
                    </header>
                    {/* <div className="px-5 pb-3">
                    <div className="pb-2">
                      <div className="py-1.5 text-gray-700 text-pretty max-h-28 overflow-y-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officiis dolorum officia accusantium ipsa beatae
                        molestiae praesentium odio, placeat quisquam nulla
                        necessitatibus molestias iste quas, rem numquam
                        recusandae quia! Earum, repellendus?
                      </div>
                    </div>
                  </div> */}
                    <div className="flex justify-end bg-gradient-to-b from-gray-100 to-white p-2">
                      <Link
                        href={`/produk/maket/${product.slug}`}
                        className={buttonVariants({
                          variant: "link",
                          size: "sm",
                        })}
                      >
                        Lihat Selengkapnya
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="py-6">
            <h2 className="px-2 py-5 lg:p-8 font-bold text-xl">
              Maket berdasarkan tipe
            </h2>
            <ul className="sm:px-4 sm:grid flex flex-col sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {productsByType.map((product) => {
                return (
                  <li
                    key={product.href}
                    className="bg-white group overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-transparent hover:border-blue-300 shadow-md hover:shadow-xl hover:rotate-1 transition-all duration-500 scale-95 hover:scale-100"
                  >
                    <header className="">
                      <div className="h-48 overflow-hidden flex justify-center items-center">
                        <Image
                          src={product.image}
                          // width={data.media_details.sizes.medium.width}
                          // height={data.media_details.sizes.medium.height}
                          alt={product.title}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h2>
                          <Link
                            href={`/produk/maket/${product.slug}`}
                            className="text-lg text-balance font-bold hover:text-blue-800 text-blue-950 transition-colors"
                          >
                            {product.title}
                          </Link>
                        </h2>
                      </div>
                    </header>
                    {/* <div className="px-5 pb-3">
                    <div className="pb-2">
                      <div className="py-1.5 text-gray-700 text-pretty max-h-28 overflow-y-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officiis dolorum officia accusantium ipsa beatae
                        molestiae praesentium odio, placeat quisquam nulla
                        necessitatibus molestias iste quas, rem numquam
                        recusandae quia! Earum, repellendus?
                      </div>
                    </div>
                  </div> */}
                    <div className="flex justify-end bg-gradient-to-b from-gray-100 to-white p-2">
                      <Link
                        href={`/produk/maket/${product.slug}`}
                        className={buttonVariants({
                          variant: "link",
                          size: "sm",
                        })}
                      >
                        Lihat Selengkapnya
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="py-6">
            <h2 className="px-2 py-5 lg:p-8 font-bold text-xl">
              Jasa Maket Lainnya
            </h2>
            <ul className="sm:px-4 sm:grid flex flex-col sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {otherServices.map((product) => {
                return (
                  <li
                    key={product.href}
                    className="bg-white group overflow-hidden rounded-bl-3xl rounded-tr-3xl border border-transparent hover:border-blue-300 shadow-md hover:shadow-xl hover:rotate-1 transition-all duration-500 scale-95 hover:scale-100"
                  >
                    <header className="">
                      <div className="h-48 overflow-hidden flex justify-center items-center">
                        <Image
                          src={product.image}
                          // width={data.media_details.sizes.medium.width}
                          // height={data.media_details.sizes.medium.height}
                          alt={product.title}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h2>
                          <Link
                            href={`/produk/jasa/${product.slug}`}
                            className="text-lg text-balance font-bold hover:text-blue-800 text-blue-950 transition-colors"
                          >
                            {product.title}
                          </Link>
                        </h2>
                      </div>
                    </header>
                    {/* <div className="px-5 pb-3">
                    <div className="pb-2">
                      <div className="py-1.5 text-gray-700 text-pretty max-h-28 overflow-y-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officiis dolorum officia accusantium ipsa beatae
                        molestiae praesentium odio, placeat quisquam nulla
                        necessitatibus molestias iste quas, rem numquam
                        recusandae quia! Earum, repellendus?
                      </div>
                    </div>
                  </div> */}
                    <div className="flex justify-end bg-gradient-to-b from-gray-100 to-white p-2">
                      <Link
                        href={`/produk/jasa/${product.slug}`}
                        className={buttonVariants({
                          variant: "link",
                          size: "sm",
                        })}
                      >
                        Lihat Selengkapnya
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
