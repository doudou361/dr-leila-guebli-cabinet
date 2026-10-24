import { FEATURES, Locale } from "@/config/site";

export type TreatmentCategory = "injectables" | "skin";

export type TreatmentIconKey =
  | "face-lines"
  | "lips"
  | "nose-profile"
  | "droplet"
  | "sparkle-water"
  | "layers"
  | "dot-grid"
  | "drop-plasma"
  | "beam"
  | "cells";

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface TreatmentItem {
  slug: string;
  category: TreatmentCategory;
  enabled: boolean;
  icon: TreatmentIconKey;
  name: LocalizedString;
  tagline: LocalizedString;
  meta: LocalizedString;
  intro: LocalizedString;
  forWho?: LocalizedString;
  limits?: LocalizedString;
  session?: LocalizedString;
  results?: LocalizedString;
  recovery?: LocalizedString;
  precautions?: LocalizedString;
  brandNote?: LocalizedString;
  needsClientApproval: boolean;
  imageSlot: string;
}

export const TREATMENTS: readonly TreatmentItem[] = [
  {
    slug: "toxine-botulique",
    category: "injectables",
    enabled: true,
    icon: "face-lines",
    imageSlot: "treatment-toxine-botulique",
    needsClientApproval: false,
    name: {
      fr: "Toxine botulique (Botox)",
      en: "Botulinum Toxin (Botox)",
    },
    tagline: {
      fr: "Rides d’expression",
      en: "Expression lines",
    },
    meta: {
      fr: "Effet en général 3 à 6 mois",
      en: "Effect typically 3 to 6 months",
    },
    intro: {
      fr: "Injectée en très petites quantités dans des muscles précis, la toxine botulique de type A relâche temporairement les muscles responsables des rides d’expression.",
      en: "Injected in very small amounts into targeted muscles, botulinum toxin type A temporarily relaxes the muscles responsible for dynamic expression lines.",
    },
    forWho: {
      fr: "Rides du front, rides du lion (entre les sourcils), pattes d’oie.",
      en: "Forehead lines, frown lines (glabella, between the eyebrows), crow’s feet.",
    },
    session: {
      fr: "Quelques minutes d’injection\u00A0; comptez 15 à 30 minutes consultation comprise.",
      en: "A few minutes of injection; allow 15 to 30 minutes including the medical consultation.",
    },
    results: {
      fr: "Premiers effets en quelques jours, effet complet en 2 à 4 semaines environ. Durée en général de 3 à 6 mois\u00A0; des séances d’entretien sont possibles.",
      en: "Initial effects appear within a few days, with full effect in about 2 to 4 weeks. Duration is generally 3 to 6 months; maintenance sessions may be arranged.",
    },
    recovery: {
      fr: "Pas d’éviction sociale. Le médecin vous donne des consignes simples pour les heures suivantes (ne pas masser la zone, éviter les efforts intenses).",
      en: "No social downtime. The physician provides simple aftercare instructions for the following hours (avoid massaging the treated area or strenuous exercise).",
    },
    precautions: {
      fr: "Contre-indiquée en cas de grossesse, d’allaitement, de maladie neuromusculaire, d’allergie à un composant ou d’infection sur la zone.",
      en: "Contraindicated during pregnancy, breastfeeding, neuromuscular disorders, known allergy to any component, or active infection at the injection site.",
    },
  },
  {
    slug: "acide-hyaluronique",
    category: "injectables",
    enabled: true,
    icon: "lips",
    imageSlot: "treatment-acide-hyaluronique",
    needsClientApproval: false,
    name: {
      fr: "Acide hyaluronique",
      en: "Hyaluronic Acid Fillers",
    },
    tagline: {
      fr: "Volumes, contours et lèvres",
      en: "Volumes, contours & lips",
    },
    meta: {
      fr: "Effet 6 à 18 mois selon la zone",
      en: "Effect 6 to 18 months by area",
    },
    intro: {
      fr: "Gel résorbable à base d’acide hyaluronique, une molécule naturellement présente dans la peau, injecté pour restaurer un volume, redessiner un contour ou hydrater.",
      en: "Resorbable gel based on hyaluronic acid, a molecule naturally present in the skin, injected to restore subtle volume, refine contours, or hydrate.",
    },
    forWho: {
      fr: "Lèvres, sillons naso-géniens et plis d’amertume, pommettes, menton et ovale du visage.",
      en: "Lips, nasolabial folds and marionette lines, cheekbones, chin, and jawline contour.",
    },
    session: {
      fr: "Une séance dure en général moins d’une heure.",
      en: "A session generally takes less than one hour.",
    },
    results: {
      fr: "Résultat visible dès la séance, qui s’affine après le gonflement initial. Durée variable selon la zone et le produit\u00A0: de 6 à 18 mois (souvent plus courte sur les lèvres).",
      en: "Visible right after the session, settling naturally once initial swelling subsides. Duration varies by area and product: typically 6 to 18 months (often shorter on the lips).",
    },
    recovery: {
      fr: "Gonflement et petits bleus possibles pendant 2 à 3 jours, surtout sur les lèvres. Évitez alcool et efforts intenses le jour même.",
      en: "Mild swelling and small bruises may occur for 2 to 3 days, especially on the lips. Avoid alcohol and strenuous exercise on the day of treatment.",
    },
    precautions: {
      fr: "Contre-indiqué pendant la grossesse et l’allaitement, en cas d’infection ou d’herpès actif, ou d’allergie connue. L’acide hyaluronique est réversible grâce à une enzyme (hyaluronidase).",
      en: "Contraindicated during pregnancy and breastfeeding, in case of active skin infection or cold sores, or known allergy. Hyaluronic acid is reversible using an enzyme (hyaluronidase).",
    },
    brandNote: {
      fr: "Gammes Restylane.",
      en: "Restylane range.",
    },
  },
  {
    slug: "rhinoplastie-medicale",
    category: "injectables",
    enabled: true,
    icon: "nose-profile",
    imageSlot: "treatment-rhinoplastie-medicale",
    needsClientApproval: false,
    name: {
      fr: "Rhinoplastie médicale",
      en: "Medical Rhinoplasty",
    },
    tagline: {
      fr: "Sans chirurgie, sans incision",
      en: "Non-surgical, without incision",
    },
    meta: {
      fr: "Sans chirurgie · effet temporaire",
      en: "Non-surgical · temporary effect",
    },
    intro: {
      fr: "Aussi appelée rhinoplastie non chirurgicale\u00A0: de petites quantités d’acide hyaluronique sont injectées pour corriger certaines irrégularités du nez, sans incision ni anesthésie générale.",
      en: "Also known as non-surgical rhinoplasty: small amounts of hyaluronic acid are injected to soften specific nasal irregularities without incisions or general anesthesia.",
    },
    forWho: {
      fr: "Petite bosse, léger creux, pointe tombante, asymétrie légère, harmonisation du profil.",
      en: "Small dorsal bump, slight indentation, drooping nasal tip, minor asymmetry, profile harmonization.",
    },
    limits: {
      fr: "Elle ne réduit pas la taille du nez et ne corrige ni les troubles respiratoires ni les déformations importantes.",
      en: "It does not reduce the size of the nose and corrects neither breathing difficulties nor major structural deformities.",
    },
    session: {
      fr: "Environ 30 à 60 minutes.",
      en: "Approximately 30 to 60 minutes.",
    },
    results: {
      fr: "Résultat immédiat mais temporaire\u00A0: en général de 6 à 12 mois, parfois davantage. Des retouches peuvent être proposées.",
      en: "Immediate yet temporary result: generally 6 to 12 months, sometimes longer. Touch-up sessions may be suggested if appropriate.",
    },
    recovery: {
      fr: "Rougeur et gonflement légers possibles pendant quelques jours.",
      en: "Mild redness and slight swelling may occur for a few days.",
    },
    precautions: {
      fr: "Le nez est une zone vasculaire délicate\u00A0: les complications sont rares mais peuvent être sérieuses, d’où une technique rigoureuse, un médecin formé et un suivi attentif. Contre-indications comparables aux autres injections d’acide hyaluronique.",
      en: "The nose is a delicate vascular area: complications are rare but can be serious, requiring rigorous technique, a trained physician, and attentive follow-up. Contraindications are similar to other hyaluronic acid injections.",
    },
  },
  {
    slug: "skinbooster",
    category: "injectables",
    enabled: true,
    icon: "droplet",
    imageSlot: "treatment-skinbooster",
    needsClientApproval: false,
    name: {
      fr: "Skinbooster",
      en: "Skinbooster",
    },
    tagline: {
      fr: "Hydratation profonde",
      en: "Deep skin hydration",
    },
    meta: {
      fr: "Cure de 2 à 3 séances",
      en: "Course of 2 to 3 sessions",
    },
    intro: {
      fr: "Micro-injections d’acide hyaluronique non volumateur dans la peau pour l’hydrater en profondeur et améliorer son élasticité et son éclat.",
      en: "Micro-injections of non-volumizing hyaluronic acid into the dermis to deeply hydrate the skin and improve its elasticity and natural radiance.",
    },
    forWho: {
      fr: "Peau terne, déshydratée ou fatiguée\u00A0: visage, cou, décolleté, mains.",
      en: "Dull, dehydrated, or tired skin: face, neck, décolletage, and hands.",
    },
    session: {
      fr: "Souvent 2 à 3 séances espacées de 3 à 4 semaines, puis un entretien environ tous les 6 mois, selon l’avis du médecin.",
      en: "Often 2 to 3 sessions spaced 3 to 4 weeks apart, followed by maintenance around every 6 months according to the physician’s assessment.",
    },
    recovery: {
      fr: "Petites rougeurs ou micro-papules possibles pendant 24 à 48 heures.",
      en: "Mild redness or tiny bumps may remain for 24 to 48 hours.",
    },
    precautions: {
      fr: "Contre-indiqué pendant la grossesse et l’allaitement, en cas d’infection cutanée ou d’allergie.",
      en: "Contraindicated during pregnancy and breastfeeding, or in case of skin infection or known allergy.",
    },
  },
  {
    slug: "hydrafacial",
    category: "skin",
    enabled: true,
    icon: "sparkle-water",
    imageSlot: "treatment-hydrafacial",
    needsClientApproval: false,
    name: {
      fr: "HydraFacial",
      en: "HydraFacial",
    },
    tagline: {
      fr: "Éclat et hydratation, sans éviction",
      en: "Radiance & hydration, no downtime",
    },
    meta: {
      fr: "30 à 60 min · sans éviction",
      en: "30 to 60 min · no downtime",
    },
    intro: {
      fr: "Soin du visage en plusieurs étapes\u00A0: nettoyage, exfoliation douce, extraction des impuretés, hydratation par sérums, protection.",
      en: "Multi-step facial care: cleansing, gentle exfoliation, impurity extraction, serum hydration, and skin protection.",
    },
    forWho: {
      fr: "Teint terne, pores dilatés, peau déshydratée, entretien de la qualité de la peau.",
      en: "Dull complexion, enlarged pores, dehydrated skin, and ongoing skin quality maintenance.",
    },
    session: {
      fr: "30 à 60 minutes.",
      en: "30 to 60 minutes.",
    },
    results: {
      fr: "Peau plus lumineuse et hydratée dès la fin du soin\u00A0; l’effet dure en général quelques semaines, d’où un rythme mensuel souvent proposé.",
      en: "Brighter, hydrated skin right after the session; effects generally last a few weeks, which is why a monthly rhythm is often suggested.",
    },
    recovery: {
      fr: "Aucune éviction sociale\u00A0: reprise immédiate des activités.",
      en: "No social downtime: immediate return to daily activities.",
    },
    precautions: {
      fr: "À signaler avant le soin\u00A0: peau lésée, coup de soleil, poussée d’acné ou de rosacée, grossesse (avis médical).",
      en: "Please inform the physician prior to care in case of irritated skin, sunburn, active acne or rosacea flare-up, or pregnancy (medical advice required).",
    },
  },
  {
    slug: "peeling",
    category: "skin",
    enabled: true,
    icon: "layers",
    imageSlot: "treatment-peeling",
    needsClientApproval: false,
    name: {
      fr: "Peeling",
      en: "Medical Peel",
    },
    tagline: {
      fr: "Renouvellement de la peau",
      en: "Controlled skin renewal",
    },
    meta: {
      fr: "Cure de plusieurs séances",
      en: "Multi-session course",
    },
    intro: {
      fr: "Application contrôlée d’acides (AHA, BHA, TCA...) pour exfolier la peau, stimuler son renouvellement et améliorer texture et teint.",
      en: "Controlled application of exfoliating acids (AHA, BHA, TCA...) to stimulate skin renewal and refine texture and tone.",
    },
    forWho: {
      fr: "Teint terne, pores dilatés, taches pigmentaires, cicatrices d’acné superficielles.",
      en: "Dull complexion, enlarged pores, pigment spots, and superficial acne marks.",
    },
    session: {
      fr: "Le type et la profondeur du peeling sont choisis en consultation\u00A0; une cure de plusieurs séances espacées de quelques semaines est fréquente.",
      en: "The peel type and depth are selected during consultation; a course of several sessions spaced a few weeks apart is common.",
    },
    recovery: {
      fr: "Peeling superficiel\u00A0: en général sans éviction sociale\u00A0; peeling plus profond\u00A0: quelques jours de rougeur et de desquamation.",
      en: "Superficial peel: generally no social downtime; deeper peel: a few days of redness and visible flaking.",
    },
    precautions: {
      fr: "Protection solaire rigoureuse indispensable. Contre-indiqué pendant la grossesse et l’allaitement ou en cas d’allergie aux actifs.",
      en: "Strict sun protection is essential. Contraindicated during pregnancy and breastfeeding or in case of allergy to active ingredients.",
    },
  },
  {
    slug: "microneedling",
    category: "skin",
    enabled: true,
    icon: "dot-grid",
    imageSlot: "treatment-microneedling",
    needsClientApproval: false,
    name: {
      fr: "Microneedling",
      en: "Microneedling",
    },
    tagline: {
      fr: "Stimuler le collagène",
      en: "Collagen stimulation",
    },
    meta: {
      fr: "Cure de 3 à 6 séances",
      en: "Course of 3 to 6 sessions",
    },
    intro: {
      fr: "De fines aiguilles stériles créent des micro-perforations contrôlées qui stimulent le renouvellement de la peau et la production de collagène.",
      en: "Fine sterile needles create controlled micro-channels that stimulate skin renewal and natural collagen production.",
    },
    forWho: {
      fr: "Grain de peau irrégulier, pores dilatés, ridules, cicatrices d’acné superficielles.",
      en: "Uneven skin texture, enlarged pores, fine lines, and superficial acne scars.",
    },
    session: {
      fr: "En général 3 à 6 séances espacées de 4 à 6 semaines.",
      en: "Generally 3 to 6 sessions spaced 4 to 6 weeks apart.",
    },
    recovery: {
      fr: "Rougeur et sensibilité pendant 24 à 48 heures\u00A0; protection solaire.",
      en: "Redness and mild sensitivity for 24 to 48 hours; sun protection required.",
    },
    precautions: {
      fr: "Contre-indiqué en cas d’acné active, d’infection ou d’herpès, de grossesse ou d’allaitement, ou selon certains traitements en cours (avis médical).",
      en: "Contraindicated in case of active acne, skin infection or cold sores, pregnancy or breastfeeding, or certain ongoing medications (medical evaluation required).",
    },
  },
  {
    slug: "prp",
    category: "skin",
    enabled: true,
    icon: "drop-plasma",
    imageSlot: "treatment-prp",
    needsClientApproval: false,
    name: {
      fr: "PRP (plasma riche en plaquettes)",
      en: "PRP (Platelet-Rich Plasma)",
    },
    tagline: {
      fr: "Régénération par vos propres plaquettes",
      en: "Regeneration using your own platelets",
    },
    meta: {
      fr: "Cure de 3 séances en général",
      en: "Typically a 3-session course",
    },
    intro: {
      fr: "Le plasma riche en plaquettes est préparé à partir de votre propre sang (prise de sang puis centrifugation), puis réinjecté dans la peau pour stimuler sa régénération.",
      en: "Platelet-rich plasma is prepared from your own blood (a small blood draw followed by centrifugation) and reinjected into the skin to support tissue regeneration.",
    },
    session: {
      fr: "Souvent 3 séances espacées d’un mois, puis un entretien selon les besoins.",
      en: "Often 3 sessions spaced one month apart, followed by maintenance as needed.",
    },
    results: {
      fr: "Effet progressif, variable d’une personne à l’autre.",
      en: "Gradual effect, varying from one individual to another.",
    },
    precautions: {
      fr: "Contre-indications selon vos antécédents (troubles sanguins, infection, grossesse...), vérifiées en consultation.",
      en: "Contraindications depend on your medical history (blood disorders, infection, pregnancy...) and are checked during consultation.",
    },
  },
  {
    slug: "laser",
    category: "skin",
    enabled: true,
    icon: "beam",
    imageSlot: "treatment-laser",
    needsClientApproval: true,
    name: {
      fr: "Laser",
      en: "Medical Laser",
    },
    tagline: {
      fr: "Indications précisées en consultation",
      en: "Indications defined in consultation",
    },
    meta: {
      fr: "Indications après examen",
      en: "Indications after examination",
    },
    intro: {
      fr: "Les lasers médicaux agissent de façon ciblée sur la peau. Les indications possibles dépendent de l’appareil, de votre peau et de votre phototype, et sont définies après examen.",
      en: "Medical lasers act in a targeted manner on the skin. Suitable indications depend on the device, your skin condition, and your phototype, and are determined after clinical examination.",
    },
    precautions: {
      fr: "Protection solaire avant et après le soin\u00A0; contre-indications selon l’appareil.",
      en: "Sun protection before and after treatment; specific contraindications depend on the device used.",
    },
  },
  {
    slug: "exosomes",
    category: "skin",
    enabled: FEATURES.showExosomes,
    icon: "cells",
    imageSlot: "treatment-exosomes",
    needsClientApproval: true,
    name: {
      fr: "Exosomes",
      en: "Exosomes",
    },
    tagline: {
      fr: "Soin complémentaire sur évaluation",
      en: "Complementary care upon evaluation",
    },
    meta: {
      fr: "Selon évaluation médicale",
      en: "Subject to medical evaluation",
    },
    intro: {
      fr: "Soin complémentaire de régénération cutanée proposé après évaluation médicale\u00A0; aucune promesse de résultat.",
      en: "Complementary skin regeneration care offered following medical evaluation; no outcome is promised.",
    },
    precautions: {
      fr: "Indication, provenance du produit et contre-indications précisées par le médecin lors de la consultation.",
      en: "Indication, product origin, and contraindications are explained by the physician during consultation.",
    },
  },
];

export function getEnabledTreatments(): TreatmentItem[] {
  return TREATMENTS.filter((item) =>
    item.slug === "exosomes" ? FEATURES.showExosomes : item.enabled
  );
}

export function getTreatmentsByCategory(
  category: TreatmentCategory
): TreatmentItem[] {
  return getEnabledTreatments().filter((item) => item.category === category);
}

export function getTreatmentBySlug(slug: string): TreatmentItem | undefined {
  return getEnabledTreatments().find((item) => item.slug === slug);
}

export function localizeField(
  field: LocalizedString | undefined,
  locale: Locale
): string | undefined {
  if (!field) return undefined;
  return field[locale];
}
