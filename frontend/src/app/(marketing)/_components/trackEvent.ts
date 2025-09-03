"use client";

/** Simple analytics event mock. */
export function trackEvent(name: string, data: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("trackEvent", name, data);
  }
}
