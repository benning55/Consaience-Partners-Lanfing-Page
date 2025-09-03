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
}

export function MetricTiles({ metrics }: MetricTilesProps) {
  const shouldReduceMotion = useReducedMotionPref();

  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements variant="section" intensity="subtle" />
      <AnimatedLines variant="horizontal" intensity="subtle" />
      
      <div className="container relative z-10">
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
                className="card hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-black mb-2">
                  {metric.value}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600">
                  {metric.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}