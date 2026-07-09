"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Puzzle, MessageCircle, Rocket, Heart } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { StaggerContainer, staggerItem } from "../ui/Animation";

const reasons = [
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapt to new technologies and techniques, ensuring your projects stay ahead of trends and deadlines.",
    color: "from-[#5CB8FF] to-[#A7D8FF]",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Meticulous in every aspect of work, from pixel-perfect designs to flawless animations and clean code.",
    color: "from-[#A7D8FF] to-[#5CB8FF]",
  },
  {
    icon: Puzzle,
    title: "Problem Solver",
    description: "Analytical approach to challenges, finding creative and efficient solutions to complex problems.",
    color: "from-[#5CB8FF] to-[#16243A]",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Keep you informed throughout the project with regular updates and transparent workflow.",
    color: "from-[#16243A] to-[#5CB8FF]",
  },
];

const stats = [
  { icon: Rocket, value: "100%", label: "Project Delivery Rate" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
];

export function WhyHireSection() {
  return (
    <section id="why-hire" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#5CB8FF]/10 to-[#A7D8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Me?"
          subtitle="What sets me apart and why I'm the right choice for your next project."
          icon={Zap}
        />

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5CB8FF] to-[#A7D8FF] flex items-center justify-center shadow-lg">
                <stat.icon size={28} className="text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#16243A]">{stat.value}</p>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard hover={true} className="p-8 h-full relative overflow-hidden">
                {/* Decorative gradient */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${reason.color} rounded-full opacity-10 blur-2xl`} />

                <div className="relative flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <reason.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#16243A] mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Number */}
                <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-[#E6EEF7] opacity-50 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
