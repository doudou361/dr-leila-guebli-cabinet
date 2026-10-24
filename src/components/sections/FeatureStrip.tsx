"use client";

import { HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { SiteDictionary } from "@/content/fr";
import { Reveal } from "@/components/ui/Reveal";

interface FeatureStripProps {
  dict: SiteDictionary;
}

const ICONS = [Stethoscope, Sparkles, ShieldCheck, HeartHandshake] as const;

export function FeatureStrip({ dict }: FeatureStripProps) {
  return (
    <section aria-label="Engagements clés" className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <div className="rounded-[24px] bg-white border border-line p-5 sm:p-7 shadow-[0_8px_28px_-18px_rgba(176,52,77,0.14)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {dict.featureStrip.items.map((item, idx) => {
              const Icon = ICONS[idx] ?? Sparkles;
              return (
                <Reveal key={item.title} delayMs={idx * 70}>
                  <div className="flex items-start gap-3.5 text-start">
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-[12px] bg-blush-100 border border-line/80 flex items-center justify-center shrink-0 text-ink-950"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-sans text-[14px] font-semibold text-ink-950 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-[1.5] text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
