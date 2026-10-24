import { LocalizedString } from "./treatments";

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "consultation",
    question: {
      fr: "Comment se déroule la première consultation\u00A0?",
      en: "What happens during the first consultation?",
    },
    answer: {
      fr: "Nous échangeons sur vos attentes et vos antécédents, nous examinons votre visage, puis nous vous proposons un plan de soins. Aucun acte n’est réalisé sans votre accord éclairé.",
      en: "We discuss your expectations and medical history, examine your face, and then propose a tailored care plan. No procedure is performed without your informed consent.",
    },
  },
  {
    id: "natural-results",
    question: {
      fr: "Les résultats sont-ils naturels\u00A0?",
      en: "Are the results natural-looking?",
    },
    answer: {
      fr: "L’objectif est d’harmoniser sans transformer. Le geste est adapté à votre morphologie, mais les résultats varient d’une personne à l’autre.",
      en: "The goal is to harmonize without transforming. Every gesture is adapted to your facial anatomy, though results vary from one individual to another.",
    },
  },
  {
    id: "duration",
    question: {
      fr: "Combien de temps durent les effets\u00A0?",
      en: "How long do the effects last?",
    },
    answer: {
      fr: "Cela dépend du soin. À titre indicatif\u00A0: la toxine botulique agit en général 3 à 6 mois, l’acide hyaluronique 6 à 18 mois selon la zone et le produit. Le médecin vous donne une estimation personnalisée en consultation.",
      en: "It depends on the treatment. As an indication: botulinum toxin generally acts for 3 to 6 months, and hyaluronic acid for 6 to 18 months depending on the area and product. The physician provides a personalized estimate during consultation.",
    },
  },
  {
    id: "rhinoplasty",
    question: {
      fr: "La rhinoplastie médicale remplace-t-elle la chirurgie\u00A0?",
      en: "Does medical rhinoplasty replace surgery?",
    },
    answer: {
      fr: "Non. Elle corrige certaines irrégularités par injection d’acide hyaluronique, sans incision, mais ne réduit pas la taille du nez et ne traite ni les troubles respiratoires ni les déformations importantes. Ses effets sont temporaires, en général de 6 à 12 mois.",
      en: "No. It corrects certain irregularities by injecting hyaluronic acid without incision, but it does not reduce the size of the nose and treats neither breathing difficulties nor major structural deformities. Its effects are temporary, generally lasting 6 to 12 months.",
    },
  },
  {
    id: "contraindications",
    question: {
      fr: "Y a-t-il des contre-indications\u00A0?",
      en: "Are there contraindications?",
    },
    answer: {
      fr: "Oui, selon le soin\u00A0: par exemple la grossesse et l’allaitement, une infection ou un herpès actif sur la zone, une allergie à un composant, certaines maladies neuromusculaires ou auto-immunes. Un interrogatoire médical précède chaque acte.",
      en: "Yes, depending on the treatment: for example pregnancy and breastfeeding, an active infection or cold sore on the area, an allergy to a component, or certain neuromuscular or autoimmune conditions. A medical history review precedes every procedure.",
    },
  },
  {
    id: "risks",
    question: {
      fr: "Quels sont les risques\u00A0?",
      en: "What are the risks?",
    },
    answer: {
      fr: "Rougeurs, gonflement et petits bleus temporaires sont fréquents. Des complications plus rares existent selon les actes, notamment vasculaires pour les injections de comblement\u00A0: c’est pourquoi chaque soin est réalisé par un médecin, après une information complète sur les bénéfices et les risques.",
      en: "Temporary redness, swelling, and minor bruising are common. Rarer complications exist depending on the procedure, notably vascular complications for dermal fillers: that is why every treatment is performed by a physician after thorough information on benefits and risks.",
    },
  },
  {
    id: "booking",
    question: {
      fr: "Comment prendre rendez-vous\u00A0?",
      en: "How can I book an appointment?",
    },
    answer: {
      fr: "Par WhatsApp ou par téléphone au 0556 53 08 82. Nous vous répondons dès que possible.",
      en: "Via WhatsApp or by phone at 0556 53 08 82. We reply as soon as possible.",
    },
  },
  {
    id: "location",
    question: {
      fr: "Où se trouve le cabinet\u00A0?",
      en: "Where is the practice located?",
    },
    answer: {
      fr: "Rue Kaouche, lot F2, 2e étage, en face du centre commercial El Qods, à Chéraga (Alger).",
      en: "Rue Kaouche, lot F2, 2nd floor, opposite the El Qods shopping center, in Chéraga (Algiers).",
    },
  },
];
