"use client";

import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { EducationSection } from "../components/sections/EducationSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { WhyHireSection } from "../components/sections/WhyHireSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import LazySection from "../components/LazySection";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#F9FCFF] z-[9999] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-[#5CB8FF] to-[#16243A] bg-clip-text text-transparent">
          </span>
        </motion.div>
        <div className="w-48 h-1 bg-[#E6EEF7] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#5CB8FF] to-[#A7D8FF]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-[#6B7280] mt-4"
        >
        </motion.p>
      </div>
    </motion.div>
  );
}



const About = React.lazy(() => import("./AboutSection"));


  
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

        <main className="relative overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <HeroSection />
          
          <LazySection>
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </LazySection>

          <LazySection>
          <ExperienceSection />
          </LazySection>
          
          <LazySection>
          <EducationSection />
          </LazySection>

          <LazySection>
          <SkillsSection />
          </LazySection>

          <LazySection>
          <ProjectsSection />
          </LazySection>

          <LazySection>
          <ServicesSection />
          </LazySection>

          <LazySection>
          <WhyHireSection />
          </LazySection>

          <LazySection>
          <ContactSection />
          </LazySection>
            
          <Footer />
        </main>
    </>
  );
}
