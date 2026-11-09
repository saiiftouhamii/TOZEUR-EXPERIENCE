import React from "react";
import { eventsData } from "@/data/events";
import { EventCard } from "@/components/ui/EventCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Events() {
  return (
    <section
      id="events"
      className="py-24 lg:py-32 bg-[#174C38] text-[#FFF9F0] relative overflow-hidden"
    >
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#103B2D] rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          overline="WHAT'S HAPPENING"
          title="Discover Our Events & Special Experiences"
          subtitle="Be part of unique moments and discover Tozeur through special activities, local experiences, and customized adventures."
          align="center"
          theme="dark"
        />

        {/* 3 Distinct Event Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
