"use client";

import React from "react";
import { CheckCircle2, Download, Building2, Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/data/experienceData";
import { siteConfig } from "@/data/siteConfig";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-24 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Career History</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
              Professional Experience
            </h2>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm sm:text-base">
              Hands-on contributions to enterprise CRMs, ERP platforms, and cloud web applications.
            </p>
          </div>
          <a
            href={siteConfig.resumePath}
            download="Giridharan_S_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            Download Official Resume
          </a>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 p-7 sm:p-9 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 transition-all shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                    <div className="flex items-center gap-1.5 font-semibold text-indigo-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 self-start">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-medium">
                {exp.summary}
              </p>

              {/* Technical Bullets */}
              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="mt-7 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 mr-2">
                  Stack:
                </span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-950/40 dark:bg-indigo-950/40 light:bg-indigo-50 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 border border-indigo-800/40 dark:border-indigo-800/40 light:border-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
