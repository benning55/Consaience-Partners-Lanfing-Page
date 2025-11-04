import Link from 'next/link';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products-services', label: 'Product & Services' },
  { href: '/use-cases', label: 'Industrial Use Cases' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/bio', label: 'Bio' },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-lg">Consaience Partners</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Agentic AI solutions built on Salesforce to automate customer inquiries, reduce manual
              workload, and scale support operations without sacrificing trust.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">
                Salesforce Agentforce implementation
              </li>
              <li className="text-gray-600">
                AI enquiry automation orchestration
              </li>
              <li className="text-gray-600">
                Knowledge and CRM intelligence integration
              </li>
              <li className="text-gray-600">
                Advisory, enablement, and ongoing optimization
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">
                Use the contact form to share your enquiry and the team will follow up directly.
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Go to contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/security"
              className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
            >
              Security
            </Link>
            <Link
              href="/status"
              className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
            >
              Status
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Consaience Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
