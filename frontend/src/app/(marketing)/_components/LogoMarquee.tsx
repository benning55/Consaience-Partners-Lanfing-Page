'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface LogoMarqueeProps {
  logos: { alt: string }[];
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotionPref();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -100]
  );

  return (
    <section ref={containerRef} className="section bg-white border-y border-gray-200">
      <div className="container">
        <motion.div
          style={{ x: shouldReduceMotion ? 0 : x }}
          className="flex items-center justify-center space-x-12 overflow-hidden"
        >
          {shouldReduceMotion ? (
            // Static grid for reduced motion
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 w-full">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="h-12 w-24 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-sm text-gray-500">{logo.alt}</span>
                </div>
              ))}
            </div>
          ) : (
            // Scrolling marquee for normal motion
            <>
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-12 w-24 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-sm text-gray-500">{logo.alt}</span>
                </div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}