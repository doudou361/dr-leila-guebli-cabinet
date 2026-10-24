import { Locale, SITE_CONFIG } from "@/config/site";
import { getLocalizedPath } from "@/lib/i18n";

interface JsonLdPhysicianProps {
  locale: Locale;
}

export function JsonLdPhysician({ locale }: JsonLdPhysicianProps) {
  const canonicalUrl = `${SITE_CONFIG.url}${
    getLocalizedPath("/", locale) === "/" ? "" : getLocalizedPath("/", locale)
  }`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: SITE_CONFIG.doctorName,
    alternateName: SITE_CONFIG.practiceName[locale],
    jobTitle: "Médecin esthétique",
    description:
      locale === "en"
        ? "Medical aesthetic practice of Dr Leila Guebli in Chéraga, Algiers."
        : "Cabinet médico-esthétique du Dr Leila Guebli à Chéraga, Alger.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    telephone: SITE_CONFIG.phoneE164,
    url: canonicalUrl,
    sameAs: [
      SITE_CONFIG.social.instagramUrl,
      SITE_CONFIG.social.facebookUrl,
    ],
    knowsLanguage: SITE_CONFIG.knowsLanguage,
    hasMap: SITE_CONFIG.googleMapsSearchUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
