"use client";

import React, { useState } from "react";
import { Check, ExternalLink, Github, Layers } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "enterprise" | "web">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="relative z-10 py-24 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
              Production Projects & Architecture
            </h2>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm sm:text-base">
              Real-world enterprise CRMs, data integration platforms, ERP systems, and web applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 self-start">
            {[
              { id: "all", label: "All Projects (6)" },
              { id: "enterprise", label: "Enterprise & CRM (3)" },
              { id: "web", label: "Web Apps & EdTech (3)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "enterprise" | "web")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 p-7 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 hover:-translate-y-1 transition-all group shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      Enterprise
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Architecture & Capabilities
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech stack & Action links */}
              <div className="mt-7 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Live Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
                    >
                      Repository
                      <Github className="w-3 h-3" />
                    </a>
                  )}
                  {!project.live && !project.repo && (
                    <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 italic">
                      Enterprise Production Platform
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
