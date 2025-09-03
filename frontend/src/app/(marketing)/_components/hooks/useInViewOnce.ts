"use client";
import { RefObject, useEffect, useState } from "react";

/** Observe element visibility once. */
export function useInViewOnce(ref: RefObject<Element>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, inView]);

  return inView;
}
