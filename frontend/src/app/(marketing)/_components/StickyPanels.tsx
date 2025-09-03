"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";

export type StickyPanelContent = { title: string; body: string; icon: string };

export function StickyPanels({ panels }: { panels: StickyPanelContent[] }) {
  return (
    <div className="relative">{
      panels.map((panel, i) => (
        <StickyPanel key={i} panel={panel} index={i} />
      ))
    }</div>
  );
}

function StickyPanel({ panel, index }: { panel: StickyPanelContent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const reduce = useReducedMotionPref();
  const opacity = useTransform(progress, [0, 0.2], [0, 1]);
  const x = useTransform(progress, [0, 1], ["0%", "-10%"]);
  const drift = useTransform(progress, [0, 1], ["0%", "10%"]);

  const [active, setActive] = useState(false);
  useEffect(() => {
    return progress.on("change", (v) => setActive(v > 0.5));
  }, [progress]);

  let visual: JSX.Element | null = null;
  if (index === 0) {
    visual = (
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="mx-auto"
        style={reduce ? undefined : { opacity }}
        aria-hidden
      >
        <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M60 20 L60 0" stroke="currentColor" strokeWidth="4" />
      </motion.svg>
    );
  } else if (index === 1) {
    visual = (
      <motion.div
        className="mx-auto h-24 w-40 rounded-md bg-gray-200"
        style={reduce ? undefined : { x }}
        aria-hidden
      />
    );
  } else {
    visual = (
      <div className="flex justify-center gap-4" aria-hidden>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-12 w-12 rounded-full bg-gray-200"
            style={reduce ? undefined : { y: drift }}
          />
        ))}
      </div>
    );
  }

  return (
    <section
      ref={ref}
      data-panel={index}
      className="sticky top-0 flex h-screen items-center justify-center bg-white text-black"
      aria-live="polite"
      aria-label={active ? panel.title : undefined}
    >
      <div className="max-w-md p-8 text-center">
        <h2 className="mb-4 text-3xl font-semibold">{panel.title}</h2>
        <p className="mb-8 text-gray-600">{panel.body}</p>
        {visual}
      </div>
    </section>
  );
}
