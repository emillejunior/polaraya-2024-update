import defaultProductImage from "@/public/product-image.jpg"
import { ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

export default function ProductUSPSection({
  productName,
  productUsps,
  productImage,
  productVideo,
  type = "Product",
  heading,
}: {
  productName: string
  productUsps: string[]
  productImage?: StaticImageData
  productVideo?: string
  type: "Product" | "Service"
  heading?: string
}) {
  return (
    <div className="flex flex-col bg-gradient-to-t from-green-950 to-green-900 text-white py-16">
      <h2 className="max-w-2xl mx-auto text-center font-bold text-3xl py-8 lg:py-16 px-4">
        {heading ||
          `Mengapa ${
            type == "Product" ? "Membuat" : "Memilih"
          } ${productName} diPola Raya Studio`}
      </h2>
      <div className="relative flex flex-col lg:flex-row items-center lg:py-48 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-row-reverse flex items-center lg:py-0 py-16 lg:h-full">
          <div className="w-full lg:w-1/2 lg:pl-24 flex flex-col justify-center lg:h-full">
            <ul className="flex flex-col max-w-prose gap-5 mx-auto text-lg">
              {productUsps.map((usp, i) => (
                <ProductUSPItem key={i} productUsp={usp} />
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:absolute inset-y-0 left-0 w-full lg:w-1/2 overflow-hidden flex flex-col justify-center">
          <div className="rounded-r-xl border-green-500/5 border-4 border-l-0 shadow-xl overflow-hidden">
            {productVideo ? (
              <video
                className="h-full w-full object-cover"
                // src="/bg-video.mp4"
                src={productVideo}
                autoPlay
                loop
                muted
              >
                {/* <video width="320" height="240" controls preload="none"> */}
                {/* <source src={heroVideo} type="video/mp4" /> */}
                <source src={"bg-video.mp4"} type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={productImage || defaultProductImage}
                alt="Product Image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductUSPItem({ productUsp }: { productUsp: string }) {
  return (
    <li className="border border-green-500/5 rounded px-6 py-4 bg-black/5 flex gap-1">
      <ChevronRight className="opacity-20 size-6 sm:size-4 md:size-6 lg:size-7 flex-shrink-0" />
      <span>{productUsp}</span>
    </li>
  )
}
