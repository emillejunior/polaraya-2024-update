import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"

// import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

import { pageMeta } from "@/api/data/meta"
import Script from "next/script"
// import { VisitLogger } from "@/components/visit-logger"
// import { Providers } from "@/components/providers"

export const metadata: Metadata = pageMeta.mainLayout

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content="id"></meta>
        <Script async src=""></Script>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N4WEJGY6FL"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N4WEJGY6FL');
          `}
        </Script>
      </head>
      <body
        className={cn(
          // "min-h-screen bg-background font-sans antialiased",
          "min-h-[100dvh] grid grid-rows-[auto_1fr_auto] bg-background font-sans antialiased",
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        {/* <Providers> */}
        {children}
        <Analytics />
        {/* <SpeedInsights /> */}
        {/* <VisitLogger /> */}
        {/* </Providers> */}
      </body>
    </html>
  )
}
