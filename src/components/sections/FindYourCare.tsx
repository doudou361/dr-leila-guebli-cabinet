"use client";

import {
  ArrowRight,
  ChevronRight,
  Droplets,
  Heart,
  Layers,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { CONCERN_TILES, QuizGoalId } from "@/content/quiz";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

interface FindYourCareProps {
  locale: Locale;
  dict: SiteDictionary;
  onOpenQuiz: (goalId?: QuizGoalId) => void;
  imageSrc?: string;
}

const TILE_ICONS = {
  sparkles: Sparkles,
  heart: Heart,
  droplets: Droplets,
  layers: Layers,
} as const;

export function FindYourCare({
  locale,
  dict,
  onOpenQuiz,
  imageSrc,
}: FindYourCareProps) {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        {/* Top Row: Eyebrow + H2 + Black Pill (Left) & Rounded Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 text-start flex flex-col items-start">
            <Reveal>
              <span className="eyebrow-label">{dict.findYourCare.eyebrow}</span>
            </Reveal>

            <Reveal delayMs={70}>
              <h2 className="heading-h2 mt-3 max-w-[18ch]">
                {dict.findYourCare.title}
              </h2>
            </Reveal>

            <Reveal delayMs={140}>
              <button
                type="button"
                onClick={() => onOpenQuiz()}
                className="btn-pill btn-primary mt-6"
              >
                <span>{dict.findYourCare.cta}</span>
                <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
              </button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delayMs={100}>
              <ImageSlot
                slot="concern-hero"
                src={imageSrc}
                alt={dict.findYourCare.imageAlt}
                className="aspect-[16/10] w-full"
              />
            </Reveal>
          </div>
        </div>

        {/* Bottom 2x2 Concern Tiles */}
        <div className="mt-8 lg:-mt-8 relative z-10 rounded-[24px] bg-blush-50/90 backdrop-blur-md border border-line p-4 sm:p-6 shadow-[0_14px_34px_-18px_rgba(176,52,77,0.14)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONCERN_TILES.map((tile, idx) => {
              const Icon = TILE_ICONS[tile.icon];
              return (
                <Reveal key={tile.goalId} delayMs={idx * 70}>
                  <button
                    type="button"
                    onClick={() => onOpenQuiz(tile.goalId)}
                    className="group w-full text-start rounded-[16px] bg-white border border-line p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-300 ease-[var(--ease-luxury)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] hover:border-blush-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="w-11 h-11 rounded-[12px] bg-blush-100 border border-line flex items-center justify-center shrink-0 text-rose-600 group-hover:bg-blush-200 transition-colors"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <span className="block font-sans text-[15px] font-semibold text-ink-950 group-hover:text-rose-600 transition-colors">
                          {tile.title[locale]}
                        </span>
                        <span className="block mt-0.5 text-xs sm:text-[13px] text-ink-500">
                          {tile.subtitle[locale]}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className="w-4 h-4 text-ink-500 group-hover:text-ink-950 group-hover:translate-x-1 transition-all shrink-0"
                      aria-hidden="true"
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
