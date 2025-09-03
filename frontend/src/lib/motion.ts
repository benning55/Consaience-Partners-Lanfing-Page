'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 */
export function useReducedMotionPref(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Check if motion should be disabled based on environment and user preference
 */
export function shouldDisableMotion(): boolean {
  const envDisabled = process.env.NEXT_PUBLIC_DISABLE_MOTION === 'true';
  const reducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return envDisabled || reducedMotion;
}

/**
 * Motion variants that respect reduced motion preferences
 */
export const motionVariants = {
  // Fade in from bottom
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },

  // Fade in from right
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },

  // Stagger children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Stagger item
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

/**
 * Default transition settings
 */
export const defaultTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
};

/**
 * Parallax transition settings
 */
export const parallaxTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};