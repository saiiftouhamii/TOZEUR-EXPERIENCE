"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#FEF2DD] border-y border-[#EDE1CC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline="WHAT WE OFFER"
          title="Explore Tozeur Your Way"
          subtitle="Whether you are looking for adventure, relaxation, or cultural discovery, we offer experiences that bring you closer to the essence of Tozeur."
          align="center"
        />

        {/* 5 Curated Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            // Give the 4th and 5th cards balanced responsive spans on desktop
            const spanClass =
              idx === 3
                ? "lg:col-span-1"
                : idx === 4
                ? "md:col-span-2 lg:col-span-2"
                : "";

            return (
              <div key={service.id} className={spanClass}>
                <ServiceCard
                  service={service}
                  onSelectService={onSelectService}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
