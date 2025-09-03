'use client';

import { motion } from 'framer-motion';

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Product
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn more about our platform capabilities, features, and how it integrates 
              with your existing tools.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}