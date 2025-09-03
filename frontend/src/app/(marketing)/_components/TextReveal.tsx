'use client';

import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotionPref();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ 
        duration, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.span>
  );
}

interface StaggeredTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export function StaggeredText({ 
  text, 
  className = "",
  staggerDelay = 0.05
}: StaggeredTextProps) {
  const shouldReduceMotion = useReducedMotionPref();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ 
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}