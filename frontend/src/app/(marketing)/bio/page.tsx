import type { Metadata } from 'next';
import Link from 'next/link';
import { ParallaxHero } from '../_components/ParallaxHero';
import { CTAEndcap } from '../_components/CTAEndcap';

export const metadata: Metadata = {
  title: 'Team - Consaience',
  description: 'Meet the experts behind Consaience. Our team specializes in Salesforce Agentforce implementation and AI-powered customer service automation.',
  openGraph: {
    title: 'Team - Consaience',
    description: 'Meet the experts behind Consaience Salesforce Agentforce solutions.',
    type: 'website',
  },
};

const teamMembers = [
  {
    name: 'Founder & CEO',
    role: 'Salesforce Solutions Architect',
    bio: 'With over 15 years of experience in CRM and AI implementation, our founder leads the vision to make Agentic AI accessible to organizations of all sizes. Previously worked with Fortune 500 companies on digital transformation initiatives.',
    credentials: [
      'Salesforce Certified Technical Architect',
      'AI/ML Specialist',
      'Former Enterprise Solutions Director',
    ],
    imageAlt: 'CEO Photo Placeholder',
  },
  {
    name: 'Head of Implementation',
    role: 'Agentforce Lead',
    bio: 'Specializes in rapid deployment of Salesforce Agentforce solutions for contact centers. Has successfully led over 50 AI automation projects across retail, finance, and healthcare sectors.',
    credentials: [
      'Salesforce Certified Service Cloud Consultant',
      'Einstein Analytics Specialist',
      '10+ years in customer service optimization',
    ],
    imageAlt: 'Head of Implementation Photo Placeholder',
  },
  {
    name: 'Chief Technology Officer',
    role: 'AI & Integration Expert',
    bio: 'Leads the technical architecture of our AI solutions, ensuring seamless integration with existing CRM systems. Expert in knowledge management and natural language processing.',
    credentials: [
      'MS in Computer Science (AI)',
      'Salesforce Platform Developer',
      'Published researcher in NLP',
    ],
    imageAlt: 'CTO Photo Placeholder',
  },
];

export default function BioPage() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero
        eyebrow="Our Team"
        title="Experts in Salesforce Agentic AI"
        subtitle="We combine deep Salesforce expertise with AI innovation to help enterprises transform customer service."
        primaryCta={{ label: 'Work with us', href: '/contact' }}
        secondaryCta={{ label: 'Learn more', href: '/about' }}
        trustLogos={[]}
      />

      {/* Team Introduction */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">Who We Are</h2>
            <p className="section-description">
              Our team brings together Salesforce implementation expertise, AI innovation, 
              and deep understanding of contact center operations. We've helped organizations 
              from SMEs to global enterprises transform their customer service with intelligent automation.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="space-y-16">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Column */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-3xl font-bold">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{member.imageAlt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bio Column */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="card">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">{member.role}</p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Credentials & Experience:</h4>
                        <ul className="space-y-2">
                          {member.credentials.map((credential, cIndex) => (
                            <li key={cIndex} className="flex items-start space-x-3">
                              <span className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                                <span className="text-xs text-gray-700">✓</span>
                              </span>
                              <span className="text-gray-700">{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Client-Centric</h3>
                <p className="text-gray-600">
                  We listen first, then design solutions that align with your specific business goals and constraints.
                </p>
              </div>
              
              <div className="card">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Proven Methods</h3>
                <p className="text-gray-600">
                  Our frameworks accelerate deployment while minimizing risk through battle-tested best practices.
                </p>
              </div>
              
              <div className="card">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Long-Term Partnership</h3>
                <p className="text-gray-600">
                  We're invested in your success beyond implementation, providing ongoing optimization and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Back to About */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to learn more about our company?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our mission, philosophy, and what makes us different.
            </p>
            <Link href="/about" className="btn btn-secondary text-lg px-8 py-4">
              Visit our About Us page
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAEndcap
        title="Ready to work with our team?"
        subtitle="Let's discuss how we can help transform your customer service with Salesforce Agentforce."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'View our services', href: '/products-services' }}
      />

      {/* JSON-LD Structured Data for Team/Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Consaience',
              description: 'Salesforce Agentic AI Solutions Team',
              url: 'https://saveboost-1e0a0.web.app/bio',
              employee: teamMembers.map((member) => ({
                '@type': 'Person',
                name: member.name,
                jobTitle: member.role,
                description: member.bio,
              })),
            },
          }),
        }}
      />
    </>
  );
}

