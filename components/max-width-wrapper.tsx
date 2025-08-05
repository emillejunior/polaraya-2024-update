import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type MaxWidthSize = "default" | "small" | "wide" | "ultraWide" | "full"

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
  size?: MaxWidthSize
}

export function MaxWidthWrapper({
  className,
  children,
  size = "default",
}: MaxWidthWrapperProps) {
  const maxWidthClass = {
    small: "max-w-6xl",
    default: "max-w-7xl",
    wide: "max-w-8xl",
    ultraWide: "max-w-[2000px]",
    full: "max-w-full",
  }[size]

  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8 mx-auto",
        maxWidthClass,
        className
      )}
    >
      {children}
    </div>
  )
}
