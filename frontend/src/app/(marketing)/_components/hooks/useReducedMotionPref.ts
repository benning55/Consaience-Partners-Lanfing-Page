"use client";
import { useReducedMotion } from "framer-motion";

/**
 * Respect prefers-reduced-motion and allow disabling motion via env flag.
 * Set NEXT_PUBLIC_DISABLE_MOTION=true to force-disable animations in dev.
 */
export function useReducedMotionPref(): boolean {
  const prefers = useReducedMotion();
  const flag = typeof process !== "undefined" && process.env.NEXT_PUBLIC_DISABLE_MOTION === "true";
  return prefers || flag;
}
