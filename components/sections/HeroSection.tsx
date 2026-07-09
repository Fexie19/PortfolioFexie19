"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Motion Graphic Designer",
  "Video Editor",
  "Web Developer",
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring values for parallax
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform values for different elements
  const photoTransformX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const photoTransformY = useTransform(springY, [-0.5, 0.5], [-15, 15]);
  const blob1TransformX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const blob1TransformY = useTransform(springY, [-0.5, 0.5], [-30, 30]);
  const blob2TransformX = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const blob2TransformY = useTransform(springY, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FCFF] via-[#F9FCFF] to-white" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E6EEF7 1px, transparent 1px), linear-gradient(to bottom, #E6EEF7 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Blobs */}
      <motion.div
        style={{ x: blob1TransformX, y: blob1TransformY }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#A7D8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
      />
      <motion.div
        style={{ x: blob2TransformX, y: blob2TransformY }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#5CB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#DFF4FF] text-[#5CB8FF] text-sm font-medium rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#5CB8FF] rounded-full animate-pulse" />
              Available for Freelance
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#16243A] leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#5CB8FF] to-[#16243A] bg-clip-text text-transparent">
                Dafa
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-12 mb-6"
            >
              <span className="text-2xl sm:text-3xl font-semibold text-[#6B7280]">
                {displayText}
                <span className="inline-block w-0.5 h-8 bg-[#5CB8FF] ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-lg"
            >
              Creating stunning visual experiences and modern websites that captivate audiences and drive results.
              Passionate about motion design and web development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link href="#projects">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  View Projects
                </Button>
              </Link>
              <Button variant="secondary" size="lg" icon={Download}>
                Download CV
              </Button>
              <Link href="#contact">
                <Button variant="ghost" size="lg" icon={Mail}>
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[#6B7280]">Connect:</span>
              <div className="flex gap-3">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/Fexie19",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/dafajaya",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  // {
                  //   name: "Stack Overflow",
                  //   href: "https://fiverr.com",
                  //   icon: (
                  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  //       <path />
                  //     </svg>
                  //   ),
                  // },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#E6EEF7] text-[#6B7280] hover:text-[#5CB8FF] hover:border-[#A7D8FF] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              style={{ }}
              className="relative"
            >
              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-[#5CB8FF]/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#A7D8FF]/20 rounded-full blur-3xl"
              />

              {/* Photo Card */}
              <motion.div
                animate={{}}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                  {/* Placeholder Image - Replace with actual photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DFF4FF] via-[#A7D8FF] to-[#5CB8FF]">
                    {/* Profile silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/50 flex items-center justify-center">
                            <svg
                              className="w-10 h-10 text-[#5CB8FF]"
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
                          <span className="text-sm font-medium text-white/80">Dafa Jaya Priyatna</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16243A]/30 to-transparent" />
                </div>

                {/* Floating badge - Left */}
                <motion.div
                  animate={{}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-lg p-3 border border-[#E6EEF7]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DFF4FF] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#5CB8FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4V2M17 4V2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280]">Experience</p>
                      <p className="text-sm font-semibold text-[#16243A]">2+ Years</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge - Right */}
                <motion.div
                  animate={{ }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-lg p-3 border border-[#E6EEF7]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DFF4FF] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#5CB8FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280]">Projects</p>
                      <p className="text-sm font-semibold text-[#16243A]">40+</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative shapes */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#A7D8FF] rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#5CB8FF]/10 rounded-full -z-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#6B7280]">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-[#E6EEF7] flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#5CB8FF]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
