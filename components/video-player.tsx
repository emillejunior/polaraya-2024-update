"use client"

import React, { useState, useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

interface VideoPlayerProps {
  src: string
  poster?: string | StaticImageData
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  subtitles?: {
    src: string
    label: string
    srcLang: string
  }
  ariaLabel?: string
  responsiveSize?: {
    default?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
  imageSizes?: string
}

export function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  subtitles,
  ariaLabel,
  responsiveSize,
  imageSizes,
}: VideoPlayerProps) {
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoReady = () => {
      setIsVideoReady(true)
    }

    video.addEventListener("canplay", handleVideoReady)
    video.addEventListener("loadeddata", handleVideoReady)
    video.addEventListener("loadedmetadata", handleVideoReady)

    const fallbackTimer = setTimeout(handleVideoReady, 1000)

    return () => {
      video.removeEventListener("canplay", handleVideoReady)
      video.removeEventListener("loadeddata", handleVideoReady)
      video.removeEventListener("loadedmetadata", handleVideoReady)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const defaultResponsiveClasses = "w-full h-full"
  const responsiveClasses = responsiveSize
    ? `${responsiveSize.default || ""} ${
        responsiveSize.sm ? `sm:${responsiveSize.sm}` : ""
      } ${responsiveSize.md ? `md:${responsiveSize.md}` : ""} ${
        responsiveSize.lg ? `lg:${responsiveSize.lg}` : ""
      } ${responsiveSize.xl ? `xl:${responsiveSize.xl}` : ""}`
    : defaultResponsiveClasses

  const defaultImageSizes = "100vw"

  return (
    <div
      className={`relative overflow-hidden ${responsiveClasses} ${className}`}
    >
      {poster && !isVideoReady && (
        <Image
          src={poster}
          alt=""
          fill
          sizes={imageSizes || defaultImageSizes}
          className="object-cover"
          priority
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        poster={typeof poster === "string" ? poster : undefined}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
        {subtitles && (
          <track
            src={subtitles.src}
            kind="subtitles"
            srcLang={subtitles.srcLang}
            label={subtitles.label}
          />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
