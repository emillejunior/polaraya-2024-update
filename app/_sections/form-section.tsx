import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ContactForm } from "./contact-form"

import backgroundImage from "../../public/products/projects/spi5/FOTO1.jpg"
import backgroundImageBlur from "../../public/products/projects/spi5/FOTO3.jpg"
import BlurredBackground from "./blurred-background"

export function FormSection({ text = "Pembuatan Maket" }: { text?: string }) {
  return (
    <section
      className="bg-gradient-to-b from-blue-200 to-green-300"
      // className=" via-white bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <BlurredBackground
        highResImage={backgroundImage}
        lowResImage={backgroundImageBlur}
      >
        <MaxWidthWrapper>
          <div className="sm:px-16 lg:px-32">
            <div className="border-xl border-2 border-white shadow-lg transition-all hover:shadow-xl bg-gradient-to-b from-white to-white/80 sm:bg-white/20 text-center md:text-left flex flex-col gap-4 md:grid py-16 px-8 sm:px-8 md:px-12 lg:px-16 rounded-3xl grid-cols-3">
              <div className="col-span-2 text-green-900 sm:h-full flex flex-col justify-center">
                <h2 className="font-bold text-xl lg:text-3xl py-2 text-balance">
                  Solusi {text} untuk Bisnis Anda
                </h2>
                <p className="font-bold py-1.5 text-lg lg:text-xl">
                  Mulai Konsultasi GRATIS Sekarang !
                </p>
              </div>
              {/* <div> */}
              <ContactForm />
              {/* </div> */}
            </div>
          </div>
        </MaxWidthWrapper>
      </BlurredBackground>
    </section>
  )
}
