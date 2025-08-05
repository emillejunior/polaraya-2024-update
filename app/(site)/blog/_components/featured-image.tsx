import { fetchBlurImage, fetchMedia } from "@/api"
// import { debugLog } from "@/lib/utils"
import Image from "next/image"

export default async function FeaturedMedia({
  mediaId,
  className = "",
}: {
  mediaId: number
  className: string
}) {
  try {
    const data = await fetchMedia(mediaId)
    // console.log("fetchMedia... media sizes:", data.media_details.sizes)

    const {
      base64,
      // img
    } = await fetchBlurImage(data.media_details.sizes.thumbnail.source_url)

    // console.log({ base64 })

    if (data.media_details.sizes.large) {
      return (
        <>
          <Image
            src={data.media_details.sizes.large.source_url}
            width={data.media_details.sizes.large.width}
            height={data.media_details.sizes.large.height}
            alt={data.alt_text}
            className={className}
            placeholder="blur"
            blurDataURL={base64}
          />
        </>
      )
    }

    if (data.media_details.sizes.medium_large) {
      return (
        <>
          <Image
            src={data.media_details.sizes.medium_large.source_url}
            width={data.media_details.sizes.medium_large.width}
            height={data.media_details.sizes.medium_large.height}
            alt={data.alt_text}
            className={className}
            placeholder="blur"
            blurDataURL={base64}
          />
        </>
      )
    }

    if (data.media_details.sizes.medium) {
      return (
        <>
          <Image
            src={data.media_details.sizes.medium.source_url}
            width={data.media_details.sizes.medium.width}
            height={data.media_details.sizes.medium.height}
            alt={data.alt_text}
            className={className}
            placeholder="blur"
            blurDataURL={base64}
          />
        </>
      )
    }

    return (
      <>
        <Image
          src={data.media_details.sizes.thumbnail.source_url}
          width={data.media_details.sizes.thumbnail.width}
          height={data.media_details.sizes.thumbnail.height}
          alt={data.alt_text}
          className={className}
          placeholder="blur"
          blurDataURL={base64}
        />
      </>
    )
  } catch (err) {
    console.error(err)
  }
}
