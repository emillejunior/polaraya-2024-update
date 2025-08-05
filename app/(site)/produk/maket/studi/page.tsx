import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"

import productImage from "@/public/products/studi.jpg"
import {
  MaketStudiFeaturedProjects,
  MaketStudiUSP,
  ProductSubHeading,
} from "@/api/data/products"
import ProductUSPSection from "../../_components/product-usp-section"
import FeaturedProjectsSection from "../../_components/featured-projects-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { FormSection } from "@/app/_sections/form-section"

export const metadata: Metadata = pageMeta.maketStudy

export default function StudiMaquettePage() {
  return (
    <>
      <ProductPageHeader
        heading="Jasa Maket Studi Terbaik"
        subheading={ProductSubHeading.maketStudi}
        image={productImage}
        slug="Maket Studi"
      />
      <div className="bg-gray-100 pt-16">
        <div className="pt-8 pb-24">
          <FeaturedProjectsSection
            featuredProjects={MaketStudiFeaturedProjects}
          />
        </div>
        <ProductUSPSection
          productUsps={MaketStudiUSP}
          productName="Maket Studi"
          productImage={productImage}
          type="Product"
        />
      </div>
      <FormSection text="Pembuatan Maket Studi" />
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
