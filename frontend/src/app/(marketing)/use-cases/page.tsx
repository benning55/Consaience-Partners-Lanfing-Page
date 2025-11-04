import type { Metadata } from 'next';
import Link from 'next/link';
import { ParallaxHero } from '../_components/ParallaxHero';
import { CTAEndcap } from '../_components/CTAEndcap';
import { Headphones, ShoppingCart, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases - Consaience',
  description: 'See how Salesforce Agentforce transforms contact centers and retail customer service with AI automation. Real-world results from SMEs and enterprises.',
  openGraph: {
    title: 'Use Cases - Consaience',
    description: 'AI-powered contact center automation delivering 30-50% workload reduction and faster response times.',
    type: 'website',
  },
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        eyebrow="Use Cases"
        title="Real-world AI automation success stories"
        subtitle="See how organizations leverage Salesforce Agentforce to scale customer service without adding headcount."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'Our services', href: '/products-services' }}
        trustLogos={[]}
      />

      {/* Use Case 1: Contact Center Automation */}
      <section id="contact-center" className="section bg-white scroll-mt-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  AI-Powered Contact Center Automation
                </h2>
                <p className="text-gray-600">
                  Enterprise & SME customer support transformation
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Challenge</h3>
              </div>
              <div className="card bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you're an <strong>SME</strong> scaling your first customer support team or 
                  a <strong>global enterprise</strong> managing thousands of daily inquiries, manual case 
                  handling slows down operations and increases costs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Agents spend valuable time answering repetitive questions instead of solving complex issues, 
                  leading to slower response times and higher operational expenses.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
              </div>
              <div className="card">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implemented <strong>Salesforce Agentforce</strong> to create an <strong>AI-powered 
                  contact center</strong> that integrates directly with your CRM data and Knowledge Articles.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">The system:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <span className="text-gray-700">Understands and responds to customer inquiries automatically</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <span className="text-gray-700">Retrieves accurate, context-aware answers from internal data</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <span className="text-gray-700">Routes complex cases to human agents with full case history</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-black text-white">
                  <div className="text-4xl font-bold mb-2">30-50%</div>
                  <p className="text-gray-300">Reduction in manual workload</p>
                </div>
                <div className="card bg-gray-900 text-white">
                  <div className="text-4xl font-bold mb-2">Instant</div>
                  <p className="text-gray-300">Faster response times</p>
                </div>
                <div className="card bg-gray-800 text-white">
                  <div className="text-4xl font-bold mb-2">Lower</div>
                  <p className="text-gray-300">Operating costs with scalable automation</p>
                </div>
                <div className="card bg-gray-700 text-white">
                  <div className="text-4xl font-bold mb-2">Consistent</div>
                  <p className="text-gray-300">Customer experience across all channels</p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="card bg-gray-50 border-2 border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Why It Works</h4>
              <p className="text-gray-700 leading-relaxed">
                Built on <strong>Salesforce Service Cloud and Agentforce</strong>, the solution leverages 
                what your business already has—your data, processes, and knowledge—to deliver immediate, 
                trusted automation for both <strong>SMEs</strong> and <strong>large enterprises</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case 2: Retail & eCommerce */}
      <section id="retail" className="section bg-gray-50 scroll-mt-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Retail & eCommerce: Automated Customer Enquiry Resolution
                </h2>
                <p className="text-gray-600">
                  D2C brands to global retail chains
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Challenge</h3>
              </div>
              <div className="card bg-white">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Retailers and online sellers, from growing D2C brands to global chains, manage thousands 
                  of daily inquiries on order tracking, returns, and promotions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Traditional customer service models can't scale without adding headcount, leading to longer 
                  wait times and inconsistent service quality during peak seasons.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
              </div>
              <div className="card bg-white">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Using <strong>Salesforce Agentforce</strong>, we implemented an <strong>AI-driven customer 
                  support assistant</strong> connected to CRM order data and product information.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">The system:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <span className="text-gray-700">Instantly answers "Where is my order?" or "How do I return this item?" questions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <span className="text-gray-700">Escalates delivery or payment exceptions to agents with context summaries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <span className="text-gray-700">Continuously learns from resolved cases to improve accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-black text-white">
                  <div className="text-4xl font-bold mb-2">Up to 50%</div>
                  <p className="text-gray-300">Inquiries auto-resolved without human intervention</p>
                </div>
                <div className="card bg-gray-900 text-white">
                  <div className="text-4xl font-bold mb-2">Higher</div>
                  <p className="text-gray-300">Customer satisfaction with faster responses</p>
                </div>
                <div className="card bg-gray-800 text-white">
                  <div className="text-4xl font-bold mb-2">Reduced</div>
                  <p className="text-gray-300">Contact center costs with scalable automation</p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="card bg-white border-2 border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Why It Works</h4>
              <p className="text-gray-700 leading-relaxed">
                Built entirely on <strong>Salesforce Service Cloud</strong>, this solution leverages your 
                existing eCommerce CRM and knowledge data—delivering enterprise-grade automation accessible 
                even to <strong>SMEs</strong> ready to modernize customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Your Use Case */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Your Industry, Your Use Case</h2>
            <p className="section-description mb-8">
              These are just two examples. Whether you're in healthcare, financial services, SaaS, 
              or manufacturing, we can design a Salesforce Agentforce solution tailored to your needs.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Discuss your use case
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAEndcap
        title="See how AI automation can transform your operations"
        subtitle="Schedule a demo to explore how Salesforce Agentforce applies to your business."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'Our services', href: '/products-services' }}
      />
    </>
  );
}

