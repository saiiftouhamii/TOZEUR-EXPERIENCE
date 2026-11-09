export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "oasis-mountain",
    title: "Oasis & Mountain Discovery",
    tag: "Oasis Sanctuary",
    description:
      "Explore beautiful palm groves, natural oases, mountain landscapes, and hidden gems across southern Tunisia including Chebika, Tamerza, and Midès.",
    iconName: "Palmtree",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoCCWeifLzZCQUPT059_NjFyKCYnj5FK_HMNaknnmCuYzdf9DmB5mn2VLwRFP-GCUUKsqBqKuCjlVbFnnZ3gp3iMp96glRmSsKK5geRXF73RwnG6uyXd2LBRMmYLpUWpiZyBW0ewy6_mBNIkYY1J-4njY5IXxeqfQRIaPHBOoKiQuxYcswEy9yojcQh2BiM8cl4TZTH3yuIGd6LXulssYDZtiH6EBqd5-MLMXBRyA",
    alt: "Scenic landscape of Tozeur palm groves and mountain oasis canyon at Chebika with lush date palms and desert cliffs.",
    features: [
      "Chebika & Tamerza mountain waterfalls",
      "Traditional Palmeraie irrigation walk",
      "Midès canyon panoramic gorge viewpoints",
    ],
  },
  {
    id: "desert-adventures",
    title: "Desert Adventures",
    tag: "Sahara Odyssey",
    description:
      "Experience the Sahara through unforgettable desert excursions, sunset 4x4 safaris across rolling dunes, and atmospheric Saharan night camps.",
    iconName: "Sun",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEXJO3xLQB9dBWeEjPl8RpjT6q8qa0AqoRjFl-cDFiWkdfpqMdBandDvh4TAonbdWaRPlrDkR7nOpBjQUJZwOlyUnegTvBDwgcip1svbTtkad7ASslA3Gtdo2Y-9iKTAXdBRY6iMrQPKLnoZk022-nROu66SuBUdUG_maSVAE1iTC4PRofUFjOw0dYVnj0z_Wj8KeCta6mHOxtise4DDlP1_vGd6ynxHG1R762h8c",
    alt: "Four-by-four desert safari expedition vehicle traversing sweeping golden Sahara sand dunes in Tozeur at sunset.",
    features: [
      "4x4 dune bashing & Ong Jmel expedition",
      "Traditional camel caravan at golden hour",
      "Bivouac luxury camping under the stars",
    ],
  },
  {
    id: "culture-heritage",
    title: "Culture & Local Heritage",
    tag: "Architectural Gems",
    description:
      "Discover traditional brick architecture, historic Medina alleyways, artisanal pottery, date weaving, and the rich thousand-year heritage of Tozeur.",
    iconName: "Landmark",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuwWa7WrLAyci8uJS5FPAhzH8pvz6B16FEoDAOex53pI_syUViXlOfectXm5QJCD77euFgLVWlj0YHchenyC5ZHkPsQjI0qqc_Agjy5ADr0gHSqUE1zqqxuXoCClYWoDA7E4t_cvhXo-_8wuYXTRsWBbC-4v7ZLfT2CL48bwegDsJNdJ2Abq80SHgSyZOke2E138UhzYaxv9N-1ps5X-AJyb_F1ef_RRQwKXbWbwE",
    alt: "Close-up architectural detail of historical Tozeur Medina Ouled El Hadef with geometric clay brick patterns.",
    features: [
      "Guided tour of Ouled El Hadef 14th-century medina",
      "Artisan pottery, rug weaving, and basketry",
      "Chak Wak cultural park & Eden Palm museum",
    ],
  },
  {
    id: "trekking-cycling",
    title: "Trekking & Cycling",
    tag: "Active Expeditions",
    description:
      "Explore breathtaking landscapes through outdoor adventures, guided hiking trails, rocky canyon trekking, and invigorating oasis cycling tours.",
    iconName: "Bike",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcxP2sXoCfN8GKepqXJR_pg7Xz6qbOCzEwRmOPoupFcK4uvdnWoDlJeCub1pN3ESl_wect3-OhNlAjhSL7ywYR4QZOl7tZqPU67SQyAswpt5bmExcsjYsYYsZ3A8fMBrqvHJ_PqPkW-bzYPnj5C3zmHR1sUxg3pPmjlT-RHHd9LRxWkMAVjt-Syp4CS9KqU1mkIZtcTEcdrgmh_UwAchWTszCZlVDzs2r5gu9VWE8",
    alt: "Adventurous travelers trekking across desert hills and cycling along palm-lined oasis paths in Tozeur, Tunisia.",
    features: [
      "Palmeraie bike rentals & guided routes",
      "Chebika canyon pedestrian trails",
      "Chott el Djerid mirage walking circuits",
    ],
  },
  {
    id: "events-custom",
    title: "Events & Custom Experiences",
    tag: "Tailor-Made",
    description:
      "Enjoy personalized group experiences, corporate retreats, cultural celebrations, private romantic dinners, and tailored activities specifically organized for you.",
    iconName: "Sparkles",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsB7UDrnu-UI6rB8Wnsv8JvLIY4pXYGjLNvdRXoQ49LqfeaQ8QKWJ_W_ncSH2YkwI14D_3qYKywAjVSGA44pyiz2uJUQWxyIKAIRBKozkjcKBRIe8fUfxX4NevZcCjTlZs7XdUI-svUjB82wDjsns7I3WBUp5O5oqSXW2_a8EAmZ3Ggu-Vu4Q2GGTxdzg9yIb3y9ArQGTYox39s7XpnocTJ5JLnRpHy0kyP8hJzGA",
    alt: "Exclusive luxury candlelit desert banquet setup under a starry sky in the dunes of Tozeur with traditional carpets.",
    features: [
      "Bespoke VIP Saharan candlelit dinners",
      "Corporate team-building & incentive retreats",
      "Private wedding & celebration planning in the dunes",
    ],
  },
];
