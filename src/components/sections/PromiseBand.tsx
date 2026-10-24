"use client";

import {
  ArrowRight,
  FileText,
  Lock,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { SiteDictionary } from "@/content/fr";
import { Reveal } from "@/components/ui/Reveal";

interface PromiseBandProps {
  dict: SiteDictionary;
}

const PROMISE_ICONS = [Stethoscope, FileText, ShieldCheck, Lock] as const;

export function PromiseBand({ dict }: PromiseBandProps) {
  return (
    <section
      aria-label={dict.promise.title}
      className="py-14 lg:py-20 bg-blush-100 border-y border-line"
    >
      <div className="container-lumiere">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Eyebrow + Serif H3 + Black Pill CTA */}
          <div className="lg:col-span-5 text-start flex flex-col items-start">
            <Reveal>
              <span className="eyebrow-label">{dict.promise.eyebrow}</span>
            </Reveal>

            <Reveal delayMs={70}>
              <h2 className="heading-h3 mt-2.5 max-w-[24ch]">
                {dict.promise.title}
              </h2>
            </Reveal>

            <Reveal delayMs={140}>
              <a href="#faq" className="btn-pill btn-primary mt-6">
                <span>{dict.promise.cta}</span>
                <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {/* Right: 4 Centered Icon + Label Items */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {dict.promise.items.map((label, idx) => {
                const Icon = PROMISE_ICONS[idx] ?? ShieldCheck;
                return (
                  <Reveal key={label} delayMs={idx * 70}>
                    <div className="flex flex-col items-center text-center">
                      <span
                        aria-hidden="true"
                        className="w-12 h-12 rounded-full bg-blush-200/80 border border-blush-300/70 flex items-center justify-center text-rose-600"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                      <span className="mt-3 text-xs sm:text-[13px] font-semibold text-ink-950 leading-snug max-w-[14ch]">
                        {label}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
