"use client";

import {
  ArrowRight,
  Clock,
  Globe,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { Locale, SITE_CONFIG } from "@/config/site";
import { SiteDictionary } from "@/content/fr";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

interface ContactSectionProps {
  locale: Locale;
  dict: SiteDictionary;
}

export function ContactSection({ locale, dict }: ContactSectionProps) {
  const whatsappHref = buildWhatsAppLink({ locale });

  const infoRows = [
    {
      icon: MapPin,
      label: dict.contact.info.addressLabel,
      value: dict.contact.info.addressValue,
    },
    {
      icon: Phone,
      label: dict.contact.info.phoneLabel,
      value: dict.contact.info.phoneValue,
      href: SITE_CONFIG.telHref,
    },
    {
      icon: Clock,
      label: dict.contact.info.hoursLabel,
      value: dict.contact.info.hoursValue,
    },
    {
      icon: Globe,
      label: dict.contact.info.languagesLabel,
      value: dict.contact.info.languagesValue,
    },
  ];

  return (
    <section id="contact" className="pb-16 lg:pb-24">
      <div className="container-lumiere">
        <Reveal>
          <div
            className="rounded-[28px] border border-line p-6 sm:p-10 lg:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #FFF8F8 0%, #FDEEEE 50%, #FAD9DD 100%)",
              boxShadow: "0 18px 44px -22px rgba(176, 52, 77, 0.18)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: Eyebrow, Serif H2, Text, 3 Pill Buttons, Info List */}
              <div className="lg:col-span-7 text-start flex flex-col items-start">
                <span className="eyebrow-label">{dict.contact.eyebrow}</span>
                <h2 className="heading-h2 mt-2.5">{dict.contact.title}</h2>
                <p className="mt-3 text-sm sm:text-[15.5px] text-ink-700 max-w-[48ch]">
                  {dict.contact.description}
                </p>

                {/* 3 Action Buttons: WhatsApp (black), Appeler (outlined), Itinéraire (soft pink) */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-primary"
                  >
                    <span>{dict.contact.buttons.whatsapp}</span>
                    <ArrowRight
                      className="w-4 h-4 btn-arrow"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={SITE_CONFIG.telHref}
                    className="btn-pill btn-secondary bg-white/60"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>{dict.contact.buttons.call}</span>
                  </a>

                  <a
                    href={SITE_CONFIG.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-soft border border-blush-300/70"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>{dict.contact.buttons.directions}</span>
                  </a>
                </div>

                {/* Info Grid */}
                <dl className="mt-8 pt-7 border-t border-blush-300/60 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {infoRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="w-9 h-9 rounded-[10px] bg-white/85 border border-line flex items-center justify-center shrink-0 text-rose-600 mt-0.5"
                        >
                          <Icon className="w-4 h-4" strokeWidth={1.6} />
                        </span>
                        <div>
                          <dt className="text-[11px] uppercase tracking-[0.12em] font-semibold text-ink-500">
                            {row.label}
                          </dt>
                          <dd className="mt-0.5 text-sm font-medium text-ink-950 leading-snug">
                            {row.href ? (
                              <a
                                href={row.href}
                                className="hover:text-rose-600 transition-colors"
                              >
                                {row.value}
                              </a>
                            ) : (
                              row.value
                            )}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>

              {/* Right: Stylised Inline SVG Map Card linking to Google Maps (No external iframe) */}
              <div className="lg:col-span-5">
                <a
                  href={SITE_CONFIG.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dict.contact.map.openMaps} — ${SITE_CONFIG.address.fullFr}`}
                  className="group block relative rounded-[24px] overflow-hidden bg-white border border-white/80 shadow-[var(--shadow-card)] transition-transform duration-300 ease-[var(--ease-luxury)] hover:-translate-y-1"
                >
                  <svg
                    viewBox="0 0 460 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full aspect-[4/3] block"
                    aria-hidden="true"
                  >
                    {/* Soft cream map background */}
                    <rect width="460" height="360" fill="#FFFDFD" />

                    {/* City blocks in pale blush */}
                    <rect
                      x="24"
                      y="24"
                      width="145"
                      height="110"
                      rx="14"
                      fill="#FFF8F8"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="195"
                      y="24"
                      width="130"
                      height="95"
                      rx="14"
                      fill="#FDEEEE"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="348"
                      y="24"
                      width="88"
                      height="140"
                      rx="14"
                      fill="#FFF8F8"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="24"
                      y="162"
                      width="125"
                      height="172"
                      rx="14"
                      fill="#FDEEEE"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="176"
                      y="148"
                      width="148"
                      height="108"
                      rx="14"
                      fill="#FFF8F8"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="348"
                      y="190"
                      width="88"
                      height="144"
                      rx="14"
                      fill="#FDEEEE"
                      stroke="#F0E3E4"
                    />
                    <rect
                      x="176"
                      y="280"
                      width="148"
                      height="54"
                      rx="12"
                      fill="#FFF8F8"
                      stroke="#F0E3E4"
                    />

                    {/* Stylised Chéraga road arteries */}
                    <path
                      d="M0 144H336M178 0V360M336 0V360M152 268H348"
                      stroke="#FAD9DD"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 64C120 64 240 44 460 28"
                      stroke="#F4BFC7"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />

                    {/* Street labels */}
                    <text
                      x="78"
                      y="52"
                      fill="#6B6B74"
                      fontSize="9"
                      fontWeight="600"
                      letterSpacing="0.08em"
                    >
                      N41 · CHÉRAGA
                    </text>
                    <text
                      x="208"
                      y="138"
                      fill="#6B6B74"
                      fontSize="9"
                      fontWeight="600"
                      letterSpacing="0.08em"
                    >
                      RUE KAOUCHE
                    </text>
                    <text
                      x="206"
                      y="240"
                      fill="#B0344D"
                      fontSize="9"
                      fontWeight="600"
                      letterSpacing="0.06em"
                    >
                      C.C. EL QODS
                    </text>

                    {/* Landmark building footprint: Centre Commercial El Qods */}
                    <rect
                      x="204"
                      y="198"
                      width="92"
                      height="26"
                      rx="6"
                      fill="#FAD9DD"
                      stroke="#B8975A"
                      strokeOpacity="0.45"
                    />

                    {/* Gold Pin Pulse Rings */}
                    <circle
                      cx="248"
                      cy="168"
                      r="34"
                      fill="#B8975A"
                      fillOpacity="0.14"
                    />
                    <circle
                      cx="248"
                      cy="168"
                      r="20"
                      fill="#B8975A"
                      fillOpacity="0.26"
                    />

                    {/* Sculptural Champagne-Gold Map Pin */}
                    <path
                      d="M248 124C233.641 124 222 135.641 222 150C222 168.5 248 192 248 192C248 192 274 168.5 274 150C274 135.641 262.359 124 248 124Z"
                      fill="#B8975A"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <circle cx="248" cy="150" r="8" fill="#FFFFFF" />
                  </svg>

                  {/* Floating Overlay Card at bottom of Map */}
                  <div className="p-4 sm:p-5 bg-white border-t border-line flex items-center justify-between gap-3">
                    <div className="text-start">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {dict.contact.map.badge}
                      </span>
                      <p className="font-serif text-base font-medium text-ink-950 mt-0.5">
                        {dict.contact.map.street}
                      </p>
                      <p className="text-xs text-ink-500">
                        {dict.contact.map.landmark}
                      </p>
                    </div>

                    <span className="w-10 h-10 rounded-full bg-ink-950 text-white flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
