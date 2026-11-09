import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-14 lg:mb-18",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {overline && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3.5",
            isCenter && "justify-center"
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              isDark ? "bg-[#C99550]" : "bg-[#C99550]"
            )}
          />
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.25em]",
              isDark ? "text-[#E0B47A]" : "text-[#B86F3D]"
            )}
          >
            {overline}
          </span>
          <span
            className={cn(
              "h-px w-6",
              isCenter ? (isDark ? "bg-[#C99550]" : "bg-[#C99550]") : "hidden"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] mb-4.5",
          isDark ? "text-[#FFF9F0]" : "text-[#174C38]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "font-sans text-base sm:text-lg leading-relaxed max-w-2xl",
            isCenter && "mx-auto",
            isDark ? "text-[#F4E8D3]/85" : "text-[#404944]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
