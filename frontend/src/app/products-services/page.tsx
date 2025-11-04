import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import {
  Bot,
  Puzzle,
  Layers,
  GraduationCap,
  Repeat,
  ArrowRight,
} from 'lucide-react';

const canonicalUrl = 'https://consaience.com/products-services';

export const metadata: Metadata = {
  title: 'Products & Services | Consaience Partners',
  description:
    'Discover Consaience Partners offerings across Salesforce Agentforce implementation, AI enquiry automation, knowledge integration, advisory, and ongoing optimisation.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Products & Services | Consaience Partners',
    description:
      'Agentic AI services that connect Salesforce data, knowledge, and automation to resolve customer enquiries with confidence.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Services | Consaience Partners',
    description:
      'Salesforce Agentforce implementations, enquiry automation, knowledge integration, advisory, and continuous optimisation.',
  },
};

const offerings = [
  {
    title: 'Salesforce Agentic Solution Implementation',
    icon: Puzzle,
    summary:
      'We help organisations deploy Salesforce Agentforce to automate customer service and increase operational efficiency. Our implementations connect AI with your Salesforce CRM and Knowledge Articles, enabling intelligent agents to:',
    bullets: [
      'Understand customer enquiries in natural language.',
      'Retrieve accurate answers from your data.',
      'Resolve cases automatically or assist human agents in real time.',
    ],
    outcome:
      'Faster response times, reduced manual effort, and improved customer satisfaction.',
  },
  {
    title: 'AI-Driven Enquiry Automation',
    icon: Bot,
    summary:
      'We design AI workflows that allow Salesforce to answer routine enquiries instantly—freeing up your support team to focus on complex cases.',
    bullets: [
      'Automate repetitive enquiries via email, chat, or case forms.',
      'Maintain consistent, brand-aligned responses.',
      'Learn continuously from CRM feedback and case history.',
    ],
    outcome:
      'Handle more cases with less human labour while maintaining accuracy and tone of service.',
  },
  {
    title: 'Knowledge & CRM Intelligence Integration',
    icon: Layers,
    summary:
      'We transform your existing Knowledge Articles and CRM data into a single intelligent knowledge layer for AI-driven decision-making. This includes:',
    bullets: [
      'Structuring and indexing content for AI readability.',
      'Linking case data, product information, and policies for contextual answers.',
      'Creating unified data models that improve case routing and recommendations.',
    ],
    outcome:
      'A smarter, self-learning support system that grows with your organisation.',
  },
  {
    title: 'Advisory & Enablement Services',
    icon: GraduationCap,
    summary:
      'We offer tailored consulting for SMEs and enterprises ready to adopt agentic AI.',
    bullets: [
      'Readiness Assessment: Evaluate your current Salesforce setup and automation maturity.',
      'Implementation Roadmap: Define short-term wins and long-term vision.',
      'Training & Change Management: Equip teams to work effectively with AI-enabled workflows.',
    ],
    outcome:
      'A confident, scalable transformation roadmap backed by technical and business alignment.',
  },
  {
    title: 'Continuous Optimisation & Support',
    icon: Repeat,
    summary:
      'We provide post-implementation support to ensure your Salesforce Agentic Solution evolves with your business.',
    bullets: [
      'Monitor performance metrics and AI accuracy.',
      'Adjust workflows and knowledge sources.',
      'Implement new features as Salesforce releases enhancements.',
    ],
    outcome:
      'Sustained ROI and continuous improvement through agile iteration.',
  },
];

const serviceJsonLd = offerings.slice(0, 2).map((offering) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: offering.title,
  provider: {
    '@type': 'Organization',
    name: 'Consaience Partners',
  },
  url: canonicalUrl,
}));

export default function ProductsServicesPage() {
  return (
    <>
      {serviceJsonLd.map((schema, index) => (
        <Script
          key={schema.serviceType ?? `service-${index}`}
          id={`products-services-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Slide 1 / Service Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salesforce-native services for automated enquiry resolution
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every engagement uses Salesforce Agentforce, Einstein AI, and Knowledge Articles to automate repeat enquiries and support hybrid human + AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
            <Link href="/use-cases" className="btn btn-secondary">
              See customer outcomes
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Slide 2 / Offerings</p>
            <h2 className="section-title mb-4">How we build and sustain agentic service</h2>
            <p className="section-description">
              Five service pillars covering implementation, automation, knowledge readiness, organisational change, and continuous optimisation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div key={offering.title} className="card bg-white flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <offering.icon className="w-8 h-8 text-black" />
                  <h2 className="text-xl font-semibold text-gray-900">{offering.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{offering.summary}</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {offering.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Outcome</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{offering.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl card border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            <div className="flex-1">
              <p className="eyebrow mb-4">Slide 3 / Engagement Model</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Map your first agentic automation with us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Share your current Salesforce footprint, enquiry volumes, and service KPIs. We will respond with a tailored roadmap covering implementation milestones, required stakeholders, and the optimisation plan that keeps automation improving.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2 self-start">
              Start discovery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
