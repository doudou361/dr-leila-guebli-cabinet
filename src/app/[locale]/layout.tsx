import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { FEATURES, LOCALES, SITE_CONFIG } from "@/config/site";
import { getDictionary, getLocalizedPath, isValidLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "fr";
  const dict = getDictionary(validLocale);
  const canonicalPath = getLocalizedPath("/", validLocale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_CONFIG.url}${canonicalPath === "/" ? "" : canonicalPath}`,
      siteName: SITE_CONFIG.practiceName[validLocale],
      locale: validLocale === "en" ? "en_US" : "fr_DZ",
      alternateLocale: validLocale === "en" ? ["fr_DZ"] : ["en_US"],
      type: "website",
    },
    robots: FEATURES.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <>{children}</>;
}
