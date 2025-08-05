import Image from "next/image"
import { useState } from "react"

const thumbnailQualities = [
  "maxresdefault",
  "sddefault",
  "hqdefault",
  "mqdefault",
  "default",
]

interface YouTubeThumbnailProps {
  videoId: string
  // alt: string
}

export default function YouTubeThumbnail({
  videoId,
}: // alt,
YouTubeThumbnailProps) {
  const [currentQualityIndex, setCurrentQualityIndex] = useState(0)

  const handleImageError = () => {
    if (currentQualityIndex < thumbnailQualities.length - 1) {
      setCurrentQualityIndex(currentQualityIndex + 1)
    }
  }

  return (
    // <div className="relative w-full aspect-video">
    <Image
      src={`https://img.youtube.com/vi/${videoId}/${thumbnailQualities[currentQualityIndex]}.jpg`}
      alt="video thumbnail"
      // alt={alt}
      fill
      // objectFit="cover"
      className="object-cover"
      onError={handleImageError}
      priority
    />
    // </div>
  )
}
