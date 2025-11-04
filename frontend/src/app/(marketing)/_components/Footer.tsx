import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-lg">Consaience</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Salesforce Agentic AI solutions that help enterprises scale customer service without adding headcount.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products-services" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/use-cases#contact-center" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Contact Center Automation
                </Link>
              </li>
              <li>
                <Link href="/use-cases#retail" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Retail & eCommerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bio" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
              Security
            </Link>
            <Link href="/status" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
              Status
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Consaience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}