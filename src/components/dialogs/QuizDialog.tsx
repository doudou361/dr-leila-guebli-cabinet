"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { QUIZ_GOALS, QuizGoalId } from "@/content/quiz";
import {
  getTreatmentBySlug,
  TreatmentItem,
} from "@/content/treatments";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface QuizDialogProps {
  open: boolean;
  initialGoalId?: QuizGoalId | null;
  locale: Locale;
  dict: SiteDictionary;
  onClose: () => void;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export function QuizDialog({
  open,
  initialGoalId,
  locale,
  dict,
  onClose,
  onSelectTreatment,
}: QuizDialogProps) {
  const [step, setStep] = useState<"goal" | "experience" | "result">("goal");
  const [selectedGoal, setSelectedGoal] = useState<QuizGoalId | null>(null);
  const [hadTreatmentsBefore, setHadTreatmentsBefore] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      if (initialGoalId) {
        setSelectedGoal(initialGoalId);
        setHadTreatmentsBefore(false);
        setStep("result");
      } else {
        setSelectedGoal(null);
        setHadTreatmentsBefore(false);
        setStep("goal");
      }
    }
  }, [open, initialGoalId]);

  const currentGoalObj = QUIZ_GOALS.find((g) => g.id === selectedGoal);

  const suggestedTreatments: TreatmentItem[] = currentGoalObj
    ? currentGoalObj.suggestedSlugs
        .map((slug) => getTreatmentBySlug(slug))
        .filter((item): item is TreatmentItem => Boolean(item))
    : [];

  const suggestedNames =
    suggestedTreatments.length > 0
      ? suggestedTreatments.map((t) => t.name[locale])
      : currentGoalObj?.fallbackConsultationLabel
      ? [currentGoalObj.fallbackConsultationLabel[locale]]
      : [];

  const whatsappHref = buildWhatsAppLink({
    locale,
    quiz: currentGoalObj
      ? {
          goalLabel: currentGoalObj.label[locale],
          hadTreatmentsBefore,
          suggestedNames,
        }
      : undefined,
  });

  const handleRestart = () => {
    setSelectedGoal(null);
    setHadTreatmentsBefore(false);
    setStep("goal");
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/45 backdrop-blur-xs" />

        <Dialog.Content
          aria-describedby="quiz-dialog-disclaimer"
          className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 mx-auto max-w-xl max-h-[90vh] rounded-[28px] bg-white border border-line shadow-2xl flex flex-col overflow-hidden focus:outline-none"
        >
          {/* Header */}
          <div
            className="px-6 py-5 border-b border-line flex items-center justify-between gap-4"
            style={{
              background:
                "linear-gradient(135deg, #FFF8F8 0%, #FDEEEE 100%)",
            }}
          >
            <div className="text-start">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-rose-600">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                {dict.quiz.badge}
              </span>
              <Dialog.Title className="font-serif text-2xl text-ink-950 mt-1">
                {dict.quiz.title}
              </Dialog.Title>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={dict.a11y.closeDialog}
                className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center text-ink-950 hover:bg-blush-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 text-start">
            {step === "goal" && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {dict.quiz.stepIndicator} 1 / 2
                </p>
                <h3 className="font-serif text-xl text-ink-950 mt-1">
                  {dict.quiz.step1Title}
                </h3>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QUIZ_GOALS.map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => {
                        setSelectedGoal(goal.id);
                        setStep("experience");
                      }}
                      className="group text-start rounded-[16px] border border-line bg-blush-50/60 hover:bg-blush-100 hover:border-rose-500/40 p-4 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <span className="font-sans text-[14.5px] font-semibold text-ink-950 group-hover:text-rose-600 transition-colors">
                        {goal.label[locale]}
                      </span>
                      <span className="mt-1 text-xs text-ink-500">
                        {goal.subtitle[locale]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "experience" && (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {dict.quiz.stepIndicator} 2 / 2
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep("goal")}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink-700 hover:text-ink-950 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    {dict.quiz.back}
                  </button>
                </div>

                <h3 className="font-serif text-xl text-ink-950 mt-1">
                  {dict.quiz.step2Title}
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setHadTreatmentsBefore(false);
                      setStep("result");
                    }}
                    className="text-start rounded-[16px] border border-line bg-blush-50/60 hover:bg-blush-100 hover:border-rose-500/40 p-4 transition-all cursor-pointer"
                  >
                    <span className="block font-sans text-[15px] font-semibold text-ink-950">
                      {dict.quiz.experienceOptions.never}
                    </span>
                    <span className="block mt-1 text-xs text-ink-500">
                      {dict.quiz.experienceOptions.neverDesc}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setHadTreatmentsBefore(true);
                      setStep("result");
                    }}
                    className="text-start rounded-[16px] border border-line bg-blush-50/60 hover:bg-blush-100 hover:border-rose-500/40 p-4 transition-all cursor-pointer"
                  >
                    <span className="block font-sans text-[15px] font-semibold text-ink-950">
                      {dict.quiz.experienceOptions.yes}
                    </span>
                    <span className="block mt-1 text-xs text-ink-500">
                      {dict.quiz.experienceOptions.yesDesc}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {step === "result" && currentGoalObj && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blush-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-600">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    {dict.quiz.resultBadge}
                  </span>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-700 hover:text-ink-950 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    {dict.quiz.restart}
                  </button>
                </div>

                <h3 className="font-serif text-xl text-ink-950 mt-3">
                  {dict.quiz.resultTitle}
                </h3>
                <p className="text-xs text-ink-500 mt-0.5">
                  {currentGoalObj.label[locale]}
                </p>

                {/* Suggested treatment chips / cards */}
                <div className="mt-4 space-y-2.5">
                  {suggestedTreatments.length > 0 ? (
                    suggestedTreatments.map((t) => (
                      <div
                        key={t.slug}
                        className="rounded-[16px] border border-line bg-blush-50/80 p-3.5 flex items-center justify-between gap-3"
                      >
                        <div>
                          <span className="inline-block rounded-full bg-white border border-line px-3 py-1 text-xs font-semibold text-ink-950">
                            {t.name[locale]}
                          </span>
                          <p className="mt-1.5 text-xs text-ink-700">
                            {t.tagline[locale]} ·{" "}
                            <span className="text-ink-500">{t.meta[locale]}</span>
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectTreatment(t);
                          }}
                          className="shrink-0 text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
                        >
                          {dict.quiz.viewTreatmentDetail}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[16px] border border-line bg-blush-50/80 p-4">
                      <span className="inline-block rounded-full bg-white border border-line px-3.5 py-1 text-xs font-semibold text-ink-950">
                        {currentGoalObj.fallbackConsultationLabel?.[locale]}
                      </span>
                      <p className="mt-2 text-xs text-ink-700">
                        {currentGoalObj.subtitle[locale]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-primary w-full"
                  >
                    <span>{dict.quiz.cta}</span>
                    <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}

            <p
              id="quiz-dialog-disclaimer"
              className="mt-5 pt-4 border-t border-line text-xs text-ink-500 leading-relaxed"
            >
              {dict.quiz.disclaimer}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
