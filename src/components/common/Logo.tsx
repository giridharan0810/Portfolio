"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* G-Symbol Monogram Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
        <div className="w-full h-full rounded-[10px] bg-white dark:bg-[#060913] flex items-center justify-center transition-colors">
          <span className="font-black text-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
            G
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          Giridharan S
        </span>
        <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Full Stack Developer
        </div>
      </div>
    </a>
  );
}
