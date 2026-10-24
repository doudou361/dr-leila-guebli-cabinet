"use client";

import { ArrowRight, Check } from "lucide-react";
import { SiteDictionary } from "@/content/fr";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBannerProps {
  dict: SiteDictionary;
  onOpenQuiz: () => void;
  bannerSrc?: string;
}

export function CtaBanner({ dict, onOpenQuiz, bannerSrc }: CtaBannerProps) {
  return (
    <section aria-label={dict.ctaBanner.title} className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div
            className="rounded-[28px] border border-line p-6 sm:p-10 lg:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #FFF8F8 0%, #FDEEEE 45%, #FAD9DD 100%)",
              boxShadow: "0 16px 40px -20px rgba(176, 52, 77, 0.18)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Left: Serif H2, Text, Black Pill CTA */}
              <div className="lg:col-span-5 text-start flex flex-col items-start">
                <h2 className="heading-h2 max-w-[18ch]">
                  {dict.ctaBanner.title}
                </h2>
                <p className="mt-3 text-sm sm:text-[15px] text-ink-700 max-w-[38ch]">
                  {dict.ctaBanner.description}
                </p>

                <button
                  type="button"
                  onClick={onOpenQuiz}
                  className="btn-pill btn-primary mt-6"
                >
                  <span>{dict.ctaBanner.cta}</span>
                  <ArrowRight
                    className="w-4 h-4 btn-arrow"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Middle: Checklist with black circular check icons */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <ul className="space-y-4 text-start">
                  {dict.ctaBanner.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-ink-950"
                    >
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full bg-ink-950 text-white flex items-center justify-center shrink-0"
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: ImageSlot "banner" */}
              <div className="lg:col-span-4">
                <ImageSlot
                  slot="banner"
                  src={bannerSrc}
                  alt={dict.ctaBanner.imageAlt}
                  className="aspect-[4/3] w-full border-white/60 shadow-sm"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
