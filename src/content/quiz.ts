import { LocalizedString } from "./treatments";

export type QuizGoalId =
  | "rides"
  | "volumes"
  | "eclat"
  | "texture"
  | "nez"
  | "unsure";

export interface QuizGoalOption {
  id: QuizGoalId;
  label: LocalizedString;
  subtitle: LocalizedString;
  suggestedSlugs: readonly string[];
  fallbackConsultationLabel?: LocalizedString;
}

export interface ConcernTileItem {
  goalId: QuizGoalId;
  icon: "sparkles" | "heart" | "droplets" | "layers";
  title: LocalizedString;
  subtitle: LocalizedString;
}

export const QUIZ_GOALS: readonly QuizGoalOption[] = [
  {
    id: "rides",
    label: {
      fr: "Atténuer les rides",
      en: "Soften expression lines",
    },
    subtitle: {
      fr: "Front, rides du lion, contour des yeux",
      en: "Forehead, frown lines, eye area",
    },
    suggestedSlugs: ["toxine-botulique", "skinbooster"],
  },
  {
    id: "volumes",
    label: {
      fr: "Redessiner volumes et contours",
      en: "Refine volumes & contours",
    },
    subtitle: {
      fr: "Lèvres, pommettes, menton, ovale du visage",
      en: "Lips, cheekbones, chin, jawline",
    },
    suggestedSlugs: ["acide-hyaluronique"],
  },
  {
    id: "eclat",
    label: {
      fr: "Éclat et hydratation",
      en: "Radiance & deep hydration",
    },
    subtitle: {
      fr: "Teint terne, peau déshydratée ou fatiguée",
      en: "Dull complexion, dehydrated or tired skin",
    },
    suggestedSlugs: ["hydrafacial", "skinbooster", "peeling"],
  },
  {
    id: "texture",
    label: {
      fr: "Texture de la peau",
      en: "Skin texture & renewal",
    },
    subtitle: {
      fr: "Grain de peau, pores dilatés, marques superficielles",
      en: "Skin grain, enlarged pores, superficial marks",
    },
    suggestedSlugs: ["microneedling", "peeling", "prp", "laser"],
  },
  {
    id: "nez",
    label: {
      fr: "Harmoniser le nez sans chirurgie",
      en: "Harmonize the nose without surgery",
    },
    subtitle: {
      fr: "Petite bosse, léger creux, profil",
      en: "Small dorsal bump, slight hollow, profile",
    },
    suggestedSlugs: ["rhinoplastie-medicale"],
  },
  {
    id: "unsure",
    label: {
      fr: "Je ne sais pas encore",
      en: "I am not sure yet",
    },
    subtitle: {
      fr: "Faire le point avec le médecin lors d’une consultation",
      en: "Discuss with the physician during an initial consultation",
    },
    suggestedSlugs: [],
    fallbackConsultationLabel: {
      fr: "Consultation d’orientation",
      en: "Orientation consultation",
    },
  },
];

export const CONCERN_TILES: readonly ConcernTileItem[] = [
  {
    goalId: "rides",
    icon: "sparkles",
    title: {
      fr: "Rides et ridules",
      en: "Lines & fine wrinkles",
    },
    subtitle: {
      fr: "Atténuer les rides d’expression",
      en: "Soften dynamic expression lines",
    },
  },
  {
    goalId: "volumes",
    icon: "heart",
    title: {
      fr: "Volumes et contours",
      en: "Volumes & contours",
    },
    subtitle: {
      fr: "Redessiner lèvres, joues et menton",
      en: "Reshape lips, cheeks and chin",
    },
  },
  {
    goalId: "eclat",
    icon: "droplets",
    title: {
      fr: "Éclat et hydratation",
      en: "Radiance & hydration",
    },
    subtitle: {
      fr: "Une peau fraîche et lumineuse",
      en: "Fresh, luminous skin",
    },
  },
  {
    goalId: "texture",
    icon: "layers",
    title: {
      fr: "Texture et régénération",
      en: "Texture & regeneration",
    },
    subtitle: {
      fr: "Affiner le grain de peau",
      en: "Refine overall skin texture",
    },
  },
];
