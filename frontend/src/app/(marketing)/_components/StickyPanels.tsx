'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionPref } from '@/lib/motion';
import { Download, Sliders, Send } from 'lucide-react';
import { BackgroundElements } from './BackgroundElements';
import { AnimatedLines } from './AnimatedLines';

interface Step {
  step: string;
  body: string;
  icon: string;
}

interface StickyPanelsProps {
  steps: Step[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const iconMap = {
  download: Download,
  sliders: Sliders,
  send: Send,
};

export function StickyPanels({
  steps,
  eyebrow,
  title,
  description,
}: StickyPanelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotionPref();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stepIndex = Math.floor(latest * steps.length);
      const clampedIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);
      setActiveStep(clampedIndex);
    });

    return unsubscribe;
  }, [scrollYProgress, steps.length]);

  return (
    <section ref={containerRef} className="relative border-t border-gray-100">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20">
        <BackgroundElements variant="section" intensity="subtle" />
        <AnimatedLines variant="grid" intensity="subtle" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div>
                {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-gray-900">
                  {title ?? 'How we operationalize agentic AI'}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {description ??
                    'Launch Salesforce-native automation in weeks with a repeatable playbook that connects data, knowledge, and service workflows.'}
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                  const isActive = index === activeStep;

                  return (
                    <motion.div
                      key={index}
                      className={`flex items-start space-x-3 md:space-x-4 p-4 md:p-6 rounded-xl transition-all duration-300 border ${
                        isActive ? 'bg-gray-50 border-gray-300 shadow-md' : 'bg-white border-gray-200 hover:bg-gray-50'
                      }`}
                      animate={{
                        opacity: isActive ? 1 : 0.85,
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                          isActive ? 'bg-black' : 'bg-gray-100'
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : 'text-gray-600'}`}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold text-base md:text-lg mb-2 transition-colors duration-300 ${
                            isActive ? 'text-black' : 'text-gray-800'
                          }`}
                        >
                          {step.step}
                        </h3>
                        <p
                          className={`leading-relaxed transition-colors duration-300 text-sm md:text-base ${
                            isActive ? 'text-gray-700' : 'text-gray-600'
                          }`}
                        >
                          {step.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm"
                animate={{
                  scale: shouldReduceMotion ? 1 : [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center p-6 lg:p-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    Salesforce Agentforce
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Powered by enterprise AI
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]" />

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Currently viewing step {activeStep + 1}: {steps[activeStep]?.step}
      </div>
    </section>
  );
}
