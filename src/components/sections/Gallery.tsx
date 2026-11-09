"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { galleryData } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline="EXPLORE THE BEAUTY"
          title="Moments from Tozeur"
          subtitle="Every corner tells a story. Explore the landscapes, adventures, and unforgettable moments that make Tozeur special."
          align="center"
        />

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${item.title}`}
              className={cn(
                "relative group overflow-hidden rounded-2xl h-80 sm:h-96 shadow-md cursor-pointer border border-[#EDE1CC] focus:outline-none focus:ring-2 focus:ring-[#C99550]",
                item.aspectSpan || "md:col-span-1"
              )}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99550]">
                    {item.category}
                  </span>
                  <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="size-4 text-white" />
                  </div>
                </div>

                <p className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-[#F4E8D3]/80 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={galleryData}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
