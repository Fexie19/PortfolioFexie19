"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Clock } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { TimelineItem } from "../ui/Timeline";

export function ExperienceSection() {
  return (
    <section id="experience" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#5CB8FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#A7D8FF]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and the valuable experiences I've gained along the way."
          icon={Briefcase}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Stats */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#E6EEF7] p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#16243A] mb-4">Key Highlights</h3>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, value: "40+", label: "Projects Completed" },
                  { icon: Users, value: "30+", label: "Happy Clients" },
                  { icon: Clock, value: "2+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5CB8FF]/10 to-[#A7D8FF]/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon size={24} className="text-[#5CB8FF]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#16243A]">{stat.value}</p>
                      <p className="text-sm text-[#6B7280]">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-[#E6EEF7] p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#16243A] mb-4">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Adobe After Effects",
                  "Visual Studio Code",
                  "Capcut",
                  "Blender",
                ].map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="px-3 py-1.5 text-sm font-medium text-[#5CB8FF] bg-[#DFF4FF] rounded-full"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Timeline */}
          <div className="lg:col-span-2">
            <TimelineItem
              date="2025 - Present"
              title="Active Member"
              company="Google Developer Groups on Campus IPB University"
              description="Learn about Data Science and Artificial Intelligence currently."
              tags={["Artificial Intelligence", "Data Science", "Algorithm", "AI Trainer"]}
            />

            <TimelineItem
              date="2023 - Present"
              title="Freelance Motion Graphic Designer & Video Editor"
              company="Fiverr & Upwork"
              description="As a freelance motion graphic designer and video editor on Fiverr, I specialize in creating engaging visual content for clients worldwide. I deliver high-quality animations, explainer videos, and promotional content that help businesses capture their audience's attention and communicate their message effectively."
              tags={["Adobe After Effects", "Video Editing", "Client Communication", "Remote Work", "Project Management"]}
            />

            <TimelineItem
              date="2022 - 2023"
              title="Creative Content Creator"
              company="Personal Projects"
              description="Developed personal creative projects including motion graphics, video edits, and web designs. Built a strong foundation in visual storytelling and digital content creation while exploring various creative styles and techniques."
              tags={["Motion Graphics", "Web Design", "Creative Direction", "Self-Learning"]}
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
