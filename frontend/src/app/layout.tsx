import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AdtechProvider } from "@/lib/adtech";
import { Header } from "./(marketing)/_components/Header";
import { Footer } from "./(marketing)/_components/Footer";
import { StructuredData } from "./(marketing)/_components/StructuredData";
import { ScrollProgress } from "./(marketing)/_components/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consaience - Salesforce Agentic AI Solutions",
  description: "Scale your contact center without adding headcount. We help enterprises automate inquiries and resolve more cases using Salesforce Agentforce and AI.",
  keywords: ["Salesforce", "Agentforce", "AI automation", "contact center", "customer service", "Einstein AI", "CRM"],
  authors: [{ name: "Consaience" }],
  openGraph: {
    title: "Consaience - Salesforce Agentic AI Solutions",
    description: "Scale your contact center without adding headcount. AI-powered customer service automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consaience - Salesforce Agentic AI Solutions",
    description: "Scale your contact center without adding headcount. AI-powered customer service automation.",
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
          <ScrollProgress />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </AdtechProvider>
      </body>
    </html>
  );
}
