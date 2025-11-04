import type { Metadata } from 'next';
import Link from 'next/link';
import { ParallaxHero } from '../_components/ParallaxHero';
import { CapabilitiesGrid } from '../_components/CapabilitiesGrid';
import { SplitReveal } from '../_components/SplitReveal';
import { CTAEndcap } from '../_components/CTAEndcap';

export const metadata: Metadata = {
  title: 'About Us - Consaience',
  description: 'We are a technology consulting firm specializing in Salesforce Agentic Solution Implementation, helping SMEs and enterprises transform customer contact centers through intelligent automation.',
  openGraph: {
    title: 'About Us - Consaience',
    description: 'We help enterprises transform customer contact centers through intelligent automation.',
    type: 'website',
  },
};

export default function AboutPage() {
  const differences = [
    {
      icon: 'bolt',
      title: 'Salesforce Implementation Expertise',
      body: 'Tailored for both SME and enterprise scale, with proven frameworks for rapid deployment and optimization.',
    },
    {
      icon: 'workflow',
      title: 'Proven Deployment Frameworks',
      body: 'We use battle-tested methodologies that accelerate time-to-value while minimizing disruption to your operations.',
    },
    {
      icon: 'users',
      title: 'Data-Driven Methodology',
      body: 'Balancing technology and human experience to ensure AI amplifies your team without replacing them.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        eyebrow="About Us"
        title="Empowering organizations with Agentic AI solutions"
        subtitle="We help enterprises handle more customer cases with less human effort by integrating Salesforce Agentforce, AI, and data-driven process design."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'Our services', href: '/products-services' }}
        trustLogos={[]}
      />

      {/* What We Do */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">What We Do</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We design and implement <strong className="text-gray-900">Agentic AI systems</strong> that leverage 
                Salesforce CRM and Knowledge Articles to understand and resolve inquiries instantly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-3">Automate Enquiries</h3>
                  <p className="text-gray-600 text-base">
                    Using Salesforce Agentforce and Einstein AI to handle routine customer inquiries automatically.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-3">Reduce Manual Workloads</h3>
                  <p className="text-gray-600 text-base">
                    Improve accuracy and response time while freeing your team for high-value work.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-3">Enhance Visibility</h3>
                  <p className="text-gray-600 text-base">
                    Gain insights across customer interactions and service operations with integrated analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <SplitReveal>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            From <strong className="text-gray-900">fast-growing SMEs</strong> modernizing their first contact center, 
            to <strong className="text-gray-900">global enterprises</strong> seeking to scale customer operations, 
            we deliver scalable Salesforce-based agentic solutions that evolve with business growth.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our clients choose us because we understand the unique challenges at every stage—from 
            first implementation to enterprise-wide optimization.
          </p>
        </div>
      </SplitReveal>

      {/* Philosophy */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Our Philosophy</h2>
            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-relaxed">
              "AI should amplify people, not replace them."
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our approach combines human expertise, CRM intelligence, and automation to empower teams 
              to focus on high-value conversations while AI handles repetitive inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <CapabilitiesGrid capabilities={differences} />

      {/* Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              To empower every organization—from <strong className="text-gray-900">emerging businesses to large enterprises</strong>—with 
              Agentic AI solutions that redefine customer service:
            </p>
            <p className="text-2xl font-semibold text-gray-900 mb-8">
              Efficient, intelligent, and human-centered.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/bio" className="text-gray-700 hover:text-black transition-colors duration-200 underline">
                Meet our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAEndcap
        title="Ready to transform your customer service?"
        subtitle="Let's discuss how Salesforce Agentforce can help your organization scale intelligently."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'View use cases', href: '/use-cases' }}
      />

      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Consaience',
            description: 'Salesforce Agentic AI solutions for enterprises',
            url: 'https://saveboost-1e0a0.web.app/about',
            foundingDate: '2024',
            slogan: 'AI should amplify people, not replace them',
            knowsAbout: [
              'Salesforce Agentforce',
              'AI Automation',
              'Contact Center Optimization',
              'CRM Integration',
              'Customer Service AI',
            ],
          }),
        }}
      />
    </>
  );
}

