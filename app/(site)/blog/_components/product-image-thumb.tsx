import Image, { StaticImageData } from "next/image"

export default async function ProductImageThumbnail({
  altText,
  src,
  className = "",
}: {
  altText: string
  src: StaticImageData
  className: string
}) {
  return (
    <>
      <Image
        src={src}
        // width={data.media_details.sizes.medium.width}
        // height={data.media_details.sizes.medium.height}
        alt={altText}
        className={className}
      />
    </>
  )
}
