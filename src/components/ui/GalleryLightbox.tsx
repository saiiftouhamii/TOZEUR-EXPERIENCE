"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div
        className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium tracking-wider uppercase text-[#F4E8D3]">
          {currentIndex + 1} / {items.length} · {currentItem.category}
        </div>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="size-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer border border-white/20"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 size-12 sm:size-14 rounded-full bg-black/50 hover:bg-[#174C38] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:border-[#C99550] z-20 shadow-lg"
      >
        <ChevronLeft className="size-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 size-12 sm:size-14 rounded-full bg-black/50 hover:bg-[#174C38] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:border-[#C99550] z-20 shadow-lg"
      >
        <ChevronRight className="size-7" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[82vh] flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-black">
          <Image
            src={currentItem.image}
            alt={currentItem.alt}
            fill
            sizes="90vw"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-white font-serif text-lg sm:text-xl font-bold tracking-wide">
            {currentItem.title}
          </h3>
          <p className="text-[#F4E8D3]/85 text-xs sm:text-sm mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
