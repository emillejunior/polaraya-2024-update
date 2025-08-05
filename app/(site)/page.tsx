import { HeroSection } from "@/app/_sections/hero"
// import { ClientsHighlightSection } from "./_sections/clients-highlight"
import { ProductsHighlightSection } from "../_sections/products-highlight"
import { USPSection } from "../_sections/usp"
import { BigNumbersSection } from "../_sections/big-numbers"
import { HeadingSection } from "../_sections/heading-section"
import { ClientsHighlightInfiniteSection } from "../_sections/clients-highlight-infinite"
import { FormSection } from "../_sections/form-section"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { VideoSection } from "../_sections/video-section"
import { GovernmentHighlightInfiniteSection } from "../_sections/government-highlight-infinite"

export const metadata: Metadata = pageMeta.homePage

export default function HomePage() {
  return (
    <>
      <HeroSection
        cta={{
          label: "Konsultasi Sekarang",
          link: "https://wa.me/6281119167121",
        }}
      />

      <ClientsHighlightInfiniteSection />
      <GovernmentHighlightInfiniteSection heading="Dipercaya Presiden dari tahun ke tahun" />

      {/* <ClientsHighlightSection /> */}
      <ProductsHighlightSection />
      <USPSection />
      {/* <div className="py-2"> */}
      <HeadingSection
        heading="Menciptakan Mahakarya Untuk Membantu Kemajuan Peradaban Umat Manusia"
        subheading="Melalui jasa pembuatan maket Pola Raya Studio, mari menjadi bagian dari kemajuan peradaban yang berkemanusiaan"
        cta={{ label: "Hubungi Kami", href: "https://wa.me/6281119167121" }}
      />
      {/* </div> */}
      <div className="pb-4">
        <BigNumbersSection />
      </div>
      <VideoSection videoId="U-3OKdf2nJg" />
      <FormSection />
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
