"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CraftedByLoading from "@/components/loading/CraftedByLoading";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* 1. Real Handwritten Signature Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <CraftedByLoading
            key="signature-loader"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* 2. Main Portfolio Application */}
      <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
        {/* Subtle Ambient Background Gradient Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/15 dark:bg-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-violet-400/15 dark:bg-violet-600/15 rounded-full blur-3xl" />
        </div>

        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <HeroSection onOpenResume={() => setResumeOpen(true)} />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        {/* Brand Footer */}
        <Footer />

        {/* Interactive In-Browser Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </>
  );
}
