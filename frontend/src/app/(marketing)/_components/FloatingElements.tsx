'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface FloatingElementsProps {
  count?: number;
  intensity?: 'subtle' | 'medium' | 'strong';
  size?: 'small' | 'medium' | 'large';
}

export function FloatingElements({ 
  count = 6, 
  intensity = 'subtle', 
  size = 'small' 
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotionPref();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Size variants
  const sizeVariants = {
    small: { width: '4px', height: '4px' },
    medium: { width: '6px', height: '6px' },
    large: { width: '8px', height: '8px' },
  };

  // Intensity variants for motion
  const intensityVariants = {
    subtle: { y: 30, opacity: 0.2, scale: 0.05 },
    medium: { y: 50, opacity: 0.3, scale: 0.08 },
    strong: { y: 80, opacity: 0.4, scale: 0.12 },
  };

  const motionConfig = intensityVariants[intensity];
  const sizeConfig = sizeVariants[size];

  // Create base transforms
  const baseY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, motionConfig.y]
  );

  const baseOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [motionConfig.opacity, motionConfig.opacity, motionConfig.opacity] : 
    [motionConfig.opacity * 0.3, motionConfig.opacity, motionConfig.opacity * 0.3]
  );

  const baseScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1 + motionConfig.scale]
  );

  const baseX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 20]
  );

  // Generate floating elements
  const elements = Array.from({ length: count }, (_, i) => {
    const delay = i * 0.1;
    const direction = i % 2 === 0 ? 1 : -1;
    
    // Random positioning
    const top = 10 + (i * 15) % 80; // Spread vertically
    const left = 5 + (i * 20) % 90; // Spread horizontally

    return (
      <motion.div
        key={i}
        style={{
          y: baseY,
          x: baseX,
          opacity: baseOpacity,
          scale: baseScale,
          top: `${top}%`,
          left: `${left}%`,
          width: sizeConfig.width,
          height: sizeConfig.height,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: motionConfig.opacity }}
        transition={{ 
          duration: shouldReduceMotion ? 0 : 0.8, 
          delay: shouldReduceMotion ? 0 : delay,
          ease: "easeOut"
        }}
        className="absolute rounded-full bg-current"
      />
    );
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {elements}
    </div>
  );
}