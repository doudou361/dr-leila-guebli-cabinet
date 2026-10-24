"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { FAQ_ITEMS } from "@/content/faq";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

interface FaqSectionProps {
  locale: Locale;
  dict: SiteDictionary;
  imageSrc?: string;
}

export function FaqSection({ locale, dict, imageSrc }: FaqSectionProps) {
  return (
    <section id="faq" className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div className="text-start">
            <span className="eyebrow-label">{dict.faq.eyebrow}</span>
            <h2 className="heading-h2 mt-2.5">{dict.faq.title}</h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Radix Accordion rows separated by hairlines */}
          <div className="lg:col-span-7">
            <Accordion.Root
              type="single"
              collapsible
              defaultValue={FAQ_ITEMS[0]?.id}
              className="divide-y divide-line border-y border-line"
            >
              {FAQ_ITEMS.map((item, idx) => (
                <Reveal key={item.id} delayMs={idx * 45}>
                  <Accordion.Item value={item.id} className="group">
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="w-full py-5 flex items-center justify-between gap-4 text-start font-sans text-[15px] sm:text-base font-semibold text-ink-950 hover:text-rose-600 transition-colors cursor-pointer">
                        <span>{item.question[locale]}</span>
                        <span
                          aria-hidden="true"
                          className="w-8 h-8 rounded-full bg-blush-50 border border-line flex items-center justify-center shrink-0 text-ink-700 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-blush-200 group-data-[state=open]:text-rose-600"
                        >
                          <Plus className="w-4 h-4" strokeWidth={1.75} />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="pb-5 pe-8 text-start text-sm sm:text-[15px] leading-[1.68] text-ink-700">
                        {item.answer[locale]}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Reveal>
              ))}
            </Accordion.Root>
          </div>

          {/* Right: Rounded ImageSlot "faq-side" */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delayMs={140}>
              <ImageSlot
                slot="faq-side"
                src={imageSrc}
                alt={dict.faq.imageAlt}
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
