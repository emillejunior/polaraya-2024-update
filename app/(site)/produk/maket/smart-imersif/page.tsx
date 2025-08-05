import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"
import productImage1 from "@/public/products/smart-imersif-1.jpg"
// import productImage2 from "@/public/products/smart-imersif-2.jpg"
import { MaketSmartImersifUSP, ProductSubHeading } from "@/api/data/products"
import ProductUSPSection from "../../_components/product-usp-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { FormSection } from "@/app/_sections/form-section"

export const metadata: Metadata = pageMeta.maketSmartImersif

export default function MaketSmartImersifPage() {
  return (
    <>
      <ProductPageHeader
        heading="Maket Smart Imersif"
        subheading={ProductSubHeading.maketSmartImersif}
        image={productImage1}
        slug="Maket Smart Imersif"
      />
      <ProductUSPSection
        productUsps={MaketSmartImersifUSP}
        productName="Maket Smart Imersif"
        // productImage={productImage2}
        productVideo="/smart-imersif.mp4"
        type="Product"
      />
      <FormSection text="Pembuatan Maket Smart-Imersif" />
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
