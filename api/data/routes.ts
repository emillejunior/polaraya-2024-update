type Route = {
  title: string
  href: string
  children?: RouteGroup[]
}

type RouteGroup = {
  title: string
  routes: LeafRoute[]
}

type LeafRoute = {
  title: string
  href: string
  description: string
}

export const routes: Route[] = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
  {
    title: "Produk & Jasa",
    href: "/produk",
    children: [
      {
        title: "Berdasarkan Teknologi",
        routes: [
          {
            title: "Maket Klasik",
            href: "/produk/maket/klasik",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Maket Smart-Interaktif",
            href: "/produk/maket/smart-interaktif",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Maket Smart-Imersif",
            href: "/produk/maket/smart-imersif",
            description: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
      {
        title: "Berdasarkan Tipe",
        routes: [
          {
            title: "Maket Rumah Type",
            href: "/produk/maket/rumah-type",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Maket Apartemen",
            href: "/produk/maket/apartemen",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Maket Siteplan/Masterplan",
            href: "/produk/maket/siteplan",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Maket Studi",
            href: "/produk/maket/studi",
            description: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
      {
        title: "Jasa Terkait",
        routes: [
          {
            title: "Perbaikan Maket",
            href: "/produk/jasa/perbaikan-maket",
            description: "Lorem ipsum dolor sit amet.",
          },
          {
            title: "Mobilisasi Maket",
            href: "/produk/jasa/mobilisasi-maket",
            description: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Portofolio",
    href: "/portofolio",
  },
  {
    title: "Tentang Kami",
    href: "/tentang-kami",
  },
]
