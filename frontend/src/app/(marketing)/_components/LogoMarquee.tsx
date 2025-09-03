"use client";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";

export type LogoMarqueeProps = { logos: { alt: string }[] };

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const reduce = useReducedMotionPref();
  const x = useTransform(progress, [0, 1], ["0%", "-20%"]);

  if (reduce) {
    return (
      <ul ref={ref} className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-24 sm:grid-cols-4">
        {logos.map((l, i) => (
          <li key={i} className="h-12 w-full bg-gray-200" aria-label={l.alt} />
        ))}
      </ul>
    );
  }

  return (
    <div ref={ref} className="overflow-hidden py-24">
      <motion.ul
        className="flex gap-16"
        style={{ x }}
      >
        {logos.map((l, i) => (
          <li key={i} className="h-12 w-32 bg-gray-200" aria-label={l.alt} />
        ))}
      </motion.ul>
    </div>
  );
}
