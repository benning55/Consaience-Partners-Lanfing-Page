import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

const canonicalUrl = 'https://consaience.com/about';

export const metadata: Metadata = {
  title: 'About Consaience Partners | Agentic AI on Salesforce',
  description:
    'Consaience Partners is a technology consulting firm specialising in Salesforce Agentic Solution Implementation for SMEs and enterprises.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'About Consaience Partners | Agentic AI on Salesforce',
    description:
      'We help organisations transform customer contact centres through Salesforce Agentforce, AI, and data-driven process design.',
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
    'Technology consulting firm specialising in Salesforce Agentic Solution Implementation and enquiry automation.',
};

const impactBullets = [
  'Automate enquiry responses using Salesforce Agentforce and Einstein AI.',
  'Reduce manual workloads while improving accuracy and response time.',
  'Enhance visibility across customer interactions and service operations.',
];

const differences = [
  'Salesforce implementation expertise tailored for SME and enterprise scale.',
  'Proven frameworks for rapid deployment and optimisation.',
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
          <p className="eyebrow">Slide 1 / Company Snapshot</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salesforce agentic solution specialists
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Consaience Partners implements Salesforce Agentforce so contact centres can resolve more enquiries with less human effort—and still deliver consistent, human-centred service.
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
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Slide 2 / Mission & Market Focus</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Enable organisations to handle more customer cases with less manual labour by integrating Salesforce Agentforce, AI, and data-driven process design.
              </p>
            </div>
            <div className="card bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who we serve</h2>
              <p className="text-gray-600 leading-relaxed">
                From SMEs modernising their first contact centre to global enterprises scaling operations, we deliver Salesforce-based agentic solutions that evolve with growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="card">
            <p className="eyebrow mb-6">Slide 3 / Outcome Highlights</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What our programmes deliver</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every engagement turns Salesforce CRM and Knowledge Articles into an agentic layer that understands enquiries instantly and surfaces the right response.
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
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Slide 4 / Principles & Vision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                AI should amplify people, not replace them. We combine human expertise, CRM intelligence, and automation so teams focus on high-value conversations while AI resolves repetitive enquiries.
              </p>
            </div>
            <div className="card bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Empower every organisation—from emerging businesses to large enterprises—with agentic AI solutions that make customer service efficient, intelligent, and human-centred.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="card">
            <p className="eyebrow mb-6">Slide 5 / Why We Win</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What sets Consaience Partners apart</h2>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base">
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

      <section className="section bg-gray-50">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Slide 6 / Partner with us</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bring agentic service automation to your Salesforce estate</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Share your current Salesforce landscape and the service KPIs you need to move. We will respond with a tailored roadmap, implementation milestones, and the change management plan required for adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
            <Link href="/products-services" className="btn btn-secondary">
              Review our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
