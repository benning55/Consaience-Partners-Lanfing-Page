import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Headset, ShoppingBag, ArrowRight } from 'lucide-react';

const canonicalUrl = 'https://consaience.com/use-cases';

export const metadata: Metadata = {
  title: 'Industrial Use Cases | Consaience Partners',
  description:
    'See how Consaience Partners applies Salesforce Agentforce across contact centres and retail to automate customer enquiries.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Industrial Use Cases | Consaience Partners',
    description:
      'Proven Salesforce agentic AI scenarios with clear problems, solutions, and outcomes.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Use Cases | Consaience Partners',
    description:
      'Discover how agentic AI transforms contact centres and retail operations.',
  },
};

const useCases = [
  {
    industry: 'AI-Powered Contact Centre Automation',
    icon: Headset,
    problem:
      "Whether you're an SME scaling your first customer support team or a global enterprise managing thousands of daily enquiries, manual case handling slows down operations and increases costs.",
    solution:
      'We implemented Salesforce Agentforce to create an AI-powered contact centre that integrates directly with your CRM data and Knowledge Articles.',
    bullets: [
      'Understands and responds to customer enquiries automatically.',
      'Retrieves accurate, context-aware answers from internal data.',
      'Routes complex cases to human agents with full case history.',
    ],
    outcomes: [
      '30-50% reduction in manual workload.',
      'Faster response times and improved first-contact resolution.',
      'Lower operating costs with scalable automation.',
      'Consistent customer experience across chat, email, and web channels.',
    ],
    whyItWorks:
      'Built on Salesforce Service Cloud and Agentforce, the solution leverages what your business already has - your data, processes, and knowledge - to deliver immediate, trusted automation for both SMEs and large enterprises.',
  },
  {
    industry: 'Retail & eCommerce - Automated Customer Enquiry Resolution',
    icon: ShoppingBag,
    problem:
      "Retailers and online sellers, from growing D2C brands to global chains, manage thousands of daily enquiries on order tracking, returns, and promotions. Traditional customer service models can't scale without adding headcount.",
    solution:
      'Using Salesforce Agentforce, we implemented an AI-driven customer support assistant connected to CRM order data and product information.',
    bullets: [
      'Instantly answers "Where is my order?" or "How do I return this item?" questions.',
      'Escalates delivery or payment exceptions to agents with context summaries.',
      'Continuously learns from resolved cases to improve accuracy.',
    ],
    outcomes: [
      'Up to 50% of enquiries auto-resolved without human intervention.',
      'Faster response times and higher customer satisfaction.',
      'Reduced contact centre costs with scalable automation.',
    ],
    whyItWorks:
      'Built entirely on Salesforce Service Cloud, this solution leverages your existing eCommerce CRM and knowledge data - delivering enterprise-grade automation accessible even to SMEs ready to modernise customer service.',
  },
];

const useCasesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Consaience Partners Industrial Use Cases',
  itemListElement: useCases.map((useCase, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: useCase.industry,
    description: useCase.solution,
    url: `${canonicalUrl}#${useCase.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  })),
};

export default function UseCasesPage() {
  return (
    <>
      <Script
        id="use-cases-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(useCasesJsonLd) }}
      />

      <section className="section bg-white pt-32 md:pt-40">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow">Real-World Applications</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
            Agentic AI in action across contact centres and retail
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4 max-w-3xl mx-auto">
            Each scenario starts with the same story: high enquiry volume, limited headcount, and inconsistent answers. Salesforce Agentforce lets us deliver automation grounded in your own CRM and knowledge assets.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.industry}
              id={useCase.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="card bg-white flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <useCase.icon className="w-8 h-8 md:w-10 md:h-10 text-black flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  {useCase.industry}
                </h2>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold uppercase text-gray-500">Problem</p>
                <p className="text-gray-600 leading-relaxed mt-2">{useCase.problem}</p>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase text-gray-500">Solution</p>
                <p className="text-gray-600 leading-relaxed mt-2">{useCase.solution}</p>
                <ul className="space-y-3 text-sm text-gray-600 mt-3">
                  {useCase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold uppercase text-gray-500">Impact</p>
                <ul className="space-y-2 text-sm text-gray-600 mt-2">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-1 block w-2 h-2 bg-black rounded-full" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold uppercase text-gray-500">Why it works</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{useCase.whyItWorks}</p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700 transition-colors duration-200"
              >
                Discuss this use case <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl card border-gray-200 text-center">
          <p className="eyebrow mb-4">Get Started</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
            Ready to scope an agentic AI pilot?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 px-4">
            Share your current enquiry mix, channels, and service KPIs. We will map the automation opportunity, the Agentforce components required, and how to measure impact within your first 90 days.
          </p>
          <div className="flex justify-center px-4">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
