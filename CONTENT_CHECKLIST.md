# Client Verification & Launch Checklist (`CONTENT_CHECKLIST.md`)

Before switching `FEATURES.indexable = true` in `src/config/site.ts` and publishing the site on the final domain, please review and confirm the following items with **Dr Leila Guebli**:

---

## 1. Official Title & Flyer Wording ("Chirurgie esthétique")
- [ ] **Current website display**: Strictly **"Médecin esthétique"** (EN: *"Aesthetic physician"*), graduated from the **Faculté de Médecine d’Alger**, with mention that the practice also provides **consultations de médecine générale** (as listed on her Google Business Profile).
- [ ] **Point to verify**: One of the social media before/after templates includes the subtitle *"Médecine esthétique & Chirurgie esthétique"*. Because surgical titles are strictly regulated by the Algerian Medical Order and the practice only lists non-surgical procedures, **"chirurgie esthétique" has been intentionally excluded from the site**. Confirm exact ordinal title with Dr Guebli.

## 2. Opening Hours (Horaires d’ouverture)
- [ ] **Current website display**: *"Communiqués par le cabinet"* (EN: *"Provided by the practice"*), and omitted from JSON-LD structured data.
- [ ] **Point to verify**: Confirm exact weekly consultation days and hours (e.g., Saturday–Thursday, morning/afternoon slots, by appointment only) to update `src/content/fr.ts`, `src/content/en.ts`, and `src/components/JsonLdPhysician.tsx`.

## 3. Spoken Languages (Turkish Mention on Facebook)
- [ ] **Current website display**: **Français, arabe, anglais** (`knowsLanguage: ["fr", "ar", "en"]`).
- [ ] **Point to verify**: Her Facebook page "About" section lists *"Français, Langues turques, Arabe and Anglais"*. Confirm whether consultations are genuinely offered in Turkish or if it was selected by mistake on Facebook. (Currently hidden by design).

## 4. Social Follower Counts
- [ ] **Current website display**: Configured in `src/config/site.ts` (`instagramFollowers: 5600`, `facebookFollowers: 13000`, `combinedFollowersTarget: 13000`, displayed as *"Rejoignez +13 000 abonnés"* when `FEATURES.showFollowerCounts = true`).
- [ ] **Point to verify**: Confirm whether she wants the community counter displayed (`FEATURES.showFollowerCounts`) and update the numbers at launch if needed.

## 5. Exact Address Wording
- [ ] **Current website display**: *"Rue Kaouche, lot F2, 2e étage, en face du centre commercial El Qods, Chéraga 16000, Alger, Algérie"*.
- [ ] **Point to verify**: Confirm building entrance details, intercom/floor instructions, and parking landmarks for patients arriving by car.

## 6. Hygiene & Single-Use Consumables Wording
- [ ] **Current website display**: S4 Feature Strip & S9 Promise Band mention *"Soins réalisés par un médecin, avec du matériel à usage unique"* / *"Matériel à usage unique"*.
- [ ] **Point to verify**: Confirm that this exact phrasing matches the practice's protocols for all procedures.

## 7. PRP, Laser & Exosomes Details (Devices, Product Sources, Indications)
- [ ] **Laser (`needsClientApproval: true`)**: Currently kept generic (*"Les indications possibles dépendent de l’appareil, de votre peau et de votre phototype, et sont définies après examen"*). Ask Dr Guebli which exact laser platform(s) she uses and which clinical indications she wishes to list.
- [ ] **PRP**: Confirm session protocol and any specific preparation notes she provides to patients.
- [ ] **Exosomes (`FEATURES.showExosomes = false`, `needsClientApproval: true`)**: Hidden by default due to international and local regulatory scrutiny over exosome products. Only enable if Dr Guebli confirms product authorization, origin, and topical vs. injectable protocol.

## 8. Manufacturer Brand Names (e.g., Restylane, Stylage)
- [ ] **Current website display**: Hidden by default (`FEATURES.showBrandNames = false`).
- [ ] **Point to verify**: Her reels show Restylane boxes and mention Stylage. Confirm whether mentioning manufacturer brands complies with local ordinal guidance and whether she wants `FEATURES.showBrandNames` kept `false`.

## 9. Before / After Section (`FEATURES.beforeAfter`)
- [ ] **Current website display**: Enabled in demo mode (`FEATURES.beforeAfter = true`) using **neutral educational SVG diagrams explicitly badged "Illustration"**, accompanied by consent and individual-variation notices.
- [ ] **Point to verify**: Recent Algerian public health reminders prohibit promotional patient before/after photos. Decide with Dr Guebli whether to:
  1. Keep the neutral educational `"Illustration"` diagrams (`FEATURES.beforeAfter = true`),
  2. Switch to the 3-step clinical process timeline (`FEATURES.beforeAfter = false`, which automatically renames the nav item to *"Déroulement"* and displays *"Ce qui se passe, étape par étape"*), or
  3. Use real photographs only after verifying Regional Medical Order approval and collecting signed written patient consent.

## 10. Legal Notice & Medical Order Registration (`/mentions-legales`)
- [ ] **Current website display**: `/mentions-legales` and `/en/mentions-legales` contain clearly flagged `[À COMPLÉTER PAR LE MÉDECIN]` placeholders.
- [ ] **Point to verify**: Supply her registration number with the **Conseil Régional de l’Ordre des Médecins d’Alger** and confirm the final hosting provider details.

## 11. Real Photography & Vector Logo to Supply
- [ ] **Logo**: Provide the original vector file (`.svg` or `.ai`) of her single-line face logo (*"Unlock Your Glow"*) to replace `public/images/logo.svg`.
- [ ] **Photography**: Provide 3–4 high-resolution, well-lit photographs (see `public/images/README.md` for dimensions):
  - Portrait of Dr Leila Guebli (`hero-portrait.jpg`, `4:5`)
  - Consultation room / bright clinic interior with plants and black chairs (`about-cabinet.jpg`, `4:3`)
  - Treatment room / equipment details (`concern-hero.jpg`, `faq-side.jpg`)

## 12. Google Business Profile Optimization (Post-Launch)
- [ ] Her Google Business Profile (*"Cabinet médico esthétique Dr guebli Leila"*, Chéraga) currently lacks a **website URL**, **phone number**, and **opening hours**, and has **0 reviews**.
- [ ] Once the site is live, add the production URL, `0556 53 08 82`, and confirmed opening hours to her Google Business Profile.
