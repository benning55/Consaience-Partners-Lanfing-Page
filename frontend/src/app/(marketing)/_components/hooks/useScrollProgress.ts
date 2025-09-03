"use client";
import { RefObject } from "react";
import { useScroll, useTransform } from "framer-motion";

/** Clamp a number between 0 and 1 */
export const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

/**
 * Scroll progress hook returning a motion value between 0 and 1.
 * @param ref Element to observe
 */
export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
}
