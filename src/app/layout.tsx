import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

const siteUrl = "https://med-amin-makni.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI Engineer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Mohamed Amin MAKNI, an AI Engineer focused on computer vision, document intelligence, RAG, LLMs, intelligent agents, and AI-enabled software systems.",
  alternates: { canonical: "/" },
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Mohamed Amin MAKNI",
    "AI Engineer",
    "Computer Vision Engineer",
    "Document Intelligence",
    "RAG Engineer",
    "LLM Engineer",
    "Software Engineer Tunisia",
    "Software Architecture",
  ],
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} | AI Engineer`,
    description: profile.valueProposition,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | AI Engineer`,
    description: profile.valueProposition,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||((matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark')}catch(e){}`}
        </Script>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
