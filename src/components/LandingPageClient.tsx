"use client";

import { useState } from "react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { QuizGoalId } from "@/content/quiz";
import { TreatmentItem } from "@/content/treatments";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { InjectablesSection } from "@/components/sections/InjectablesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FindYourCare } from "@/components/sections/FindYourCare";
import { SkinCarouselSection } from "@/components/sections/SkinCarouselSection";
import { PromiseBand } from "@/components/sections/PromiseBand";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { TreatmentDrawer } from "@/components/dialogs/TreatmentDrawer";
import { QuizDialog } from "@/components/dialogs/QuizDialog";
import { FloatingActions } from "@/components/ui/FloatingActions";

interface LandingPageClientProps {
  locale: Locale;
  dict: SiteDictionary;
}

export function LandingPageClient({ locale, dict }: LandingPageClientProps) {
  const [selectedTreatment, setSelectedTreatment] =
    useState<TreatmentItem | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizInitialGoal, setQuizInitialGoal] = useState<QuizGoalId | null>(
    null
  );

  const handleOpenQuiz = (goalId?: QuizGoalId) => {
    setQuizInitialGoal(goalId ?? null);
    setQuizOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:rounded-full focus:bg-ink-950 focus:text-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold"
      >
        {dict.a11y.skipToContent}
      </a>

      {/* S1 HEADER */}
      <Header
        locale={locale}
        dict={dict}
        onOpenQuiz={() => handleOpenQuiz()}
      />

      <main id="main-content" className="flex-1">
        {/* S2 HERO */}
        <Hero locale={locale} dict={dict} />

        {/* S3 ABOUT */}
        <About dict={dict} />

        {/* S4 FEATURE STRIP */}
        <FeatureStrip dict={dict} />

        {/* S5 INJECTABLES */}
        <InjectablesSection
          locale={locale}
          dict={dict}
          onSelectTreatment={setSelectedTreatment}
        />

        {/* S6 CTA BANNER */}
        <CtaBanner
          dict={dict}
          onOpenQuiz={() => handleOpenQuiz()}
        />

        {/* S7 FIND YOUR CARE */}
        <FindYourCare
          locale={locale}
          dict={dict}
          onOpenQuiz={(goalId) => handleOpenQuiz(goalId)}
        />

        {/* S8 SKIN & REGENERATION */}
        <SkinCarouselSection
          locale={locale}
          dict={dict}
          onSelectTreatment={setSelectedTreatment}
        />

        {/* S9 PROMISE */}
        <PromiseBand dict={dict} />

        {/* S10 RESULTS / CARE PROCESS */}
        <ResultsSection dict={dict} />

        {/* S11 FAQ */}
        <FaqSection locale={locale} dict={dict} />

        {/* S12 CONTACT & ACCESS */}
        <ContactSection locale={locale} dict={dict} />
      </main>

      {/* S13 FOOTER */}
      <Footer
        locale={locale}
        dict={dict}
        onSelectTreatment={setSelectedTreatment}
      />

      {/* INTERACTIVE DIALOGS & FLOATING ACTIONS */}
      <TreatmentDrawer
        treatment={selectedTreatment}
        locale={locale}
        dict={dict}
        onClose={() => setSelectedTreatment(null)}
      />

      <QuizDialog
        open={quizOpen}
        initialGoalId={quizInitialGoal}
        locale={locale}
        dict={dict}
        onClose={() => setQuizOpen(false)}
        onSelectTreatment={(t) => setSelectedTreatment(t)}
      />

      <FloatingActions locale={locale} dict={dict} />
    </div>
  );
}
