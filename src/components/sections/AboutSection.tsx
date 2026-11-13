"use client";

import React from "react";
import { Code2, Server, Database, CheckCircle2 } from "lucide-react";
import { corePhilosophy } from "@/data/skillsData";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-2">
            Engineering Scalable, Production-Ready Systems
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 mt-4 leading-relaxed text-base">
            I am a Full Stack Developer who enjoys bridging crisp, user-focused frontends with resilient, database-backed microservices. Over the past two years, I have contributed to business-critical applications including an insurance CRM, college ERP, and school ERP systems—developing features end-to-end from normalized database tables and secure RESTful endpoints to interactive React dashboards.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Frontend Development
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Crafting modular, reusable component architectures with React.js, Next.js, and modern JavaScript. I emphasize predictable state management, responsive layouts, and smooth UX interactions.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Backend Architecture & APIs
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Designing RESTful APIs and CRUD microservices with Node.js and Express.js. Implementing secure JWT authentication, granular role-based access control (RBAC), and third-party data synchronization.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Database Engineering & Reporting
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              Structuring relational databases in Microsoft SQL Server, writing performant SQL queries, managing staging tables for data sync pipelines, and generating structured Excel exports via ExcelJS.
            </p>
          </div>
        </div>

        {/* Philosophy bar */}
        <div className="mt-10 p-7 rounded-3xl border border-indigo-500/20 bg-indigo-950/20 dark:bg-indigo-950/20 light:bg-indigo-50/50">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
            Engineering Principles
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {corePhilosophy.map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
