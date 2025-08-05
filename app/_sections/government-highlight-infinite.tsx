import Image from "next/image"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import jokowi1 from "../../public/portfolio/government/jokowi1.jpeg"
import jokowi2 from "../../public/portfolio/government/jokowi2.jpeg"
import jokowi3 from "../../public/portfolio/government/jokowi3.jpeg"
import jokowi4 from "../../public/portfolio/government/jokowi4.jpeg"
import jokowi5 from "../../public/portfolio/government/jokowi5.jpeg"
import jokowi6 from "../../public/portfolio/government/jokowi6.jpeg"
import jokowi7 from "../../public/portfolio/government/jokowi7.jpeg"
import sby1 from "../../public/portfolio/government/sby1.jpeg"
import sby2 from "../../public/portfolio/government/sby2.jpeg"

const DEFAULT_HEADING =
  "Maket Polaraya yang dipercaya Presiden dari tahun ke tahun"

export function GovernmentHighlightInfiniteSection({
  heading,
}: {
  heading?: string
}) {
  return (
    <section className="bg-gradient-to-l via-white to-gray-100 from-gray-100">
      <MaxWidthWrapper>
        <div className="py-8 text-center">
          <h2 className="py-2 text-lg font-semibold">
            {heading || DEFAULT_HEADING}
          </h2>
          <div className="scroll-wrapper my-4 overflow-y-visible h-36 py-2">
            {PRESIDENTS.map((client, i) => (
              <div
                key={client.id}
                className={`scroll-item scroll-left scroll-item-${i + 1} h-32`}
              >
                <div className="rounded-2xl overflow-hidden group duration-500 font-black opacity-50 hover:opacity-100 h-full text-4xl text-white flex flex-col items-center justify-center">
                  {/* <span className="animate-pulse">{client}</span> */}
                  <Image
                    src={client.img}
                    alt={client.name}
                    className="h-full w-auto  group-hover:scale-150 scale-125 transition-all duration-500"
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

const PRESIDENTS = [
  {
    id: 1,
    name: "Presiden Jokowi",
    img: jokowi1,
  },
  {
    id: 2,
    name: "Presiden Jokowi",
    img: jokowi2,
  },
  {
    id: 3,
    name: "Presiden Jokowi",
    img: jokowi3,
  },
  {
    id: 4,
    name: "Presiden Jokowi",
    img: jokowi4,
  },
  {
    id: 5,
    name: "Presiden Jokowi",
    img: jokowi5,
  },
  {
    id: 6,
    name: "Presiden Jokowi",
    img: jokowi6,
  },
  {
    id: 7,
    name: "Presiden Jokowi",
    img: jokowi7,
  },
  {
    id: 8,
    name: "Presiden Jokowi",
    img: sby1,
  },
  {
    id: 9,
    name: "Presiden Jokowi",
    img: sby2,
  },
  {
    id: 10,
    name: "Presiden Jokowi",
    img: jokowi4,
  },
]
