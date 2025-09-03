'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { useAdtech } from '@/lib/adtech';

interface ParallaxHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLogos?: { alt: string }[];
}

export function ParallaxHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustLogos = [],
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const shouldReduceMotion = useReducedMotionPref();
  const { trackEvent } = useAdtech();

  // Parallax transforms
  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -60]
  );
  
  const subtitleY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -40]
  );
  
  const ctaY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -20]
  );
  
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 20]
  );

  const handleCtaClick = (cta: { label: string; href: string }, location: string) => {
    trackEvent('cta_click', { 
      location,
      cta_label: cta.label,
      cta_href: cta.href 
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
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
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          style={{ y: titleY }}
          className="max-w-4xl mx-auto"
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              {eyebrow}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          style={{ y: ctaY }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {primaryCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href={primaryCta.href}
                onClick={() => handleCtaClick(primaryCta, 'hero_primary')}
                className="btn btn-primary text-lg px-8 py-4"
              >
                {primaryCta.label}
              </Link>
            </motion.div>
          )}
          
          {secondaryCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href={secondaryCta.href}
                onClick={() => handleCtaClick(secondaryCta, 'hero_secondary')}
                className="btn btn-secondary text-lg px-8 py-4"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Trust Logos */}
        {trustLogos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-gray-200 pt-8"
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center"
                >
                  <span className="text-xs text-gray-500">{logo.alt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}