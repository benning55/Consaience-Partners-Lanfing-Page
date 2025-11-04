'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

export function ProductDashboard() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 md:mt-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative"
      >
        {/* Main Dashboard Card */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white font-semibold text-xs md:text-sm truncate">Salesforce Agentforce</div>
                <div className="text-gray-400 text-xs hidden sm:block">AI Automation Dashboard</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300">Live</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg md:rounded-xl p-3 md:p-4 border border-green-200"
              >
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
                  <span className="text-xs font-semibold text-green-700">+42%</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-green-900">847</div>
                <div className="text-xs text-green-700 truncate">Cases Auto-Resolved</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg md:rounded-xl p-3 md:p-4 border border-blue-200"
              >
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-700" />
                  <span className="text-xs font-semibold text-blue-700">3x</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-blue-900">98%</div>
                <div className="text-xs text-blue-700 truncate">Accuracy Rate</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg md:rounded-xl p-3 md:p-4 border border-purple-200"
              >
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-purple-700" />
                  <span className="text-xs font-semibold text-purple-700">-65%</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-purple-900">2.3m</div>
                <div className="text-xs text-purple-700 truncate">Response Time</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg md:rounded-xl p-3 md:p-4 border border-orange-200"
              >
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-700" />
                  <span className="text-xs font-semibold text-orange-700">Live</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-orange-900">24/7</div>
                <div className="text-xs text-orange-700 truncate">Uptime</div>
              </motion.div>
            </div>

            {/* Activity List */}
            <div className="space-y-2 md:space-y-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Activity</div>
              {[
                { status: 'resolved', text: 'Order status inquiry auto-resolved', time: '2m ago', customer: 'Enterprise Customer A' },
                { status: 'resolved', text: 'Product information request processed', time: '5m ago', customer: 'SMB Customer B' },
                { status: 'escalated', text: 'Complex billing issue escalated to agent', time: '8m ago', customer: 'Enterprise Customer C' },
              ].map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + idx * 0.1 }}
                  className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${activity.status === 'resolved' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-medium text-gray-900 truncate">{activity.text}</div>
                      <div className="text-xs text-gray-500 truncate hidden sm:block">{activity.customer}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap ml-2 flex-shrink-0">{activity.time}</div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 font-medium">Today&apos;s Automation Rate</span>
                <span className="text-gray-900 font-bold">48%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '48%' }}
                  transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute -left-2 md:-left-4 top-16 md:top-20 bg-white rounded-lg md:rounded-xl shadow-xl px-3 py-2 md:px-4 md:py-3 border border-gray-200 hidden xl:block"
        >
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-gray-900 truncate">Salesforce Native</div>
              <div className="text-xs text-gray-500 truncate">Certified Partner</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="absolute -right-2 md:-right-4 bottom-16 md:bottom-20 bg-white rounded-lg md:rounded-xl shadow-xl px-3 py-2 md:px-4 md:py-3 border border-gray-200 hidden xl:block"
        >
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-gray-900 truncate">Enterprise SOC 2</div>
              <div className="text-xs text-gray-500 truncate">Type II Certified</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

