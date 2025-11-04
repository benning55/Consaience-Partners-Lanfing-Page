'use client';

import { motion } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { TrendingUp, Users, Clock, CheckCircle2 } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  caption: string;
  change?: string;
  icon?: 'trending' | 'users' | 'clock' | 'check';
}

interface VisualMetricsProps {
  metrics: Metric[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const iconMap = {
  trending: TrendingUp,
  users: Users,
  clock: Clock,
  check: CheckCircle2,
};

export function VisualMetrics({
  metrics,
  eyebrow,
  title,
  description,
}: VisualMetricsProps) {
  const shouldReduceMotion = useReducedMotionPref();

  // Parse metric value to extract number and unit
  const parseMetric = (value: string) => {
    const match = value.match(/^(.*?)([0-9]+(?:\.[0-9]+)?)(.*?)$/);
    if (match) {
      return { prefix: match[1], number: match[2], suffix: match[3] };
    }
    return { prefix: '', number: value, suffix: '' };
  };

  return (
    <section className="section bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden border-t border-gray-100">
      <div className="container relative z-10">
        {(eyebrow || title || description) && (
          <div className="text-center mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h2 className="section-title mb-6">
              {title ?? 'Proven Results'}
            </h2>
            <p className="section-description">
              {description ??
                'Our Salesforce Agentforce implementations deliver measurable impact across operations.'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { ...metrics[0], icon: 'trending', change: '+127%' },
            { ...metrics[1], icon: 'check', change: '3x faster' },
            { label: 'CSAT Score', value: '4.8/5.0', caption: 'Customer satisfaction maintained', icon: 'users', change: '+0.3' },
            { label: 'Avg Response Time', value: '< 2min', caption: 'From 15+ minutes previously', icon: 'clock', change: '-87%' },
          ].map((metric, index) => {
            const { prefix, number, suffix } = parseMetric(metric.value);
            const IconComponent = metric.icon ? iconMap[metric.icon as keyof typeof iconMap] : null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="card hover:shadow-2xl transition-all duration-300 text-center overflow-hidden h-full">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon */}
                    {IconComponent && (
                      <div className="inline-flex w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    )}

                    {/* Value with animation */}
                    <div>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 mb-2"
                      >
                        {prefix}{number}{suffix}
                      </motion.div>

                      {/* Change indicator */}
                      {metric.change && (
                        <div className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                          <TrendingUp className="w-3 h-3" />
                          <span>{metric.change}</span>
                        </div>
                      )}
                    </div>

                    {/* Label */}
                    <h3 className="font-bold text-xl text-gray-900">
                      {metric.label}
                    </h3>

                    {/* Caption */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {metric.caption}
                    </p>

                    {/* Visual bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${75 + index * 5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual comparison chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Before vs After Automation Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Before</span>
                <span className="text-xs text-gray-500">Manual Process</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Case Volume Handled</span>
                    <span className="font-bold text-gray-900">100/day</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-bold text-gray-900">15 min</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="w-4/5 h-full bg-red-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Agent Efficiency</span>
                    <span className="font-bold text-gray-900">60%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="w-3/5 h-full bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">After</span>
                <span className="text-xs text-green-700 font-semibold">AI Automated</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Case Volume Handled</span>
                    <span className="font-bold text-green-700">300/day</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-bold text-green-700">&lt; 2 min</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '15%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-600">Agent Efficiency</span>
                    <span className="font-bold text-green-700">95%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

