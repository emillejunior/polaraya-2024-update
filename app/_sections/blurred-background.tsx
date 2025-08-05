"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

interface BlurredBackgroundProps {
  lowResImage: StaticImageData
  highResImage: StaticImageData
  children: React.ReactNode
}

export default function BlurredBackground({
  lowResImage,
  highResImage,
  children,
}: BlurredBackgroundProps) {
  const [highResLoaded, setHighResLoaded] = useState(false)

  useEffect(() => {
    // const img = new Image()
    // const img = new (window.Image as any)()
    const img = new window.Image()

    img.src = highResImage.src
    img.onload = () => setHighResLoaded(true)
  }, [highResImage])

  return (
    <div className="relative py-16 sm:py-32 min-h-screen overflow-hidden">
      <Image
        src={lowResImage}
        alt=""
        fill
        className="absolute inset-0 scale-105 blur-2xl transition-opacity duration-1000 object-cover"
        style={{ opacity: highResImage ? 0 : 1 }}
        priority
      />
      <Image
        src={highResImage}
        alt=""
        fill
        className="absolute inset-0 transition-opacity blur scale-105 duration-1000 object-cover"
        style={{ opacity: highResLoaded ? 1 : 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
