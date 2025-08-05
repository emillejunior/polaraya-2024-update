import ProductPageHeader from "@/components/product-page-header"
import { HeadingSection } from "@/app/_sections/heading-section"

import productImage from "@/public/products/apartemen.jpg"
import {
  MaketApartemenFeaturedProjects,
  MaketApartemenUSP,
  ProductSubHeading,
} from "@/api/data/products"
import ProductUSPSection from "../../_components/product-usp-section"
import FeaturedProjectsSection from "../../_components/featured-projects-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { FormSection } from "@/app/_sections/form-section"

export const metadata: Metadata = pageMeta.maketApartemen

export default function ApartemenMaquettePage() {
  return (
    <>
      <ProductPageHeader
        heading="Jasa Maket Apartemen Terbaik"
        subheading={ProductSubHeading.maketApartemen}
        image={productImage}
        slug="Maket Apartemen"
      />
      <div className="bg-gray-100 pt-16">
        <div className="pt-8 pb-24">
          <FeaturedProjectsSection
            featuredProjects={MaketApartemenFeaturedProjects}
          />
        </div>
        <ProductUSPSection
          productUsps={MaketApartemenUSP}
          productName="Maket Apartemen"
          productImage={productImage}
          type="Product"
        />
      </div>
      <FormSection text="Pembuatan Maket Apartemen" />
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
