import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

import { ParallaxHero } from './(marketing)/_components/ParallaxHero';
import { CapabilitiesGrid } from './(marketing)/_components/CapabilitiesGrid';
import { StickyPanels } from './(marketing)/_components/StickyPanels';
import { SplitReveal } from './(marketing)/_components/SplitReveal';
import { MetricTiles } from './(marketing)/_components/MetricTiles';
import { LogoMarquee } from './(marketing)/_components/LogoMarquee';
import { ResourcesTeasers } from './(marketing)/_components/ResourcesTeasers';
import { CTAEndcap } from './(marketing)/_components/CTAEndcap';
import { homeContent } from '@/lib/content';

const canonicalUrl = 'https://consaience.com/';

export const metadata: Metadata = {
  title: 'Consaience Partners | Salesforce Agentic AI Automation',
  description:
    'Consaience Partners designs Salesforce Agentforce solutions that automate customer inquiries, reduce manual workload, and scale service operations.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Consaience Partners | Salesforce Agentic AI Automation',
    description:
      'Automate inquiry resolution with agentic AI grounded in Salesforce data, knowledge, and governance.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consaience Partners | Salesforce Agentic AI Automation',
    description:
      'Agentic AI for Salesforce teams that want to resolve more customer inquiries with less manual effort.',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Consaience Partners',
  url: canonicalUrl,
  description:
    'Consaience Partners helps enterprises automate customer inquiries with Salesforce Agentforce and Einstein Copilot.',
  publisher: {
    '@type': 'Organization',
    name: 'Consaience Partners',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <ParallaxHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        supporting={homeContent.hero.supporting}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        trustLogos={homeContent.hero.trustLogos}
      />

      <CapabilitiesGrid capabilities={homeContent.capabilities} />

      <div id="how-it-works">
        <StickyPanels steps={homeContent.howItWorks} />
      </div>

      <SplitReveal>
        <div>
          <p className="eyebrow">Industrial spotlight</p>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            AI-powered contact center automation
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Whether you are an SME modernizing service or a global enterprise scaling support,
            manual case handling slows teams down. Our Salesforce Agentforce automation
            resolves repetitive enquiries instantly so agents stay focused on complex issues.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <span className="text-gray-700">
                Understands and responds to customer enquiries using Salesforce CRM data and Knowledge Articles.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <span className="text-gray-700">
                Escalates complex cases to human agents with full context so resolution stays fast and accurate.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2" />
              <span className="text-gray-700">
                Learns from every closed case to continually improve automation coverage.
              </span>
            </li>
          </ul>
          <p className="text-gray-600">
            Built on Salesforce Service Cloud and Agentforce, the solution leverages the data,
            processes, and knowledge you already trust to deliver immediate automation.
          </p>
          <Link
            href="/use-cases"
            className="inline-flex mt-8 btn btn-secondary"
          >
            Explore more use cases
          </Link>
        </div>
      </SplitReveal>

      <MetricTiles metrics={homeContent.metrics} />

      {homeContent.hero.trustLogos.length > 0 && (
        <LogoMarquee logos={homeContent.hero.trustLogos} />
      )}

      {homeContent.resources.length > 0 && (
        <ResourcesTeasers resources={homeContent.resources} />
      )}

      <CTAEndcap
        title={homeContent.ctaEndcap.title}
        subtitle={homeContent.ctaEndcap.subtitle}
        primaryCta={homeContent.ctaEndcap.primaryCta}
        secondaryCta={homeContent.ctaEndcap.secondaryCta}
      />
    </>
  );
}
