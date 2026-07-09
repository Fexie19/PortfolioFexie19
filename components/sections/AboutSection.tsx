"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Palette, Code, Sparkles } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard, StatCard } from "../ui/GlassCard";
import { StaggerContainer, staggerItem } from "../ui/Animation";

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", color: "primary" as const },
  { icon: GraduationCap, label: "Education", value: "IPB University", color: "primary" as const },
  { icon: Award, label: "Status", value: "Freelancer", color: "accent" as const },
  { icon: Palette, label: "Expertise", value: "Motion Design", color: "primary" as const },
  { icon: Code, label: "Focus", value: "Web Development", color: "primary" as const },
  { icon: Sparkles, label: "Passion", value: "Creative Design", color: "accent" as const },
];

export function AboutSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D8FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5CB8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me, my background, and what drives my passion for design and development."
          icon={Sparkles}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#A7D8FF]/50 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-[#5CB8FF]/20" />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <div className="w-full h-full bg-gradient-to-br from-[#DFF4FF] via-[#A7D8FF] to-[#5CB8FF] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-12 sm:w-16 h-12 sm:h-16 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{  }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🎨</span>
              </motion.div>
              <motion.div
                animate={{ }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-12 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#16243A] mb-6">
                Creative Motion Designer &{" "}
                <span className="bg-gradient-to-r from-[#5CB8FF] to-[#A7D8FF] bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#6B7280] leading-relaxed mb-6"
            >
              I am a passionate Motion Graphic Designer, Video Editor, and Web Developer based in Jakarta, Indonesia.
              With expertise in Adobe After Effects and modern web technologies, I create visually stunning content
              and functional websites that leave lasting impressions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#6B7280] leading-relaxed mb-8"
            >
              My journey in creative design started with a fascination for visual storytelling.
              Today, I combine this passion with technical skills to deliver comprehensive solutions
              for clients worldwide. Whether it's an animated explainer video or a modern web application,
              I bring creativity and precision to every project.
            </motion.p>

            {/* Quick Facts Grid */}
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard hover={true} className="p-4 h-full">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                        fact.color === "primary"
                          ? "from-[#5CB8FF]/20 to-[#A7D8FF]/20"
                          : "from-[#16243A]/5 to-[#16243A]/10"
                      } flex items-center justify-center flex-shrink-0`}>
                        <fact.icon size={20} className={fact.color === "primary" ? "text-[#5CB8FF]" : "text-[#16243A]"} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[#6B7280]">{fact.label}</p>
                        <p className="text-sm font-semibold text-[#16243A] truncate">{fact.value}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
