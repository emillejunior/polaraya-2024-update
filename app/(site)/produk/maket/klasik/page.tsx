import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"
import productImage from "@/public/products/classic.jpg"
import {
  MaketClassicFeaturedProjects,
  MaketClassicUSP,
  ProductSubHeading,
} from "@/api/data/products"
import ProductUSPSection from "../../_components/product-usp-section"
import FeaturedProjectsSection from "../../_components/featured-projects-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { FormSection } from "@/app/_sections/form-section"

export const metadata: Metadata = pageMeta.maketKlasik

export default function MaketKlasikPage() {
  return (
    <>
      <ProductPageHeader
        heading="Maket Klasik"
        subheading={ProductSubHeading.maketClassic}
        image={productImage}
        slug="Maket Klasik"
      />
      <div className="bg-gray-100 pt-16">
        <div className="pt-8 pb-24">
          <FeaturedProjectsSection
            featuredProjects={MaketClassicFeaturedProjects}
          />
        </div>
        <ProductUSPSection
          productUsps={MaketClassicUSP}
          productName="Maket Klasik"
          productImage={productImage}
          type="Product"
        />
      </div>
      <FormSection text="Pembuatan Maket Klasik" />
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
