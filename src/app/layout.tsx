import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOZEUR EXPERIENCE — Vivez l’essence de Tozeur | Travel & Tourism Agency",
  description:
    "From breathtaking Sahara desert adventures to peaceful mountain oasis escapes, discover the authentic beauty, culture, and unforgettable experiences of Tozeur, southern Tunisia.",
  keywords: [
    "Tozeur Experience",
    "Tozeur tourism",
    "Sahara desert adventure",
    "Chebika mountain oasis",
    "Tunisia travel agency",
    "Vivez l'essence de Tozeur",
    "Chott el Djerid",
    "excursion sud tunisien",
    "circuit 4x4 Tozeur",
    "trekking oasis Tozeur",
  ],
  authors: [{ name: "TOZEUR EXPERIENCE" }],
  creator: "TOZEUR EXPERIENCE",
  publisher: "TOZEUR EXPERIENCE",
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://tozeurexperience.com",
    title: "TOZEUR EXPERIENCE — Vivez l’essence de Tozeur",
    description:
      "From breathtaking desert adventures to peaceful oasis escapes, discover the authentic beauty, culture, and unforgettable experiences of Tozeur.",
    siteName: "TOZEUR EXPERIENCE",
  },
  icons: {
    icon: "/logo/tozeur-experience-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#FFF9F0] text-[#382719]">
        {children}
      </body>
    </html>
  );
}
