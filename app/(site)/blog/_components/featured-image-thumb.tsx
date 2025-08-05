import { fetchBlurImage, fetchMedia } from "@/api"
import Image from "next/image"

export async function FeaturedMediaThumbnail({
  mediaId,
  className = "",
}: {
  mediaId: number
  className: string
}) {
  try {
    const data = await fetchMedia(mediaId)
    const {
      base64,
      // img
    } = await fetchBlurImage(data.media_details.sizes.thumbnail.source_url)

    // Use medium size for thumbnails in the listing
    if (data.media_details.sizes.medium) {
      return (
        <Image
          src={data.media_details.sizes.medium.source_url}
          width={data.media_details.sizes.medium.width}
          height={data.media_details.sizes.medium.height}
          alt={data.alt_text}
          className={className}
          placeholder="blur"
          blurDataURL={base64}
        />
      )
    }

    // Fallback to thumbnail if medium is not available
    return (
      <Image
        src={data.media_details.sizes.thumbnail.source_url}
        width={data.media_details.sizes.thumbnail.width}
        height={data.media_details.sizes.thumbnail.height}
        alt={data.alt_text}
        className={className}
        placeholder="blur"
        blurDataURL={base64}
      />
    )
  } catch (err) {
    console.error(err)
    return null
  }
}
