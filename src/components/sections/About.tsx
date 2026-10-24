"use client";

import { ArrowRight } from "lucide-react";
import { SiteDictionary } from "@/content/fr";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

interface AboutProps {
  dict: SiteDictionary;
  imageSrc?: string;
}

export function About({ dict, imageSrc }: AboutProps) {
  return (
    <section id="cabinet" className="section-spacing pb-12 lg:pb-16">
      <div className="container-lumiere">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Rounded Image Tile (4:3) */}
          <div className="lg:col-span-6">
            <Reveal>
              <ImageSlot
                slot="about-cabinet"
                src={imageSrc}
                alt={dict.about.imageAlt}
                badgeText={dict.about.imageBadge}
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>

          {/* Right: Eyebrow, Serif H2, Paragraphs, Gold Signature, Soft Pink Pill CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            <Reveal>
              <span className="eyebrow-label">{dict.about.eyebrow}</span>
            </Reveal>

            <Reveal delayMs={70}>
              <h2 className="heading-h2 mt-3 max-w-[24ch]">
                {dict.about.title}
              </h2>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-5 text-ink-700 max-w-[60ch]">
                {dict.about.paragraph1}
              </p>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="mt-3.5 text-sm sm:text-[15px] text-ink-500 max-w-[60ch]">
                {dict.about.paragraph2}
              </p>
            </Reveal>

            <Reveal delayMs={240}>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a href="#contact" className="btn-pill btn-soft">
                  <span>{dict.about.cta}</span>
                  <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
                </a>

                <span
                  aria-label={dict.about.signature}
                  className="font-signature text-3xl sm:text-4xl text-gold-500 select-none"
                >
                  {dict.about.signature}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
