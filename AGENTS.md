# Repository Guide

## Stack & Commands
- **Stack**: Next.js (App Router), React, TypeScript (strict), Tailwind CSS, Motion, Radix UI (`Dialog`, `Accordion`), `lucide-react`, `next-intl`.
- **Commands**: `npm run dev` (dev server), `npm run build` (production build), `npm run start` (prod server), `npm run lint` (ESLint), `npm run typecheck` (`tsc --noEmit`).

## Architecture & Conventions
- **Locales**: French default at `/`, English at `/en`. All UI strings live in `src/content/fr.ts` and `src/content/en.ts`. Use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`) for future RTL support.
- **Privacy**: Zero cookies for tracking, zero analytics, zero external scripts. Forms compose a WhatsApp URL opened by the visitor.
- **Images**: Use `<ImageSlot slot="..." />` (`src/components/ui/ImageSlot.tsx`). Never hotlink external stock photos.

## Feature Flags (`src/config/site.ts`)
- `beforeAfter`: `true` (renders neutral "Illustration" sliders; set `false` for 3-step care timeline)
- `showExosomes`: `false` (keep off until regulatory & product confirmation)
- `showBrandNames`: `false` (hides manufacturer brand names like Restylane)
- `showPrices`: `false`, `testimonials`: `false` (must remain `false` for compliance)
- `showFollowerCounts`: `true`, `indexable`: `false` (`noindex` until client sign-off)

## Medical Compliance Guardrails (Algeria)
- Informational site only. Title must strictly be **Médecin esthétique** (never *chirurgien*, *dermatologue*, or *spécialiste*).
- Forbidden terms: *meilleur, n°1, garanti, 100 %, sans risque, indolore, promo, remise, offre spéciale*.
- Always keep balanced medical disclaimers in every treatment drawer and in the footer.

## Adding or Editing a Treatment
1. Add/update the entry in `src/content/treatments.ts` with `{ fr, en }` copy, `category` (`"injectables"` | `"skin"`), and `enabled`.
2. Add or map its minimalist SVG illustration in `src/components/art/TreatmentArt.tsx`.
3. Run `npm run typecheck && npm run build` to verify types and static generation.
