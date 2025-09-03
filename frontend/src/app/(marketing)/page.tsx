import { ParallaxHero } from './_components/ParallaxHero';
import { CapabilitiesGrid } from './_components/CapabilitiesGrid';
import { StickyPanels } from './_components/StickyPanels';
import { SplitReveal } from './_components/SplitReveal';
import { MetricTiles } from './_components/MetricTiles';
import { LogoMarquee } from './_components/LogoMarquee';
import { ResourcesTeasers } from './_components/ResourcesTeasers';
import { CTAEndcap } from './_components/CTAEndcap';
import { homeContent } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <ParallaxHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        trustLogos={homeContent.hero.trustLogos}
      />
      
      <CapabilitiesGrid capabilities={homeContent.capabilities} />
      
      <StickyPanels steps={homeContent.howItWorks} />
      
      <SplitReveal>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Built for enterprise scale
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our platform handles millions of records and thousands of concurrent users 
            without breaking a sweat. Enterprise-grade security, compliance, and 
            reliability built in from day one.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">SOC 2 Type II certified</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">GDPR and CCPA compliant</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">99.9% uptime SLA</span>
            </li>
          </ul>
        </div>
      </SplitReveal>
      
      <MetricTiles metrics={homeContent.metrics} />
      
      <LogoMarquee logos={homeContent.hero.trustLogos} />
      
      <ResourcesTeasers resources={homeContent.resources} />
      
      <CTAEndcap
        title={homeContent.ctaEndcap.title}
        subtitle={homeContent.ctaEndcap.subtitle}
        primaryCta={homeContent.ctaEndcap.primaryCta}
        secondaryCta={homeContent.ctaEndcap.secondaryCta}
      />
    </>
  );
}