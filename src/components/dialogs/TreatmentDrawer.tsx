"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ShieldAlert, X } from "lucide-react";
import { FEATURES, Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { TreatmentItem } from "@/content/treatments";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { TreatmentArt } from "@/components/art/TreatmentArt";

interface TreatmentDrawerProps {
  treatment: TreatmentItem | null;
  locale: Locale;
  dict: SiteDictionary;
  onClose: () => void;
}

export function TreatmentDrawer({
  treatment,
  locale,
  dict,
  onClose,
}: TreatmentDrawerProps) {
  const open = Boolean(treatment);

  if (!treatment) return null;

  const name = treatment.name[locale];
  const tagline = treatment.tagline[locale];
  const meta = treatment.meta[locale];
  const intro = treatment.intro[locale];
  const forWho = treatment.forWho?.[locale];
  const limits = treatment.limits?.[locale];
  const session = treatment.session?.[locale];
  const results = treatment.results?.[locale];
  const recovery = treatment.recovery?.[locale];
  const precautions = treatment.precautions?.[locale];
  const brandNote =
    FEATURES.showBrandNames && treatment.brandNote
      ? treatment.brandNote[locale]
      : undefined;

  const categoryLabel =
    treatment.category === "injectables"
      ? dict.drawer.categoryInjectables
      : dict.drawer.categorySkin;

  const whatsappHref = buildWhatsAppLink({
    locale,
    treatment: name,
  });

  const detailBlocks = [
    { label: dict.drawer.sections.forWho, content: forWho },
    { label: dict.drawer.sections.limits, content: limits },
    { label: dict.drawer.sections.session, content: session },
    { label: dict.drawer.sections.results, content: results },
    { label: dict.drawer.sections.recovery, content: recovery },
    { label: dict.drawer.sections.precautions, content: precautions },
    { label: dict.drawer.sections.brandNote, content: brandNote },
  ].filter((item): item is { label: string; content: string } =>
    Boolean(item.content)
  );

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/45 backdrop-blur-xs transition-opacity" />

        <Dialog.Content
          aria-describedby="treatment-drawer-intro"
          className="fixed z-50 bg-white text-ink-950 shadow-2xl focus:outline-none flex flex-col
            inset-x-0 bottom-0 max-h-[90vh] rounded-t-[28px]
            md:inset-y-0 md:end-0 md:start-auto md:w-full md:max-w-[520px] md:max-h-none md:rounded-t-none md:rounded-s-[28px] border-t md:border-t-0 md:border-s border-line"
        >
          {/* Mobile drag handle */}
          <div
            aria-hidden="true"
            className="md:hidden pt-3 pb-1 flex justify-center"
          >
            <span className="w-11 h-1.5 rounded-full bg-blush-300" />
          </div>

          {/* Sticky Top Header */}
          <div className="px-6 py-4 md:py-5 border-b border-line flex items-start justify-between gap-4">
            <div className="text-start">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blush-100 border border-line px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-600">
                  {categoryLabel}
                </span>
                <span className="text-xs text-ink-500 font-medium">
                  · {meta}
                </span>
              </div>
              <Dialog.Title className="font-serif text-2xl sm:text-[28px] leading-tight text-ink-950 mt-2">
                {name}
              </Dialog.Title>
              <p className="text-xs sm:text-sm text-ink-500 mt-0.5">{tagline}</p>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={dict.a11y.closeDialog}
                className="w-11 h-11 rounded-full bg-blush-50 border border-line flex items-center justify-center text-ink-950 hover:bg-blush-100 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-start">
            {/* Compact horizontal header art + intro */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center bg-blush-50 rounded-[20px] p-4 border border-line">
              <div className="sm:col-span-4 max-w-[130px] mx-auto sm:mx-0 w-full">
                <TreatmentArt icon={treatment.icon} alt={name} />
              </div>
              <div className="sm:col-span-8">
                <p
                  id="treatment-drawer-intro"
                  className="text-[15px] leading-[1.65] text-ink-700"
                >
                  {intro}
                </p>
              </div>
            </div>

            {/* Structured Medical Details */}
            <div className="divide-y divide-line">
              {detailBlocks.map((block) => (
                <div key={block.label} className="py-4 first:pt-1 last:pb-1">
                  <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-rose-600">
                    / {block.label}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-ink-700">
                    {block.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Mandatory Medical Disclaimer */}
            <div className="rounded-[16px] bg-blush-100/75 border border-line p-4 flex items-start gap-3">
              <ShieldAlert
                className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <p className="text-xs leading-[1.6] text-ink-700">
                {dict.drawer.disclaimer}
              </p>
            </div>
          </div>

          {/* Sticky Bottom CTA */}
          <div className="px-6 py-4 bg-white border-t border-line">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary w-full"
            >
              <span>{dict.drawer.cta}</span>
              <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
