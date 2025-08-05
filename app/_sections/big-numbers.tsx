import { MaxWidthWrapper } from "@/components/max-width-wrapper"

const BIG_NUMBERS = [
  {
    id: 1,
    value: "10.000 +",
    text: "Maket Terjual",
  },
  {
    id: 2,
    value: "40 +",
    text: "Tahun Pengalaman",
  },
  {
    id: 3,
    value: "50 +",
    text: "Tim Ahli",
  },
  {
    id: 4,
    value: "5.000m&sup2; +",
    text: "Area Workshop",
  },
]

export function BigNumbersSection() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className=" p-8">
          {/* <div className="py-8 bg-gray-100 border border-black rounded-3xl p-8"> */}
          <div className="grid grid-rows-3 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-4">
            {BIG_NUMBERS.map((bigNumber) => (
              <div
                key={bigNumber.id}
                className="text-center border border-teal-200 bg-gradient-to-br from-white to-teal-200 via-white bg-white transition-all hover:scale-105 hover:shadow-md shadow-none hover:bg-white duration-700 rounded-xl px-4 py-6"
              >
                <h3
                  className="font-medium text-4xl py-1 text-teal-800"
                  dangerouslySetInnerHTML={{ __html: bigNumber.value }}
                />
                <p className="font-medium py-0 text-gray-700">
                  {bigNumber.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
