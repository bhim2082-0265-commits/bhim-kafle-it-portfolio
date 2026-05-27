import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ParticleBackground } from "@/components/sections/ParticleBackground"
import { Chatbot } from "@/components/sections/Chatbot"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bhimkafle.com.np"),
  title: {
    default: "Bhim Kafle | Head of IT - Enterprise IT Leadership",
    template: "%s | Bhim Kafle",
  },
  description:
    "Strategic IT Leader with 6+ years of experience in IT Infrastructure, Cybersecurity, Data Center Operations, SAP B1/HANA, and Enterprise Digital Transformation. Head of IT based in Nepal.",
  keywords: [
    "Bhim Kafle",
    "Head of IT",
    "IT Director",
    "Infrastructure Management",
    "Cybersecurity",
    "SAP B1",
    "SAP HANA",
    "Data Center",
    "Network Architecture",
    "Nepal IT Leader",
    "Enterprise Technology",
    "Cloud Migration",
    "IT Governance",
  ],
  authors: [{ name: "Bhim Kafle" }],
  creator: "Bhim Kafle",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bhim Kafle - Enterprise IT Leadership",
    title: "Bhim Kafle | Head of IT - Enterprise IT Leadership",
    description:
      "Strategic IT Leader with 6+ years of experience in IT Infrastructure, Cybersecurity, Data Center Operations, SAP B1/HANA, and Enterprise Digital Transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhim Kafle | Head of IT",
    description:
      "Strategic IT Leader with 6+ years of experience in IT Infrastructure, Cybersecurity, and Digital Transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ParticleBackground />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
