import type { Metadata } from 'next';
import Link from 'next/link';

const canonicalUrl = 'https://consaience.com/bio';

export const metadata: Metadata = {
  title: 'Team Bios | Consaience Partners',
  description:
    'Meet the leadership capabilities behind Consaience Partners. Detailed bios available on request for Salesforce Agentforce programmes.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Team Bios | Consaience Partners',
    description:
      'Overview of the agentic AI leadership pods at Consaience Partners. Full profiles shared under NDA.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Bios | Consaience Partners',
    description:
      'Leadership pods delivering Salesforce Agentforce automation. Request full biographies for evaluation.',
  },
};

const pods = [
  {
    title: 'Agentic Programme Leadership',
    summary:
      'Engagement leads with deep Salesforce Service Cloud and Agentforce backgrounds oversee discovery, roadmap definition, and executive communication.',
    highlights: [
      '15+ years combined experience delivering Salesforce transformation for regulated industries.',
      'Own stakeholder alignment, value tracking, and governance cadence.',
      'Serve as single point of accountability from scoping through optimisation.',
    ],
  },
  {
    title: 'AI & Knowledge Engineering',
    summary:
      'Architects configure Agentforce, Einstein AI, and Knowledge Article ingestion so virtual agents understand enquiries and surface the right answers.',
    highlights: [
      'Design and fine-tune intents, guardrails, and escalation logic inside Salesforce.',
      'Structure Knowledge Articles and CRM data for searchability and compliance.',
      'Continuously monitor accuracy and incorporate agent feedback into models.',
    ],
  },
  {
    title: 'Change & Enablement',
    summary:
      'Change practitioners ensure adoption across service, operations, and IT teams so automation becomes part of the day-to-day workflow.',
    highlights: [
      'Build enablement plans, run pilot training, and capture qualitative feedback.',
      'Measure KPIs such as deflection, CSAT, and handle time to prove value.',
      'Coordinate rollouts across regions while maintaining governance requirements.',
    ],
  },
];

export default function BioPage() {
  return (
    <section className="section bg-white pt-32 md:pt-40">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 px-4">
          <p className="eyebrow">Our Team</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leadership pods ready to run your agentic programme
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Detailed biographies are available under NDA. The outline below shows the pods involved in every engagement and how they align to your Salesforce transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pods.map((pod) => (
            <article key={pod.title} className="card bg-white flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{pod.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{pod.summary}</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {pod.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 px-4">
          <p className="text-gray-600 mb-4">
            Need full CVs, security clearances, or references? Contact us and we&apos;ll provide the documentation your diligence process requires.
          </p>
          <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
            Request full bios
          </Link>
        </div>
      </div>
    </section>
  );
}
