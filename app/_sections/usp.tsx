import { MaxWidthWrapper } from "@/components/max-width-wrapper"

// import iconCheck from "../../public/icons/usp-check-sm.png"
// import iconStopwatch from "../../public/icons/usp-timer-sm.png"
// import iconThumb from "../../public/icons/usp-thumbs-sm.png"

import iconInovation from "../../public/icons/usp-inovasi-sm.png"
import iconPro from "../../public/icons/usp-pro-sm.png"
import iconFourty from "../../public/icons/usp-fourty-sm.png"
import iconConsult from "../../public/icons/usp-consult-sm.png"

import Image from "next/image"

const USPs = [
  {
    id: 0,
    heading: "Gratis Konsultasi dan implementasi",
    body: "Tim kami siap membantu Anda, mulai dari konsep hingga realisasi maket yang sempurna.",
    image: iconConsult,
  },
  {
    id: 1,
    heading: "Dengan tim profesional",
    body: "Kami menjamin hasil kerja yang berkualitas dan tepat waktu. Maket presisi selesai dalam hitungan hari.",
    image: iconPro,
  },
  {
    id: 2,
    heading: "Inovasi tanpa batas",
    body: "Nikmati pengalaman maket yang berbeda dengan teknologi terbaru seperti smart immersive dan robotic.",
    image: iconInovation,
  },
  {
    id: 3,
    heading: "Berpengalaman selama 40 tahun",
    body: "Telah menjadi kepercayaan para presiden dari masa ke masa.",
    image: iconFourty,
  },
]

export function USPSection() {
  return (
    <div>
      <MaxWidthWrapper size={"default"}>
        <div className="py-8">
          <h2 className="text-xl font-semibold text-center py-6">
            Kenapa Harus Pesan Maket di Pola Raya Studio?
          </h2>
          {/* <div className="grid grid-cols-3 gap-6"> */}
          <div className="grid grid-rows-4 sm:grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-6 px-8 py-4">
            {USPs.map((usp) => (
              <div
                key={usp.id}
                className="hover:border-muted bg-gradient-to-b duration-700 from-white to-gray-50 hover:shadow-xl hover:bg-whit transition-all border text-center border-transparent p-4 rounded-2xl"
              >
                <div className="flex justify-center gap-4 sm:gap-2 md:gap-3 lg:gap-4 items-center">
                  <Image
                    src={usp.image}
                    alt={usp.heading}
                    className="group-hover:scale-110 size-24 sm:size-16 md:size-20 lg:size-21 duration-1000 transition-transform"
                  />
                  <h3 className="font-bold text-lg py-2 text-left">
                    {usp.heading}
                  </h3>
                </div>
                <p className="text-gray-700 text-base">{usp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
