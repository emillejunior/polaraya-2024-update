import { HeroSection } from "@/app/_sections/hero"
// import { ClientsHighlightSection } from "../_sections/clients-highlight"
// import { ProductsHighlightSection } from "../../_sections/products-highlight"
import { USPSection } from "../../_sections/usp"
import { BigNumbersSection } from "../../_sections/big-numbers"
import { HeadingSection } from "../../_sections/heading-section"
import { ClientsHighlightInfiniteSection } from "../../_sections/clients-highlight-infinite"
import { FormSection } from "../../_sections/form-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import FeaturedProjectsSection from "../produk/_components/featured-projects-section"
import {
  MaketApartemenFeaturedProjects,
  MaketRumtipFeaturedProjects,
  MaketSiteplanFeaturedProjects,
  MaketTambangFeaturedProjects,
  MaketMiniaturFeaturedProjects,
} from "@/api/data/products"
import { VideoSection } from "@/app/_sections/video-section"

export const metadata: Metadata = pageMeta.jasaPembuatanMaket

export default function LandingPage() {
  return (
    <>
      <HeroSection
        cta={{ label: "Pesan Sekarang", link: "https://wa.me/6281119167121" }}
        // paragraph="Menyediakan berbagai jenis maket untuk kebutuhan bisnis Anda. Mulai dari make rumah type, apartemen, siteplan/masterplan, maket kawasan industri, maket miniatur dan lainnya . Pesan sekarang dan buktikan kualitasnya !"
        paragraph="Melayani segala jenis pembuatan maket arsitektur, diorama, miniatur dan replika mesin dengan presisi, cepat, dan tepat . Menggunakan bahan-bahan premium dengan harga terbaik. Kami memastikan maket anda tahan lama dan tampil mewah."
      />
      <ClientsHighlightInfiniteSection />
      {/* <ClientsHighlightSection /> */}
      {/* <ProductsHighlightSection /> */}

      <div className="bg-gray-100 pt-16">
        <FeaturedProjectsSection
          heading="Maket Rumah Tipe"
          featuredProjects={MaketRumtipFeaturedProjects}
        />
        <FeaturedProjectsSection
          heading="Maket Apartemen"
          featuredProjects={MaketApartemenFeaturedProjects}
        />
        <FeaturedProjectsSection
          heading="Maket Kawasan Siteplan / Masterplan"
          featuredProjects={MaketSiteplanFeaturedProjects}
        />
        <FeaturedProjectsSection
          heading="Maket Kawasan Tambang"
          featuredProjects={MaketTambangFeaturedProjects}
        />
        <FeaturedProjectsSection
          heading="Miniatur Mesin"
          featuredProjects={MaketMiniaturFeaturedProjects}
        />
      </div>
      <FormSection />
      <USPSection />
      <VideoSection videoId="U-3OKdf2nJg" />
      <div className="py-8">
        <BigNumbersSection />
      </div>
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
