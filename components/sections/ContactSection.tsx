"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+62 821 2282 1309",
    href: "tel:+6281222821309",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dafajayapriyatna5@gmail.com",
    href: "mailto:dafajaya@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/Fexie19",
    color: "hover:text-[#16243A] hover:border-[#16243A]",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/dafajaya",
    color: "hover:text-[#0077B5] hover:border-[#0077B5]",
  },
  {
    icon: "Discord",
    label: "Discord",
    href: "https://discord.gg/qG8C8dHq",
    color: "hover:text-[#0077B5] hover:border-[#0077B5]",
  },
  {
    icon: "Fiverr",
    label: "Fiverr",
    href: "https://www.fiverr.com/s/qDEo8Wg",
    color: "hover:text-[#0077B5] hover:border-[#0077B5]",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D8FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5CB8FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to create something amazing."
          icon={Send}
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#16243A] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9FCFF] border border-[#E6EEF7] rounded-xl text-[#16243A] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#5CB8FF]/50 focus:border-[#5CB8FF] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#16243A] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9FCFF] border border-[#E6EEF7] rounded-xl text-[#16243A] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#5CB8FF]/50 focus:border-[#5CB8FF] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#16243A] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F9FCFF] border border-[#E6EEF7] rounded-xl text-[#16243A] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#5CB8FF]/50 focus:border-[#5CB8FF] transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#16243A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#F9FCFF] border border-[#E6EEF7] rounded-xl text-[#16243A] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#5CB8FF]/50 focus:border-[#5CB8FF] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Card */}
            <GlassCard hover={true} className="p-6">
              <h3 className="text-lg font-semibold text-[#16243A] mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F9FCFF] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#DFF4FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5CB8FF] transition-colors">
                      <info.icon
                        size={22}
                        className="text-[#5CB8FF] group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280]">{info.label}</p>
                      <p className="text-sm font-medium text-[#16243A]">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard hover={true} className="p-6">
              <h3 className="text-lg font-semibold text-[#16243A] mb-5">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#E6EEF7] text-[#6B7280] ${social.color} transition-all shadow-sm hover:shadow-md`}
                    aria-label={social.label}
                  >
                    {social.icon === "github" ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ) : social.icon === "linkedin" ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ) : social.icon === "Discord" ? (
                      <svg xmlns="http://w3.org" viewBox="0 0 127.14 96.36" width="1em" height="1em" fill="currentColor">
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.72-11A68.6,68.6,0,0,1,28,80.77c1.1-.81,2.16-1.66,3.18-2.54a74.11,74.11,0,0,0,74.74,0c1,1,2.08,1.73,3.19,2.54a68.55,68.55,0,0,1-10.74,4.55,74.07,74.07,0,0,0,6.73,11,105.54,105.54,0,0,0,31-18.83C129.58,48.24,123.3,25.47,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
                      </svg>
                    ) : social.icon === "Fiverr" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="1em" height="1em" fill="currentColor" className="w-5 h-5">
                        <path d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z" />
                      </svg>
                    ) : null}
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-[#5CB8FF] to-[#A7D8FF] rounded-2xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Let's Work Together</h3>
              <p className="text-sm text-white/90 mb-4">
                Have a project in mind? I'm always open to discussing new opportunities.
              </p>
              <a
                href="mailto:dafajayapriyatna5@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium bg-white text-[#5CB8FF] px-4 py-2 rounded-full hover:bg-[#F9FCFF] transition-colors"
              >
                <Mail size={16} />
                Send me an email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
