# Cabinet Médico-Esthétique — Dr Leila Guebli (Chéraga, Alger)

Informational, bilingual (`FR` | `EN`), mobile-first website for **Dr Leila Guebli**, aesthetic-medicine physician in Chéraga, Algiers, Algeria. Designed after the **Lumière** editorial aesthetic (blush-pink palette, `Newsreader` serif headlines, `Inter` UI typography, `Allura` champagne-gold signature, soft glassmorphism, and near-black pill CTAs) while strictly adhering to Algerian medical ethics and privacy-by-design principles.

---

## 1. Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Run ESLint & TypeScript checks
npm run lint
npm run typecheck

# Production build & start
npm run build
npm run start
```

- **French (default)**: `http://localhost:3000/`
- **English**: `http://localhost:3000/en`
- **Legal pages**: `/mentions-legales`, `/confidentialite` (and `/en/mentions-legales`, `/en/confidentialite`)

---

## 2. Feature Flags (`src/config/site.ts`)

All optional or regulatory-sensitive sections are controlled from `FEATURES` in `src/config/site.ts`:

```ts
export const FEATURES = {
  beforeAfter: true,        // true = neutral "Illustration" sliders; false = 3-step "Le déroulement" cards
  showExosomes: false,      // Keep false until product & regulatory confirmation
  showBrandNames: false,    // Keep false unless approved to display brand names (e.g., Restylane)
  showPrices: false,        // Keep false (medical ethics compliance)
  testimonials: false,      // Keep false (medical ethics compliance)
  showFollowerCounts: true, // Displays community follower counter in the Hero
  indexable: false,         // Keep false (noindex) until final client sign-off
};
```

---

## 3. Editing Content & Adding Treatments

- **UI Copy & Translations**: Edit `src/content/fr.ts` and `src/content/en.ts` (both enforce the shared `SiteDictionary` TypeScript contract).
- **Treatments**: Edit `src/content/treatments.ts`. Each item supports localized `{ fr, en }` fields (`name`, `tagline`, `meta`, `intro`, `forWho`, `limits`, `session`, `results`, `recovery`, `precautions`, `brandNote`) and maps to an inline SVG illustration in `src/components/art/TreatmentArt.tsx`.
- **FAQ**: Edit `src/content/faq.ts`.
- **Orientation Mini-Quiz ("Trouver mon soin")**: Edit `src/content/quiz.ts`.
- **Practice Info & Social Links**: Edit `SITE_CONFIG` in `src/config/site.ts`.

---

## 4. Swapping Placeholder Art with Real Photography

By default, `<HeroArt />`, `<ImageSlot />`, `<TreatmentArt />`, and `<BeforeAfterSlider />` render bespoke inline SVG compositions so the site looks complete without external stock photos.

To swap in real clinic photography:
1. Place the optimized photos in `public/images/` following the ratios and filenames in [`public/images/README.md`](./public/images/README.md).
2. Pass the file path to the corresponding component prop (`portraitSrc` on `<Hero />`, `imageSrc` on `<About />`, `<FindYourCare />`, `<FaqSection />`, or `image` on `<TreatmentArt />`).

---

## 5. Deployment (Vercel)

1. Push this repository to GitHub / GitLab.
2. Import the project into **Vercel** (Framework Preset: **Next.js**; no environment variables or database required).
3. Once Dr Leila Guebli validates all items in [`CONTENT_CHECKLIST.md`](./CONTENT_CHECKLIST.md), update `SITE_CONFIG.url` and set `FEATURES.indexable = true` in `src/config/site.ts`.
