"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink, Compass } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactProps {
  selectedService?: string | null;
}

export function Contact({ selectedService }: ContactProps) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline="LET'S CONNECT"
          title="Your Next Adventure Starts Here"
          subtitle="Ready to discover Tozeur? Get in touch with our team and let us help you plan your next experience."
          align="left"
        />

        {selectedService && (
          <div className="mb-8 p-4 rounded-xl bg-[#FEF2DD] border border-[#C99550] flex items-center justify-between animate-in fade-in">
            <p className="text-sm text-[#174C38] font-medium">
              You are inquiring about:{" "}
              <strong className="font-bold text-[#B86F3D]">
                {selectedService}
              </strong>
              . Connect directly with us via phone or email below!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC] hover:border-[#C99550] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#103B2D] transition-transform duration-300 shadow-sm">
                <Phone className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  Direct Call & WhatsApp
                </p>
                <p className="text-xl font-bold text-[#174C38] group-hover:text-[#B86F3D] transition-colors">
                  {siteConfig.phone}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  Available for instant inquiries, tour bookings, and custom quotes.
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC] hover:border-[#C99550] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#103B2D] transition-transform duration-300 shadow-sm">
                <Mail className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  Electronic Mail
                </p>
                <p className="text-xl font-bold text-[#174C38] group-hover:text-[#B86F3D] transition-colors break-all">
                  {siteConfig.email}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  We reply to bespoke travel and group itineraries within 24 hours.
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC]">
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  Our Address
                </p>
                <p className="text-base font-bold text-[#174C38]">
                  {siteConfig.addressPlaceholder}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  Tozeur Oasis & Medina District, Southern Tunisia.
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC]">
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  Operating Hours
                </p>
                <p className="text-base font-bold text-[#174C38]">
                  Monday – Sunday: 08:00 AM – 08:00 PM (GMT+1)
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  Daily concierge assistance & private excursion planning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Location Visual & Google Maps Preview */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#FEF2DD] border border-[#EDE1CC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86F3D] block mb-1">
                      Destination
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#174C38]">
                      Tozeur, Tunisia
                    </h3>
                  </div>
                  <div className="size-12 rounded-full bg-[#174C38]/10 flex items-center justify-center text-[#174C38]">
                    <Compass className="size-6 text-[#C99550]" />
                  </div>
                </div>

                {/* Map Visual Preview Container */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 border border-[#EDE1CC] shadow-inner bg-[#EDE1CC]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApowW7wJxV6RcFDPqWm9bumc6EyJkA_B4knZlG-gDyWegO8gboUyEjZjZ8SeJNiDdHbNjSNp5LN60OWbArzZXpBdjzoR0C7mmo7ws9RezmqDi9kvh1iiwTLugTMfU_G7Ik60d27Zmj-ucYAwVqexnRHuVVoWZjxTHTimEV3d4iONGwvPqrPq8hxKBONUeRsoQibCT_JgM5eZ-4UYCebhZESreZdTP-ofNHW-CglLM"
                    alt="Map overview representation of Tozeur Tunisia coordinates and oasis perimeter"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#174C38]/20 backdrop-brightness-95 flex items-center justify-center">
                    <div className="bg-[#FFF9F0] px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-[#C99550]">
                      <MapPin className="size-4 text-[#B86F3D]" />
                      <span className="text-xs font-bold text-[#174C38]">
                        Tozeur 33.9197° N, 8.1335° E
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#404944] leading-relaxed mb-6">
                  Experience unforgettable desert excursions, mountain oasis
                  treks, and historic medina heritage walks with our local concierge
                  team.
                </p>
              </div>

              {/* Google Maps CTA */}
              <div className="pt-4 border-t border-[#EDE1CC]">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#174C38] text-white font-bold text-sm hover:bg-[#103B2D] border border-[#C99550]/40 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>{siteConfig.mapsUrl ? "View on Google Maps" : "[GOOGLE MAPS LINK TO BE PROVIDED]"}</span>
                  <ExternalLink className="size-4 text-[#C99550] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
