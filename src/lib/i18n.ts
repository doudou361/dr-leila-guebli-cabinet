import { Locale, DEFAULT_LOCALE, LOCALES } from "@/config/site";
import { fr, SiteDictionary } from "@/content/fr";
import { en } from "@/content/en";

export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): SiteDictionary {
  return locale === "en" ? en : fr;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}
