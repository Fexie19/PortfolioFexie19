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
  // {
  //   name: "Fiverr",
  //   href: "https://fiverr.com",
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.468l.09.873h.046c.13-.4.455-.655.863-.655h.685v.547h.68c.546 0 .84-.41.84-1.092v-2.19h1.61v3.66h.002zm-5.73 3.39h-4.124V11.14h4.124v4.133zm-2.062-5.215c-.715 0-1.17.45-1.17 1.166v.794h1.952v-.5c0-.417-.12-.733-.782-.733zm.21 5.215h-1.89v-1.35c0-.68.342-1.033.96-1.033.655 0 .93.383.93 1.05v1.333h-1.89v-1.3c0-.68.328-1.05.955-1.05.6 0 .935.35.935 1.05v1.3zm-6.16-3.243c-.9 0-1.37.56-1.37 1.28v.47h1.39v-.23c0-.41-.19-.62-.69-.62-.46 0-.78.2-.88.59h-.85c.1-.9.87-1.48 1.93-1.48.91 0 1.76.4 1.76 1.42v2.86h-.88v-.56c-.2.35-.63.56-1.16.56-.77 0-1.27-.41-1.27-1.12 0-.72.5-1.22 1.26-1.22h.78v-.44c0-.46-.27-.72-.76-.72zm-.09 2.02c-.34 0-.56-.14-.56-.43s.22-.44.56-.44c.34 0 .56.14.56.43-.01.29-.22.44-.56.44zm2.89 1.223h-1.61v-3.558h1.61v3.558zm-2.88-5.215c-.715 0-1.17.45-1.17 1.166v.794h1.952v-.5c0-.417-.12-.733-.782-.733zm.21 5.215h-1.89v-1.35c0-.68.342-1.033.96-1.033.655 0 .93.383.93 1.05v1.333h-1.89v-1.3c0-.68.328-1.05.955-1.05.6 0 .935.35.935 1.05v1.3zm-4.63.18c.82 0 1.45-.43 1.45-1.27 0-.83-.63-1.27-1.45-1.27-.83 0-1.46.44-1.46 1.27 0 .84.63 1.27 1.46 1.27zm.02-.94c.49 0 .78-.27.78-.8 0-.54-.29-.8-.78-.8-.48 0-.77.26-.77.8 0 .53.29.8.77.8zm-4.13 2.58H.73V11.14h2.02v.57c.22-.39.58-.59 1.16-.59.86 0 1.42.51 1.42 1.55v2.83H5.04v-2.34c0-.55-.28-.85-.78-.85-.5 0-.78.3-.78.85v2.34z" />
  //     </svg>
  //   ),
  // },
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
              © {new Date().getFullYear()} Dafa Jaya Priyatna. All Right Reserved{" "}
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
