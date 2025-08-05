import type { Metadata } from "next"
// import { Inter as FontSans } from "next/font/google"
import "../globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { pageMeta } from "@/api/data/meta"

export const metadata: Metadata = pageMeta.mainLayout

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
