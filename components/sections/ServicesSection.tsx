"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, Layout, Briefcase, Code, Settings } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { StaggerContainer, staggerItem } from "../ui/Animation";

const services = [
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations for videos, social media, and presentations that captivate your audience and communicate your message effectively.",
    features: ["Logo Animations", "Explainer Videos", "Social Media Content", "Title Sequences"],
    color: "from-[#5CB8FF] to-[#A7D8FF]",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services to transform raw footage into compelling visual stories with cinematic quality and smooth transitions.",
    features: ["Color Grading", "Sound Design", "VFX Compositing", "Multi-cam Editing"],
    color: "from-[#A7D8FF] to-[#5CB8FF]",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    description: "High-converting landing pages designed to capture leads, showcase products, and drive conversions with modern design and optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "A/B Testing Ready"],
    color: "from-[#5CB8FF] to-[#16243A]",
  },
  {
    icon: Briefcase,
    title: "Portfolio Website",
    description: "Stunning portfolio websites that showcase your work professionally, leaving a lasting impression on potential clients and employers.",
    features: ["Modern Design", "Project Galleries", "Contact Integration", "Easy to Update"],
    color: "from-[#16243A] to-[#5CB8FF]",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies, from simple websites to complex full-stack solutions tailored to your needs.",
    features: ["React/Next.js", "TypeScript", "REST APIs", "Database Integration"],
    color: "from-[#5CB8FF] to-[#A7D8FF]",
  },
  {
    icon: Settings,
    title: "Admin Dashboard",
    description: "Powerful and intuitive admin dashboards to manage your business data, users, and operations with beautiful data visualizations.",
    features: ["User Management", "Analytics Charts", "Report Generation", "Role-based Access"],
    color: "from-[#A7D8FF] to-[#16243A]",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5CB8FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#A7D8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive creative and technical services to bring your vision to life."
          icon={Sparkles}
        />

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard hover={true} className="h-full p-6 group">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#16243A] mb-3 group-hover:text-[#5CB8FF] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5CB8FF]" />
                      <span className="text-sm text-[#6B7280]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="mt-5 pt-5 border-t border-[#E6EEF7]">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#5CB8FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
