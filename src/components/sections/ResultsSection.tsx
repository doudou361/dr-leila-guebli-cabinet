"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FEATURES, SITE_CONFIG } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";

interface ResultsSectionProps {
  dict: SiteDictionary;
}

export function ResultsSection({ dict }: ResultsSectionProps) {
  const [activeDot, setActiveDot] = useState(0);

  if (!FEATURES.beforeAfter) {
    return (
      <section id="resultats" className="section-spacing pb-16 lg:pb-24">
        <div className="container-lumiere">
          <Reveal>
            <div className="text-start max-w-2xl">
              <span className="eyebrow-label">
                {dict.results.processFallback.eyebrow}
              </span>
              <h2 className="heading-h2 mt-2.5">
                {dict.results.processFallback.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.results.processFallback.steps.map((item, idx) => (
              <Reveal key={item.step} delayMs={idx * 70}>
                <article className="h-full rounded-[20px] bg-white border border-line p-6 text-start shadow-[0_10px_28px_-18px_rgba(176,52,77,0.14)]">
                  <span className="font-serif text-3xl text-rose-600/80">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] leading-[1.65] text-ink-700">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resultats" className="section-spacing pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-line">
            <div className="text-start">
              <span className="eyebrow-label">{dict.results.eyebrow}</span>
              <h2 className="heading-h2 mt-2.5 max-w-[26ch]">
                {dict.results.title}
              </h2>
            </div>

            <a
              href={SITE_CONFIG.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-ink-950 hover:text-rose-600 transition-colors"
            >
              <span>{dict.results.instagramCta}</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        {/* Two White Hairline Cards with Interactive BeforeAfter Sliders */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {dict.results.cases.map((caseItem, idx) => (
            <Reveal key={caseItem.id} delayMs={idx * 70}>
              <article
                onMouseEnter={() => setActiveDot(idx)}
                className="rounded-[24px] bg-white border border-line p-5 sm:p-6 text-start shadow-[0_10px_30px_-18px_rgba(176,52,77,0.14)]"
              >
                <BeforeAfterSlider
                  variant={idx === 0 ? "rhinoplastie" : "levres"}
                  beforeTag={dict.results.beforeTag}
                  afterTag={dict.results.afterTag}
                  illustrationTag={dict.results.illustrationTag}
                  ariaLabel={`${dict.a11y.beforeAfterSlider} — ${caseItem.title}`}
                />

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-ink-950">
                      {caseItem.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-ink-500">
                      {caseItem.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Carousel Indicator Dots + Mandatory Transparency Captions */}
        <div className="mt-6 flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            {[0, 1].map((dotIdx) => (
              <span
                key={dotIdx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDot === dotIdx
                    ? "w-5 bg-ink-950"
                    : "w-2 bg-blush-300"
                }`}
              />
            ))}
          </div>

          <div className="text-xs text-ink-500 space-y-1 max-w-2xl">
            <p>{dict.results.captionConsent}</p>
            <p className="font-medium text-ink-700">
              {dict.results.captionVariance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
