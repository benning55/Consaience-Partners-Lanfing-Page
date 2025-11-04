'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export function VisualTestimonials() {
  const testimonials = [
    {
      quote: "Consaience Partners transformed our customer service operations. We're now handling 3x more inquiries with the same team size.",
      author: "Sarah Mitchell",
      role: "VP of Customer Success",
      company: "Enterprise SaaS Company",
      industry: "Technology",
      rating: 5,
      metric: "3x capacity increase",
      avatar: "SM",
    },
    {
      quote: "The Salesforce Agentforce implementation was seamless. We saw ROI within the first quarter and our CSAT scores actually improved.",
      author: "James Chen",
      role: "Director of Operations",
      company: "Fortune 500 Retailer",
      industry: "Retail",
      rating: 5,
      metric: "Positive ROI in Q1",
      avatar: "JC",
    },
    {
      quote: "What impressed us most was the enterprise-grade governance. We maintain full compliance while automating 50% of routine inquiries.",
      author: "Maria Rodriguez",
      role: "CTO",
      company: "Financial Services Firm",
      industry: "Financial Services",
      rating: 5,
      metric: "50% automation rate",
      avatar: "MR",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Client Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-6"
          >
            Trusted by enterprise teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            See how organizations across industries are achieving measurable results with our Salesforce Agentforce solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-gray-900" />
                </div>

                <div className="relative space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Metric badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-bold text-green-900">{testimonial.metric}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 truncate">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 truncate">{testimonial.role}</div>
                      <div className="text-xs text-gray-500 truncate">{testimonial.company} • {testimonial.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Enterprise Implementations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">$5M+</div>
              <div className="text-gray-300 text-sm">Cost Savings Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

