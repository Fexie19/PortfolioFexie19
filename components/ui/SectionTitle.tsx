"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  icon: Icon,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5CB8FF]/10 to-[#A7D8FF]/10 text-[#5CB8FF] mb-4">
          <Icon size={28} />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16243A] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1.5 bg-gradient-to-r from-[#5CB8FF] to-[#A7D8FF] rounded-full" />
    </motion.div>
  );
}
