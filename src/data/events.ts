export interface EventItem {
  id: string;
  title: string;
  tag: string;
  datePlaceholder: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  iconName: string;
}

export const eventsData: EventItem[] = [
  {
    id: "sahara-stargazing",
    title: "Sahara Sunset Stargazing & Campfire",
    tag: "Seasonal Excursion",
    datePlaceholder: "[October – April Season]",
    location: "Ong Jmel & Tozeur Dunes",
    description:
      "Gather around a traditional fire under one of the world’s clearest night skies, accompanied by Saharan mint tea and Berber astronomy storytelling.",
    image: "/images/events-banquet.jpg",
    alt: "Sahara desert evening campfire setting with lanterns and rugs under a starry sky.",
    iconName: "Moon",
  },
  {
    id: "date-harvest",
    title: "Date Palm Harvest & Culinary Journey",
    tag: "Harvest Experience",
    datePlaceholder: "[Autumn Season Event]",
    location: "Tozeur Ancient Palmeraie",
    description:
      "Experience the historic Deglet Nour date harvest, meet local farmers, and taste traditional culinary delicacies prepared in the heart of the oasis.",
    image: "/images/palmeraie.jpg",
    alt: "Golden Deglet Nour date clusters hanging from tall palm trees in the sunny oasis of Tozeur.",
    iconName: "Apple",
  },
  {
    id: "chott-sunrise-trek",
    title: "Chott el Djerid Sunrise & Mountain Trek",
    tag: "Trek & Panorama",
    datePlaceholder: "[Weekly Departures / Private]",
    location: "Chebika & Tamerza Canyons",
    description:
      "Witness the ethereal mirages over the Chott el Djerid salt flats at dawn, followed by an exhilarating guided trail through ancient mountain waterfalls.",
    image: "/images/gallery-waterfall.jpg",
    alt: "Morning sun rising over the rocky desert mountains and canyon spring pools near Tozeur.",
    iconName: "Compass",
  },
];
