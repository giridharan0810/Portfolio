"use client";

import React from "react";
import { Code2, Server, Database, Layers, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/data/skillsData";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Layers,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Practical, production-tested competencies across full-stack web engineering, database architecture, and developer tooling.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code2;
            return (
              <div
                key={cat.category}
                className="p-6 rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competencies bar */}
        <div className="mt-12 p-8 rounded-3xl border border-indigo-500/20 bg-indigo-950/20 dark:bg-indigo-950/20 light:bg-indigo-50/60">
          <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4">
            Professional Competencies
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Problem Solving & Root Cause Analysis",
              "Technical Leadership & Initiative",
              "Rapid Learner of New Frameworks",
              "Agile & Scrum Methodologies",
              "Cross-Functional Team Collaboration",
              "Clean Code & Architectural Integrity",
            ].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
