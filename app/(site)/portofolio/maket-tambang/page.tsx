import { PortoItem } from "../page"
import PortfolioDetailPage from "@/app/_sections/porto-detail-page"

// import productImage1 from "@/public/products/smart-imersif-1.jpg"

import portoImage1 from "@/public/portfolio/tambang/batubara-maket-mess-karyawan-2.jpeg"
import portoImage2 from "@/public/portfolio/tambang/batubara-maket-mess-karyawan-3.jpeg"
import portoImage3 from "@/public/portfolio/tambang/batubara-maket-rencana-tambang-1.jpeg"
import portoImage4 from "@/public/portfolio/tambang/batubara-maket-rencana-tambang-2.jpeg"
import portoImage5 from "@/public/portfolio/tambang/batubara-maket-rencana-tambang-3.jpeg"
import portoImage6 from "@/public/portfolio/tambang/batubara-underground-section-1.jpeg"
import portoImage7 from "@/public/portfolio/tambang/batubara-underground-section-2.jpeg"
import portoImage8 from "@/public/portfolio/tambang/emas-maket-rencana-tambang-1.jpeg"
import portoImage9 from "@/public/portfolio/tambang/emas-maket-rencana-tambang-2.jpeg"
import portoImage10 from "@/public/portfolio/tambang/emas-maket-rencana-tambang-3.jpeg"
import portoImage11 from "@/public/portfolio/tambang/maket-smelter-1.jpeg"
import portoImage12 from "@/public/portfolio/tambang/maket-smelter-2.jpeg"
import portoImage13 from "@/public/portfolio/tambang/maket-smelter-3.jpeg"
import portoImage14 from "@/public/portfolio/tambang/maket-smelter-port.jpeg"

const portoMaketTambang: PortoItem[] = [
  {
    // title: "Maket Interaktif",
    description:
      "Permudah pemahaman klien dengan maket interaktif. Pola Raya Studio menawarkan solusi visualisasi yang inovatif untuk membantu Anda menyampaikan ide dengan lebih efektif.",
    content: {
      type: "image",
      src: portoImage13,
    },
  },
]

const exampleData = {
  hero: {
    backgroundImage: portoImage6,
    title: "Maket Tambang",
    description:
      "Pola Raya Studio sebagai mitra terpercaya pemerintah dalam pembuatan maket skala besar. Dengan pengalaman dalam mengerjakan proyek-proyek prestisius seperti Maket Pasar Jaya, MRT, dan IKN, Pola Raya menjamin kualitas dan ketelitian dalam setiap pengerjaan",
  },
  gallery1: [
    portoImage1,
    portoImage2,
    portoImage3,
    portoImage4,
    portoImage5,
    // portoImage6,
    portoImage7,
  ],
  relatedPortfolios: [...portoMaketTambang],
  gallery2: [
    portoImage8,
    portoImage9,
    portoImage10,
    portoImage11,
    portoImage12,
    // portoImage13,
    portoImage14,
  ],
}

export default function ExampleDetailPage() {
  return <PortfolioDetailPage {...exampleData} />
}
