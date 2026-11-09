"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0]">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Gallery />
        <Events />
        <Contact selectedService={selectedService} />
      </main>

      {/* Luxury Brand Footer */}
      <Footer />

      {/* Interactive Back-To-Top */}
      <BackToTop />
    </div>
  );
}
