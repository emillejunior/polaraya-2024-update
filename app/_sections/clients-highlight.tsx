import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export function ClientsHighlightSection() {
  return (
    <div className="bg-gradient-to-bl from-white to-gray-100">
      <MaxWidthWrapper>
        <div className="py-8 text-center">
          <p className="py-2 text-lg font-semibold">Telah dipercaya oleh</p>
          <div className="grid grid-cols-10 gap-2 py-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="size-16 py-3 bg-gray-200 rounded-xl text-gray-500 font-extrabold text-3xl text-center"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

const CLIENTS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]
