import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sk Arif Ahmed | Full Stack Developer | MERN | DevOps | Cloud Enthusiast",
  description:
    "Portfolio of Sk Arif Ahmed – Full-Stack Developer specializing in MERN stack, DevOps, and Cloud technologies. Explore projects in e-commerce, AI, video conferencing, and more.",
  keywords: [
    "Sk Arif Ahmed",
    "Full Stack Developer",
    "MERN",
    "DevOps",
    "AWS",
    "Cloud",
    "Portfolio",
    "Next.js",
    "React",
    "Node.js",
  ],
  author: "Sk Arif Ahmed",
  creator: "Sk Arif Ahmed",
  publisher: "Sk Arif Ahmed",
  generator: "Next.js",
  applicationName: "Sk Arif Ahmed Portfolio",
  referrer: "origin-when-cross-origin",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sk Arif Ahmed | Full Stack Developer",
    description: "Explore my full-stack development projects, DevOps expertise, and cloud solutions",
    type: "website",
    locale: "en_US",
    siteName: "Sk Arif Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Arif Ahmed | Full Stack Developer",
    description: "Full-Stack Developer specializing in MERN, DevOps, and Cloud technologies",
  },
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sk Arif Ahmed",
              url: "https://skarif.dev",
              jobTitle: "Full Stack Developer",
              email: "skarifaahmed@gmail.com",
              knowsAbout: ["Full Stack Development", "MERN Stack", "DevOps", "Cloud Computing", "AWS"],
              sameAs: ["https://github.com", "https://linkedin.com", "https://twitter.com"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased bg-background text-foreground`}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
