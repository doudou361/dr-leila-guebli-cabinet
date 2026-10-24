"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { FEATURES, Locale, SITE_CONFIG } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import {
  getEnabledTreatments,
  TreatmentItem,
} from "@/content/treatments";
import { getLocalizedPath } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface FooterProps {
  locale: Locale;
  dict: SiteDictionary;
  onSelectTreatment?: (treatment: TreatmentItem) => void;
}

export function Footer({ locale, dict, onSelectTreatment }: FooterProps) {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatmentName, setTreatmentName] = useState("");

  const enabledTreatments = getEnabledTreatments();
  const currentYear = new Date().getFullYear();

  const handleCallbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppLink({
      locale,
      callback: {
        firstName,
        phone,
        treatmentName: treatmentName || undefined,
      },
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const homePrefix = locale === "en" ? "/en" : "/";
  const legalHref = getLocalizedPath("/mentions-legales", locale);
  const privacyHref = getLocalizedPath("/confidentialite", locale);
  const resultsLabel = FEATURES.beforeAfter
    ? dict.header.nav.results
    : dict.header.nav.process;

  return (
    <footer
      id="site-footer"
      className="pb-24 md:pb-10 pt-2"
    >
      <div className="container-lumiere">
        <div className="rounded-[28px] bg-ink-950 text-white px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-start">
            {/* Brand Column */}
            <div className="lg:col-span-3 flex flex-col items-start">
              <Link
                href={homePrefix}
                className="flex flex-col items-start focus-visible:rounded-md"
              >
                <span className="font-serif text-xl tracking-[0.16em] font-medium text-white leading-none">
                  {dict.header.wordmark}
                </span>
                <span className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-white/60 leading-none">
                  {dict.header.subline}
                </span>
              </Link>

              <p className="mt-4 font-serif italic text-lg text-blush-200">
                «{"\u00A0"}
                {dict.footer.tagline}
                {"\u00A0"}»
              </p>

              {/* 4 Social Icons in Circles: Instagram, Facebook, WhatsApp, Google Maps */}
              <div className="mt-6 flex items-center gap-2.5">
                <a
                  href={SITE_CONFIG.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @dr.leila_aesthetic"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-blush-200 hover:bg-white/10 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                <a
                  href={SITE_CONFIG.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook dr Leila aesthetic"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-blush-200 hover:bg-white/10 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a
                  href={buildWhatsAppLink({ locale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-blush-200 hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.6} aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-blush-200 hover:bg-white/10 transition-colors"
                >
                  <MapPin className="w-4 h-4" strokeWidth={1.6} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Col 1: SOINS */}
            <div className="lg:col-span-2">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blush-200">
                {dict.footer.columns.treatments}
              </h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-white/75">
                {enabledTreatments.map((t) => (
                  <li key={t.slug}>
                    {onSelectTreatment ? (
                      <button
                        type="button"
                        onClick={() => onSelectTreatment(t)}
                        className="text-start hover:text-white transition-colors cursor-pointer"
                      >
                        {t.name[locale]}
                      </button>
                    ) : (
                      <Link
                        href={`${homePrefix}#${
                          t.category === "injectables" ? "injectables" : "peau"
                        }`}
                        className="hover:text-white transition-colors"
                      >
                        {t.name[locale]}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: CABINET */}
            <div className="lg:col-span-2">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blush-200">
                {dict.footer.columns.practice}
              </h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-white/75">
                <li>
                  <Link
                    href={`${homePrefix}#cabinet`}
                    className="hover:text-white transition-colors"
                  >
                    {dict.header.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${homePrefix}#resultats`}
                    className="hover:text-white transition-colors"
                  >
                    {resultsLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${homePrefix}#faq`}
                    className="hover:text-white transition-colors"
                  >
                    {dict.header.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${homePrefix}#contact`}
                    className="hover:text-white transition-colors"
                  >
                    {dict.header.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: INFOS */}
            <div className="lg:col-span-2">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blush-200">
                {dict.footer.columns.info}
              </h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px] text-white/75">
                <li className="leading-relaxed">
                  {dict.contact.info.addressValue}
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.telHref}
                    className="hover:text-white transition-colors font-medium text-white"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="text-white/60">
                  {dict.contact.info.hoursLabel} : {dict.contact.info.hoursValue}
                </li>
                <li className="pt-1">
                  <Link
                    href={legalHref}
                    className="hover:text-white transition-colors underline underline-offset-4"
                  >
                    {dict.footer.legalLinks.legalNotice}
                  </Link>
                </li>
                <li>
                  <Link
                    href={privacyHref}
                    className="hover:text-white transition-colors underline underline-offset-4"
                  >
                    {dict.footer.legalLinks.privacy}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: DEMANDE DE RAPPEL (WhatsApp Mini-Form replacing Newsletter) */}
            <div className="lg:col-span-3">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blush-200">
                {dict.footer.columns.callback}
              </h2>
              <p className="mt-3 text-xs text-white/70 leading-relaxed">
                {dict.footer.callbackForm.description}
              </p>

              <form onSubmit={handleCallbackSubmit} className="mt-4 space-y-2.5">
                <div>
                  <label htmlFor="callback-firstname" className="sr-only">
                    {dict.footer.callbackForm.firstNamePlaceholder}
                  </label>
                  <input
                    id="callback-firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={dict.footer.callbackForm.firstNamePlaceholder}
                    className="w-full h-11 rounded-full bg-white text-ink-950 placeholder:text-ink-500 px-4 text-xs font-medium focus:outline-2 focus:outline-blush-300"
                  />
                </div>

                <div>
                  <label htmlFor="callback-treatment" className="sr-only">
                    {dict.footer.callbackForm.treatmentPlaceholder}
                  </label>
                  <select
                    id="callback-treatment"
                    value={treatmentName}
                    onChange={(e) => setTreatmentName(e.target.value)}
                    className="w-full h-11 rounded-full bg-white text-ink-950 px-4 text-xs font-medium focus:outline-2 focus:outline-blush-300"
                  >
                    <option value="">
                      {dict.footer.callbackForm.treatmentPlaceholder}
                    </option>
                    {enabledTreatments.map((t) => (
                      <option key={t.slug} value={t.name[locale]}>
                        {t.name[locale]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pill input with pink circular submit button matching Lumière reference */}
                <div className="relative flex items-center">
                  <label htmlFor="callback-phone" className="sr-only">
                    {dict.footer.callbackForm.phonePlaceholder}
                  </label>
                  <input
                    id="callback-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={dict.footer.callbackForm.phonePlaceholder}
                    className="w-full h-11 rounded-full bg-white text-ink-950 placeholder:text-ink-500 ps-4 pe-12 text-xs font-medium focus:outline-2 focus:outline-blush-300"
                  />
                  <button
                    type="submit"
                    aria-label={dict.footer.callbackForm.submitAria}
                    className="absolute end-1.5 w-8 h-8 rounded-full bg-blush-200 text-rose-600 hover:bg-blush-300 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-[11px] text-white/50 leading-snug pt-1">
                  {dict.footer.callbackForm.privacyNote}
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Hairline with Legal Links & Mandatory Medical Disclaimer */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col gap-4 text-start">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/65">
              <p>
                {dict.footer.copyright.replace(
                  "{year}",
                  currentYear.toString()
                )}
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href={legalHref}
                  className="hover:text-white transition-colors"
                >
                  {dict.footer.legalLinks.legalNotice}
                </Link>
                <Link
                  href={privacyHref}
                  className="hover:text-white transition-colors"
                >
                  {dict.footer.legalLinks.privacy}
                </Link>
              </div>
            </div>

            <p className="text-xs text-white/55 leading-relaxed max-w-4xl">
              {dict.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
