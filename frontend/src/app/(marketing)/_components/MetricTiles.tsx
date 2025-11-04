'use client';

import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { motionVariants } from '@/lib/motion';
import { BackgroundElements } from './BackgroundElements';
import { AnimatedLines } from './AnimatedLines';

interface Metric {
  label: string;
  value: string;
  caption: string;
}

interface MetricTilesProps {
  metrics: Metric[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function MetricTiles({
  metrics,
  eyebrow,
  title,
  description,
}: MetricTilesProps) {
  const shouldReduceMotion = useReducedMotionPref();

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden border-t border-gray-100">
      <BackgroundElements variant="section" intensity="subtle" />
      <AnimatedLines variant="horizontal" intensity="subtle" />

      <div className="container relative z-10">
        {(eyebrow || title || description) && (
          <div className="text-center mb-12">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-title mt-4">
              {title ?? 'Proven results'}
            </h2>
            <p className="section-description mt-4">
              {description ??
                'Our Salesforce Agentforce implementations deliver measurable impact across operations.'}
            </p>
          </div>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={shouldReduceMotion ? {} : motionVariants.staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={shouldReduceMotion ? {} : motionVariants.scaleIn}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.98, y: 8 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-black mb-4">
                  {metric.value}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">
                  {metric.label}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{metric.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
