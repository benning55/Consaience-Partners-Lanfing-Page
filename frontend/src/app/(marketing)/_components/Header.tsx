'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products-services', label: 'Product & Services' },
  { href: '/use-cases', label: 'Industrial Use Cases' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/bio', label: 'Bio' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotionPref();
  const pathname = usePathname();

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      variants={shouldReduceMotion ? {} : headerVariants}
      initial="hidden"
      animate="visible"
      style={{
        opacity: shouldReduceMotion ? 1 : headerOpacity,
        y: shouldReduceMotion ? 0 : headerY,
      }}
      className={`fixed top-6 left-4 right-4 z-40 transition-all duration-300 rounded-2xl ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg'
          : 'bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg">Consaience Partners</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black focus-visible:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
            >
              Talk to an expert
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="py-4 space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                      active
                        ? 'bg-gray-100 text-black'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-2 text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Talk to an expert
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a strategy call
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
