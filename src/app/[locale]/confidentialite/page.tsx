import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { FEATURES } from "@/config/site";
import { getDictionary, getLocalizedPath, isValidLocale } from "@/lib/i18n";
import { LegalPageView } from "@/components/LegalPageView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "fr";
  const dict = getDictionary(validLocale);
  const canonicalPath = getLocalizedPath("/confidentialite", validLocale);

  return {
    title: `${dict.legal.privacy.title} · Dr Leila Guebli`,
    description: dict.legal.privacy.subtitle,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/confidentialite",
        en: "/en/confidentialite",
      },
    },
    robots: FEATURES.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const dict = getDictionary(locale);

  return <LegalPageView locale={locale} dict={dict} pageType="privacy" />;
}
