import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

const canonicalUrl = 'https://consaience.com/about';

export const metadata: Metadata = {
  title: 'About Consaience Partners | Agentic AI on Salesforce',
  description:
    'Consaience Partners is a technology consulting firm specializing in Salesforce Agentic Solution Implementation for SMEs and enterprises.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'About Consaience Partners | Agentic AI on Salesforce',
    description:
      'We help organizations transform customer contact centers through Salesforce Agentforce, AI, and data-driven process design.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Consaience Partners | Agentic AI on Salesforce',
    description:
      'Salesforce Agentforce specialists focused on automating enquiries and empowering service teams.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Consaience Partners',
  url: canonicalUrl,
  description:
    'Technology consulting firm specializing in Salesforce Agentic Solution Implementation and enquiry automation.',
};

const impactBullets = [
  'Automate enquiry responses using Salesforce Agentforce and Einstein AI.',
  'Reduce manual workloads while improving accuracy and response time.',
  'Enhance visibility across customer interactions and service operations.',
];

const differences = [
  'Salesforce implementation expertise tailored for SME and enterprise scale.',
  'Proven frameworks for rapid deployment and optimization.',
  'Data-driven methodology that balances technology and human experience.',
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salesforce agentic solution specialists
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a technology consulting firm specializing in Salesforce Agentic Solution Implementation—
            helping SMEs and enterprises transform their customer contact centers through intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/products-services" className="btn btn-primary">
              Explore services
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Talk with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who we are</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to enable organizations to handle more customer cases with less human effort by integrating
              Salesforce Agentforce, AI, and data-driven process design.
            </p>
          </div>
          <div className="card bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our clients</h2>
            <p className="text-gray-600 leading-relaxed">
              From fast-growing SMEs modernizing their first contact center to global enterprises seeking to scale customer operations,
              we deliver scalable Salesforce-based agentic solutions that evolve with business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What we do</h2>
            <p className="text-gray-600 leading-relaxed">
              We design and implement agentic AI systems that leverage Salesforce CRM and Knowledge Articles to understand and resolve enquiries instantly.
              Our solutions deliver measurable impact:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              {impactBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our philosophy</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe AI should amplify people, not replace them. Our approach combines human expertise, CRM intelligence,
              and automation to empower teams to focus on high-value conversations while AI handles repetitive enquiries.
            </p>
          </div>
          <div className="card bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower every organization—from emerging businesses to large enterprises—with agentic AI solutions that redefine customer service:
              efficient, intelligent, and human-centered.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our difference</h2>
            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
              {differences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
