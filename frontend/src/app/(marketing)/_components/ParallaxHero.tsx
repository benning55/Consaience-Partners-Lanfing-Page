"use client";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useReducedMotionPref } from "./hooks/useReducedMotionPref";

export type ParallaxHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLogos?: { alt: string }[];
};

/**
 * Hero with subtle scroll-linked parallax.
 */
export function ParallaxHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustLogos = [],
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const reduce = useReducedMotionPref();

  const titleY = useTransform(progress, [0, 1], ["0vh", "-6vh"]);
  const subY = useTransform(progress, [0, 1], ["0vh", "-3vh"]);
  const bgY = useTransform(progress, [0, 1], ["0%", "10%"]); // counter-scroll

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-black text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_8px)]"
        style={reduce ? undefined : { y: bgY }}
      />
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 text-center">
        {eyebrow && <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">{eyebrow}</p>}
        <motion.h1
          style={reduce ? undefined : { y: titleY }}
          className="text-5xl font-bold"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            style={reduce ? undefined : { y: subY }}
            className="mt-6 max-w-xl text-gray-300"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-8 flex gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="rounded bg-white px-6 py-3 text-black"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded border border-white px-6 py-3"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
        {trustLogos.length > 0 && (
          <ul className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-70">
            {trustLogos.map((logo, i) => (
              <li key={i} className="h-8 w-24 bg-gray-700" aria-label={logo.alt} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
