import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  );
}

function TikTokIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v9.12c-.03 2.05-.72 4.09-2.04 5.68-1.57 1.9-3.95 2.99-6.39 3.03-2.43.05-4.84-.96-6.49-2.73-1.64-1.76-2.46-4.18-2.31-6.61.16-2.44 1.29-4.74 3.14-6.33 1.86-1.6 4.34-2.37 6.77-2.14v4.2c-1.3-.23-2.67.04-3.75.76-1.07.72-1.77 1.94-1.87 3.23-.11 1.3.38 2.61 1.32 3.5 1.12 1.05 2.78 1.36 4.17.76 1.01-.44 1.75-1.38 1.95-2.46.06-.31.08-.63.08-.94V.02z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#103B2D] text-[#FFF9F0] border-t border-[#C99550]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#174C38]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="inline-block" aria-label="TOZEUR EXPERIENCE">
              <div className="relative h-12 w-60">
                <Image
                  src="/logo/tozeur-experience-logo-white.svg"
                  alt="TOZEUR EXPERIENCE Official Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>

            <p className="text-[#F4E8D3]/85 text-sm leading-relaxed max-w-sm">
              TOZEUR EXPERIENCE invites you to discover the magic of southern
              Tunisia through bespoke desert adventures, historic oasis
              discovery, and authentic local cultural heritage.
            </p>

            <div className="pt-1">
              <p className="font-serif italic text-[#C99550] text-lg">
                “Vivez l’essence de Tozeur”
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C99550] mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#F4E8D3]/80 hover:text-white hover:underline transition-colors decoration-[#C99550] underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C99550] mb-6">
              Connect With Us
            </h4>

            <div className="space-y-3 text-sm text-[#F4E8D3]/90">
              <p className="flex items-center gap-3">
                <Phone className="size-4 text-[#C99550] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 text-[#C99550] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white font-medium transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <InstagramIcon className="size-4 text-[#C99550] shrink-0" />
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-[#C99550] shrink-0" />
                <span className="text-[#F4E8D3]/80">Tozeur, Tunisia</span>
              </p>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-10 rounded-lg bg-white/10 hover:bg-[#C99550] hover:text-[#103B2D] text-[#FFF9F0] transition-all flex items-center justify-center border border-white/10"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 rounded-lg bg-white/10 hover:bg-[#C99550] hover:text-[#103B2D] text-[#FFF9F0] transition-all flex items-center justify-center border border-white/10"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="size-10 rounded-lg bg-white/10 hover:bg-[#C99550] hover:text-[#103B2D] text-[#FFF9F0] transition-all flex items-center justify-center border border-white/10"
              >
                <TikTokIcon className="size-5" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-lg bg-white/10 hover:bg-[#C99550] hover:text-[#103B2D] text-[#FFF9F0] transition-all flex items-center justify-center border border-white/10"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4E8D3]/70 gap-4">
          <p>© 2026 TOZEUR EXPERIENCE. All Rights Reserved.</p>
          <p className="tracking-wide">
            Vivez l’essence de Tozeur — Southern Tunisia
          </p>
        </div>
      </div>
    </footer>
  );
}
