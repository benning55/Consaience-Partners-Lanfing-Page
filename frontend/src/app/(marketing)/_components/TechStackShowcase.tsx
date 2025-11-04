'use client';

import { motion } from 'framer-motion';
import { Database, Cloud, Shield, Zap, Brain, LayoutGrid } from 'lucide-react';

export function TechStackShowcase() {
  const technologies = [
    {
      name: 'Salesforce Service Cloud',
      icon: Cloud,
      description: 'Native CRM integration',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Salesforce Agentforce',
      icon: Brain,
      description: 'Agentic AI platform',
      color: 'from-purple-600 to-purple-700',
    },
    {
      name: 'Einstein AI',
      icon: Zap,
      description: 'Predictive intelligence',
      color: 'from-orange-600 to-orange-700',
    },
    {
      name: 'Knowledge Articles',
      icon: Database,
      description: 'Content grounding',
      color: 'from-green-600 to-green-700',
    },
    {
      name: 'Data Cloud',
      icon: LayoutGrid,
      description: 'Unified customer data',
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      name: 'Shield Encryption',
      icon: Shield,
      description: 'Enterprise security',
      color: 'from-red-600 to-red-700',
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden border-t border-gray-100">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Technology Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-6"
          >
            Built on enterprise-grade Salesforce infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Leveraging the full power of Salesforce&apos;s AI, data, and automation platforms for secure, scalable solutions
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="card hover:shadow-xl transition-all duration-300 text-center h-full">
                <div className="space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Seamless Integration Architecture
          </h3>
          
          <div className="relative">
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <Brain className="w-10 h-10 text-white mx-auto mb-2" />
                  <div className="text-xs font-bold text-white">Agentforce</div>
                  <div className="text-xs text-gray-300">AI Hub</div>
                </div>
              </motion.div>
            </div>

            {/* Connection lines */}
            <svg className="w-full h-80" viewBox="0 0 800 400">
              {/* Animated connection lines */}
              <motion.path
                d="M 400 200 L 200 100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M 400 200 L 600 100"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              <motion.path
                d="M 400 200 L 200 300"
                stroke="url(#gradient3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.path
                d="M 400 200 L 600 300"
                stroke="url(#gradient4)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />

              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#16a34a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Peripheral nodes */}
            <div className="absolute top-8 left-32 bg-blue-50 rounded-xl px-4 py-2 border border-blue-200 shadow-sm">
              <div className="text-xs font-semibold text-blue-900">Service Cloud</div>
            </div>
            <div className="absolute top-8 right-32 bg-purple-50 rounded-xl px-4 py-2 border border-purple-200 shadow-sm">
              <div className="text-xs font-semibold text-purple-900">Einstein AI</div>
            </div>
            <div className="absolute bottom-8 left-32 bg-orange-50 rounded-xl px-4 py-2 border border-orange-200 shadow-sm">
              <div className="text-xs font-semibold text-orange-900">Knowledge Base</div>
            </div>
            <div className="absolute bottom-8 right-32 bg-green-50 rounded-xl px-4 py-2 border border-green-200 shadow-sm">
              <div className="text-xs font-semibold text-green-900">Data Cloud</div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            All components run within your Salesforce org with full data governance and security
          </p>
        </motion.div>
      </div>
    </section>
  );
}

