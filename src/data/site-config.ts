export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneClean: string;
  email: string;
  addressPlaceholder: string;
  mapsUrl: string;
  instagramHandle: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
    whatsapp: string;
  };
  navItems: NavItem[];
  brandValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "TOZEUR EXPERIENCE",
  tagline: "Vivez l’essence de Tozeur",
  phone: "+216 54 467 632",
  phoneClean: "+21654467632",
  email: "tozeur.experience@gmail.com",
  addressPlaceholder: "[OFFICIAL ADDRESS TO BE PROVIDED]",
  mapsUrl: "https://maps.google.com/?q=Tozeur+Tunisia",
  instagramHandle: "@tozeur.experience",
  socials: {
    instagram: "https://instagram.com/tozeur.experience",
    facebook: "https://facebook.com/tozeur.experience",
    tiktok: "https://tiktok.com/@tozeur.experience",
    whatsapp: "https://wa.me/21654467632",
  },
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ],
  brandValues: [
    {
      title: "Authentic Local Experiences",
      description: "Immerse yourself in real Saharan encounters guided by native connoisseurs.",
      icon: "Handshake",
    },
    {
      title: "Discover the Beauty of Nature",
      description: "Marvel at mountain canyons, crystalline natural waterfalls, and golden dunes.",
      icon: "Mountain",
    },
    {
      title: "Explore Local Culture & Heritage",
      description: "Uncover historical Medina brickwork, artisanal crafts, and centuries of tradition.",
      icon: "Landmark",
    },
    {
      title: "Personalized Adventures",
      description: "Customized private itineraries crafted according to your personal travel desires.",
      icon: "Compass",
    },
  ],
};
