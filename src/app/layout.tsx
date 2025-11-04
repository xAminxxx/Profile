import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohamed Amin MAKNI - Software Engineer | AI & Blockchain",
  description:
    "Software Engineer specializing in AI, Machine Learning, and Blockchain technologies. Building intelligent systems and decentralized solutions.",
  keywords: [
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Blockchain",
    "Hedera",
    "Full Stack Developer",
  ],
  authors: [{ name: "Mohamed Amin MAKNI" }],
  openGraph: {
    title: "Mohamed Amin MAKNI - Software Engineer",
    description: "Building intelligent systems with AI, ML, and Blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
