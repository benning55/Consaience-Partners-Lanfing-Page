'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Users } from 'lucide-react';

export function VisualUseCase() {
  return (
    <section className="section bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="eyebrow">Use Case Spotlight</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Enterprise contact center automation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From mid-market organizations modernizing service operations to global enterprises 
              scaling support infrastructure, manual case handling creates operational bottlenecks. 
              Salesforce Agentforce automation resolves routine inquiries instantly.
            </p>

            {/* Key capabilities with icons */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Intelligent Response Generation</h4>
                  <p className="text-sm text-gray-600">Processes and responds using Salesforce CRM data and enterprise Knowledge Articles</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Escalation</h4>
                  <p className="text-sm text-gray-600">Escalates complex cases to human agents with full context to maintain resolution speed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                  <p className="text-sm text-gray-600">Learns from resolved cases to expand automation coverage across all channels</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/use-cases" className="inline-flex items-center btn btn-primary group">
                View enterprise use cases
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Before/After Cards */}
            <div className="space-y-4">
              {/* Before Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-red-900">Before Automation</h3>
                  <div className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-xs font-bold">
                    Manual
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-800 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Response Time
                    </span>
                    <span className="text-lg font-bold text-red-900">15+ min</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="w-5/6 h-full bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-800 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Cases/Agent/Day
                    </span>
                    <span className="text-lg font-bold text-red-900">25-30</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="w-1/3 h-full bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-800 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Coverage
                    </span>
                    <span className="text-lg font-bold text-red-900">Business hrs</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="w-1/2 h-full bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-green-900">With Agentforce</h3>
                  <div className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-bold flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-1 animate-pulse"></div>
                    AI-Powered
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-800 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Response Time
                    </span>
                    <span className="text-lg font-bold text-green-900">&lt; 2 min</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '15%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-800 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Cases/Agent/Day
                    </span>
                    <span className="text-lg font-bold text-green-900">75-90</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-800 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Coverage
                    </span>
                    <span className="text-lg font-bold text-green-900">24/7</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI callout */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-300 mb-1">Typical ROI</div>
                  <div className="text-4xl font-bold">3-6 months</div>
                </div>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

