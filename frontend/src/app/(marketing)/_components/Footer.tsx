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
              <span className="font-semibold text-lg">Consaience Partners</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Plug-and-play adtech that helps sales teams target the right customer groups.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/product#pricing" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product#integrations" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/enterprise" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/solutions/mid-market" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Mid-Market
                </Link>
              </li>
              <li>
                <Link href="/solutions/startups" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Startups
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Contact
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
            © {new Date().getFullYear()} Consaience Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}