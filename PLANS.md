# Project Milestones & Execution Plan

## M1 — Scaffold, Design Tokens & i18n
- [x] Initialize Next.js (App Router, TypeScript strict, Tailwind CSS)
- [x] Configure Google Fonts (`Newsreader`, `Inter`, `Allura`) with `latin` and `latin-ext` subsets
- [x] Define Lumière blush-pink, deep-rose, ink, and champagne-gold CSS tokens in `src/app/globals.css`
- [x] Set up bilingual routing (`/` for French, `/en` for English) with locale dictionaries (`src/content/fr.ts`, `src/content/en.ts`), site config (`src/config/site.ts`), and WhatsApp link builder (`src/lib/whatsapp.ts`)

## M2 — Header, Hero, About & Feature Strip (S1–S4)
- [x] Build sticky `Header` (S1) with wordmark, dropdown navigation, `FR | EN` segmented switcher, English suggestion bar, mobile sheet menu, and WhatsApp CTA
- [x] Build `Hero` (S2) with blush gradient, two-line serif headline, community proof row, animated self-drawing `HeroArt` single-line SVG face, and floating glass care-journey card
- [x] Build `About` (S3) with `ImageSlot` fallback, clinical philosophy copy, `Allura` gold signature, and scroll CTA
- [x] Build `FeatureStrip` (S4) 4-cell hairline grid with pale-pink icon tiles

## M3 — Treatments, Drawer, Quiz & Carousel (S5–S8)
- [x] Author compliant medical copy for all treatments in `src/content/treatments.ts` and custom minimalist line-art SVGs in `TreatmentArt`
- [x] Build `InjectablesSection` (S5) 4-card grid and `TreatmentCard` component
- [x] Build accessible Radix `TreatmentDrawer` (bottom sheet on mobile, right panel on desktop) with medical disclaimer and contextual WhatsApp CTA
- [x] Build `CtaBanner` (S6), `FindYourCare` (S7) 2x2 concern grid, and 2-step `QuizDialog` ("Trouver mon soin")
- [x] Build `SkinCarouselSection` (S8) with CSS scroll-snap, keyboard support, and prev/next controls

## M4 — Promise, Results, FAQ, Contact, Footer & Legal Pages (S9–S13)
- [x] Build `PromiseBand` (S9) 4-pillar commitment strip
- [x] Build `ResultsSection` (S10) supporting both `FEATURES.beforeAfter = true` (interactive pointer/touch/keyboard comparison sliders with "Illustration" badges) and `false` (3-step care timeline)
- [x] Build `FaqSection` (S11) using Radix Accordion + side visual slot
- [x] Build `ContactSection` (S12) with direct WhatsApp, phone, directions, and custom inline SVG Chéraga map card
- [x] Build `Footer` (S13) with callback WhatsApp mini-form, legal links, medical disclaimer, and `/mentions-legales` + `/confidentialite` pages

## M5 — Motion, Accessibility, SEO & Performance
- [x] Add reduced-motion-safe scroll reveals, follower count-up, sticky mobile action bar, and desktop floating WhatsApp button
- [x] Configure per-locale SEO metadata, JSON-LD `Physician` schema, `robots.ts`, `sitemap.ts`, and `opengraph-image.tsx`
- [x] Verify WCAG 2.2 AA contrast, focus rings, landmarks, and logical RTL-ready spacing properties

## M6 — Quality Assurance & Documentation
- [x] Run `npm run lint`, `npm run typecheck`, and `npm run build` with zero errors
- [x] Verify forbidden-word compliance check across all rendered copy
- [x] Write `README.md`, `public/images/README.md`, and `CONTENT_CHECKLIST.md`
