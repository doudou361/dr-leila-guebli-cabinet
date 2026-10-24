"use client";

import { ArrowRight } from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import {
  getTreatmentsByCategory,
  TreatmentItem,
} from "@/content/treatments";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { Reveal } from "@/components/ui/Reveal";

interface InjectablesSectionProps {
  locale: Locale;
  dict: SiteDictionary;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export function InjectablesSection({
  locale,
  dict,
  onSelectTreatment,
}: InjectablesSectionProps) {
  const injectables = getTreatmentsByCategory("injectables");

  return (
    <section id="injectables" className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-7 border-b border-line">
            <div className="text-start">
              <span className="eyebrow-label">{dict.injectables.eyebrow}</span>
              <h2 className="sr-only">{dict.injectables.title}</h2>
            </div>

            <a
              href="#peau"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-ink-950 hover:text-rose-600 transition-colors"
            >
              <span>{dict.injectables.viewAll}</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6">
          {injectables.map((item, idx) => (
            <Reveal key={item.slug} delayMs={idx * 70}>
              <TreatmentCard
                treatment={item}
                locale={locale}
                openDetailsLabel={dict.a11y.openTreatmentDetails}
                onSelect={onSelectTreatment}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
