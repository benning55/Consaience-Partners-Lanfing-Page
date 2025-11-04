import type { Metadata } from 'next';
import Link from 'next/link';

const canonicalUrl = 'https://consaience.com/bio';

export const metadata: Metadata = {
  title: 'Team Bios | Consaience Partners',
  description:
    'Team biographies for Consaience Partners will be published soon. Contact us to learn more about the consultants behind our Salesforce Agentforce work.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Team Bios | Consaience Partners',
    description:
      'Team biographies for Consaience Partners are in progress. Reach out for details about our Salesforce Agentforce specialists.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Bios | Consaience Partners',
    description:
      'Team biographies are coming soon. Contact Consaience Partners for information about our Salesforce Agentforce specialists.',
  },
};

export default function BioPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl text-center">
        <p className="eyebrow">Bio</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Team biographies coming soon
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We&apos;re preparing detailed biographies for the Salesforce Agentforce consultants who lead Consaience
          Partners engagements. If you need team information for procurement, security reviews, or stakeholder briefings,
          reach out and we&apos;ll share the latest roster directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
          <Link href="/about" className="btn btn-secondary">
            Learn about Consaience Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
