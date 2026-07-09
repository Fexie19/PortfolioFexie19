"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        bg-white/80 backdrop-blur-xl
        border border-white/50
        rounded-2xl
        shadow-[0_8px_30px_rgba(22,36,58,0.08)]
        ${hover ? "hover:shadow-[0_20px_40px_rgba(22,36,58,0.12)]" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color?: "primary" | "accent" | "secondary";
}

export function StatCard({ icon: Icon, label, value, color = "primary" }: StatCardProps) {
  const colors = {
    primary: "from-[#5CB8FF]/10 to-[#A7D8FF]/10 text-[#5CB8FF]",
    accent: "from-[#16243A]/5 to-[#16243A]/10 text-[#16243A]",
    secondary: "from-[#6B7280]/10 to-[#6B7280]/5 text-[#6B7280]",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-[#E6EEF7] p-5 shadow-sm hover:shadow-lg hover:border-[#A7D8FF]/30 transition-all duration-300"
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} mb-4`}
      >
        <Icon size={24} />
      </div>
      <p className="text-3xl font-bold text-[#16243A] mb-1">{value}</p>
      <p className="text-sm text-[#6B7280]">{label}</p>
    </motion.div>
  );
}
