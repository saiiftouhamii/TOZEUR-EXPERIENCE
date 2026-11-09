import React from "react";
import Image from "next/image";
import { Handshake, Mountain, Landmark, Compass, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const iconMap: Record<string, React.ElementType> = {
  Handshake,
  Mountain,
  Landmark,
  Compass,
};

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFF9F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image with Decorative Architectural Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4E8D3] bg-[#F4E8D3]">
              <div className="relative h-[420px] sm:h-[500px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCukEIBsYZRNejO-LtQ_k4Z4ZqGrBz0azgIaAqMyL-kw7l73GOONz2fcF0I66jtKG2_-VbK3Qqjwpg_N2KJGXa6QE5Dmo0aYzsEZaNaxMEArk-Yy0b6dGN9UHKQbbRJC5FJG23_Uvxp5EAm3egJSBz3zCzuwQ7y9huI2cUgl3Pp2psW2j27cSACj12_my_98K4SzxtrmZ-_cZfUTE5FbQkAoFHKf612piPuQaPmDs"
                  alt="Mountain oasis of Chebika with cascading turquoise waterfall and palm trees in southern Tunisia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#103B2D]/90 via-[#103B2D]/50 to-transparent p-6 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C99550] font-bold block mb-1">
                  Iconic Landmark
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold">
                  Mountain Oasis of Chebika
                </p>
              </div>
            </div>

            {/* Decorative Background Frame */}
            <div className="absolute -bottom-6 -right-6 w-52 h-52 border-2 border-[#C99550]/40 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right: Narrative & 4 Brand Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#C99550]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B86F3D]">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C38] leading-[1.18] mb-6">
              More Than a Journey, An Authentic Experience
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#404944] leading-relaxed mb-8">
              At TOZEUR EXPERIENCE, we believe that discovering a destination
              means experiencing its soul. We invite you to explore the natural
              beauty, rich heritage, and unique landscapes of Tozeur through
              authentic and memorable experiences.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {siteConfig.brandValues.map((value, idx) => {
                const IconComp = iconMap[value.icon] || Compass;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FEF2DD] border border-[#EDE1CC] hover:border-[#C99550]/60 transition-colors duration-200"
                  >
                    <div className="size-10 rounded-lg bg-[#174C38] text-[#C99550] flex items-center justify-center shrink-0 shadow-sm">
                      <IconComp className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#174C38] text-sm mb-1 leading-snug">
                        {value.title}
                      </h4>
                      <p className="text-xs text-[#404944] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discover Button */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#174C38] text-white text-sm font-bold tracking-wide hover:bg-[#103B2D] border border-[#C99550]/40 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Discover Our Experiences</span>
                <ArrowRight className="size-4 text-[#C99550] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
