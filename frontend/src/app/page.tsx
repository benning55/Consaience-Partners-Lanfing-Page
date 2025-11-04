import type { Metadata } from 'next';
import Script from 'next/script';

import { ParallaxHero } from './(marketing)/_components/ParallaxHero';
import { TrustBadges } from './(marketing)/_components/TrustBadges';
import { CapabilitiesGrid } from './(marketing)/_components/CapabilitiesGrid';
import { StickyPanels } from './(marketing)/_components/StickyPanels';
import { VisualUseCase } from './(marketing)/_components/VisualUseCase';
import { VisualMetrics } from './(marketing)/_components/VisualMetrics';
import { VisualTestimonials } from './(marketing)/_components/VisualTestimonials';
import { TechStackShowcase } from './(marketing)/_components/TechStackShowcase';
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

      <TrustBadges />

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

      <VisualUseCase />

      <VisualMetrics
        metrics={homeContent.metrics}
        eyebrow={homeContent.metricsEyebrow}
        title={homeContent.metricsTitle}
        description={homeContent.metricsDescription}
      />

      <VisualTestimonials />

      <TechStackShowcase />

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
