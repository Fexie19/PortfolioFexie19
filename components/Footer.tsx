"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const socialLinks = [
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
  {
    name: "Discord",
    href: "https://discord.gg/qG8C8dHq",
    icon: (
      <svg xmlns="http://w3.org" viewBox="0 0 127.14 96.36" width="1em" height="1em" fill="currentColor">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.72-11A68.6,68.6,0,0,1,28,80.77c1.1-.81,2.16-1.66,3.18-2.54a74.11,74.11,0,0,0,74.74,0c1,1,2.08,1.73,3.19,2.54a68.55,68.55,0,0,1-10.74,4.55,74.07,74.07,0,0,0,6.73,11,105.54,105.54,0,0,0,31-18.83C129.58,48.24,123.3,25.47,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/s/qDEo8Wg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="1em" height="1em" fill="currentColor" className="w-5 h-5">
        <path d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z" />
      </svg>
    ),
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#E6EEF7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-[#5CB8FF] to-[#16243A] bg-clip-text text-transparent">
                  Dafa Jaya Priyatna
                </span>
              </motion.div>
              <p className="text-[#6B7280] leading-relaxed mb-6 max-w-md">
                Motion Graphic Designer, Video Editor, and Web Developer crafting beautiful digital experiences.
                Let's create something amazing together.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F9FCFF] border border-[#E6EEF7] text-[#6B7280] hover:text-[#5CB8FF] hover:border-[#A7D8FF] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#16243A] mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-[#6B7280] hover:text-[#5CB8FF] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-[#16243A] mb-4">Contact</h4>
              <ul className="space-y-3 text-[#6B7280]">
                <li>Jakarta, Indonesia</li>
                <li>dafajayapriyatna5@gmail.com</li>
                <li>+62-821-2282-1309</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#E6EEF7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#6B7280] flex items-center gap-1">
              © {new Date().getFullYear()} Fexie19. All Right Reserved{" "}
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#F9FCFF] border border-[#E6EEF7] rounded-full text-[#6B7280] hover:text-[#5CB8FF] hover:border-[#A7D8FF] transition-colors"
              aria-label="Back to top"
            >
              Back to Top
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
