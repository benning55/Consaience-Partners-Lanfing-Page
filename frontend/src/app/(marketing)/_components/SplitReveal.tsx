'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface SplitRevealProps {
  children: React.ReactNode;
  media?: React.ReactNode;
  reverse?: boolean;
}

export function SplitReveal({ children, media, reverse = false }: SplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotionPref();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -100]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [50, 0, 0, -50]
  );

  return (
    <section ref={containerRef} className="section bg-white">
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : textOpacity,
              y: shouldReduceMotion ? 0 : textY,
            }}
            className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
          >
            {children}
          </motion.div>

          {/* Media */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : mediaY }}
            className={`${reverse ? 'lg:col-start-1' : ''}`}
          >
            {media || (
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">C</span>
                  </div>
                  <p className="text-gray-600">Visual placeholder</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}