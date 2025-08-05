import { PortoItem } from "../../page"
import PortfolioDetailPage from "@/app/_sections/porto-detail-page"

import productFeatured from "@/public/products/porto/skk-migas/featured.jpg"
import productImage1 from "@/public/products/porto/skk-migas/image-1.png"
import productImage2 from "@/public/products/porto/skk-migas/image-2.png"
import productImage3 from "@/public/products/porto/skk-migas/image-3.png"

const portoMaketIkn: PortoItem[] = [
  {
    // title: "Maket Interaktif",
    description: [
      "SKK Migas, sebagai lembaga yang mengelola sumber daya minyak dan gas Indonesia, hadir di Gastech 2023. Mereka  memiliki tantangan untuk menyampaikan data yang kompleks tentang potensi energi Indonesia kepada audiens global dengan cara yang jelas, menarik, dan mudah diingat.",
      "Gastech adalah salah satu acara energi terbesar di dunia, yang mempertemukan para pemain utama di industri gas alam, LNG, dan hidrogen. ",
      "Bagi SKK Migas, ini adalah kesempatan untuk memperlihatkan kekayaan sumber daya Indonesia, tetapi mereka membutuhkan cara agar data teknis tentang pengeboran bisa diakses dan dipahami dengan baik oleh para investor.",
      "Pola Raya Studio ditunjuk sebagai mitra oleh SKK Migas. Bersama-sama, kami merancang smart maket atau miniatur tambang yang detail, dimana miniatur dapat mengubah data abstrak menjadi sesuatu yang nyata. Miniatur ini bukan hanya menampilkan informasi, tetapi juga bercerita.",
      "Di Gastech, para investor bisa melihat, menyentuh, dan memahami peluang yang dimiliki Indonesia. Miniatur menjadi jembatan antara data teknis dan minat investor, memungkinkan SKK Migas untuk membangun koneksi yang lebih mendalam dan membuka pintu bagi kemitraan baru.",
      "Hasilnya? komunikasi yang intens dari pengunjung, minat investor yang lebih dalam, dan kerjasama baru yang menjanjikan bagi SKK Migas.",
    ],
    content: {
      type: "image",
      src: productImage3,
    },
  },
  {
    // title: "Maket Interaktif",
    description:
      "Permudah pemahaman klien dengan maket interaktif. Pola Raya Studio menawarkan solusi visualisasi yang inovatif untuk membantu Anda menyampaikan ide dengan lebih efektif.",
    content: {
      type: "video",
      src: "vPHa40nzpP4",
    },
  },
]

const exampleData = {
  hero: {
    backgroundImage: productFeatured,
    title: "Maket SKK Migas",
    description:
      "Maket atau Miniatur Subsurface Potential Drilling milik SKK Migas adalah karya yang dapat  representasi fisik dari visi SKK Migas untuk menjadikan Indonesia sebagai pusat energi dunia.",
  },
  gallery1: [productImage1, productImage2, productImage3],
  relatedPortfolios: [...portoMaketIkn],
  // gallery2: [productImage1, productImage2, productImage3],
}

export default function ExampleDetailPage() {
  return <PortfolioDetailPage {...exampleData} />
}
