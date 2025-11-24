import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://skarif.dev"),
  title: {
    default: "Sk Arif Ahmed | Full Stack Developer & DevOps Engineer",
    template: "%s | Sk Arif Ahmed",
  },
  description:
    "Portfolio of Sk Arif Ahmed – Full-Stack Developer specializing in MERN stack, DevOps, and Cloud technologies. Building scalable web applications and cloud infrastructure.",
  keywords: [
    "Sk Arif Ahmed",
    "Arif Ahmed",
    "Full Stack Developer",
    "MERN Stack Developer",
    "DevOps Engineer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Portfolio",
  ],
  authors: [{ name: "Sk Arif Ahmed", url: "https://skarif.dev" }],
  creator: "Sk Arif Ahmed",
  publisher: "Sk Arif Ahmed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sk Arif Ahmed | Full Stack Developer & DevOps Engineer",
    description: "Explore my full-stack development projects, DevOps expertise, and cloud solutions.",
    url: "https://skarif.dev",
    siteName: "Sk Arif Ahmed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
        alt: "Sk Arif Ahmed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Arif Ahmed | Full Stack Developer & DevOps Engineer",
    description: "Full-Stack Developer specializing in MERN, DevOps, and Cloud technologies.",
    creator: "@skasif_ahmed1", // Assuming this is the handle based on previous context, or generic
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Metadata = {
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
              email: "arifahmedma490@gmail.com",
              knowsAbout: ["Full Stack Development", "MERN Stack", "DevOps", "Cloud Computing", "AWS"],
              sameAs: ["https://github.com/Arif1258", "https://www.linkedin.com/in/skarifahmed"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-background/80" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
