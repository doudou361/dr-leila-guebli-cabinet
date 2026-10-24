"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { getLocalizedPath } from "@/lib/i18n";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { QuizDialog } from "@/components/dialogs/QuizDialog";
import { TreatmentDrawer } from "@/components/dialogs/TreatmentDrawer";
import { TreatmentItem } from "@/content/treatments";

interface LegalPageViewProps {
  locale: Locale;
  dict: SiteDictionary;
  pageType: "mentions" | "privacy";
}

export function LegalPageView({ locale, dict, pageType }: LegalPageViewProps) {
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] =
    useState<TreatmentItem | null>(null);

  const pageContent =
    pageType === "mentions" ? dict.legal.mentions : dict.legal.privacy;

  const homeHref = getLocalizedPath("/", locale);

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-950">
      <Header
        locale={locale}
        dict={dict}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      <main className="flex-1 section-spacing pt-10 lg:pt-16">
        <div className="container-lumiere max-w-3xl">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-rose-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{dict.legal.backHome}</span>
          </Link>

          <div className="mt-6 rounded-[28px] bg-blush-50/70 border border-line p-6 sm:p-10 text-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blush-200 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-600">
              <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
              {dict.legal.placeholderBadge}
            </span>

            <h1 className="heading-h2 mt-4">{pageContent.title}</h1>
            <p className="mt-2 text-sm sm:text-base text-ink-500">
              {pageContent.subtitle}
            </p>

            <div className="mt-8 space-y-6 divide-y divide-line">
              {pageContent.sections.map((section) => (
                <section key={section.heading} className="pt-6 first:pt-0">
                  <h2 className="font-serif text-xl text-ink-950">
                    {section.heading}
                  </h2>
                  <p className="mt-2 text-sm sm:text-[15px] leading-[1.7] text-ink-700 whitespace-pre-line">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer
        locale={locale}
        dict={dict}
        onSelectTreatment={(t) => setSelectedTreatment(t)}
      />

      <TreatmentDrawer
        treatment={selectedTreatment}
        locale={locale}
        dict={dict}
        onClose={() => setSelectedTreatment(null)}
      />

      <QuizDialog
        open={quizOpen}
        locale={locale}
        dict={dict}
        onClose={() => setQuizOpen(false)}
        onSelectTreatment={(t) => setSelectedTreatment(t)}
      />
    </div>
  );
}
