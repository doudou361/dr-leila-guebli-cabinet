"use client";

import { Plus } from "lucide-react";
import { Locale } from "@/config/site";
import { TreatmentItem } from "@/content/treatments";
import { TreatmentArt } from "@/components/art/TreatmentArt";

interface TreatmentCardProps {
  treatment: TreatmentItem;
  locale: Locale;
  openDetailsLabel: string;
  onSelect: (treatment: TreatmentItem) => void;
}

export function TreatmentCard({
  treatment,
  locale,
  openDetailsLabel,
  onSelect,
}: TreatmentCardProps) {
  const name = treatment.name[locale];
  const tagline = treatment.tagline[locale];
  const meta = treatment.meta[locale];

  return (
    <article className="group relative flex flex-col text-start rounded-[20px] p-2.5 -m-2.5 transition-all duration-300 ease-[var(--ease-luxury)] hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card)]">
      <div
        onClick={() => onSelect(treatment)}
        role="presentation"
        className="cursor-pointer"
      >
        <TreatmentArt icon={treatment.icon} alt={name} />
      </div>

      <div className="mt-3.5 flex-1 flex flex-col justify-between px-0.5">
        <div>
          <h3 className="font-sans text-[14.5px] font-semibold text-ink-950 leading-snug">
            <button
              type="button"
              onClick={() => onSelect(treatment)}
              className="text-start hover:text-rose-600 transition-colors cursor-pointer focus-visible:rounded-sm"
            >
              {name}
            </button>
          </h3>
          <p className="mt-0.5 text-[12.5px] text-ink-500 leading-snug">
            {tagline}
          </p>
        </div>

        <div className="mt-3 pt-1 flex items-center justify-between gap-2">
          <span className="text-[12.5px] font-semibold text-ink-700 leading-tight">
            {meta}
          </span>

          <button
            type="button"
            onClick={() => onSelect(treatment)}
            aria-label={`${openDetailsLabel} : ${name}`}
            className="w-11 h-11 -m-1.5 flex items-center justify-center shrink-0 cursor-pointer rounded-full focus-visible:outline-offset-2"
          >
            <span className="w-8 h-8 rounded-full bg-ink-950 text-white flex items-center justify-center transition-transform duration-300 ease-[var(--ease-luxury)] group-hover:scale-105 group-hover:bg-rose-600">
              <Plus className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
