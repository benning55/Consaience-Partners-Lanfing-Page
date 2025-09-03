'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface AnimatedLinesProps {
  variant?: 'horizontal' | 'vertical' | 'diagonal' | 'grid';
  intensity?: 'subtle' | 'medium' | 'strong';
}

export function AnimatedLines({ variant = 'horizontal', intensity = 'subtle' }: AnimatedLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotionPref();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Intensity variants
  const intensityVariants = {
    subtle: { opacity: 0.15, strokeWidth: 0.5, dashArray: '2,8' },
    medium: { opacity: 0.25, strokeWidth: 0.8, dashArray: '3,6' },
    strong: { opacity: 0.35, strokeWidth: 1, dashArray: '4,4' },
  };

  const config = intensityVariants[intensity];

  // Motion transforms
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -20]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    shouldReduceMotion ? [config.opacity, config.opacity, config.opacity, config.opacity] : 
    [config.opacity * 0.3, config.opacity, config.opacity, config.opacity * 0.3]
  );

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  const getSVGContent = () => {
    switch (variant) {
      case 'horizontal':
        return (
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="currentColor"
            strokeWidth={config.strokeWidth}
            strokeOpacity={config.opacity}
            strokeDasharray={config.dashArray}
            style={{ pathLength }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeInOut" }}
          />
        );

      case 'vertical':
        return (
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="currentColor"
            strokeWidth={config.strokeWidth}
            strokeOpacity={config.opacity}
            strokeDasharray={config.dashArray}
            style={{ pathLength }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeInOut" }}
          />
        );

      case 'diagonal':
        return (
          <>
            <motion.line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="currentColor"
              strokeWidth={config.strokeWidth}
              strokeOpacity={config.opacity}
              strokeDasharray={config.dashArray}
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeInOut" }}
            />
            <motion.line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="currentColor"
              strokeWidth={config.strokeWidth}
              strokeOpacity={config.opacity}
              strokeDasharray={config.dashArray}
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        );

      case 'grid':
        return (
          <>
            {/* Horizontal grid lines */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={`${20 + i * 20}%`}
                x2="100%"
                y2={`${20 + i * 20}%`}
                stroke="currentColor"
                strokeWidth={config.strokeWidth * 0.5}
                strokeOpacity={config.opacity * 0.8}
                strokeDasharray={config.dashArray}
                style={{ pathLength }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 1.5, 
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
            ))}
            {/* Vertical grid lines */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${20 + i * 20}%`}
                y1="0"
                x2={`${20 + i * 20}%`}
                y2="100%"
                stroke="currentColor"
                strokeWidth={config.strokeWidth * 0.5}
                strokeOpacity={config.opacity * 0.8}
                strokeDasharray={config.dashArray}
                style={{ pathLength }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 1.5, 
                  ease: "easeInOut",
                  delay: i * 0.1 + 0.5
                }}
              />
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {getSVGContent()}
      </svg>
    </motion.div>
  );
}