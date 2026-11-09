"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#103B2D]"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Cinematic landscape of golden Saharan sand dunes in Tozeur, Tunisia at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Layered overlays to guarantee optimal contrast and luxurious mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#103B2D]/75 via-[#174C38]/45 to-[#103B2D]/85" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-32 text-center flex flex-col items-center">
        {/* Overline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F0]/15 backdrop-blur-md border border-[#C99550]/60 text-[#F4E8D3] text-xs font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
          <Sparkles className="size-3.5 text-[#C99550]" />
          <span>DISCOVER SOUTHERN TUNISIA</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-[#FFF9F0] tracking-tight leading-[1.12] mb-6 drop-shadow-lg max-w-4xl">
          Discover the Magic of Tozeur
        </h1>

        {/* Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F4E8D3]/95 font-normal max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          From breathtaking desert adventures to peaceful oasis escapes,
          discover the authentic beauty, culture, and unforgettable experiences
          of Tozeur.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#174C38] text-white text-base font-bold tracking-wide hover:bg-[#103B2D] border border-[#C99550]/50 shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <span>Explore Our Experiences</span>
            <ArrowRight className="size-4 text-[#C99550] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-[#F4E8D3]/40 text-[#FFF9F0] text-base font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#F4E8D3]/75 hover:text-white transition-colors duration-200"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-1">
          Scroll
        </span>
        <ArrowDown className="size-5 animate-bounce text-[#C99550]" />
      </a>
    </section>
  );
}
