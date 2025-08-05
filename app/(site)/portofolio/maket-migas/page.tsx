import { PortoItem } from "../page"
import PortfolioDetailPage from "@/app/_sections/porto-detail-page"

// import productImage1 from "@/public/products/smart-imersif-1.jpg"

import portoImage1 from "@/public/portfolio/migas/lapangan-migas-1.jpeg"
import portoImage2 from "@/public/portfolio/migas/lapangan-migas-2.jpeg"
import portoImage3 from "@/public/portfolio/migas/lapangan-migas-3.jpeg"
import portoImage4 from "@/public/portfolio/migas/lapangan-migas-4.jpeg"
import portoImage5 from "@/public/portfolio/migas/lapangan-migas-5.jpeg"
import portoImage6 from "@/public/portfolio/migas/lapangan-migas-6.jpeg"
import portoImage7 from "@/public/portfolio/migas/lapangan-migas-7.jpeg"
import portoImage8 from "@/public/portfolio/migas/lapangan-migas-8.jpeg"
import portoImage9 from "@/public/portfolio/migas/lapangan-migas-9.jpeg"
import portoImage10 from "@/public/portfolio/migas/lapangan-migas-10.jpeg"
import portoImage11 from "@/public/portfolio/migas/lapangan-migas-11.jpeg"
import portoImage12 from "@/public/portfolio/migas/lapangan-migas-12.jpeg"
import portoImage13 from "@/public/portfolio/migas/lapangan-migas-13.jpeg"
import portoImage14 from "@/public/portfolio/migas/lapangan-migas-14.jpeg"

import portoRigImage1 from "@/public/portfolio/migas/rig-1.jpeg"
import portoRigImage2 from "@/public/portfolio/migas/rig-2.jpeg"
import portoRigImage3 from "@/public/portfolio/migas/rig-3.jpeg"
import portoRigImage4 from "@/public/portfolio/migas/rig-4.jpeg"
import portoRigImage5 from "@/public/portfolio/migas/rig-5.jpeg"
// import portoRigImage6 from "@/public/portfolio/migas/rig-6.jpeg"
import portoRigImage7 from "@/public/portfolio/migas/rig-7.jpeg"
import portoRigImage8 from "@/public/portfolio/migas/rig-8.jpeg"
import portoRigImage9 from "@/public/portfolio/migas/rig-9.jpeg"
import portoRigImage10 from "@/public/portfolio/migas/rig-10.jpeg"
import portoRigImage11 from "@/public/portfolio/migas/rig-11.jpeg"
import portoRigImage12 from "@/public/portfolio/migas/rig-12.jpeg"
// import portoRigImage13 from "@/public/portfolio/migas/rig-13.jpeg"
import portoRigImage14 from "@/public/portfolio/migas/rig-14.jpeg"

const portoMaketMigas: PortoItem[] = [
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
    title: "Maket Migas",
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
    portoImage8,
    portoImage9,
    portoImage10,
    portoImage11,
    portoImage12,
    // portoImage13,
    portoImage14,
  ],
  relatedPortfolios: [...portoMaketMigas],
  gallery2: [
    portoRigImage1,
    portoRigImage2,
    portoRigImage3,
    portoRigImage4,
    portoRigImage5,
    // portoRigImage6,
    portoRigImage7,
    portoRigImage8,
    portoRigImage9,
    portoRigImage10,
    portoRigImage11,
    portoRigImage12,
    // portoRigImage13,
    portoRigImage14,
  ],
}

export default function ExampleDetailPage() {
  return <PortfolioDetailPage {...exampleData} />
}
