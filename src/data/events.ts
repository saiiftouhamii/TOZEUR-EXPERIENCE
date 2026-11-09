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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsB7UDrnu-UI6rB8Wnsv8JvLIY4pXYGjLNvdRXoQ49LqfeaQ8QKWJ_W_ncSH2YkwI14D_3qYKywAjVSGA44pyiz2uJUQWxyIKAIRBKozkjcKBRIe8fUfxX4NevZcCjTlZs7XdUI-svUjB82wDjsns7I3WBUp5O5oqSXW2_a8EAmZ3Ggu-Vu4Q2GGTxdzg9yIb3y9ArQGTYox39s7XpnocTJ5JLnRpHy0kyP8hJzGA",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoCCWeifLzZCQUPT059_NjFyKCYnj5FK_HMNaknnmCuYzdf9DmB5mn2VLwRFP-GCUUKsqBqKuCjlVbFnnZ3gp3iMp96glRmSsKK5geRXF73RwnG6uyXd2LBRMmYLpUWpiZyBW0ewy6_mBNIkYY1J-4njY5IXxeqfQRIaPHBOoKiQuxYcswEy9yojcQh2BiM8cl4TZTH3yuIGd6LXulssYDZtiH6EBqd5-MLMXBRyA",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJabMj-K_GDaHLluNcKH_agBP8WF69BaM3Vt5JY8m_f2ZbqJ8ztzYfiTApA7jGXttVkko0UW5u8wyiFMgBTPra2iG99oLX2di-2b_vpEzUhrfEl9YVN9bGRWmkyKC7GIybV0GNQD_4fCQAmvU28BucitF_r1VtCg9XAIwCDMs3eTxyy13E_CLQimhN_vNwNI3ziK5VoWt6spWL7zbq6LcSdPcpp-u_EoGmNtqSu8c",
    alt: "Morning sun rising over the rocky desert mountains and canyon spring pools near Tozeur.",
    iconName: "Compass",
  },
];
