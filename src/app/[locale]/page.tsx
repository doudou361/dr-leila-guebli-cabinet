import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { JsonLdPhysician } from "@/components/JsonLdPhysician";
import { LandingPageClient } from "@/components/LandingPageClient";

export default async function HomePage({
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

  return (
    <>
      <JsonLdPhysician locale={locale} />
      <LandingPageClient locale={locale} dict={dict} />
    </>
  );
}
