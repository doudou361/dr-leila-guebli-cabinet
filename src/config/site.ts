export type Locale = "fr" | "en";

export const LOCALES: readonly Locale[] = ["fr", "en"] as const;
export const DEFAULT_LOCALE: Locale = "fr";

/**
 * Feature flags controlling optional and regulatory-sensitive capabilities.
 * Keep showPrices and testimonials false in compliance with Algerian medical ethics.
 */
export const FEATURES = {
  beforeAfter: true, // Demo placeholders labelled "Illustration"
  showExosomes: false,
  showBrandNames: false,
  showPrices: false, // Keep false
  testimonials: false, // Keep false
  showFollowerCounts: true,
  indexable: false, // noindex until launch
};

export const SITE_CONFIG = {
  url: "https://dr-leila-guebli.dz", // Placeholder canonical domain until live domain is connected
  doctorName: "Dr Leila Guebli",
  doctorNameAlt: "Dr Guebli Leila",
  signatureText: "Dr Guebli Leila",
  practiceName: {
    fr: "Cabinet médico-esthétique Dr Guebli Leila",
    en: "Dr Guebli Leila Medical Aesthetic Practice",
  },
  title: {
    fr: "Médecin esthétique",
    en: "Aesthetic physician",
  },
  education: {
    fr: "Faculté de Médecine d’Alger",
    en: "Faculty of Medicine of Algiers",
  },
  phoneDisplay: "0556 53 08 82",
  phoneE164: "+213556530882",
  whatsappNumber: "213556530882",
  telHref: "tel:+213556530882",
  whatsappBaseUrl: "https://wa.me/213556530882",
  address: {
    street: "Rue Kaouche, lot F2, 2e étage, en face du centre commercial El Qods",
    streetEn: "Rue Kaouche, lot F2, 2nd floor, opposite El Qods shopping center",
    locality: "Chéraga",
    postalCode: "16000",
    region: "Alger",
    country: "Algérie",
    countryEn: "Algeria",
    countryCode: "DZ",
    fullFr:
      "Rue Kaouche, lot F2, 2e étage, en face du centre commercial El Qods, Chéraga 16000, Alger, Algérie",
    fullEn:
      "Rue Kaouche, lot F2, 2nd floor, opposite El Qods shopping center, Chéraga 16000, Algiers, Algeria",
  },
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Cabinet+m%C3%A9dico+esth%C3%A9tique+Dr+Guebli+Leila+Ch%C3%A9raga",
  social: {
    instagramHandle: "@dr.leila_aesthetic",
    instagramUrl: "https://www.instagram.com/dr.leila_aesthetic/",
    instagramFollowers: 5600,
    facebookName: "dr Leila aesthetic",
    facebookUrl: "https://www.facebook.com/search/top?q=dr%20Leila%20aesthetic",
    facebookFollowers: 13000,
    combinedFollowersTarget: 13000,
    whatsappChannelName: "Dr leila aesthetic",
  },
  knowsLanguage: ["fr", "ar", "en"],
} as const;
