"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Printer, X, ExternalLink, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-[#090e1c] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Giridharan S – Resume</h4>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Full Stack Developer • ATS Formatted</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Print Resume"
                aria-label="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.resumePath}
                download="Giridharan_S_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-50/50 dark:bg-[#0b1122] text-slate-800 dark:text-slate-200 text-sm">
            {/* Header info */}
            <div className="border-b border-indigo-200 dark:border-indigo-500/30 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">GIRIDHARAN S</h1>
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-base mt-0.5">Full Stack Developer</div>
                </div>
                <div className="text-xs text-slate-400 space-y-1 sm:text-right">
                  <div>Email: <a href={`mailto:${siteConfig.email}`} className="text-indigo-300 hover:underline">{siteConfig.email}</a></div>
                  <div>Phone: <span className="text-slate-200">{siteConfig.phone}</span></div>
                  <div>Location: <span className="text-slate-200">{siteConfig.location}</span></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-indigo-400">
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3" /> github.com/giridharan0810
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> linkedin.com/in/giridharan0810
                </a>
                <a href={siteConfig.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> portfolio-h9rf.vercel.app
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Full Stack Developer with 2 years of experience developing scalable web applications using React.js, JavaScript, Node.js, Express.js, and SQL Server. Experienced in building REST APIs, implementing JWT authentication, developing robust CRUD operations, and integrating enterprise databases. Contributed to CRM, ERP, and business applications across frontend and backend development.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <div className="font-bold text-white text-sm">
                      VConnex Software Solutions <span className="font-normal text-indigo-300">| Software Developer</span>
                    </div>
                    <div className="text-xs text-slate-400">Dec 2025 – Present | Remote</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                    <li>Develop responsive frontend features using React.js and modern JavaScript.</li>
                    <li>Build RESTful APIs and CRUD operations using Node.js and Express.js.</li>
                    <li>Integrate frontend components with backend APIs and Microsoft SQL Server.</li>
                    <li>Implement JWT authentication and role-based access control.</li>
                    <li>Develop assigned features, write SQL queries, and resolve frontend/backend issues.</li>
                    <li>Contribute to LFMS Insurance CRM, College ERP, and School ERP projects; use Git and SourceTree for version control.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <div className="font-bold text-white text-sm">
                      Dynamic Liquids <span className="font-normal text-indigo-300">| Software Developer</span>
                    </div>
                    <div className="text-xs text-slate-400">Dec 2024 – Nov 2025 | Pudukottai</div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                    <li>Developed responsive web applications using React.js, Next.js, HTML, CSS, and JavaScript.</li>
                    <li>Built reusable UI components and interactive features to improve application usability.</li>
                    <li>Integrated Firebase Authentication and Firestore; implemented data synchronization and used Git/GitHub for version control.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs">
                <div><strong className="text-white">Programming Languages:</strong> <span className="text-slate-300">JavaScript (ES6+), TypeScript, HTML5, CSS3</span></div>
                <div><strong className="text-white">Frontend Technologies:</strong> <span className="text-slate-300">React.js, Next.js, Bootstrap, Tailwind CSS</span></div>
                <div><strong className="text-white">Backend Technologies:</strong> <span className="text-slate-300">Node.js, Express.js, RESTful APIs</span></div>
                <div><strong className="text-white">Databases:</strong> <span className="text-slate-300">Microsoft SQL Server, Firebase Firestore, MongoDB (Basic)</span></div>
                <div><strong className="text-white">Authentication:</strong> <span className="text-slate-300">JWT, Firebase Authentication</span></div>
                <div><strong className="text-white">Tools & Platforms:</strong> <span className="text-slate-300">Git, GitHub, SourceTree, Postman, VS Code</span></div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                <div>
                  <strong className="text-white">Mahendra Engineering College, Namakkal</strong>
                  <div className="text-slate-300">Bachelor of Computer Science and Engineering - CGPA: 8.33</div>
                </div>
                <div className="text-slate-400 sm:text-right">2020 – 2024</div>
              </div>
            </div>

            {/* Footer download CTA */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official PDF copy available for download.
              </span>
              <a
                href={siteConfig.resumePath}
                download="Giridharan_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
