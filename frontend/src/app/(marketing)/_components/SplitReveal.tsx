'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { BackgroundElements } from './BackgroundElements';
import { FloatingElements } from './FloatingElements';

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
    <section ref={containerRef} className="section bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Elements */}
      <BackgroundElements variant="section" intensity="subtle" />
      <FloatingElements count={10} intensity="subtle" size="small" />
      
      <div className="container relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 1 : textOpacity,
              y: shouldReduceMotion ? 0 : textY,
            }}
            className={`space-y-4 lg:space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
          >
            {children}
          </motion.div>

          {/* Media */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : mediaY }}
            className={`hidden lg:block ${reverse ? 'lg:col-start-1' : ''}`}
          >
            {media || (
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-md">
                <div className="text-center p-6 lg:p-8">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    Customer Service Automation
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">AI-powered service at scale</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}