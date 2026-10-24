"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Locale, SITE_CONFIG } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface FloatingActionsProps {
  locale: Locale;
  dict: SiteDictionary;
}

export function FloatingActions({ locale, dict }: FloatingActionsProps) {
  const [visible, setVisible] = useState(false);
  const whatsappHref = buildWhatsAppLink({ locale });

  useEffect(() => {
    const updateVisibility = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > 480;
      const footer = document.getElementById("site-footer");
      let nearFooter = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        nearFooter = rect.top < window.innerHeight - 40;
      }

      setVisible(pastHero && !nearFooter);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <>
      {/* Mobile Sticky Action Bar (After hero, hidden near footer) */}
      <div
        aria-hidden={!visible}
        className={`md:hidden fixed inset-x-0 bottom-0 z-30 px-4 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-xl border-t border-line shadow-[0_-8px_28px_-14px_rgba(14,14,16,0.16)] transition-all duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? 0 : -1}
            className="btn-pill btn-primary !h-12 !px-4 !text-sm w-full"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{dict.mobileBar.whatsapp}</span>
          </a>

          <a
            href={SITE_CONFIG.telHref}
            tabIndex={visible ? 0 : -1}
            className="btn-pill btn-secondary !h-12 !px-4 !text-sm w-full bg-white"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{dict.mobileBar.call}</span>
          </a>
        </div>
      </div>

      {/* Desktop Discreet Floating WhatsApp Button Bottom-End */}
      <div
        className={`hidden md:block fixed bottom-6 end-6 z-30 transition-all duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label={dict.a11y.floatingWhatsApp}
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink-950 text-white ps-4 pe-5 h-12 shadow-[0_14px_30px_-10px_rgba(14,14,16,0.4)] border border-white/15 hover:bg-rose-600 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500" aria-hidden="true" />
          <MessageCircle className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wide">
            {dict.mobileBar.whatsapp}
          </span>
        </a>
      </div>
    </>
  );
}
