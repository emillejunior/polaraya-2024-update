import { Metadata } from "next"

interface PageMeta {
  [key: string]: Metadata
}

export const pageMeta: PageMeta = {
  mainLayout: {
    title: {
      template: "%s | Pola Raya Studio",
      default: "Jasa Maket Profesional", // a default is required when creating a template
    },
    robots: {
      index: true,
      follow: true,
    },
    description:
      "Jasa pembuatan maket profesional terbaik dan terpercaya. Butuh maket segera? Pola Raya saja",
    authors: [{ name: "Pola Raya Studio" }],
    publisher: "Pola Raya Studio",
  },
  homePage: {
    title: "Pola Raya Studio | Jasa Maket Profesional",
    description:
      "Jasa pembuatan Maket Miniatur Arsitektur dan Diorama terbaik di Jakarta, Bandung, Jogja, Solo, Semarang, Malang, Surabaya, Bali dan Kalimantan melayani pengiriman se-Indonesia",
    alternates: {
      canonical: "https://www.polaraya.com",
    },
  },
  jasaPembuatanMaket: {
    title: "Pola Raya Studio | Jasa Maket Profesional",
    description:
      "Jasa pembuatan Maket Miniatur Arsitektur dan Diorama terbaik di Jakarta, Bandung, Jogja, Solo, Semarang, Malang, Surabaya, Bali dan Kalimantan melayani pengiriman se-Indonesia",
    alternates: {
      canonical: "https://www.polaraya.com/jasa-pembuatan-maket",
    },
  },

  produkDanJasa: {
    title: "Produk dan Jasa",
    alternates: {
      canonical: "https://www.polaraya.com/produk",
    },
  },

  maketKlasik: {
    title: "Maket Klasik",
    description:
      "Jasa pembuatan maket klasik dengan detail dan interior memukau. Segera dapatkan Maket Klasik Premium sekarang!",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/klasik",
    },
  },
  maketSmartInteraktif: {
    title: "Maket Smart Interaktif",
    description:
      "Jasa pembuatan maket menggunakan teknologi terbaru. Maket Smart Interaktif penuhi kebutuhan visual Anda semakin menarik.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/smart-interaktif",
    },
  },
  maketSmartImersif: {
    title: "Maket Smart Imersif",
    description:
      "Jasa pembuatan maket menggunakan bantuan AI dan sistem IOT. Maket Smart Imersif membantu menciptakan maket terlihat lebih nyata.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/smart-imersif",
    },
  },

  maketRumahType: {
    title: "Maket Rumah Type",
    description:
      "Jasa pembuatan maket rumah type mulai dari skala 1: 50 hingga skala 1: 15. Bebas kustomisasi desain sesuai kebutuhan.",
  },
  maketApartemen: {
    title: "Maket Apartemen",
    description:
      "Jasa pembuatan maket apartemen terbaik. Temukan solusi terbaik untuk visualisasi properti Anda ke dalam model nyata.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/apartemen",
    },
  },
  maketSiteplan: {
    title: "Maket Siteplan",
    description:
      "Jasa pembuatan maket siteplan berkualitas tinggi. Membantu Anda memvisualisasikan tata letak dan perencanaan area secara efektif.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/siteplan",
    },
  },
  maketStudy: {
    title: "Maket Study",
    description:
      "Jasa pembuatan maket study. Membantu Anda mengilustrasikan konsep dan proyek secara efektif.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/studi",
    },
  },

  perbaikanMaket: {
    title: "Jasa Perbaikan Maket",
    description:
      "Layanan perbaikan dan pemeliharaan maket dengan hasil yang presisi dan detail. Percayakan perbaikan maket Anda kepada kami untuk hasil terbaik.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/jasa/perbaikan-maket",
    },
  },
  mobilisasiMaket: {
    title: "Jasa Mobilisasi Maket",
    description:
      "Layanan mobilisasi maket terpercaya. Jasa pengangkutan maket aman dan tepat waktu, dengan penanganan profesional untuk menjaga kualitas dan keamanan maket Anda.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/jasa/mobilisasi-maket",
    },
  },

  blog: {
    title: "Blog",
    description:
      "Temukan informasi terbaru seputar maket, arsitektur, interior, dan teknologi di blog Pola Raya. Dapatkan wawasan mendalam, tips, dan inspirasi dari artikel kami",
    alternates: {
      canonical: "https://www.polaraya.com/blog",
    },
  },
  portofolio: {
    title: "Portofolio",
    description:
      "Lihat hasil kerja kami yang presisi dan detail dalam berbagai proyek maket, arsitektur dan interior. Kunjungi portofolio kami untuk mencari inspirasi dan bukti keahlian kami.",
    alternates: {
      canonical: "https://www.polaraya.com/portofolio",
    },
  },
  tentangKami: {
    title: "Tentang Kami",
    description:
      "Lebih dekat dengan kami kami untuk menciptakan karya seni berkualitas tinggi yang mendorong kemajuan di bidang arsitektur dan interior.",
    alternates: {
      canonical: "https://www.polaraya.com/tentang-kami",
    },
  },

  maketJepang: {
    title: "Portofolio Maket Perusahaan Jepang",
    description:
      "Kepercayaan perusahaan jepang dengan kualitas dari maket Pola Raya Studio yang detail, presisi dan mengedepankan teknologi terkini.",
    alternates: {
      canonical: "https://www.polaraya.com/produk/maket/perusahaan-jepang",
    },
  },
}
