import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdtechProvider } from "@/lib/adtech";
import { Header } from "./(marketing)/_components/Header";
import { Footer } from "./(marketing)/_components/Footer";
import { ScrollProgress } from "./(marketing)/_components/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consaience Partners | Enterprise AI Automation on Salesforce",
  description:
    "Consaience Partners implements enterprise-grade Salesforce Agentforce solutions that automate customer inquiries, integrate knowledge, and scale service operations with confidence.",
  keywords: [
    "Salesforce Agentforce",
    "enterprise AI",
    "customer service automation",
    "Einstein AI",
    "Service Cloud",
    "B2B AI automation",
  ],
  authors: [{ name: "Consaience Partners" }],
  openGraph: {
    title: "Consaience Partners | Enterprise AI Automation on Salesforce",
    description:
      "Enterprise AI solutions built on Salesforce to resolve customer inquiries faster and reduce manual workload.",
    type: "website",
    locale: "en_US",
    url: "https://consaience.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consaience Partners | Enterprise AI Automation on Salesforce",
    description:
      "Enterprise-grade Salesforce automation services that blend AI, knowledge, and governance.",
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
          <ScrollProgress />
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
