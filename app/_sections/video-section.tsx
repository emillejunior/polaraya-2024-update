"use client"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import YoutubePlayer from "@/components/youtube-player"

export function VideoSection({ videoId }: { videoId: string }) {
  return (
    <MaxWidthWrapper className="my-16">
      <div className="relative w-full aspect-video">
        <YoutubePlayer
          videoId={videoId}
          // videoId="U-3OKdf2nJg"
        />
      </div>
    </MaxWidthWrapper>
  )
}
