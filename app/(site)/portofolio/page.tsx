import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { GovernmentHighlightInfiniteSection } from "../../_sections/government-highlight-infinite"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"
import { PortoSection } from "@/app/_sections/porto-section"
import { StaticImageData } from "next/image"

import imgRumtip from "@/public/products/porto/rumah-tipe/featured.jpg"
import imgInteraktif from "@/public/products/smart-interaktif.jpg"
import imgApartemen from "@/public/products/porto/apartemen/featured.jpg"
import imgPabrik from "@/public/products/porto/pabrik/featured.jpg"
import imgKomersial from "@/public/products/porto/komersial/featured.jpg"

export const metadata: Metadata = pageMeta.portofolio

export type VideoContent = {
  type: "video"
  src: string
}
export type ImageContent = {
  type: "image"
  src: StaticImageData
}

export interface PortoItem {
  content: VideoContent | ImageContent
  title?: string
  description?: string | string[]
  link?: string
}

const portoItems: PortoItem[] = [
  {
    title: "Maket Rumah Type",
    description:
      "Sebagai jasa pembuatan maket, Pola Raya Studio telah menjadi pilihan utama klien untuk mewujudkan maket rumah type dengan spesialis kustomisasi. Pembuatan maket rumah type mulai dari skala 1:40 hingga 1:10.",
    content: {
      type: "image",
      src: imgRumtip,
    },
  },
  {
    title: "Maket Interaktif",
    description:
      "Permudah pemahaman klien dengan maket interaktif. Pola Raya Studio menawarkan solusi visualisasi yang inovatif untuk membantu Anda menyampaikan ide dengan lebih efektif.",
    content: {
      type: "image",
      src: imgInteraktif,
    },
  },
  {
    title: "Maket Apartemen",
    description:
      "Dengan pengalaman kami, kami mampu menciptakan maket apartemen yang sangat mirip dengan kondisi sebenarnya, lengkap dengan detail lingkungan sekitar. Pola Raya Studio  spesialis maket apartemen dan gedung tinggi.",
    content: {
      type: "image",
      src: imgApartemen,
    },
  },
  {
    title: "Maket Pemerintahan",
    description:
      "Pola Raya Studio sebagai mitra terpercaya pemerintah dalam pembuatan maket skala besar. Dengan pengalaman dalam mengerjakan proyek-proyek prestisius seperti Maket Pasar Jaya, MRT, dan IKN, Pola Raya menjamin kualitas dan ketelitian dalam setiap pengerjaan.",
    content: {
      type: "video",
      src: "Fi-yOZrwk6s",
    },
  },
  {
    title: "Maket Pabrik",
    description:
      "Perencanaan pabrik yang lebih efektif dengan maket 3D. Maket pabrik dari Pola Raya Studio membantu Anda memvisualisasikan seluruh aspek operasional, sehingga proses produksi dapat berjalan lebih optimal.",
    content: {
      type: "image",
      src: imgPabrik,
    },
  },

  {
    title: "Maket Komersial",
    description:
      "Meningkatkan daya tarik pelanggan melalui maket komersial berkualitas. Maket komersial memberikan gambaran lengkap tentang tata letak dan potensi lahan komersial Anda, sehingga calon pelanggan dapat dengan mudah memahami lahan Anda.",
    content: {
      type: "image",
      src: imgKomersial,
    },
  },
  {
    title: "Maket Tambang",
    link: "/portofolio/maket-tambang",
    description:
      "Maket Tambang karya Pola Raya Studio memberikan gambaran lengkap tentang geologi, infrastruktur, dan potensi produksi, sehingga investor dapat dengan mudah memahami prospek tambang Anda.",
    content: {
      type: "video",
      src: "vPHa40nzpP4",
    },
  },
  {
    title: "Maket Migas",
    link: "/portofolio/maket-migas",
    description:
      "Maket Migas karya Pola Raya Studio memberikan gambaran lengkap tentang geologi, infrastruktur, dan potensi produksi, sehingga investor dapat dengan mudah memahami prospek tambang Anda.",
    content: {
      type: "video",
      src: "vPHa40nzpP4",
    },
  },
  {
    title: "Maket Geothermal",
    link: "/portofolio/maket-geothermal",
    description:
      "Maket Geothermal karya Pola Raya Studio memberikan gambaran lengkap tentang geologi, infrastruktur, dan potensi produksi, sehingga investor dapat dengan mudah memahami prospek tambang Anda.",
    content: {
      type: "video",
      src: "vPHa40nzpP4",
    },
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-gray-100">
      <MaxWidthWrapper>
        <div className="py-4 font-semibold">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Portofolio</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-8">
          <h1 className="py-8 font-bold text-4xl">Portofolio</h1>
          <div className="flex flex-col gap-3">
            <p className="max-w-prose">
              Didirikan pada tahun 1982, Pola Raya Studio adalah perusahaan
              terkemuka di Indonesia mengkhususkan diri dalam pembuatan miniatur
              arsitektur. Dengan bengkel seluas 5000m² mampu menampung ratusan
              mahasiswa, Pola Raya terkenal produknya berkualitas premium.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <GovernmentHighlightInfiniteSection />
      {portoItems.map((item, index) => (
        <PortoSection
          key={index}
          content={item.content}
          title={item.title}
          description={item.description}
          link={item.link}
          position={index % 2 === 0 ? "left" : "right"}
          isDark={index % 2 !== 0}
        />
      ))}
    </div>
  )
}
