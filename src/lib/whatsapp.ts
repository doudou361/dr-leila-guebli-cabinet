import { Locale, SITE_CONFIG } from "@/config/site";

export interface QuizSummaryParams {
  goalLabel: string;
  hadTreatmentsBefore: boolean;
  suggestedNames?: string[];
}

export interface CallbackParams {
  firstName: string;
  phone: string;
  treatmentName?: string;
}

export interface BuildWhatsAppParams {
  locale: Locale;
  treatment?: string;
  quiz?: QuizSummaryParams;
  callback?: CallbackParams;
}

/**
 * Builds a localized WhatsApp click-to-chat URL with prefilled message.
 * Never transmits or stores user data on a server; the visitor sends the message themselves.
 */
export function buildWhatsAppLink({
  locale,
  treatment,
  quiz,
  callback,
}: BuildWhatsAppParams): string {
  const parts: string[] = [];

  if (callback) {
    const cleanName = callback.firstName.trim();
    const cleanPhone = callback.phone.trim();
    const cleanTreatment = callback.treatmentName?.trim();

    if (locale === "fr") {
      parts.push(
        "Bonjour Dr Guebli, je souhaiterais être rappelé(e) par le cabinet pour convenir d’un rendez-vous."
      );
      if (cleanName) parts.push(`Prénom\u00A0: ${cleanName}.`);
      if (cleanPhone) parts.push(`Téléphone\u00A0: ${cleanPhone}.`);
      if (cleanTreatment) parts.push(`Soin souhaité\u00A0: ${cleanTreatment}.`);
    } else {
      parts.push(
        "Hello Dr Guebli, I would like the practice to call me back to schedule an appointment."
      );
      if (cleanName) parts.push(`First name: ${cleanName}.`);
      if (cleanPhone) parts.push(`Phone: ${cleanPhone}.`);
      if (cleanTreatment) parts.push(`Treatment of interest: ${cleanTreatment}.`);
    }
  } else {
    if (locale === "fr") {
      if (treatment) {
        parts.push(
          `Bonjour Dr Guebli, je souhaite prendre rendez-vous pour une consultation pour\u00A0: ${treatment}.`
        );
      } else {
        parts.push(
          "Bonjour Dr Guebli, je souhaite prendre rendez-vous pour une consultation."
        );
      }

      if (quiz) {
        const expText = quiz.hadTreatmentsBefore ? "oui" : "non";
        parts.push(
          `Objectif\u00A0: ${quiz.goalLabel}. Déjà eu des soins esthétiques\u00A0: ${expText}.`
        );
        if (quiz.suggestedNames && quiz.suggestedNames.length > 0) {
          parts.push(
            `Pistes évoquées\u00A0: ${quiz.suggestedNames.join(", ")}.`
          );
        }
      }
    } else {
      if (treatment) {
        parts.push(
          `Hello Dr Guebli, I would like to book an appointment for a consultation regarding: ${treatment}.`
        );
      } else {
        parts.push(
          "Hello Dr Guebli, I would like to book an appointment for a consultation."
        );
      }

      if (quiz) {
        const expText = quiz.hadTreatmentsBefore ? "yes" : "no";
        parts.push(
          `Goal: ${quiz.goalLabel}. Previous aesthetic treatments: ${expText}.`
        );
        if (quiz.suggestedNames && quiz.suggestedNames.length > 0) {
          parts.push(
            `Suggested options to discuss: ${quiz.suggestedNames.join(", ")}.`
          );
        }
      }
    }
  }

  const text = parts.join(" ");
  return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}
