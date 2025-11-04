import type { Metadata } from 'next';
import Link from 'next/link';
import { ParallaxHero } from '../_components/ParallaxHero';
import { CTAEndcap } from '../_components/CTAEndcap';
import { Bot, Sparkles, Database, Users, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products & Services - Consaience',
  description: 'Salesforce Agentic Solution Implementation, AI-driven automation, CRM intelligence, advisory services, and continuous optimization for enterprises.',
  openGraph: {
    title: 'Products & Services - Consaience',
    description: 'Comprehensive Salesforce Agentforce solutions for contact center automation and customer service.',
    type: 'website',
  },
};

const services = [
  {
    icon: Bot,
    title: 'Salesforce Agentic Solution Implementation',
    description: 'Deploy Salesforce Agentforce to automate customer service and increase operational efficiency.',
    features: [
      'Understand customer inquiries in natural language',
      'Retrieve accurate answers from your data',
      'Resolve cases automatically or assist human agents in real time',
    ],
    outcome: 'Faster response times, reduced manual effort, and improved customer satisfaction.',
    cta: { label: 'Learn more', href: '/contact' },
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Enquiry Automation',
    description: 'Design AI workflows that allow Salesforce to answer routine inquiries instantly—freeing up your support team.',
    features: [
      'Automate repetitive enquiries via email, chat, or case forms',
      'Maintain consistent, brand-aligned responses',
      'Learn continuously from CRM feedback and case history',
    ],
    outcome: 'Handle more cases with less human labor—while maintaining accuracy and tone of service.',
    cta: { label: 'See use cases', href: '/use-cases' },
  },
  {
    icon: Database,
    title: 'Knowledge & CRM Intelligence Integration',
    description: 'Transform your Knowledge Articles and CRM data into a unified intelligent knowledge layer for AI-driven decisions.',
    features: [
      'Structure and index content for AI readability',
      'Link case data, product information, and policies for contextual answers',
      'Create unified data models that improve case routing and recommendations',
    ],
    outcome: 'A smarter, self-learning support system that grows with your organization.',
    cta: { label: 'Explore', href: '/contact' },
  },
  {
    icon: Users,
    title: 'Advisory & Enablement Services',
    description: 'Tailored consulting for SMEs and enterprises ready to adopt Agentic AI.',
    features: [
      'Readiness Assessment: Evaluate your current Salesforce setup and automation maturity',
      'Implementation Roadmap: Define short-term wins and long-term vision',
      'Training & Change Management: Equip teams to work effectively with AI-enabled workflows',
    ],
    outcome: 'A confident, scalable transformation roadmap backed by technical and business alignment.',
    cta: { label: 'Book consultation', href: '/contact' },
  },
  {
    icon: RefreshCw,
    title: 'Continuous Optimization & Support',
    description: 'Post-implementation support to ensure your Salesforce Agentic Solution evolves with your business.',
    features: [
      'Monitor performance metrics and AI accuracy',
      'Adjust workflows and knowledge sources',
      'Implement new features as Salesforce releases enhancements',
    ],
    outcome: 'Sustained ROI and continuous improvement through agile iteration.',
    cta: { label: 'Learn about support', href: '/contact' },
  },
];

export default function ProductsServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        eyebrow="Products & Services"
        title="Comprehensive Salesforce Agentforce solutions"
        subtitle="From implementation to optimization, we deliver AI-powered customer service automation tailored to your business needs."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'View use cases', href: '/use-cases' }}
        trustLogos={[]}
      />

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon & Title Column */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features & Outcome Column */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="card">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Capabilities:</h4>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-xs text-gray-700 font-medium">✓</span>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Outcome:</p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {service.outcome}
                        </p>
                        <Link
                          href={service.cta.href}
                          className="btn btn-primary inline-flex items-center"
                        >
                          {service.cta.label}
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing/Engagement Model */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">Flexible Engagement Models</h2>
            <p className="section-description mb-12">
              Whether you're a fast-growing SME or a global enterprise, we offer engagement models 
              that fit your timeline, budget, and scale.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Project-Based</h3>
                <p className="text-gray-600 mb-4">
                  Fixed-scope implementations with clear deliverables and timelines.
                </p>
                <p className="text-sm text-gray-500">Best for: Defined automation goals</p>
              </div>
              
              <div className="card text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Retainer</h3>
                <p className="text-gray-600 mb-4">
                  Ongoing support and optimization with predictable monthly investment.
                </p>
                <p className="text-sm text-gray-500">Best for: Continuous improvement</p>
              </div>
              
              <div className="card text-left">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Custom</h3>
                <p className="text-gray-600 mb-4">
                  Tailored packages combining implementation, training, and managed services.
                </p>
                <p className="text-sm text-gray-500">Best for: Enterprise transformations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAEndcap
        title="Let's build your Agentic AI solution"
        subtitle="Schedule a consultation to discuss your contact center automation needs."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'Explore use cases', href: '/use-cases' }}
      />

      {/* JSON-LD Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Salesforce Agentic AI Solutions',
            provider: {
              '@type': 'Organization',
              name: 'Consaience',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Salesforce AI Services',
              itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}

