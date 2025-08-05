"use client"

import { PortoItem } from "@/app/(site)/portofolio/page"
import { PortoSection } from "@/app/_sections/porto-section"

interface PortoSectionListProps {
  items: PortoItem[]
}

export function PortoSectionList({ items }: PortoSectionListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <PortoSection
          key={index}
          content={item.content}
          title={item.title}
          description={item.description}
          link={item.link}
          position={index % 2 === 0 ? "left" : "right"}
          isDark={index % 2 !== 0}
        />
      ))}
    </div>
  )
}
