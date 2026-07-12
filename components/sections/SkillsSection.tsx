"use client";

import { motion } from "framer-motion";
import { Wrench, Brain, Code, Layers, PenTool, Monitor } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { CircularProgress } from "../ui/Progress";
import { GlassCard } from "../ui/GlassCard";
import { StaggerContainer, staggerItem } from "../ui/Animation";

const technicalSkills = [
  { name: "Adobe After Effects", percentage: 95, color: "#5CB8FF" },
  { name: "Microsoft Office", percentage: 90, color: "#5CB8FF" },
  { name: "Web Development", percentage: 90, color: "#5CB8FF" },
  { name: "Machine Learning", percentage: 75, color: "#5CB8FF" },
];

const softSkills = [
  { icon: Brain, title: "Creative Thinking", description: "Approaching challenges with innovative solutions and unique perspectives" },
  { icon: Layers, title: "Attention to Detail", description: "Ensuring precision and quality in every project element" },
  { icon: PenTool, title: "Visual Design", description: "Creating aesthetically pleasing and functional designs" },
  { icon: Monitor, title: "Self-Motivated", description: "Proactively learning and improving skills independently" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5CB8FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#A7D8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical abilities and soft skills that I bring to every project."
          icon={Wrench}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DFF4FF] flex items-center justify-center">
                <Code size={24} className="text-[#5CB8FF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#16243A]">Technical Skills</h3>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex justify-center"
                >
                  <GlassCard hover={true} className="p-4 w-full flex flex-col items-center">
                    <CircularProgress
                      percentage={skill.percentage}
                      label={skill.name}
                      size={100}
                      strokeWidth={6}
                      color={skill.color}
                    />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DFF4FF] flex items-center justify-center">
                <Brain size={24} className="text-[#5CB8FF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#16243A]">Soft Skills</h3>
            </motion.div>

            <StaggerContainer staggerDelay={0.1} className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard hover={true} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5CB8FF]/10 to-[#A7D8FF]/10 flex items-center justify-center flex-shrink-0">
                        <skill.icon size={24} className="text-[#5CB8FF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#16243A] mb-1">{skill.title}</h4>
                        <p className="text-sm text-[#6B7280] leading-relaxed">{skill.description}</p>
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
