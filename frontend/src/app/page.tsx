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
  title: 'Consaience Partners | Enterprise AI Automation on Salesforce',
  description:
    'Consaience Partners delivers Salesforce Agentforce solutions that automate customer inquiries, reduce manual workload, and scale enterprise service operations.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Consaience Partners | Enterprise AI Automation on Salesforce',
    description:
      'Automate inquiry resolution with enterprise-grade agentic AI grounded in Salesforce data, knowledge, and governance.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consaience Partners | Enterprise AI Automation on Salesforce',
    description:
      'Enterprise AI automation for Salesforce teams that resolve more customer inquiries with less manual effort.',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Consaience Partners',
  url: canonicalUrl,
  description:
    'Consaience Partners helps enterprises automate customer inquiries with enterprise-grade Salesforce Agentforce and Einstein AI solutions.',
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

      <CapabilitiesGrid
        capabilities={homeContent.capabilities}
        eyebrow={homeContent.capabilitiesEyebrow}
        title={homeContent.capabilitiesTitle}
        description={homeContent.capabilitiesDescription}
      />

      <div id="how-it-works">
        <StickyPanels
          steps={homeContent.howItWorks}
          eyebrow={homeContent.howItWorksEyebrow}
          title={homeContent.howItWorksTitle}
          description={homeContent.howItWorksDescription}
        />
      </div>

      <SplitReveal>
        <div className="px-4 lg:px-0">
          <p className="eyebrow">Use Case Spotlight</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900">
            Enterprise contact center automation
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 leading-relaxed">
            From mid-market organizations modernizing service operations to global enterprises 
            scaling support infrastructure, manual case handling creates operational bottlenecks. 
            Salesforce Agentforce automation resolves routine inquiries instantly, enabling agents 
            to focus on complex, high-value interactions.
          </p>
          <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                Processes and responds to customer inquiries using Salesforce CRM data and enterprise Knowledge Articles
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                Escalates complex cases to human agents with full context to maintain resolution speed and accuracy
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                Continuously learns from resolved cases to expand automation coverage across all customer channels
              </span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 lg:mb-8">
            Built on Salesforce Service Cloud and Agentforce, our solutions leverage your existing 
            data infrastructure, business processes, and knowledge repositories to deliver immediate, 
            measurable automation value.
          </p>
          <Link href="/use-cases" className="inline-flex btn btn-secondary text-sm md:text-base">
            View enterprise use cases
          </Link>
        </div>
      </SplitReveal>

      <MetricTiles
        metrics={homeContent.metrics}
        eyebrow={homeContent.metricsEyebrow}
        title={homeContent.metricsTitle}
        description={homeContent.metricsDescription}
      />

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
        eyebrow={homeContent.ctaEndcap.eyebrow}
      />
    </>
  );
}
