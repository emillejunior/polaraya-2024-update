import Link from "next/link"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"

import Image from "next/image"

import picClassic from "../../public/products/classic-sm.jpg"
import picSmart from "../../public/products/smart-sm.jpg"
import picImmersive from "../../public/products/immersive-sm.jpg"

// import picRumtip from "../../public/products/rumahtipe.jpg"
import matera1 from "../../public/products/projects/matera/FOTO1.jpeg"
import citraCity1 from "../../public/products/projects/citra-city/FOTO1.jpeg"
import theLeroy1 from "../../public/products/projects/the-leroy/FOTO1.jpeg"

// import picKawasan from "../../public/products/siteplan.jpg"
import citra3 from "../../public/products/projects/citra/FOTO3.jpeg"
import hampton3 from "../../public/products/projects/hampton/FOTO2.jpeg"
import psc23 from "../../public/products/projects/psc2/FOTO2.jpeg"

// import picApartemen from "../../public/products/apartemen.jpg"
import pcm1 from "../../public/products/projects/pcm/FOTO1.jpeg"
import spi51 from "../../public/products/projects/spi5/FOTO1.jpg"
import mastertama1 from "../../public/products/projects/mastertama/FOTO1.jpeg"

// import picStudi from "../../public/products/studi.jpg"
import stasiun3 from "../../public/products/projects/stasiun-karawang/FOTO3.jpeg"
import iknPupr2 from "../../public/products/projects/ikn-pupr/FOTO2.jpeg"
import sunstar2 from "../../public/products/projects/sunstar/FOTO2.jpeg"

import skkMigas1 from "../../public/products/projects/skk-migas/FOTO1.jpeg"
import pltuBatang2 from "../../public/products/projects/pltu-batang/FOTO2.jpeg"
import plnEnjiniring1 from "../../public/products/projects/pln-enjiniring/FOTO1.jpeg"
import pertaminaPlnHybrid1 from "../../public/products/projects/pertamina-pln-hybrid/FOTO1.jpeg"

import schlumberger1 from "../../public/products/projects/schlumberger/FOTO1.jpeg"
import mesinGaram1 from "../../public/products/projects/mesin-garam/FOTO1.jpeg"
import mesinRadiator1 from "../../public/products/projects/mesin-radiator/FOTO1.jpeg"

import { InteractiveProductList } from "./interactive-product-list"

export function ProductsHighlightSection() {
  return (
    <section className="space-y-8">
      <div className="bg-gradient-to-t from-white to-gray-200 pt-8">
        <MaxWidthWrapper size="small">
          <h2 className="text-xl font-semibold text-center py-6">
            Temukan maket yang Anda inginkan
          </h2>
          <div className="grid grid-rows-3 sm:grid-rows-1 grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-2 md:gap-4 lg:gap-8 px-2 sm:px-5 lg:px-8 py-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="bg-teal-700 hover:bg-white hover:text-black duration-1000 hover:border-gray-700 border border-transparent text-white group transition-colors overflow-hidden rounded-2xl"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="group-hover:scale-110 duration-1000 transition-transform"
                  />
                </div>
                {/* <div className="size-32 rounded-lg bg-gray-500"></div> */}
                <div className="p-6 sm:p-3 md:p-4 lg:p-6">
                  <h3 className="font-semibold py-1.5 text-2xl">
                    <Link href={product.href}>{product.title}</Link>
                  </h3>
                  <p className="py-1 max-w-prose text-xs mb-1.5">
                    {product.description}
                  </p>
                  {product.href && (
                    <Link
                      className={buttonVariants({ size: "sm" })}
                      href={product.href}
                    >
                      Pelajari
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 pb-8">
        <MaxWidthWrapper>
          <InteractiveProductList products={PRODUCTS_BY_TYPE} />
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

const PRODUCTS = [
  {
    title: "Maket Classic",
    href: "/produk/maket/klasik",
    image: picClassic,
    description:
      "Klasik maket dibuat dengan bahan berkualitas tinggi dan teknik tradisional seperti pemotongan laser dan pencetakan 3D dapat merepresentasi visual yang mengesankan.",
  },
  {
    title: "Maket Smart Interaktif",
    href: "/produk/maket/smart-interaktif",
    image: picSmart,
    description:
      "Maket Smart Hi-Tech dilengkapi dengan teknologi pencahayaan LED, sensor interaktif, artificial intelligence (AI) dan integrasi Internet of Things (IoT).",
  },
  {
    title: "Maket Smart Imersif",
    href: "/produk/maket/smart-imersif",
    image: picImmersive,
    description:
      "Immersive Maket menggabungkan teknologi smart immersive projection dan aplikasi iPad buatan Pola Raya untuk menciptakan pengalaman yang benar-benar imersif.",
  },
]

const PRODUCTS_BY_TYPE = [
  {
    id: "p001",
    title: "Maket Rumah Type",
    href: "/produk/maket/rumah-type",
    images: [matera1, citraCity1, theLeroy1],
    description:
      "Wujudkan rumah impian Anda dengan maket yang realistis dan menawan! Jasa maket rumah type kami menghadirkan solusi terbaik",
  },
  {
    id: "p002",
    title: "Maket Apartemen",
    href: "/produk/maket/apartemen",
    images: [pcm1, spi51, mastertama1],
    description:
      "Mewujudkan hunian impian modern Anda dengan maket berkualitas. Kami hadirkan pengalaman visual apartemen yang nyata dan mendetail.",
  },
  {
    id: "p003",
    title: "Maket Kawasan",
    href: "/produk/maket/siteplan",
    images: [citra3, hampton3, psc23],
    description:
      "Menggambarkan project Anda dengan maket realistis dan berkualitas tinggi. Kami menyediakan maket masterplan yang detail dan akurat.",
  },
  {
    id: "p004",
    title: "Maket Studi",
    href: "/produk/maket/studi",
    images: [stasiun3, iknPupr2, sunstar2],
    description:
      "Jasa maket study kami membantu Anda menyampaikan ide dan konsep dengan lebih mudah dan efektif.",
  },
  {
    id: "p005",
    title: "Maket Tambang & Pembangkit Listrik",
    images: [pertaminaPlnHybrid1, pltuBatang2, skkMigas1, plnEnjiniring1],
    description:
      "Visualisasikan potensi tambang & pembangkit listrik melalui maket 3D berkualitas tinggi. Percayakan pada kami untuk mewujudkan maket tambang impian Anda!",
  },
  {
    id: "p006",
    title: "Maket Miniatur & Souvenir",
    images: [schlumberger1, mesinGaram1, mesinRadiator1],
    description:
      "Dapatkan maket miniatur & souvenir yang unik dan berkesan dengan harga terjangkau! Jadikan maket sebagai  kenangan yang berharga.",
  },
]
