import Image from "next/image"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import logoAhm from "../../public/clients/ahm.png"
import logoSharp from "../../public/clients/sharp.png"
import logoSunstar from "../../public/clients/sunstar.png"

export function ClientsHighlightJapanInfiniteSection() {
  return (
    <section className="bg-gradient-to-bl from-white to-gray-100">
      <MaxWidthWrapper>
        <div className="py-8 text-center">
          <p className="py-2 text-lg font-semibold">Telah dipercaya oleh</p>
          <div className="scroll-wrapper my-4 overflow-y-visible h-36 py-2">
            {CLIENTS1.map((client, i) => (
              <div
                key={client.id}
                className={`scroll-item scroll-left scroll-item-${i + 1} h-32`}
              >
                <div className="rounded-xl hover:scale-100 scale-95 duration-500 font-black opacity-50 hover:opacity-100 transition-all h-full text-4xl text-white flex flex-col items-center justify-center">
                  {/* <span className="animate-pulse">{client}</span> */}
                  <Image
                    src={client.img}
                    alt={client.name}
                    className="h-full w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

const CLIENTS1 = [
  {
    id: 1,
    name: "Sunstar",
    img: logoSunstar,
  },
  {
    id: 2,
    name: "Astra Honda Motor",
    img: logoAhm,
  },
  {
    id: 3,
    name: "Sharp",
    img: logoSharp,
  },
  {
    id: 4,
    name: "Sunstar",
    img: logoSunstar,
  },
  {
    id: 5,
    name: "Astra Honda Motor",
    img: logoAhm,
  },
  {
    id: 6,
    name: "Sharp",
    img: logoSharp,
  },
  {
    id: 7,
    name: "Sunstar",
    img: logoSunstar,
  },
  {
    id: 8,
    name: "Astra Honda Motor",
    img: logoAhm,
  },
  {
    id: 9,
    name: "Sharp",
    img: logoSharp,
  },
  {
    id: 10,
    name: "Sunstar",
    img: logoSunstar,
  },
  // {
  //   id: 4,
  //   name: "MNC Land",
  //   img: logoMncLand,
  // },
  // {
  //   id: 5,
  //   name: "Paramount Land",
  //   img: logoParamountLand,
  // },
  // {
  //   id: 6,
  //   name: "Pelindo",
  //   img: logoPelindo,
  // },
  // {
  //   id: 7,
  //   name: "Pertamina",
  //   img: logoPertamina,
  // },
  // {
  //   id: 8,
  //   name: "PP",
  //   img: logoPp,
  // },
  // {
  //   id: 9,
  //   name: "Patra Jasa",
  //   img: logoPatraJasa,
  // },
  // {
  //   id: 10,
  //   name: "PUPR",
  //   img: logoPupr,
  // },
]
