import Image from "next/image"
import { ImageProps } from "next/image"

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  const isGif = src.endsWith(".gif")

  // Use Next.js <Image> for other images (JPG, PNG, etc.)
  if (!isGif && src.startsWith("https://blog.polaraya.com")) {
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={width || 600} // Set a default or calculate based on the original image
        height={height || 400}
        {...props}
      />
    )
  }

  // Fallback for other external images
  return <Image src={src} alt={alt || ""} unoptimized />
}

export default CustomImage
