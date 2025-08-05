"use client"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import YoutubePlayer from "@/components/youtube-player"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  ImageContent,
  PortoItem,
  VideoContent,
} from "../(site)/portofolio/page"

type PortoSectionProps = PortoItem & {
  position?: "left" | "right"
  link?: string
  isDark?: boolean
}

export function PortoSection({
  content,
  title,
  description,
  position = "left",
  link,
  isDark,
}: PortoSectionProps) {
  const hasText = title || description

  const renderDescription = () => {
    if (typeof description === "string") {
      return (
        <p
          className={cn("text-lg", isDark ? "text-gray-300" : "text-gray-600")}
        >
          {description}
        </p>
      )
    } else if (Array.isArray(description)) {
      return description.map((paragraph, index) => (
        <p
          key={index}
          className={cn("text-lg", isDark ? "text-gray-300" : "text-gray-600")}
        >
          {paragraph}
        </p>
      ))
    }
    return null
  }

  return (
    <div
      className={cn(
        "py-16 transition-colors duration-300",
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      )}
    >
      <MaxWidthWrapper>
        {hasText ? (
          <div
            className={cn(
              "flex flex-col gap-8",
              position === "right" ? "md:flex-row-reverse" : "md:flex-row"
            )}
          >
            <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
              {renderMedia(content)}
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              {title && (
                <h2 className="text-3xl font-bold mb-2">
                  {link ? (
                    <Link href={link} className="hover:underline">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h2>
              )}
              {description && (
                <div className="space-y-4">{renderDescription()}</div>
              )}
              {link && (
                <div className="mt-4">
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: isDark ? "outline" : "default",
                      }),
                      isDark &&
                        "text-green-600 bg-teal-100 hover:bg-teal-50 hover:text-green-700 hover:scale-105"
                    )}
                    href={link}
                  >
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            {renderMedia(content)}
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  )
}

function renderMedia(content: ImageContent | VideoContent) {
  if (content.type === "video") {
    return <YoutubePlayer videoId={content.src} />
  } else {
    return (
      <Image src={content.src} alt="Content" fill className="object-cover" />
    )
  }
}
