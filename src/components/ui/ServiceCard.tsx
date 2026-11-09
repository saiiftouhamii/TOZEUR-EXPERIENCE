"use client";

import React from "react";
import Image from "next/image";
import {
  Palmtree,
  Sun,
  Landmark,
  Bike,
  Sparkles,
  ChevronRight,
  Check,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Palmtree,
  Sun,
  Landmark,
  Bike,
  Sparkles,
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (serviceTitle: string) => void;
}

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  const handleClick = (e: React.MouseEvent) => {
    if (onSelectService) {
      e.preventDefault();
      onSelectService(service.title);
    }
  };

  return (
    <article className="group bg-[#FFF9F0] rounded-2xl overflow-hidden border border-[#EDE1CC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Card Image */}
      <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F4E8D3]">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
        <span className="absolute top-4 right-4 bg-[#174C38]/90 text-[#FFF9F0] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-[#C99550]/40 shadow-sm">
          {service.tag}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Icon Badge */}
          <div className="size-12 rounded-xl bg-[#F4E8D3] border border-[#EDE1CC] flex items-center justify-center text-[#174C38] mb-5 group-hover:bg-[#174C38] group-hover:text-[#FFF9F0] transition-colors duration-300">
            <IconComponent className="size-6 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#174C38] mb-3 leading-snug">
            {service.title}
          </h3>

          <p className="text-sm text-[#404944] leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 pt-4 border-t border-[#EDE1CC]/70">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-[#382719] font-medium"
              >
                <Check className="size-3.5 text-[#C99550] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#EDE1CC]">
          <a
            href="#contact"
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B86F3D] hover:text-[#174C38] transition-colors group-hover:gap-2.5 duration-200"
          >
            <span>Discover More</span>
            <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
