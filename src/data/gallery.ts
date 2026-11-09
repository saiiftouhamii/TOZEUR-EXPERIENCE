export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  alt: string;
  aspectSpan?: string; // For asymmetric grid layout
}

export const galleryData: GalleryItem[] = [
  {
    id: "chebika-waterfall",
    title: "Chebika Mountain Oasis Waterfall",
    category: "Mountain Oasis",
    caption:
      "Crystal-clear natural spring cascading through the terracotta rocks of Chebika canyon into emerald palm basins.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJabMj-K_GDaHLluNcKH_agBP8WF69BaM3Vt5JY8m_f2ZbqJ8ztzYfiTApA7jGXttVkko0UW5u8wyiFMgBTPra2iG99oLX2di-2b_vpEzUhrfEl9YVN9bGRWmkyKC7GIybV0GNQD_4fCQAmvU28BucitF_r1VtCg9XAIwCDMs3eTxyy13E_CLQimhN_vNwNI3ziK5VoWt6spWL7zbq6LcSdPcpp-u_EoGmNtqSu8c",
    alt: "Panoramic view of Chebika mountain oasis waterfall in Tozeur Tunisia with crystal turquoise pools and palm trees in canyon ravines.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "sahara-sunset",
    title: "Golden Sahara Dunes at Sunset",
    category: "Sahara Desert",
    caption:
      "Sweeping waves of amber and ochre desert dunes glowing under the soft twilight of southern Tunisia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDR1wMPWhDlLb9sIaNnYiZ7q6ZLgciNI0O6gTHyFMQaqh63JlZOKIXz1taFIeyom-9I-E-esDGzzrTXcITu7tg4-KvpQZ1cyf3sdJkICd-oOSMr2w3qpMnKHQ4-YZuwtEyWbYSR_SvfaZ2nn5srMH1xlqN8FuXNhlWZylz63YIUhkGIr1YC2G4G2FxOjPNYJT6RzyifkE_cmbUai4_IcCqiEbE14q6WtHrc1jUU-d0",
    alt: "Mesmerizing Saharan sand dunes in Tozeur glowing under warm sunset sky with rich shades of terracotta and warm amber gold.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "medina-brickwork",
    title: "Historic Medina of Ouled El Hadef",
    category: "Heritage Architecture",
    caption:
      "Unique geometric relief brickwork facades reflecting the centuries-old artisanal masonry of Tozeur.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChwCpB2-dl40E8vycGwmcYEJd7emRh65kWwPkiCddzC8rMakVtrZ7KotSN92R0ItfH4F2AmaiCWIqnniItp1KUkONZ8zpqP8ufcIdE8rZ0T-GPfJuSQ63meW4ZL8jPZQZqco_EmK1uzr3VeXme2w4HnuHEAfK_cPKsC7Rbu9EAF4IBL--aAjOQfwiEENR_UkBhj1xkGpSBLsVD1e85vtNGTdZ_ocJNXv8BzNAVSRE",
    alt: "Intricate geometric relief brickwork facades of the historic Medina Ouled El Hadef in Tozeur with shaded alleys.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "camel-caravan",
    title: "Saharan Caravan Odyssey",
    category: "Authentic Nomad",
    caption:
      "Nomadic camel trek crossing the horizon near Chott el Djerid as dusk turns the sky into shades of gold and violet.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzR-AISUMv7ixmWtwXvUdoiww8gfloHXEa_2Ehly1uAOx3XJFf4IG34ajLwLpp3-rt5R-Xmtg0qWbuiIF9h2wXv9-nlfFLyNYN9hyv07w8zVLjF-Hw4NTY8eTZNrlNJSumBOHW24tDLbjjDFWpn0C3A1FpVrDRo5Xzl5nxAAZQdYBPhwDjfFwwy0Lfk9bMPP06rcmtW8eInaDxHyXaObk2DZNiy1Qwov9ddh-Mx4E",
    alt: "A peaceful camel caravan journeying across open desert plain near Chott el Djerid Tozeur during twilight hours.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "palmeraie-grove",
    title: "Lush Tozeur Palmeraie & Canals",
    category: "Palm Tree Oases",
    caption:
      "Ancient date palm groves fed by traditional seguias, providing cooling shade and abundant Deglet Nour dates.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoCCWeifLzZCQUPT059_NjFyKCYnj5FK_HMNaknnmCuYzdf9DmB5mn2VLwRFP-GCUUKsqBqKuCjlVbFnnZ3gp3iMp96glRmSsKK5geRXF73RwnG6uyXd2LBRMmYLpUWpiZyBW0ewy6_mBNIkYY1J-4njY5IXxeqfQRIaPHBOoKiQuxYcswEy9yojcQh2BiM8cl4TZTH3yuIGd6LXulssYDZtiH6EBqd5-MLMXBRyA",
    alt: "Dense lush canopy of date palms in Tozeur oasis with traditional irrigation channels and morning sunshine.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "desert-4x4-expedition",
    title: "4x4 Desert Thrill at Ong Jmel",
    category: "Outdoor Adventures",
    caption:
      "High-energy four-by-four traverse across pristine desert sands and renowned cinematic landscapes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEXJO3xLQB9dBWeEjPl8RpjT6q8qa0AqoRjFl-cDFiWkdfpqMdBandDvh4TAonbdWaRPlrDkR7nOpBjQUJZwOlyUnegTvBDwgcip1svbTtkad7ASslA3Gtdo2Y-9iKTAXdBRY6iMrQPKLnoZk022-nROu66SuBUdUG_maSVAE1iTC4PRofUFjOw0dYVnj0z_Wj8KeCta6mHOxtise4DDlP1_vGd6ynxHG1R762h8c",
    alt: "4x4 expedition across desert sand ridges near Ong Jmel in Tozeur, Tunisia under bright Saharan skies.",
    aspectSpan: "md:col-span-1",
  },
];
