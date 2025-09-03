'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { useAdtech } from '@/lib/adtech';

interface CTAEndcapProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function CTAEndcap({ title, subtitle, primaryCta, secondaryCta }: CTAEndcapProps) {
  const shouldReduceMotion = useReducedMotionPref();
  const { trackEvent } = useAdtech();

  const handleCtaClick = (cta: { label: string; href: string }, location: string) => {
    trackEvent('cta_click', { 
      location,
      cta_label: cta.label,
      cta_href: cta.href 
    });
  };

  return (
    <section className="relative section bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid-dark"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href={primaryCta.href}
              onClick={() => handleCtaClick(primaryCta, 'endcap_primary')}
              className="btn bg-white text-black hover:bg-gray-100 text-lg px-8 py-4"
            >
              {primaryCta.label}
            </Link>
            
            <Link
              href={secondaryCta.href}
              onClick={() => handleCtaClick(secondaryCta, 'endcap_secondary')}
              className="btn border border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}