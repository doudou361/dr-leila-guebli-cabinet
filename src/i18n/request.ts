import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { fr } from "@/content/fr";
import { en } from "@/content/en";
import { Locale } from "@/config/site";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale =
    requested && routing.locales.includes(requested as Locale)
      ? (requested as Locale)
      : routing.defaultLocale;

  return {
    locale,
    messages: locale === "en" ? en : fr,
  };
});
