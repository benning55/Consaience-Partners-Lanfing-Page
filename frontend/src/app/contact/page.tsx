import type { Metadata } from 'next';
import Script from 'next/script';

import { ContactForm } from './ContactForm';

const canonicalUrl = 'https://consaience.com/contact';

export const metadata: Metadata = {
  title: 'Contact Consaience Partners | Salesforce Agentic AI Experts',
  description:
    'Talk with Consaience Partners about Salesforce Agentforce implementations, AI enquiry automation, and ongoing optimization.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Contact Consaience Partners | Salesforce Agentic AI Experts',
    description:
      'Share your customer service goals and Salesforce footprint so we can recommend the right Salesforce Agentforce approach.',
    url: canonicalUrl,
    siteName: 'Consaience Partners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Consaience Partners | Salesforce Agentic AI Experts',
    description:
      'Connect with the team that implements agentic AI on Salesforce to automate customer inquiries.',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: canonicalUrl,
  name: 'Consaience Partners Contact',
  description:
    'Reach Consaience Partners to discuss Salesforce Agentforce automation, enquiry orchestration, and knowledge integration.',
};

export default function ContactPage() {
  return (
    <>
      <Script
        id='contact-structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className='min-h-screen pt-16'>
        <ContactForm />
      </div>
    </>
  );
}
