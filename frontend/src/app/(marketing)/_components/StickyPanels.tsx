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
    <section ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white relative overflow-hidden">
        <BackgroundElements variant="section" intensity="subtle" />
        <AnimatedLines variant="grid" intensity="subtle" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  {title ?? 'How we operationalize agentic AI'}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {description ??
                    'Launch Salesforce-native automation in weeks with a repeatable playbook that connects data, knowledge, and service workflows.'}
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                  const isActive = index === activeStep;

                  return (
                    <motion.div
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive ? 'bg-gray-50 border border-gray-200' : 'hover:bg-gray-50'
                      }`}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isActive ? 'bg-black' : 'bg-gray-200'
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                            isActive ? 'text-black' : 'text-gray-700'
                          }`}
                        >
                          {step.step}
                        </h3>
                        <p
                          className={`leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-gray-800' : 'text-gray-600'
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

            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center"
                animate={{
                  scale: shouldReduceMotion ? 1 : [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{activeStep + 1}</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300vh]" />

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Currently viewing step {activeStep + 1}: {steps[activeStep]?.step}
      </div>
    </section>
  );
}
