"use client";

import { ArrowRight } from "lucide-react";
import { FEATURES, Locale, SITE_CONFIG } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { HeroArt } from "@/components/art/HeroArt";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

interface HeroProps {
  locale: Locale;
  dict: SiteDictionary;
  portraitSrc?: string;
}

export function Hero({ locale, dict, portraitSrc }: HeroProps) {
  const whatsappHref = buildWhatsAppLink({ locale });

  return (
    <section
      id="accueil"
      className="relative -mt-20 pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-line"
      style={{
        background: "var(--hero-gradient)",
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 start-1/3 w-96 h-96 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(253,238,238,0) 70%)",
        }}
      />

      <div className="container-lumiere relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (approx 45%) */}
          <div className="lg:col-span-5 flex flex-col items-start text-start">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-blush-200/85 border border-blush-300/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-rose-600">
                {dict.hero.chip}
              </span>
            </Reveal>

            <Reveal delayMs={70}>
              <h1 className="heading-h1 mt-6">
                <span className="block">{dict.hero.titleLine1}</span>
                <span className="block">{dict.hero.titleLine2}</span>
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-5 text-[17px] leading-[1.65] text-ink-700 max-w-[38ch]">
                {dict.hero.description}
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary"
                >
                  <span>{dict.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
                </a>
                <a href="#injectables" className="btn-pill btn-secondary">
                  <span>{dict.hero.secondaryCta}</span>
                </a>
              </div>
            </Reveal>

            {/* Social Proof Row (Replaces avatars + stars with compliant community icons) */}
            <Reveal delayMs={280}>
              <div className="mt-9 flex items-center gap-3.5 pt-2">
                <div className="flex items-center -space-x-2.5" aria-hidden="true">
                  <span className="w-10 h-10 rounded-full bg-white border border-line shadow-xs flex items-center justify-center text-rose-600">
                    {/* Instagram thin line icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white border border-line shadow-xs flex items-center justify-center text-ink-950">
                    {/* Facebook thin line icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  <span className="w-10 h-10 rounded-full bg-blush-200 border border-white shadow-xs flex items-center justify-center text-rose-600 text-[11px] font-semibold">
                    DZ
                  </span>
                </div>

                <div className="text-xs sm:text-[13px] leading-snug">
                  <p className="font-semibold text-ink-950">
                    {FEATURES.showFollowerCounts ? (
                      <>
                        {dict.hero.proof.followersPrefix}
                        <CountUp
                          target={SITE_CONFIG.social.combinedFollowersTarget}
                          locale={locale}
                        />
                        {dict.hero.proof.followersSuffix}
                      </>
                    ) : (
                      dict.hero.proof.followersFallback
                    )}
                  </p>
                  <p className="text-ink-500 mt-0.5">
                    {dict.hero.proof.subline}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (approx 55%) */}
          <div className="lg:col-span-7 relative">
            <Reveal delayMs={140}>
              <div className="relative mx-auto max-w-[540px] lg:ms-auto lg:me-0 pb-10 sm:pb-6">
                <HeroArt src={portraitSrc} alt={dict.hero.artAlt} />

                {/* Floating Translucent Glass Card overlapping bottom-end corner */}
                <div className="glass-card animate-float-glass relative sm:absolute sm:bottom-4 sm:-end-4 lg:-end-6 z-20 mt-4 sm:mt-0 w-full sm:w-[290px] p-5">
                  <h2 className="font-serif text-base font-medium text-ink-950 pb-3 border-b border-line/80">
                    {dict.hero.glassCard.title}
                  </h2>

                  <ol className="mt-3 space-y-2.5">
                    {dict.hero.glassCard.steps.map((step) => (
                      <li
                        key={step.num}
                        className="flex items-baseline justify-between gap-3 text-[13px]"
                      >
                        <span className="text-ink-700 font-medium">
                          {step.label}
                        </span>
                        <span className="font-serif text-sm font-semibold text-rose-600 shrink-0">
                          {step.num}
                        </span>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-3.5 pt-2.5 border-t border-line/70 text-[11px] text-ink-500 italic">
                    *{dict.hero.glassCard.footnote}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
