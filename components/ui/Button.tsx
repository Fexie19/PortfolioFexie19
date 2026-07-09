"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      isLoading = false,
      className = "",
      disabled,
      type = "button",
      onClick,
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 overflow-hidden";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#5CB8FF] to-[#A7D8FF] text-white shadow-[0_4px_15px_rgba(92,184,255,0.3)] hover:shadow-[0_6px_25px_rgba(92,184,255,0.45)] hover:-translate-y-0.5",
      secondary:
        "bg-white text-[#16243A] border border-[#E6EEF7] hover:bg-[#DFF4FF] hover:border-[#A7D8FF] hover:-translate-y-0.5",
      ghost:
        "text-[#6B7280] hover:text-[#16243A] hover:bg-[#DFF4FF]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 0.98 : 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
          disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <span className="animate-spin">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </span>
        ) : (
          <>
            {Icon && iconPosition === "left" && <Icon size={18} />}
            <span>{children}</span>
            {Icon && iconPosition === "right" && <Icon size={18} />}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
