"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { FEATURES, Locale } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface HeaderProps {
  locale: Locale;
  dict: SiteDictionary;
  onOpenQuiz: () => void;
}

const LOCALE_STORAGE_KEY = "dr_guebli_locale_choice";

export function Header({ locale, dict, onOpenQuiz }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnglishPrompt, setShowEnglishPrompt] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (locale !== "fr") {
      setShowEnglishPrompt(false);
      return;
    }
    try {
      const storedChoice = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (!storedChoice && navigator.language?.toLowerCase().startsWith("en")) {
        setShowEnglishPrompt(true);
      }
    } catch {
      // Ignore storage access errors in private browsing
    }
  }, [locale]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const persistLocaleChoice = (targetLocale: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
      document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
  };

  const switchLocale = (targetLocale: Locale) => {
    persistLocaleChoice(targetLocale);
    setShowEnglishPrompt(false);

    if (targetLocale === locale) return;

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;

    let basePath = pathname || "/";
    if (basePath === "/en") {
      basePath = "/";
    } else if (basePath.startsWith("/en/")) {
      basePath = basePath.slice(3);
    }

    const nextPath =
      targetLocale === "en"
        ? basePath === "/"
          ? "/en"
          : `/en${basePath}`
        : basePath;

    router.push(`${nextPath}${hash}`, { scroll: false });
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
    });
  };

  const dismissEnglishPrompt = () => {
    persistLocaleChoice("fr");
    setShowEnglishPrompt(false);
  };

  const isHomePage = pathname === "/" || pathname === "/en";
  const prefix = isHomePage ? "" : locale === "en" ? "/en" : "/";

  const resultsLabel = FEATURES.beforeAfter
    ? dict.header.nav.results
    : dict.header.nav.process;

  const whatsappHref = buildWhatsAppLink({ locale });

  return (
    <>
      {showEnglishPrompt && (
        <div
          role="region"
          aria-label="Language suggestion"
          className="bg-ink-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10"
        >
          <div className="container-lumiere flex items-center justify-between gap-4">
            <p className="text-white/90 font-medium">
              {dict.englishBanner.message}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className="inline-flex items-center gap-1.5 rounded-full bg-blush-200 text-ink-950 px-3 py-1 text-xs font-semibold hover:bg-blush-300 transition-colors cursor-pointer"
              >
                {dict.englishBanner.action}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={dismissEnglishPrompt}
                aria-label={dict.englishBanner.dismiss}
                className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-line shadow-[0_4px_24px_-12px_rgba(14,14,16,0.08)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-lumiere h-20 flex items-center justify-between gap-4">
          {/* Wordmark left */}
          <a
            href={isHomePage ? "#accueil" : locale === "en" ? "/en" : "/"}
            className="group flex flex-col items-start py-1 focus-visible:rounded-lg"
          >
            <span className="font-serif text-lg sm:text-xl tracking-[0.16em] font-medium text-ink-950 leading-none">
              {dict.header.wordmark}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.24em] uppercase font-medium text-ink-500 leading-none">
              {dict.header.subline}
            </span>
          </a>

          {/* Desktop Center Navigation */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-ink-700"
          >
            <a
              href={`${prefix}#accueil`}
              className="py-2 hover:text-ink-950 transition-colors"
            >
              {dict.header.nav.home}
            </a>

            {/* Soins Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 py-2 hover:text-ink-950 transition-colors cursor-pointer"
              >
                <span>{dict.header.nav.treatments}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full start-0 pt-2 w-56 z-50"
                >
                  <div className="rounded-[18px] bg-white/95 backdrop-blur-xl border border-line p-2 shadow-[var(--shadow-card)]">
                    <a
                      role="menuitem"
                      href={`${prefix}#injectables`}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-[12px] px-3.5 py-2.5 text-sm text-ink-700 hover:bg-blush-100 hover:text-ink-950 transition-colors"
                    >
                      {dict.header.nav.treatmentsDropdown.injectables}
                    </a>
                    <a
                      role="menuitem"
                      href={`${prefix}#peau`}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-[12px] px-3.5 py-2.5 text-sm text-ink-700 hover:bg-blush-100 hover:text-ink-950 transition-colors"
                    >
                      {dict.header.nav.treatmentsDropdown.skin}
                    </a>
                    <div className="my-1 border-t border-line" />
                    <button
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        setDropdownOpen(false);
                        onOpenQuiz();
                      }}
                      className="w-full text-start flex items-center justify-between rounded-[12px] px-3.5 py-2.5 text-sm font-semibold text-rose-600 hover:bg-blush-100 transition-colors cursor-pointer"
                    >
                      <span>{dict.header.nav.treatmentsDropdown.quiz}</span>
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href={`${prefix}#cabinet`}
              className="py-2 hover:text-ink-950 transition-colors"
            >
              {dict.header.nav.about}
            </a>
            <a
              href={`${prefix}#resultats`}
              className="py-2 hover:text-ink-950 transition-colors"
            >
              {resultsLabel}
            </a>
            <a
              href={`${prefix}#faq`}
              className="py-2 hover:text-ink-950 transition-colors"
            >
              {dict.header.nav.faq}
            </a>
            <a
              href={`${prefix}#contact`}
              className="py-2 hover:text-ink-950 transition-colors"
            >
              {dict.header.nav.contact}
            </a>
          </nav>

          {/* Desktop Right: FR | EN Switch + Black Pill CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              role="group"
              aria-label={dict.a11y.languageSwitcher}
              className="inline-flex items-center rounded-full bg-blush-100/90 border border-line p-1 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => switchLocale("fr")}
                aria-pressed={locale === "fr"}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  locale === "fr"
                    ? "bg-ink-950 text-white"
                    : "text-ink-700 hover:text-ink-950"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                aria-pressed={locale === "en"}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  locale === "en"
                    ? "bg-ink-950 text-white"
                    : "text-ink-700 hover:text-ink-950"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary !h-11 !px-5 !text-[13.5px]"
            >
              <span>{dict.header.cta}</span>
              <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <div
              role="group"
              aria-label={dict.a11y.languageSwitcher}
              className="inline-flex items-center rounded-full bg-blush-100/90 border border-line p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => switchLocale("fr")}
                aria-pressed={locale === "fr"}
                className={`min-w-[34px] min-h-[34px] px-2 rounded-full transition-colors cursor-pointer ${
                  locale === "fr"
                    ? "bg-ink-950 text-white"
                    : "text-ink-700"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                aria-pressed={locale === "en"}
                className={`min-w-[34px] min-h-[34px] px-2 rounded-full transition-colors cursor-pointer ${
                  locale === "en"
                    ? "bg-ink-950 text-white"
                    : "text-ink-700"
                }`}
              >
                EN
              </button>
            </div>

            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label={dict.a11y.openMenu}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 border border-line text-ink-950 hover:bg-blush-100 transition-colors cursor-pointer"
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/40 backdrop-blur-xs" />
                <Dialog.Content className="fixed inset-y-0 end-0 z-50 w-full max-w-sm bg-blush-50 p-6 flex flex-col justify-between shadow-2xl focus:outline-none overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-line">
                      <Dialog.Title className="flex flex-col">
                        <span className="font-serif text-lg tracking-[0.16em] font-medium text-ink-950">
                          {dict.header.wordmark}
                        </span>
                        <span className="mt-1 text-[10px] tracking-[0.22em] uppercase text-ink-500">
                          {dict.header.subline}
                        </span>
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        Menu de navigation principal
                      </Dialog.Description>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label={dict.a11y.closeMenu}
                          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-line text-ink-950 cursor-pointer"
                        >
                          <X className="w-5 h-5" aria-hidden="true" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav
                      aria-label="Navigation mobile"
                      className="mt-6 flex flex-col gap-1"
                    >
                      <a
                        href={`${prefix}#accueil`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.home}
                      </a>
                      <a
                        href={`${prefix}#injectables`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.treatmentsDropdown.injectables}
                      </a>
                      <a
                        href={`${prefix}#peau`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.treatmentsDropdown.skin}
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenQuiz();
                        }}
                        className="text-start rounded-xl px-3 py-3 text-lg font-serif text-rose-600 hover:bg-blush-100 flex items-center justify-between cursor-pointer"
                      >
                        <span>{dict.header.nav.treatmentsDropdown.quiz}</span>
                        <Sparkles className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <a
                        href={`${prefix}#cabinet`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.about}
                      </a>
                      <a
                        href={`${prefix}#resultats`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {resultsLabel}
                      </a>
                      <a
                        href={`${prefix}#faq`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.faq}
                      </a>
                      <a
                        href={`${prefix}#contact`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-lg font-serif text-ink-950 hover:bg-blush-100"
                      >
                        {dict.header.nav.contact}
                      </a>
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-line flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-ink-500 font-semibold">
                        {dict.a11y.languageSwitcher}
                      </span>
                      <div
                        role="group"
                        aria-label={dict.a11y.languageSwitcher}
                        className="inline-flex items-center rounded-full bg-white border border-line p-1 text-xs font-semibold"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            switchLocale("fr");
                            setMobileMenuOpen(false);
                          }}
                          className={`px-3.5 py-1.5 rounded-full cursor-pointer ${
                            locale === "fr"
                              ? "bg-ink-950 text-white"
                              : "text-ink-700"
                          }`}
                        >
                          FR
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            switchLocale("en");
                            setMobileMenuOpen(false);
                          }}
                          className={`px-3.5 py-1.5 rounded-full cursor-pointer ${
                            locale === "en"
                              ? "bg-ink-950 text-white"
                              : "text-ink-700"
                          }`}
                        >
                          EN
                        </button>
                      </div>
                    </div>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="btn-pill btn-primary w-full"
                    >
                      <span>{dict.header.cta}</span>
                      <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
    </>
  );
}
