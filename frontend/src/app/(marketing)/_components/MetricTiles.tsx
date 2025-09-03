"use client";
import { motion } from "framer-motion";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";

export type Metric = { label: string; value: string; caption: string };

export function MetricTiles({ metrics }: { metrics: Metric[] }) {
  const reduce = useReducedMotionPref();
  return (
    <div className="mx-auto grid max-w-5xl gap-8 py-24 sm:grid-cols-3">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          className="rounded bg-gray-100 p-8 text-center"
          initial={{ y: 8, scale: 0.98, opacity: 0 }}
          whileInView={reduce ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <div className="text-3xl font-bold">{m.value}</div>
          <div className="mt-2 text-sm uppercase text-gray-500">{m.label}</div>
          <p className="mt-2 text-gray-600">{m.caption}</p>
        </motion.div>
      ))}
    </div>
  );
}
