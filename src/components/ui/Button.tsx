import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C99550] focus:ring-offset-2 cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-[#174C38] text-white hover:bg-[#103B2D] border border-[#C99550]/30 shadow-md hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-[#C99550] text-[#103B2D] hover:bg-[#E0B47A] shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#174C38] border-2 border-[#174C38] hover:bg-[#174C38] hover:text-white",
    white:
      "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 shadow-sm",
    ghost:
      "bg-transparent text-[#174C38] hover:bg-[#F4E8D3]/50",
  };

  const combined = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
