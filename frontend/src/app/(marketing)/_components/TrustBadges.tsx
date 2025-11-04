'use client';

import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Zap } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Salesforce Certified',
      subtitle: 'Official Partner',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Award,
      title: 'ISO 27001',
      subtitle: 'Security Certified',
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: CheckCircle,
      title: 'SOC 2 Type II',
      subtitle: 'Compliance Ready',
      color: 'from-green-600 to-green-700',
    },
    {
      icon: Zap,
      title: 'Einstein AI',
      subtitle: 'Powered Solutions',
      color: 'from-orange-600 to-orange-700',
    },
  ];

  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Enterprise-Grade Trust & Security
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`w-12 h-12 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{badge.title}</div>
                  <div className="text-xs text-gray-600">{badge.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

