"use client";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";

export type SplitItem = { title: string; body: string; media: string };

export function SplitReveal({ items }: { items: SplitItem[] }) {
  return (
    <div className="mx-auto max-w-5xl space-y-32 py-24">
      {items.map((item, i) => (
        <SplitRow key={i} item={item} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}

function SplitRow({ item, reverse }: { item: SplitItem; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const reduce = useReducedMotionPref();
  const textY = useTransform(progress, [0, 1], [20, 0]);
  const textOpacity = useTransform(progress, [0, 0.2], [0, 1]);
  const imageY = useTransform(progress, [0, 1], ["0%", "-40%"]); // slower parallax

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-12 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.body}</p>
      </motion.div>
      <motion.div
        aria-hidden
        className="h-48 w-full rounded bg-gray-200"
        style={reduce ? undefined : { y: imageY }}
      />
    </div>
  );
}
