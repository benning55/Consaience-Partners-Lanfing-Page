import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdtechProvider } from "@/lib/adtech";
import { Header } from "./(marketing)/_components/Header";
import { Footer } from "./(marketing)/_components/Footer";
import { StructuredData } from "./(marketing)/_components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consaience Partners - Plug-and-play Adtech",
  description: "Target the right accounts. Win the right deals. Consaience Partners snaps into your stack to help sales teams focus on customer groups most likely to convert—privacy-first and enterprise-ready.",
  keywords: ["adtech", "sales", "targeting", "audience", "B2B", "enterprise"],
  authors: [{ name: "Consaience Partners" }],
  openGraph: {
    title: "Consaience Partners - Plug-and-play Adtech",
    description: "Target the right accounts. Win the right deals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consaience Partners - Plug-and-play Adtech",
    description: "Target the right accounts. Win the right deals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-black">
        <AdtechProvider>
          <StructuredData />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AdtechProvider>
      </body>
    </html>
  );
}
