type TextSectionItem = {
  strongText: string;
  description: string;
};

type TextSection = {
  slug: string;
  img: string;
  title: string;
  items: TextSectionItem[];
};

export const textSection: TextSection[] = [
  {
    slug: "contractyearly",
    img: "/mininav/contact.png",
    title: "Contrat Annuel d'Élagage",
    items: [
      {
        strongText: "Élagage saisonnier :",
        description:
          "Des interventions planifiées selon les besoins spécifiques de chaque arbre, garantissant leur santé et leur croissance optimale.",
      },
      {
        strongText: "Nettoyage après intervention :",
        description:
          "Après chaque prestation, nous veillons à laisser vos espaces propres, sans branches ni débris.",
      },
      {
        strongText: "Inspection de sécurité :",
        description:
          "Identification des branches mortes, malades ou dangereuses afin d'assurer la sécurité autour de votre propriété.",
      },
      {
        strongText: "Conseils d'entretien :",
        description:
          "Recommandations personnalisées pour améliorer la santé de vos arbres et préserver la beauté de vos espaces verts.",
      },
    ],
  },
  {
    slug: "diagnostic",
    img: "/mininav/diag.png",
    title: "Diagnostic Phytosanitaire",
    items: [
      {
        strongText: "Évaluation des arbres :",
        description:
          "Inspection complète des arbres pour identifier les signes de maladies et de parasites.",
      },
      {
        strongText: "Analyse du sol :",
        description:
          "Examen du sol autour des arbres pour évaluer les conditions de croissance et les besoins en nutriments.",
      },
      {
        strongText: "Recommandations de traitement :",
        description:
          "Conseils sur les traitements nécessaires pour améliorer la santé des arbres et prévenir les problèmes futurs.",
      },
      {
        strongText: "Suivi et rapports :",
        description:
          "Rapports détaillés et recommandations pour le suivi des interventions et des améliorations.",
      },
    ],
  },
  {
    slug: "elegage",
    img: "/mininav/tonte.png",
    title: "Élagage & Tonte",
    items: [
      {
        strongText: "Élagage régulier :",
        description:
          "Élagage périodique pour maintenir la santé et la forme des arbres et arbustes.",
      },
      {
        strongText: "Tonte de gazon :",
        description:
          "Services de tonte pour garder votre pelouse propre et bien entretenue.",
      },
      {
        strongText: "Élagage spécial :",
        description:
          "Interventions spécifiques pour traiter les problèmes d'arbres endommagés ou malades.",
      },
      {
        strongText: "Conseils d'entretien :",
        description:
          "Recommandations pour l'entretien optimal de vos arbres et espaces verts.",
      },
    ],
  },
  {
    slug: "cloture",
    img: "/mininav/gate.png",
    title: "Clôture & Terrasse",
    items: [
      {
        strongText: "Installation de clôtures :",
        description:
          "Mise en place de clôtures pour sécuriser et délimiter votre propriété.",
      },
      {
        strongText: "Réparation de clôtures :",
        description:
          "Services de réparation pour maintenir vos clôtures en bon état.",
      },
      {
        strongText: "Terrassement pour clôtures :",
        description: "Préparation du terrain pour l'installation de clôtures.",
      },
      {
        strongText: "Conseils d'entretien :",
        description:
          "Recommandations pour le maintien et l'entretien de vos clôtures.",
      },
    ],
  },
  {
    slug: "tools",
    img: "/mininav/tools.png",
    title: "Outil de jardinage",
    items: [
      {
        strongText: "Vente d'outils :",
        description:
          "Large gamme d'outils de jardinage disponibles à la vente.",
      },
      {
        strongText: "Entretien des outils :",
        description:
          "Services d'entretien et de réparation pour vos outils de jardinage.",
      },
      {
        strongText: "Conseils d'utilisation :",
        description:
          "Recommandations sur l'utilisation correcte des outils pour un jardinage efficace.",
      },
      {
        strongText: "Location d'outils :",
        description:
          "Location d'outils pour vos projets de jardinage temporaires.",
      },
    ],
  },
  {
    slug: "creations",
    img: "/mininav/garden.png",
    title: "Création de jardin",
    items: [
      {
        strongText: "Conception de jardin :",
        description:
          "Services de conception pour créer des jardins personnalisés selon vos préférences.",
      },
      {
        strongText: "Aménagement paysager :",
        description:
          "Aménagement de votre espace extérieur pour créer un jardin attrayant.",
      },
      {
        strongText: "Sélection de plantes :",
        description:
          "Choix de plantes adaptées à votre jardin pour une croissance optimale.",
      },
      {
        strongText: "Installation d'éléments décoratifs :",
        description:
          "Installation de statues, fontaines et autres éléments décoratifs pour embellir votre jardin.",
      },
    ],
  },
  {
    slug: "terrassement",
    img: "/mininav/terrasment.png",
    title: "Terrassement",
    items: [
      {
        strongText: "Préparation du terrain :",
        description:
          "Travaux de nivellement et de préparation du terrain pour divers projets.",
      },
      {
        strongText: "Excavation :",
        description: "Services d'excavation pour creuser et préparer le sol.",
      },
      {
        strongText: "Création de fondations :",
        description:
          "Mise en place de fondations solides pour constructions et aménagements.",
      },
      {
        strongText: "Aménagement de terrains :",
        description:
          "Aménagement de terrains pour différents usages tels que jardins, patios, etc.",
      },
    ],
  },
];
