"use client"

import { useState } from "react"
// import Image from "next/image"
import { PlayCircleIcon } from "lucide-react"
import YouTubeThumbnail from "./youtube-thumbnail"

export default function YoutubePlayer({ videoId }: { videoId: string }) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const loadVideo = () => {
    setVideoLoaded(true)
  }
  return (
    <div>
      {!videoLoaded ? (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={loadVideo}
        >
          <YouTubeThumbnail videoId={videoId} />
          <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
            <PlayCircleIcon className="w-16 h-16 text-white" />
          </div>
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      )}
    </div>
  )
}
