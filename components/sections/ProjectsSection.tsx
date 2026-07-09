"use client";

import { motion } from "framer-motion";
import { Film, Video, Globe, ExternalLink, Play } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { StaggerContainer, staggerItem } from "../ui/Animation";
import Image from "next/image";
import { Link } from "lucide-react";

const categories = [
  {
    id: "motion",
    name: "Motion Graphics",
    icon: Film,
    color: "from-[#5CB8FF] to-[#A7D8FF]",
    projects: [
      {
        title: "Product Launch Animation",
        description: "Dynamic 3D product reveal animation for tech startup",
        tags: ["After Effects", "Cinema 4D", "Motion Design"],
        image: "/projects/motion-1.jpg",
        link: " ",
      },
      {
        title: "Brand Story Intro",
        description: "Cinematic brand introduction with animated typography",
        tags: ["After Effects", "Premiere Pro", "Color Grading"],
        image: "/projects/motion-2.jpg",
        link: " ",
      },
      {
        title: "Social Media Animations",
        description: "Engaging vertical animations for Instagram & TikTok",
        tags: ["After Effects", "Lottie", "Social Media"],
        image: "/projects/motion-3.jpg",
        link: " ",
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
        title: "Wedding Highlight Reel",
        description: "Emotional storytelling through cinematic editing",
        tags: ["Premiere Pro", "DaVinci", "Color Grading"],
        image: "/projects/video-1.jpg",
        link: " ",
      },
      {
        title: "Corporate Promo Video",
        description: "Professional business presentation with dynamic cuts",
        tags: ["Premiere Pro", "After Effects", "Sound Design"],
        image: "/projects/video-2.jpg",
        link: " ",
      },
      {
        title: "Music Video Edit",
        description: "Beat-synced music video with creative transitions",
        tags: ["Premiere Pro", "After Effects", "VFX"],
        image: "/projects/video-3.jpg",
        link: " ",
      },
    ],
  },
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
        title: "Portfolio Website",
        description: "Award-winning personal portfolio design",
        tags: ["Next.js", "Framer Motion", "TypeScript"],
        image: "/projects/web-2.jpg",
        link: " ",
      },
      {
        title: "Dashboard Application",
        description: "Admin panel with interactive data visualization",
        tags: ["React", "Laravel", "Chart.js"],
        image: "/projects/web-3.jpg",
        link: "https://aurum-coffee-landingpage.vercel.app/",
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
