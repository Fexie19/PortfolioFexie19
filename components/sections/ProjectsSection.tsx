"use client";

import { motion } from "framer-motion";
import { Film, Video, Globe, ExternalLink, Play } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { StaggerContainer, staggerItem } from "../ui/Animation";
import Image from "next/image";
import { Link } from "lucide-react";

const categories = [
  // {
  //   id: "motion",
  //   name: "Motion Graphics",
  //   icon: Film,
  //   color: "from-[#5CB8FF] to-[#A7D8FF]",
  //   projects: [
  //     {
  //       title: "Product Launch Animation",
  //       description: "Dynamic 3D product reveal animation for tech startup",
  //       tags: ["After Effects", "Cinema 4D", "Motion Design"],
  //       image: "/projects/motion-1.jpg",
  //       link: " ",
  //     },
  //     {
  //       title: "Brand Story Intro",
  //       description: "Cinematic brand introduction with animated typography",
  //       tags: ["After Effects", "Premiere Pro", "Color Grading"],
  //       image: "/projects/motion-2.jpg",
  //       link: " ",
  //     },
  //     {
  //       title: "Social Media Animations",
  //       description: "Engaging vertical animations for Instagram & TikTok",
  //       tags: ["After Effects", "Lottie", "Social Media"],
  //       image: "/projects/motion-3.jpg",
  //       link: " ",
  //     },
  //   ],
  // },

  {
    id: "web",
    name: "Web Development",
    icon: Globe,
    color: "from-[#5CB8FF] to-[#16243A]",
    projects: [
      {
        title: "Business Landing Page",
        description: "Modern and Proffessional landing page for a startup",
        tags: ["React", "Next.js", "Tailwind CSS"],
        image: "/Landing-Page.jpeg",
        link: "https://aurum-coffee-landingpage.vercel.app/",
      },
      {
        title: "Travel Website",
        description: "A single visual webpage built to turn visitors into instant trip bookings.",
        tags: ["React", "NextJs", "Tailwind CSS"],
        image: "/travelweb.jpg",
        link: "https://ftravel-porto.vercel.app/",
      },
      {
        title: "Archwngs - AskAboutMe",
        description: "Archwngs is an interactive AI that uses a digital persona to pitch my profile.",
        tags: ["React", "Python", "FASTAPI"],
        image: "/archwngs.jpg",
        link: "https://askaboutme.vercel.app/",
      },
    ],
  },
    {
    id: "video",
    name: "Video Editing",
    icon: Video,
    color: "from-[#A7D8FF] to-[#5CB8FF]",
    projects: [
      {
        title: "Photo Music Video",
        description: "Beat-synced music video with creative transitions",
        tags: ["After Effects", "VFX"],
        image: "/pmv.jpeg",
        link: "https://www.instagram.com/p/C-STBDby7Fh/?igsh=anNzYTQ4MGM2eDh1",
      },
      {
        title: "Vtuber Music Video",
        description: "Dynamic music video featuring animated VTuber character",
        tags: ["Premiere Pro", "After Effect"],
        image: "/VtuberMV.jpg",
        link: "https://youtu.be/flRmh3JPsV8?si=nafG-bvk8obcMSyx",
      },
      {
        title: "Typhography Music Video",
        description: "Kinetic typography music video with synchronized lyrics and visuals",
        tags: ["After Effects"],
        image: "/pmv2.jpeg",
        link: "https://www.instagram.com/p/C-jJuXqSSCz/?igsh=MW5xNzJ4ajd0eTk2NA==",
      },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A7D8FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#5CB8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my best work across different creative disciplines."
          icon={Film}
        />

        {categories.map((category) => (
          <div key={category.id} className="mb-16 last:mb-0">
            {/* Category Header */}
            <StaggerContainer staggerDelay={0.05} className="flex items-center gap-4 mb-8">
              <motion.div variants={staggerItem} className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#16243A]">{category.name}</h3>
              </motion.div>
              <motion.div variants={staggerItem} className="flex-1 h-px bg-gradient-to-r from-[#E6EEF7] to-transparent" />
            </StaggerContainer>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-[#E6EEF7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF4FF] via-[#A7D8FF] to-[#5CB8FF]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image src={project.image} alt={project.title} fill className="object-cover"/>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#16243A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">

                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, backgroundColor: "#8FD4FF", color: "#FFFFFF" }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 font-medium text-[#16243A] shadow-lg"
                        >
                          Visit Project
                        </motion.a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-[#16243A] mb-2 group-hover:text-[#5CB8FF] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="accent" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
