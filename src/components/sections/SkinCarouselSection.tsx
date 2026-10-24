"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import {
  getTreatmentsByCategory,
  TreatmentItem,
} from "@/content/treatments";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { Reveal } from "@/components/ui/Reveal";

interface SkinCarouselSectionProps {
  locale: Locale;
  dict: SiteDictionary;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export function SkinCarouselSection({
  locale,
  dict,
  onSelectTreatment,
}: SkinCarouselSectionProps) {
  const skinTreatments = getTreatmentsByCategory("skin");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByDirection = (dir: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const cardWidth = node.firstElementChild
      ? (node.firstElementChild as HTMLElement).offsetWidth + 24
      : 300;
    node.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="peau" className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-7 border-b border-line">
            <div className="text-start">
              <span className="eyebrow-label">{dict.skinSection.eyebrow}</span>
              <h2 className="sr-only">{dict.skinSection.title}</h2>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#injectables"
                className="group hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-ink-950 hover:text-rose-600 transition-colors"
              >
                <span>{dict.skinSection.viewAll}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByDirection(-1)}
                  aria-label={dict.a11y.previousSlide}
                  className="w-11 h-11 rounded-full bg-blush-50 border border-line flex items-center justify-center text-ink-950 hover:bg-blush-200 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection(1)}
                  aria-label={dict.a11y.nextSlide}
                  className="w-11 h-11 rounded-full bg-blush-50 border border-line flex items-center justify-center text-ink-950 hover:bg-blush-200 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Scroll-snap carousel: 1.2 visible on mobile (~80%), 2.2 on tablet, 4 visible on desktop */}
        <div
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label={dict.skinSection.eyebrow}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollByDirection(-1);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollByDirection(1);
            }
          }}
          className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 px-2 -mx-2 focus-visible:rounded-2xl"
        >
          {skinTreatments.map((item, idx) => (
            <div
              key={item.slug}
              className="snap-start shrink-0 w-[80%] sm:w-[44%] lg:w-[calc((100%-72px)/4)]"
            >
              <Reveal delayMs={idx * 70}>
                <TreatmentCard
                  treatment={item}
                  locale={locale}
                  openDetailsLabel={dict.a11y.openTreatmentDetails}
                  onSelect={onSelectTreatment}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
