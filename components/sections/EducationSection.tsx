"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { EducationCard } from "../ui/Timeline";

const educationData = [
  {
    degree: "IPB University",
    school: "Computer Engineering - Bachelor's Degree",
    year: "2025 - Now",
    description: "Currently pursuing a Bachelor's degree in Computer Engineering at IPB University. Engaged in coursework and projects that enhance my skills in software development, algorithms, and system design.",
    icon: GraduationCap,
  },
  {
    degree: "SMA Negeri 5 Pekanbaru",
    school: "Senior High School - Science Program",
    year: "2022 - 2025",
    description: "Completed Senior High School with a focus on Mathematics and Natural Sciences. Gained foundational knowledge in various subjects, preparing for higher education in computer engineering.",
    icon: GraduationCap,
  },
  {
    degree: "MTs Negeri 42 Jakarta",
    school: "Junior High School",
    year: "2019 - 2022",
    description: "Completed junior high school education with strong academic foundation. Developed early interests in technology and digital creativity.",
    icon: Award,
  },
  {
    degree: "SDI Al-Amal",
    school: "Elementary School",
    year: "2013 - 2019",
    description: "Completed elementary school education with strong academic foundation.",
    icon: Award,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#A7D8FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#5CB8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and the foundation that has shaped my journey."
          icon={GraduationCap}
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EducationCard
                degree={edu.degree}
                school={edu.school}
                year={edu.year}
                description={edu.description}
                icon={edu.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-2xl border border-[#E6EEF7] p-6 lg:p-8"
        >
          <h3 className="text-xl font-semibold text-[#16243A] mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#DFF4FF] flex items-center justify-center">
              <Award size={18} className="text-[#5CB8FF]" />
            </span>
            Online Certifications & Courses
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Adobe After Effects Complete Course", issuer: "Udemy" },
              { name: "React & Next.js Bootcamp", issuer: "Udemy" },
              { name: "Motion Graphics Fundamentals", issuer: "Skillshare" },
              { name: "UI/UX Design Masterclass", issuer: "Coursera" },
              { name: "Full Stack Web Development", issuer: "freeCodeCamp" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-3 p-4 bg-[#F9FCFF] rounded-xl hover:bg-[#DFF4FF] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-lg">📜</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#16243A]">{cert.name}</p>
                  <p className="text-xs text-[#6B7280]">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
