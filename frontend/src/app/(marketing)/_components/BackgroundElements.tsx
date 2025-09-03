'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface BackgroundElementsProps {
  variant?: 'hero' | 'section' | 'cta';
  intensity?: 'subtle' | 'medium' | 'strong';
}

export function BackgroundElements({ variant = 'section', intensity = 'subtle' }: BackgroundElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotionPref();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Different motion intensities
  const motionMultipliers = {
    subtle: { y: 20, opacity: 0.08, scale: 0.02 },
    medium: { y: 40, opacity: 0.12, scale: 0.04 },
    strong: { y: 60, opacity: 0.18, scale: 0.06 },
  };

  const multiplier = motionMultipliers[intensity];

  // Parallax transforms
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -multiplier.y]
  );
  
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, multiplier.y * 0.6]
  );
  
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -multiplier.y * 0.3]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [multiplier.opacity, multiplier.opacity, multiplier.opacity] : 
    [multiplier.opacity * 0.5, multiplier.opacity, multiplier.opacity * 0.5]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [multiplier.opacity * 0.7, multiplier.opacity * 0.7, multiplier.opacity * 0.7] : 
    [multiplier.opacity * 0.3, multiplier.opacity * 0.7, multiplier.opacity * 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1 + multiplier.scale]
  );

  // Different SVG patterns for different variants
  const getSVGPattern = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            {/* Abstract geometric shapes */}
            <motion.div
              style={{ y: y1, opacity: opacity1, scale }}
              className="absolute top-20 left-10 w-32 h-32"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,10 90,50 50,90 10,50"
                  fill="url(#grad1)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
              </svg>
            </motion.div>

            <motion.div
              style={{ y: y2, opacity: opacity2, scale }}
              className="absolute top-40 right-20 w-24 h-24"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  strokeDasharray="5,5"
                />
              </svg>
            </motion.div>

            <motion.div
              style={{ y: y3, opacity: opacity1, scale }}
              className="absolute bottom-32 left-1/4 w-20 h-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  transform="rotate(45 50 50)"
                />
              </svg>
            </motion.div>
          </>
        );

      case 'section':
        return (
          <>
            {/* Subtle grid lines */}
            <motion.div
              style={{ y: y1, opacity: opacity1 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeOpacity="0.08"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>

            {/* Floating dots */}
            <motion.div
              style={{ y: y2, opacity: opacity2 }}
              className="absolute top-1/4 right-1/4 w-2 h-2"
            >
              <div className="w-full h-full bg-current rounded-full opacity-40" />
            </motion.div>

            <motion.div
              style={{ y: y3, opacity: opacity1 }}
              className="absolute bottom-1/3 left-1/3 w-1 h-1"
            >
              <div className="w-full h-full bg-current rounded-full opacity-30" />
            </motion.div>
          </>
        );

      case 'cta':
        return (
          <>
            {/* Bold geometric elements for CTA */}
            <motion.div
              style={{ y: y1, opacity: opacity1, scale }}
              className="absolute top-10 right-10 w-40 h-40"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="url(#ctaGrad)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
              </svg>
            </motion.div>

            <motion.div
              style={{ y: y2, opacity: opacity2 }}
              className="absolute bottom-20 left-20 w-32 h-32"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  strokeDasharray="10,5"
                />
              </svg>
            </motion.div>

            {/* Subtle lines */}
            <motion.div
              style={{ y: y3, opacity: opacity1 }}
              className="absolute top-1/2 left-0 w-full h-px"
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
            </motion.div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ color: variant === 'cta' ? 'white' : 'currentColor' }}
    >
      {getSVGPattern()}
    </div>
  );
}