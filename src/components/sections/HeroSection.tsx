"use client";

import React from "react";
import { Download, Eye, ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section className="relative z-10 pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full Stack Opportunities · VConnex Software Solutions
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-slate-100 transition-colors">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                {siteConfig.fullName}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-semibold text-slate-700 dark:text-slate-300">
                {siteConfig.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl transition-colors">
              Full Stack Developer with <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">2 years of professional experience</strong> developing scalable web applications using{" "}
              <strong className="text-slate-900 dark:text-white">React.js, JavaScript, Node.js, Express.js</strong>, and{" "}
              <strong className="text-slate-900 dark:text-white">Microsoft SQL Server</strong>.
              Experienced in building high-throughput REST APIs, JWT authentication, role-based access control, and enterprise business solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={siteConfig.resumePath}
                download="Giridharan_S_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:border-indigo-400 transition-all cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-indigo-500" />
                Preview Resume
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border border-slate-300 dark:border-slate-800 bg-transparent text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Meta bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="h-3 w-px bg-slate-300 dark:bg-slate-800 hidden sm:block" />
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-indigo-500" />
                <span>GitHub Profile</span>
              </a>
              <div className="h-3 w-px bg-slate-300 dark:bg-slate-800 hidden sm:block" />
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-500" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-xl" />

              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 p-7 sm:p-8 backdrop-blur-xl bg-white/95 dark:bg-slate-900/80 shadow-2xl transition-colors">
                <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
                      Developer Profile
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {siteConfig.fullName}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {siteConfig.title} · {siteConfig.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    Active
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  {siteConfig.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-800/30"
                    >
                      <div className="text-2xl font-black text-slate-900 dark:text-white">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Primary Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "Node.js", "Express.js", "SQL Server", "JavaScript", "TypeScript", "REST APIs", "JWT"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
