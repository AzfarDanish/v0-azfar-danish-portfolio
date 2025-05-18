import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azfar Danish - Portfolio",
  description: "Personal portfolio of Azfar Danish, a multidisciplinary creative professional",
  keywords: ["portfolio", "design", "3D modeling", "creative", "Azfar Danish"],
  authors: [{ name: "Azfar Danish" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azfardanish.com",
    title: "Azfar Danish - Portfolio",
    description: "Personal portfolio of Azfar Danish, a multidisciplinary creative professional",
    siteName: "Azfar Danish Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
