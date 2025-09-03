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
  Puzzle 
} from 'lucide-react';

interface Capability {
  icon: string;
  title: string;
  body: string;
}

interface CapabilitiesGridProps {
  capabilities: Capability[];
}

const iconMap = {
  users: Users,
  shield: Shield,
  workflow: Workflow,
  wand: Wand2,
  bolt: Zap,
  puzzle: Puzzle,
};

export function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  const shouldReduceMotion = useReducedMotionPref();

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={shouldReduceMotion ? {} : motionVariants.staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
            className="section-title mb-6"
          >
            Everything you need to target the right accounts
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
            className="section-description"
          >
            Our platform brings together the tools and data you need to identify, 
            segment, and activate high-intent audiences across your entire go-to-market stack.
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
                className="card group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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