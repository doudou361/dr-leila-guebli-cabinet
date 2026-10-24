# Expected Image Assets (`public/images/`)

By default, the website renders bespoke inline SVG artwork (`HeroArt`, `ImageSlot`, `TreatmentArt`, and `BeforeAfterSlider` diagrams) so there are zero broken images or generic stock photos.

When real photography from the practice is ready and approved by Dr Leila Guebli, place the files in `public/images/` using the specifications below:

## 1. Brand & Social
| Filename | Aspect Ratio | Recommended Size | Subject & Notes |
| :--- | :--- | :--- | :--- |
| `logo.svg` | `1:1` | Vector SVG | Single-line facial profile emblem ("Unlock Your Glow"). Included as vector placeholder. |
| `og-image.jpg` | `1.91:1` | `1200 × 630 px` | Social sharing card (currently auto-generated dynamically by `src/app/opengraph-image.tsx`). |

## 2. Main Editorial Slots (`<ImageSlot />` & `<HeroArt />`)
| Slot / Filename | Aspect Ratio | Recommended Size | Subject & Notes |
| :--- | :--- | :--- | :--- |
| `hero-portrait.jpg` | `4:5` | `1080 × 1350 px` | Portrait of Dr Leila Guebli in the consultation room or bright studio setting. Pass via `portraitSrc="/images/hero-portrait.jpg"` on `<Hero />`. |
| `about-cabinet.jpg` | `4:3` | `1200 × 900 px` | Bright, welcoming interior of the Chéraga practice (white walls, plants, consultation space). Pass via `imageSrc="/images/about-cabinet.jpg"` on `<About />`. |
| `doctor-portrait.jpg` | `4:5` | `960 × 1200 px` | Secondary portrait of Dr Leila Guebli during consultation. |
| `banner.jpg` | `4:3` | `960 × 720 px` | Calm clinical detail (tray, skincare tools, soft lighting) for the S6 CTA banner. |
| `concern-hero.jpg` | `16:10` | `1280 × 800 px` | Soft, reassuring consultation or facial evaluation photo for S7 ("Trouvez votre soin"). |
| `faq-side.jpg` | `4:3` | `1000 × 750 px` | Detail shot of the waiting room or treatment space for S11 (FAQ). |

## 3. Treatment Card Tiles (`4:5`, `800 × 1000 px`)
Pass via the `image` prop on `<TreatmentArt />` or add an `image` path in `src/content/treatments.ts`:
1. `treatment-toxine-botulique.jpg` (`4:5`) — Upper-face consultation or gesture detail
2. `treatment-acide-hyaluronique.jpg` (`4:5`) — Lip/contour harmony detail
3. `treatment-rhinoplastie-medicale.jpg` (`4:5`) — Nasal profile assessment detail
4. `treatment-skinbooster.jpg` (`4:5`) — Deep skin hydration detail
5. `treatment-hydrafacial.jpg` (`4:5`) — HydraFacial handpiece / facial care
6. `treatment-peeling.jpg` (`4:5`) — Gentle medical peel application
7. `treatment-microneedling.jpg` (`4:5`) — Sterile microneedling pen detail
8. `treatment-prp.jpg` (`4:5`) — PRP preparation / regenerative care
9. `treatment-laser.jpg` (`4:5`) — Medical laser device in the clinic
10. `treatment-exosomes.jpg` (`4:5`) — Optional (only if `FEATURES.showExosomes = true`)

## 4. Before / After Pairs (`16:10`, `1200 × 750 px`, identical framing & lighting)
> **Important compliance note**: Only use real patient photographs if written patient consent has been obtained AND the practitioner has confirmed compliance with the Regional Council of the Medical Order of Algiers.
- `ba-rhinoplastie-before.jpg` & `ba-rhinoplastie-after.jpg` (`16:10`, identical crop)
- `ba-levres-before.jpg` & `ba-levres-after.jpg` (`16:10`, identical crop)
