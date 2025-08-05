import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"
import ProductUSPSection from "../../_components/product-usp-section"
import { MobilisasiMaketUSP } from "@/api/data/products"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"

export const metadata: Metadata = pageMeta.mobilisasiMaket

export default function MobilisasiMaketPage() {
  return (
    <>
      <ProductPageHeader
        heading="Jasa Mobilisasi Maket Bergaransi"
        subheading="Antar jemput maket Anda dengan profesional dan tepat waktu. Layanan mobilisasi maket untuk berbagai jenis dan ukuran maket, dari maket kecil hingga maket besar dan kompleks."
        slug="Mobilisasi Maket"
      />
      <ProductUSPSection
        productUsps={MobilisasiMaketUSP}
        productName="Mobilisasi Maket"
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
