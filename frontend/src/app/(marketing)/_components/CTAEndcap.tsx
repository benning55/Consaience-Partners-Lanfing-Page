"use client";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";
import { trackEvent } from "./trackEvent";

export type CTAEndcapProps = {
  title: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function CTAEndcap({ title, primary, secondary }: CTAEndcapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const reduce = useReducedMotionPref();
  const bgY = useTransform(progress, [0, 1], ["0%", "-20%"]);

  const handleClick = (label: string) => () => trackEvent("cta_click", { label });

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-32 text-center text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"
        style={reduce ? undefined : { y: bgY }}
      />
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mt-8 flex justify-center gap-6">
        <Link
          href={primary.href}
          onClick={handleClick(primary.label)}
          className="rounded bg-white px-6 py-3 text-black"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          onClick={handleClick(secondary.label)}
          className="rounded border border-white px-6 py-3"
        >
          {secondary.label}
        </Link>
      </div>
    </section>
  );
}
