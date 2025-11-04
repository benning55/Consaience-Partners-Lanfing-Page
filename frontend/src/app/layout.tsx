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
  title: "Consaience Partners | Salesforce Agentic AI Automation",
  description:
    "Consaience Partners implements Salesforce Agentforce solutions that automate customer inquiries, integrate knowledge, and scale service operations with confidence.",
  keywords: [
    "Salesforce Agentforce",
    "agentic AI",
    "customer service automation",
    "Einstein Copilot",
    "Service Cloud",
  ],
  authors: [{ name: "Consaience Partners" }],
  openGraph: {
    title: "Consaience Partners | Salesforce Agentic AI Automation",
    description:
      "Agentic AI solutions built on Salesforce to resolve customer inquiries faster and reduce manual workload.",
    type: "website",
    locale: "en_US",
    url: "https://consaience.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consaience Partners | Salesforce Agentic AI Automation",
    description:
      "Salesforce-native automation services that blend AI, knowledge, and governance.",
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
