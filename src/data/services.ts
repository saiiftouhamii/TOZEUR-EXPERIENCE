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
    image: "/images/palmeraie.jpg",
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
    image: "/images/desert-4x4.jpg",
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
    image: "/images/medina-culture.jpg",
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
    image: "/images/trekking-cycling.jpg",
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
    image: "/images/events-banquet.jpg",
    alt: "Exclusive luxury candlelit desert banquet setup under a starry sky in the dunes of Tozeur with traditional carpets.",
    features: [
      "Bespoke VIP Saharan candlelit dinners",
      "Corporate team-building & incentive retreats",
      "Private wedding & celebration planning in the dunes",
    ],
  },
];
