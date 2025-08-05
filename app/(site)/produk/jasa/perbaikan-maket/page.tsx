import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"
import ProductUSPSection from "../../_components/product-usp-section"
import { PerbaikanMaketUSP } from "@/api/data/products"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"

export const metadata: Metadata = pageMeta.perbaikanMaket

export default function PerbaikanMaketPage() {
  return (
    <>
      <ProductPageHeader
        heading="Jasa Perbaikan Maket Terpercaya"
        subheading="Tingkatkan keindahan maket Anda dengan layanan reparasi profesional kami. Jasa reparasi maket kami hadir untuk membantu Anda mengembalikan keindahan dan fungsionalitas maket Anda."
        slug="Perbaikan Maket"
      />
      <ProductUSPSection
        productUsps={PerbaikanMaketUSP}
        productName="Perbaikan Maket"
        // productImage={productImage}
        type="Service"
      />
      <div className="py-8">
        <HeadingSection
          heading="Creating Masterpieces to Help the Progress of Humanity"
          subheading="Melalui jasa pembuatan maket Pola Raya Studio, mari menjadi bagian dari kemajuan peradaban yang berkemanusiaan"
          cta={{ label: "Hubungi Kami", href: "https://wa.me/6281119167121" }}
        />
      </div>
    </>
  )
}
