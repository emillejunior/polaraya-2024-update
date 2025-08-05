import Image from "next/image"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import logoIkn from "../../public/clients/ikn.png"
import logoAgungSedayuGroup from "../../public/clients/agung-sedayu-group.png"
import logoLippo from "../../public/clients/lippo.png"
import logoMncLand from "../../public/clients/mnc-land.png"
import logoParamountLand from "../../public/clients/paramount-land.png"
import logoPelindo from "../../public/clients/pelindo.png"
import logoPertamina from "../../public/clients/pertamina.png"
import logoPp from "../../public/clients/pp.png"

import logoAgungPodomoroLand from "../../public/clients/agung-podomoro-land.png"
import logoCiputra from "../../public/clients/ciputra.png"
import logoMawatu from "../../public/clients/mawatu.png"
import logoMrt from "../../public/clients/mrt.png"
import logoPakuwon from "../../public/clients/pakuwon.png"
import logoPetropro from "../../public/clients/petropro.png"
import logoSchlumberger from "../../public/clients/schlumberger.png"
import logoSinarmas from "../../public/clients/sinarmas.png"

import logoPatraJasa from "../../public/clients/patrajasa.png"
import logoPupr from "../../public/clients/pupr.png"
import logoWika from "../../public/clients/wika.png"
import logoTransProperty from "../../public/clients/trans-property.png"

export function ClientsHighlightInfiniteSection() {
  return (
    <section className="bg-gradient-to-bl from-white to-gray-100">
      <MaxWidthWrapper>
        <div className="py-8 text-center">
          <p className="py-2 text-lg font-semibold">
            Dipercaya oleh ratusan perusahaan terkemuka
          </p>
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
          <div className="scroll-wrapper my-4 overflow-y-visible h-36 py-2">
            {CLIENTS2.map((client, i) => (
              <div
                key={client.id}
                className={`scroll-item scroll-right scroll-item-${i + 1} h-32`}
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
    name: "IKN",
    img: logoIkn,
  },
  {
    id: 2,
    name: "Agung Sedayu Group",
    img: logoAgungSedayuGroup,
  },
  {
    id: 3,
    name: "Lippo",
    img: logoLippo,
  },
  {
    id: 4,
    name: "MNC Land",
    img: logoMncLand,
  },
  {
    id: 5,
    name: "Paramount Land",
    img: logoParamountLand,
  },
  {
    id: 6,
    name: "Pelindo",
    img: logoPelindo,
  },
  {
    id: 7,
    name: "Pertamina",
    img: logoPertamina,
  },
  {
    id: 8,
    name: "PP",
    img: logoPp,
  },
  {
    id: 9,
    name: "Patra Jasa",
    img: logoPatraJasa,
  },
  {
    id: 10,
    name: "PUPR",
    img: logoPupr,
  },
]
const CLIENTS2 = [
  {
    id: 1,
    name: "Agung Podomoro Land",
    img: logoAgungPodomoroLand,
  },
  {
    id: 2,
    name: "Ciputra",
    img: logoCiputra,
  },
  {
    id: 3,
    name: "Mawatu",
    img: logoMawatu,
  },
  {
    id: 4,
    name: "MRT",
    img: logoMrt,
  },
  {
    id: 5,
    name: "Pakuwon",
    img: logoPakuwon,
  },
  {
    id: 6,
    name: "Petropro",
    img: logoPetropro,
  },
  {
    id: 7,
    name: "Schlumberger",
    img: logoSchlumberger,
  },
  {
    id: 8,
    name: "Sinarmas",
    img: logoSinarmas,
  },
  {
    id: 9,
    name: "Wika",
    img: logoWika,
  },
  {
    id: 10,
    name: "Trans Property",
    img: logoTransProperty,
  },
]
