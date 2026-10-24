"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Locale } from "@/config/site";

interface CountUpProps {
  target: number;
  locale: Locale;
}

function formatNumber(n: number, locale: Locale): string {
  if (locale === "fr") {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  }
  return n.toLocaleString("en-US");
}

export function CountUp({ target, locale }: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState<number>(target);
  const hasAnimatedRef = useRef(false);
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || hasAnimatedRef.current) {
      setValue(target);
      return;
    }

    const node = elRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const startValue = Math.floor(target * 0.4);

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(
              startValue + (target - startValue) * eased
            );
            setValue(current);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, prefersReducedMotion]);

  return <span ref={elRef}>{formatNumber(value, locale)}</span>;
}
