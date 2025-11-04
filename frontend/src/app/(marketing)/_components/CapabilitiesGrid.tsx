'use client';

import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { motionVariants } from '@/lib/motion';
import {
  Users,
  Shield,
  Workflow,
  Wand2,
  Zap,
  Puzzle,
} from 'lucide-react';
import { BackgroundElements } from './BackgroundElements';
import { FloatingElements } from './FloatingElements';

interface Capability {
  icon: string;
  title: string;
  body: string;
}

interface CapabilitiesGridProps {
  capabilities: Capability[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const iconMap = {
  users: Users,
  shield: Shield,
  workflow: Workflow,
  wand: Wand2,
  bolt: Zap,
  puzzle: Puzzle,
};

export function CapabilitiesGrid({
  capabilities,
  eyebrow,
  title,
  description,
}: CapabilitiesGridProps) {
  const shouldReduceMotion = useReducedMotionPref();

  return (
    <section className="section bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Elements */}
      <BackgroundElements variant="section" intensity="subtle" />
      <FloatingElements count={10} intensity="subtle" size="small" />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={shouldReduceMotion ? {} : motionVariants.staggerContainer}
          className="text-center mb-16"
        >
          {eyebrow && (
            <motion.p
              variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
              className="eyebrow mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
            className="section-title mb-6"
          >
            {title ?? 'Agentic building blocks for Salesforce service teams'}
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
            className="section-description"
          >
            {description ??
              'Orchestrate data, knowledge, and automations so customers receive immediate, accurate answers and agents stay focused on complex work.'}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-5% 0px' }}
          variants={shouldReduceMotion ? {} : motionVariants.staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const IconComponent = iconMap[capability.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                variants={shouldReduceMotion ? {} : motionVariants.staggerItem}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 group-hover:scale-105 transition-all duration-300 shadow-md">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">
                      {capability.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {capability.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
