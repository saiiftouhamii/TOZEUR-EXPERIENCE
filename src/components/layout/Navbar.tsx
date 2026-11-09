"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = siteConfig.navItems.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FFF9F0]/95 backdrop-blur-md shadow-sm border-b border-[#EDE1CC] py-3.5"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 transition-transform hover:scale-[1.02] duration-200"
          aria-label="TOZEUR EXPERIENCE Home"
        >
          <Image
            src={
              scrolled
                ? "/logo/tozeur-experience-logo.svg"
                : "/logo/tozeur-experience-logo-white.svg"
            }
            alt="TOZEUR EXPERIENCE Official Logo"
            width={220}
            height={52}
            priority
            className="h-10 sm:h-11 w-auto object-contain"
            style={{ maxHeight: "48px", width: "auto" }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold tracking-wide"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "py-1 relative transition-colors duration-200",
                  scrolled
                    ? isActive
                      ? "text-[#174C38] font-bold"
                      : "text-[#382719] hover:text-[#174C38]"
                    : isActive
                    ? "text-[#C99550] font-bold"
                    : "text-[#FFF9F0] hover:text-[#C99550]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 transition-all duration-300",
                    scrolled ? "bg-[#174C38]" : "bg-[#C99550]",
                    isActive ? "w-full" : "w-0 hover:w-full"
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* Discover Tozeur CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#services"
            className={cn(
              "inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5",
              scrolled
                ? "bg-[#174C38] text-white hover:bg-[#103B2D] border border-[#C99550]/40"
                : "bg-[#C99550] text-[#103B2D] hover:bg-[#E0B47A] border border-white/20"
            )}
          >
            <span>Discover Tozeur</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "md:hidden p-2.5 rounded-lg transition-colors cursor-pointer",
            scrolled
              ? "text-[#174C38] hover:bg-[#F4E8D3]"
              : "text-white hover:bg-white/10"
          )}
        >
          {mobileMenuOpen ? (
            <X className="size-7" />
          ) : (
            <Menu className="size-7" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-[#EDE1CC] px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 text-base font-semibold">
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between border-b border-[#F4E8D3]/80",
                    isActive
                      ? "bg-[#174C38] text-white font-bold"
                      : "text-[#382719] hover:bg-[#F4E8D3] hover:text-[#174C38]"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="size-2 rounded-full bg-[#C99550]" />}
                </a>
              );
            })}

            <div className="pt-3">
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#174C38] text-white font-bold text-center shadow-md hover:bg-[#103B2D] transition-colors"
              >
                <span>Discover Tozeur</span>
                <ArrowUpRight className="size-4 text-[#C99550]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
