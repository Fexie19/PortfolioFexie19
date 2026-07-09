"use client";

import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  icon: Icon,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[#E6EEF7] text-[#6B7280]",
    primary: "bg-[#DFF4FF] text-[#5CB8FF]",
    secondary: "bg-[#F0F9FF] text-[#16243A]",
    accent: "bg-gradient-to-r from-[#5CB8FF]/10 to-[#A7D8FF]/10 text-[#5CB8FF]",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {Icon && <Icon size={size === "sm" ? 12 : 14} />}
      {children}
    </span>
  );
}
