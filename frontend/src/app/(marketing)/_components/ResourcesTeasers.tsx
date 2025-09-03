'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { motionVariants } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

interface Resource {
  title: string;
  slug: string;
}

interface ResourcesTeasersProps {
  resources: Resource[];
}

export function ResourcesTeasers({ resources }: ResourcesTeasersProps) {
  const shouldReduceMotion = useReducedMotionPref();

  return (
    <section className="section bg-white">
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
            Resources to get you started
          </motion.h2>
          <motion.p
            variants={shouldReduceMotion ? {} : motionVariants.fadeInUp}
            className="section-description"
          >
            Learn best practices, implementation guides, and industry insights 
            to maximize your audience targeting success.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-5% 0px' }}
          variants={shouldReduceMotion ? {} : motionVariants.staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={shouldReduceMotion ? {} : motionVariants.staggerItem}
            >
              <Link
                href={`/resources/${resource.slug}`}
                className="block group"
              >
                <div className="card hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900 group-hover:text-black transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Read more →
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}