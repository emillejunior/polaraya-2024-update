import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"

// import heroImage from "../../public/matera-transparent.png"
// import Image from "next/image"

import bgVideoPoster from "../../public/bg-video-poster.jpg"

export function HeroSection({
  cta,
  paragraph,
}: {
  cta?: { label: string; link?: string }
  paragraph?: string
}) {
  const defaultParagraph =
    "Jasa pembuatan maket dengan detail presisi tinggi, bahan berkualitas dan tim berpengalaman, kami memastikan hasil yang memukau dan akurat."
  // "Melayani segala jenis pembuatan maket arsitektur, diorama, miniatur dan replika mesin untuk memenuhi kebutuhan bisnis Anda. Maket menggunakan bahan premium dengan harga terbaik."
  // "Melayani segala jenis pembuatan maket arsitektur, diorama, miniatur dan replika mesin dengan presisi, cepat, dan tepat . Menggunakan bahan-bahan premium dengan harga terbaik. Kami memastikan maket anda tahan lama dan tampil mewah."

  const defaultCtaLink = "https://wa.me/6281119167121"

  return (
    <section className="sm:p-4 bg-gradient-to-bl from-white to-gray-100">
      <MaxWidthWrapper className="px-0">
        <div className="sm:grid flex sm:grid-cols-2 md:flex justify-between md:flex-row flex-col-reverse items-center sm:px-8 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="py-12 sm:py-24 sm:px-0 px-8 sm:p-0 h-full flex flex-col items-start justify-center">
            <div className="py-2 text-center sm:text-left">
              {/* <h1 className="py-2 text-2xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-500">
                  Jasa Maket Profesional <br /> Nomor 1 di Indonesia. <br />
                  Karena 40 Tahun Berpengalaman
                </span>
              </h1> */}
              <h1 className="py-2 font-bold">
                <span className="block py-1 text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-500">
                  Jasa Maket Arsitektur, Miniatur & Diorama.{" "}
                </span>
                <span className="block py-1 text-xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r to-teal-500 from-green-500">
                  No 1 Terbaik di Indonesia
                  <br /> Karena Pengalaman 40 Tahun
                </span>
              </h1>
              <p className="text-base text-gray-800">
                {paragraph || defaultParagraph}
              </p>
              <p className="text-base text-gray-800">
                Menjangkau pengiriman maket ke seluruh wilayah mulai dari
                Jakarta, Bogor, Tangerang, Bandung, Yogyakarta, Surabaya,
                Sumatera, Kalimantan, Bali hingga Luar Negeri.
              </p>
            </div>
            {/* <div className="space-y-3 text-gray-500 max-w-prose "> */}
            <div className="py-2  flex flex-col justify-center sm:items-start items-center w-full">
              <Link
                href={cta?.link || defaultCtaLink}
                className={buttonVariants({ variant: "animated", size: "xl" })}
                // className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                {cta?.label || "Hubungi Kami"}
              </Link>
            </div>
          </div>
          <div className="flex-grow flex justify-center items-center w-full sm:w-auto">
            <div className="overflow-hidden shadow-xl bg-gray-800 aspect-auto duration-700 border group w-full size-64 md:size-72 lg:size-[27rem] flex sm:rounded-full sm:scale-105 scale-100 sm:hover:scale-105 transition-all hover:shadow-lg">
              <VideoPlayer
                src="/bg-video.mp4"
                poster={bgVideoPoster}
                ariaLabel="Tampilan produk cepat: Video 10 detik dengan potongan cepat setiap 1-2 detik menampilkan rangkaian produk kami"
                responsiveSize={{
                  default: "w-full h-[254px]",
                  md: "h-[266.7px]",
                  lg: "w-[300.3px] h-[300.3px]",
                  xl: "w-[451.5px] h-[451.5px]",
                }}
                imageSizes="(min-width: 1280px) 451px, (min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          {/* <Image
            src={heroImage}
            alt="Maket Pola Raya"
            className="aspect-square h-96 rounded-full w-auto hover:scale-105 transition-all hover:shadow-lg"
            // className="h-full w-auto"
          /> */}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
