"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Badge } from "./Badge";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  isLast?: boolean;
}

export function TimelineItem({
  date,
  title,
  company,
  description,
  tags = [],
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-3 w-0.5 h-[calc(100%-1.5rem)] bg-gradient-to-b from-[#5CB8FF] to-[#A7D8FF]" />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-2 border-[#5CB8FF] shadow-[0_0_0_4px_rgba(92,184,255,0.2)]"
      >
        <div className="absolute inset-1.5 rounded-full bg-[#5CB8FF]" />
      </motion.div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-[#E6EEF7] p-6 ml-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span className="inline-block px-3 py-1 text-xs font-medium text-[#5CB8FF] bg-[#DFF4FF] rounded-full mb-3">
          {date}
        </span>
        <h3 className="text-lg font-semibold text-[#16243A] mb-1">{title}</h3>
        <p className="text-[#5CB8FF] font-medium mb-3">{company}</p>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="accent" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
  description?: string;
  icon?: LucideIcon;
}

export function EducationCard({
  degree,
  school,
  year,
  description,
  icon: Icon,
}: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-[#E6EEF7] p-6 shadow-sm hover:shadow-xl hover:border-[#A7D8FF]/30 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#5CB8FF]/10 to-[#A7D8FF]/10 flex items-center justify-center group-hover:from-[#5CB8FF]/20 group-hover:to-[#A7D8FF]/20 transition-all duration-300">
          {Icon ? (
            <Icon size={28} className="text-[#5CB8FF]" />
          ) : (
            <svg
              className="w-7 h-7 text-[#5CB8FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#5CB8FF] bg-[#DFF4FF] rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-[#16243A] mb-1 truncate">
            {degree}
          </h3>
          <p className="text-[#6B7280] font-medium mb-2">{school}</p>
          {description && (
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
