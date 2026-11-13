"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 py-12 bg-slate-50 dark:bg-[#04060d] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              G
            </div>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {siteConfig.fullName}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {siteConfig.title}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumePath}
              download="Giridharan_S_Resume.pdf"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-semibold transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Socials & Copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
