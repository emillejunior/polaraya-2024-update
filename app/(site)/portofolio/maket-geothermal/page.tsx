import { PortoItem } from "../page"
import PortfolioDetailPage from "@/app/_sections/porto-detail-page"

import productImage1 from "@/public/products/smart-imersif-1.jpg"
const portoMaketGeothermal: PortoItem[] = [
  {
    // title: "Maket Interaktif",
    description:
      "Permudah pemahaman klien dengan maket interaktif. Pola Raya Studio menawarkan solusi visualisasi yang inovatif untuk membantu Anda menyampaikan ide dengan lebih efektif.",
    content: {
      type: "image",
      src: productImage1,
    },
  },
]

const exampleData = {
  hero: {
    backgroundImage: productImage1,
    title: "Maket Geothermal",
    description:
      "Pola Raya Studio sebagai mitra terpercaya pemerintah dalam pembuatan maket skala besar. Dengan pengalaman dalam mengerjakan proyek-proyek prestisius seperti Maket Pasar Jaya, MRT, dan IKN, Pola Raya menjamin kualitas dan ketelitian dalam setiap pengerjaan",
  },
  gallery1: [productImage1, productImage1, productImage1],
  relatedPortfolios: [...portoMaketGeothermal],
  gallery2: [productImage1, productImage1, productImage1],
}

export default function ExampleDetailPage() {
  return <PortfolioDetailPage {...exampleData} />
}
