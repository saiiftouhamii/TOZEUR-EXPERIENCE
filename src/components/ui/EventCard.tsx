"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles, Moon, Compass, Apple } from "lucide-react";
import { EventItem } from "@/data/events";

const iconMap: Record<string, React.ElementType> = {
  Moon,
  Apple,
  Compass,
  Sparkles,
};

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const IconComponent = iconMap[event.iconName] || Sparkles;

  return (
    <article className="bg-[#103B2D]/85 backdrop-blur-md rounded-2xl overflow-hidden border border-[#C99550]/25 hover:border-[#C99550]/70 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 group">
      {/* Event Header Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={event.image}
          alt={event.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#103B2D] via-black/40 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#174C38]/90 text-[#F4E8D3] border border-[#C99550]/40 backdrop-blur-sm">
            {event.tag}
          </span>
          <div className="size-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-[#C99550]">
            <IconComponent className="size-4" />
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#FFF9F0] mb-4 group-hover:text-[#E0B47A] transition-colors leading-tight">
            {event.title}
          </h3>

          <div className="space-y-2.5 mb-6 text-sm text-[#F4E8D3]/90">
            <div className="flex items-center gap-2.5">
              <Calendar className="size-4 text-[#C99550] shrink-0" />
              <span>
                Date:{" "}
                <strong className="text-white font-medium">
                  {event.datePlaceholder}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="size-4 text-[#C99550] shrink-0" />
              <span>
                Location:{" "}
                <strong className="text-white font-medium">
                  {event.location}
                </strong>
              </span>
            </div>
          </div>

          <p className="text-sm text-[#F4E8D3]/80 leading-relaxed mb-6 font-normal">
            {event.description}
          </p>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-white/10">
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFF9F0] text-[#174C38] font-bold text-sm hover:bg-[#C99550] hover:text-[#103B2D] transition-colors duration-200 shadow-md group/btn"
          >
            <span>Get in Touch</span>
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
