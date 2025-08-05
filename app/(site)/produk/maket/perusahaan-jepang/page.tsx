import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"

import productImage from "@/public/products/projects/sunstar/FOTO1.jpeg"
import {
  // MaketSiteplanFeaturedProjects,
  MaketJepangUSP,
  ProductSubHeading,
  MaketPerusahaanJepangFeaturedProjects,
} from "@/api/data/products"
import ProductUSPSection from "../../_components/product-usp-section"
import FeaturedProjectsSection from "../../_components/featured-projects-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { FormSection } from "@/app/_sections/form-section"

// import logoAhm from "../../../../public/clients/ahm.png"
// import logoSharp from "../../../../public/clients/sharp.png"
// import logoSunstar from "../../../../public/clients/sunstar.png"
import { ClientsHighlightJapanInfiniteSection } from "@/app/_sections/clients-highlight-infinite-japan"

export const metadata: Metadata = pageMeta.maketJepang

export default function JapanMaquettePage() {
  return (
    <>
      <ProductPageHeader
        heading="Maket Kepercayaan Perusahaan Jepang"
        subheading={ProductSubHeading.maketSiteplan}
        image={productImage}
        slug="Maket Perusahaan Jepang"
      />
      <ClientsHighlightJapanInfiniteSection />
      <div className="bg-gray-100 pt-16">
        <div className="pt-8 pb-24">
          <FeaturedProjectsSection
            featuredProjects={MaketPerusahaanJepangFeaturedProjects}
          />
        </div>
        <ProductUSPSection
          productUsps={MaketJepangUSP}
          productName="Maket Perusahaan Jepang"
          heading="Mengapa Perusahaan Jepang Memilih Membuat Maket di Pola Raya Studio?"
          // productImage={productImage}
          type="Product"
        />
      </div>
      <FormSection text="Maket" />
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
