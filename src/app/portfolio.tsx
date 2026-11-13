"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  Eye,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Code2,
  Database,
  Server,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Printer,
  ChevronRight,
  FolderGit2
} from "lucide-react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Resume and Social Links
const RESUME_PDF_PATH = "/Giridharan_S_Resume.pdf";
const GITHUB_URL = "https://github.com/giridharan0810";
const LINKEDIN_URL = "https://www.linkedin.com/in/giridharan0810";
const EMAIL = "giridh2001@gmail.com";
const PHONE = "+91 9080875938";
const LOCATION = "Karaikudi, Tamil Nadu, India";

// Navigation items
const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// Experience records from actual resume
const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "VConnex Software Solutions",
    location: "Remote",
    period: "Dec 2025 – Present",
    current: true,
    description:
      "Core full-stack engineer responsible for developing enterprise-grade business applications including LFMS Insurance CRM, College ERP, and School ERP platforms.",
    bullets: [
      "Develop responsive and accessible frontend features using React.js and modern JavaScript (ES6+).",
      "Architect and build high-performance RESTful APIs and optimized CRUD operations using Node.js and Express.js.",
      "Integrate complex frontend components with backend APIs and Microsoft SQL Server databases.",
      "Implement secure JWT (JSON Web Token) authentication flows and granular role-based access control (RBAC).",
      "Develop assigned business features, write optimized SQL queries, and resolve cross-stack frontend/backend issues.",
      "Contribute to LFMS Insurance CRM, College ERP, and School ERP projects using Git and SourceTree for version control.",
    ],
    tech: ["React.js", "JavaScript", "TypeScript", "Node.js", "Express.js", "Microsoft SQL Server", "JWT", "ExcelJS", "Git", "SourceTree"],
  },
  {
    role: "Software Developer",
    company: "Dynamic Liquids",
    location: "Pudukottai, Tamil Nadu",
    period: "Dec 2024 – Nov 2025",
    current: false,
    description:
      "Engineered responsive modern web applications, reusable UI components, and real-time database integrations.",
    bullets: [
      "Developed responsive, mobile-first web applications using React.js, Next.js, HTML, CSS, and JavaScript.",
      "Built reusable UI components and interactive features to significantly improve application usability and performance.",
      "Integrated Firebase Authentication and Firestore; implemented real-time data synchronization across clients.",
      "Managed source code branching, collaboration, and version control using Git and GitHub.",
    ],
    tech: ["React.js", "Next.js", "Firebase Auth", "Firestore", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub"],
  },
];

// All 6 Projects (5 from resume + live portfolio project)
const PROJECTS = [
  {
    title: "LFMS – Insurance CRM",
    category: "enterprise",
    categoryLabel: "Enterprise & FinTech",
    description:
      "End-to-end insurance CRM platform engineered from scratch to streamline employee management, client onboarding, insurance policies, sales opportunities, and case workflows.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Microsoft SQL Server", "ExcelJS"],
    highlights: [
      "Architected complete application modules from scratch: Employees, Clients, Contracts, Opportunities, and Cases.",
      "Built interactive dashboard statistics delivering role-specific business insights and executive KPIs.",
      "Engineered comprehensive CRUD functionality for User, Advisor, Carrier, and Product management.",
      "Implemented database-driven role-based permissions (RBAC) with granular Read, Write, and Delete access controls.",
      "Designed normalized SQL Server relational schemas and engineered high-volume Excel export using ExcelJS.",
    ],
    featured: true,
  },
  {
    title: "Metric 360 – Integrated Insurance Platform",
    category: "enterprise",
    categoryLabel: "Enterprise & Integration",
    description:
      "Comprehensive insurance data consolidation platform designed to unify data ingestion and operational workflows from six independent third-party applications.",
    tech: ["React.js", "Node.js", "Express.js", "Microsoft SQL Server", "REST APIs"],
    highlights: [
      "Consolidates and harmonizes heterogeneous data pipelines from 6 independent external platforms.",
      "Developed and enhanced mission-critical frontend components and backend REST endpoints.",
      "Engineered data synchronization workflows with SQL Server staging tables and live sync-status tracking.",
      "Investigated and resolved production issues while delivering continuous feature updates.",
    ],
    featured: true,
  },
  {
    title: "ERP – Education Management System",
    category: "enterprise",
    categoryLabel: "Enterprise & EdTech",
    description:
      "Institutional education management ERP automating student records, faculty administration, departmental workflows, and role-based portals.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Microsoft SQL Server"],
    highlights: [
      "Participated in initial architecture discussions, requirements mapping, and workflow planning.",
      "Implemented secure, multi-tier role-based login portals for Student, HOD, Staff, and Admin users.",
      "Developed robust CRUD modules for course curricula, attendance, departmental records, and user management.",
    ],
    featured: true,
  },
  {
    title: "POS Billing Web Application",
    category: "web",
    categoryLabel: "Commercial & Retail",
    description:
      "High-speed point-of-sale billing application with real-time stock reconciliation, invoice generation, and financial ledger management.",
    tech: ["Next.js", "Firebase Firestore", "Firebase Auth", "Tailwind CSS", "React"],
    highlights: [
      "Engineered fast billing flow with real-time Firestore database synchronization and secure authentication.",
      "Complete product catalog management, barcode-ready sales processing, and inventory tracking.",
      "Instant PDF invoice generation, ledger accounts, and daily/monthly automated sales reports.",
    ],
    featured: false,
  },
  {
    title: "Learning Management System (LMS)",
    category: "web",
    categoryLabel: "EdTech & Learning",
    description:
      "Full-featured educational platform featuring multi-role dashboards, rich course modules, media uploads, and student learning analytics.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Custom role-tailored dashboards for Administrators, Course Authors, and Enrolled Learners.",
      "Modular course authoring pipeline supporting both free and premium paid modules.",
      "Interactive student enrollment flows, quiz modules, and real-time learning progress tracking.",
    ],
    featured: false,
  },
  {
    title: "Modern E-Commerce Storefront",
    category: "web",
    categoryLabel: "E-Commerce",
    description:
      "Full-featured, responsive e-commerce web application with catalog search, wishlist, cart management, checkout workflow, and Firebase authentication.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Firebase", "shadcn/ui"],
    highlights: [
      "Dynamic catalog browsing with multi-attribute filtering, instant cart updates, and wishlist state.",
      "Secure user authentication with Firebase and persistent shopping cart sessions.",
      "Smooth Framer Motion micro-interactions and mobile-first responsive layout.",
    ],
    live: "https://e-commerce-website-flame-two.vercel.app/",
    repo: "https://github.com/giridharan0810/E-commerce-Website",
    featured: false,
  },
];

// Technical Skills Matrix
const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Architecture",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "CRUD Operations", level: "Expert" },
      { name: "JWT Authentication", level: "Expert" },
      { name: "Role-Based Access (RBAC)", level: "Expert" },
      { name: "Middleware Design", level: "Advanced" },
      { name: "API Integration", level: "Expert" },
    ],
  },
  {
    title: "Databases & Data Handling",
    icon: Database,
    skills: [
      { name: "Microsoft SQL Server", level: "Expert" },
      { name: "Firebase Firestore", level: "Advanced" },
      { name: "Relational Table Design", level: "Advanced" },
      { name: "SQL Queries & Indexing", level: "Advanced" },
      { name: "Data Synchronization", level: "Advanced" },
      { name: "ExcelJS Export", level: "Advanced" },
      { name: "MongoDB (Basic)", level: "Familiar" },
    ],
  },
  {
    title: "Tools, Security & Workflow",
    icon: Layers,
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "SourceTree", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Firebase Auth", level: "Advanced" },
      { name: "Vercel Deployment", level: "Advanced" },
      { name: "Agile / Scrum", level: "Advanced" },
    ],
  },
];

const SOFT_SKILLS = [
  "Problem Solving & Root Cause Analysis",
  "Technical Leadership & Initiative",
  "Rapid Learner of New Frameworks",
  "Agile & Scrum Methodologies",
  "Cross-Functional Team Collaboration",
  "Clean Code & Architectural Integrity",
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("all");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Copy helper
  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Contact Form Submission
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      if (db) {
        await addDoc(collection(db, "contacts"), {
          ...data,
          createdAt: serverTimestamp(),
        });
      }
      setFormStatus("success");
      form.reset();
      setTimeout(() => setFormStatus(null), 5000);
    } catch (err) {
      console.warn("Firebase submit notice, opening fallback mail client:", err);
      // Fallback to mailto
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        data.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
      setFormStatus("success");
    }
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeProjectTab === "all") return true;
    if (activeProjectTab === "enterprise") return p.category === "enterprise";
    if (activeProjectTab === "web") return p.category === "web";
    return true;
  });

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#060913] text-slate-100" : "bg-slate-50 text-slate-900"} transition-colors duration-300 font-sans`}>
      {/* Background ambient gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      {/* ===================== NAVBAR ===================== */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? "bg-[#060913]/80 border-slate-800/80" : "bg-white/80 border-slate-200"} transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                G
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
                  Giridharan S
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Full Stack Developer
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-indigo-500 after:absolute after:bottom-0 after:left-0 after:transition-all`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl border transition-all ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
                }`}
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              {/* View Resume Button (Modal) */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                View Resume
              </button>

              {/* Download Resume Button */}
              <a
                href={RESUME_PDF_PATH}
                download="Giridharan_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${darkMode ? "bg-[#060913] border-slate-800" : "bg-white border-slate-200"} px-4 py-6 space-y-3`}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setResumeModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
                >
                  <Eye className="w-4 h-4" />
                  View Resume
                </button>
                <a
                  href={RESUME_PDF_PATH}
                  download="Giridharan_S_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white"
                >
                  <Download className="w-4 h-4" />
                  Download CV (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative z-10 pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Stack & Enterprise Roles
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                  Giridharan S
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 font-semibold text-slate-300">
                  Full Stack Developer
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"} max-w-2xl`}>
                Full Stack Developer with <strong className="text-indigo-400 font-semibold">2 years of professional experience</strong> engineering robust web applications using{" "}
                <strong className={darkMode ? "text-white" : "text-slate-900"}>React.js, Next.js, Node.js, Express.js</strong>, and{" "}
                <strong className={darkMode ? "text-white" : "text-slate-900"}>Microsoft SQL Server</strong>.
                Proven expertise building high-throughput REST APIs, JWT authentication, database-driven RBAC, and business-critical CRM & ERP platforms.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={RESUME_PDF_PATH}
                  download="Giridharan_S_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>

                <button
                  onClick={() => setResumeModalOpen(true)}
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border transition-all ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-700"
                      : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <Eye className="w-4 h-4 text-indigo-400" />
                  Preview Resume
                </button>

                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm border transition-all ${
                    darkMode
                      ? "border-slate-800/80 bg-transparent text-slate-300 hover:bg-slate-800/40 hover:text-white"
                      : "border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Quick Contacts Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Karaikudi, Tamil Nadu</span>
                </div>
                <div className="h-3 w-px bg-slate-800 hidden sm:block" />
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-indigo-400" />
                  <span>github.com/giridharan0810</span>
                </a>
                <div className="h-3 w-px bg-slate-800 hidden sm:block" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Right Card / Interactive Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Glow accent */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-xl" />

                <div className={`relative rounded-3xl border p-7 sm:p-8 backdrop-blur-xl ${
                  darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/90 border-slate-200"
                } shadow-2xl`}>
                  {/* Top Header */}
                  <div className="flex items-start justify-between pb-6 border-b border-slate-800/80">
                    <div className="space-y-1">
                      <span className="text-xs uppercase font-bold tracking-wider text-indigo-400">
                        Candidate Snapshot
                      </span>
                      <h3 className="text-xl font-bold text-white">GIRIDHARAN S</h3>
                      <p className="text-xs text-slate-400">Full Stack Software Developer</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      Active
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 py-6">
                    <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-800/30">
                      <div className="text-2xl font-black text-white">2+</div>
                      <div className="text-xs text-slate-400 mt-0.5">Years Experience</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-800/30">
                      <div className="text-2xl font-black text-white">6+</div>
                      <div className="text-xs text-slate-400 mt-0.5">Enterprise & Web Apps</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-800/30">
                      <div className="text-2xl font-black text-white">8.33</div>
                      <div className="text-xs text-slate-400 mt-0.5">B.E. CSE CGPA</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-indigo-950/20 border border-indigo-800/30">
                      <div className="text-2xl font-black text-white">100%</div>
                      <div className="text-xs text-slate-400 mt-0.5">Full Stack Coverage</div>
                    </div>
                  </div>

                  {/* Core Stack Pills */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold text-slate-300">Primary Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "SQL Server", "JWT", "Firebase"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Resume CTA */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setResumeModalOpen(true)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Read Full Resume Details
                    </button>
                    <a
                      href={RESUME_PDF_PATH}
                      download="Giridharan_S_Resume.pdf"
                      className="text-xs text-white bg-indigo-600 hover:bg-indigo-500 font-medium px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESUME DOWNLOAD CALLOUT BANNER ===================== */}
      <section className="relative z-10 py-8 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-indigo-950/50 border-y border-indigo-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Looking for my Complete Official Resume?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Updated with current experience at VConnex Software Solutions, LFMS CRM, Metric 360, ERP & Technical Skills.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-300" />
                Preview in Browser
              </button>
              <a
                href={RESUME_PDF_PATH}
                download="Giridharan_S_Resume.pdf"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section id="about" className="relative z-10 py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Engineering Resilient, Scalable Web Applications
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              With 2 years of hands-on production engineering, I bridge clean interactive user interfaces with reliable, database-backed microservices. I specialize in developing end-to-end applications from scratch, handling everything from normalized SQL Server database architecture and Express REST APIs to high-performance React frontends with granular role-based security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-7 rounded-3xl border ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"} hover:border-indigo-500/40 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Modern Frontend Engineering</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Building responsive, accessible web applications with React.js, Next.js, TypeScript, and Tailwind CSS. Obsessed with snappy UI interactions, clean component architecture, and high lighthouse scores.
              </p>
            </div>

            <div className={`p-7 rounded-3xl border ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"} hover:border-indigo-500/40 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Robust REST APIs & Auth</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architecting reliable Node.js and Express.js backends. Experienced in JWT authentication, database-driven role-based access control (RBAC), middleware validation, and CRUD operations.
              </p>
            </div>

            <div className={`p-7 rounded-3xl border ${darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"} hover:border-indigo-500/40 transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Database & Sync Architecture</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Expertise designing normalized relational tables in Microsoft SQL Server, managing complex queries, writing data synchronization staging pipelines, and integrating real-time Firebase Firestore databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE SECTION ===================== */}
      <section id="experience" className="relative z-10 py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Career History</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Professional Experience
              </h2>
            </div>
            <a
              href={RESUME_PDF_PATH}
              download="Giridharan_S_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <Download className="w-4 h-4" />
              Download Official Resume
            </a>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl border p-7 sm:p-9 ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                } hover:border-indigo-500/40 transition-all`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-slate-300">
                      <span className="font-semibold text-indigo-400">{exp.company}</span>
                      <span>•</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300 self-start">
                    {exp.period}
                  </div>
                </div>

                {/* Body */}
                <p className="mt-6 text-sm text-slate-300 leading-relaxed font-medium">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-7 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-2">Technologies Used:</span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-950/40 text-indigo-300 border border-indigo-800/40"
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

      {/* ===================== PROJECTS SECTION ===================== */}
      <section id="projects" className="relative z-10 py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Featured Work</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Production Projects & Platforms
              </h2>
              <p className="text-slate-400 mt-2 text-sm sm:text-base">
                Real-world enterprise CRMs, data consolidation platforms, ERP systems, and web applications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 self-start">
              {[
                { id: "all", label: "All Projects (6)" },
                { id: "enterprise", label: "Enterprise & CRM (3)" },
                { id: "web", label: "Web Apps & EdTech (3)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeProjectTab === tab.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-3xl border p-7 ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                } hover:border-indigo-500/40 hover:-translate-y-1 transition-all group`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        Enterprise
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights & Architecture
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-800/80">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        Repository
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                    {!project.live && !project.repo && (
                      <span className="text-[11px] text-slate-400 italic">
                        Enterprise Internal Application
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SKILLS SECTION ===================== */}
      <section id="skills" className="relative z-10 py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Technical Arsenal</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Skills, Technologies & Tools
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
              Demonstrated proficiency across front-end engineering, back-end microservices, database design, and automated deployment.
            </p>
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border ${
                    darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
                  } hover:border-indigo-500/40 transition-all`}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">{cat.title}</h3>
                  <div className="space-y-2.5">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{s.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-slate-800/80 text-indigo-300 border border-slate-700/50">
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 p-8 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 to-purple-950/20">
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4">
              Professional Competencies & Soft Skills
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SOFT_SKILLS.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EDUCATION SECTION ===================== */}
      <section id="education" className="relative z-10 py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Academic Background</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Education & Qualifications
            </h2>
          </div>

          <div className="max-w-3xl">
            <div className={`p-8 rounded-3xl border ${
              darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Mahendra Engineering College
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 mt-1">
                      Bachelor of Computer Science and Engineering (B.E. CSE)
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Namakkal, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300">
                    2020 – 2024
                  </span>
                  <div className="mt-3 text-sm font-bold text-emerald-400">
                    CGPA: 8.33 / 10
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                Strong academic foundation in Relational Database Management Systems, Data Structures & Algorithms, Object-Oriented Software Design, Web Technologies, and Computer Networks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT SECTION ===================== */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Get In Touch</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                  Let&apos;s Build Something Extraordinary Together
                </h2>
                <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base">
                  Looking for a Full Stack Developer experienced in React, Next.js, Node.js, and SQL Server for full-time opportunities or enterprise consulting? Reach out directly.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3.5 pt-2">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Email Address</div>
                      <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(EMAIL, "email")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Phone Number</div>
                      <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PHONE, "phone")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">{LOCATION}</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={RESUME_PDF_PATH}
                  download="Giridharan_S_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs font-semibold text-indigo-300 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className={`p-8 rounded-3xl border ${
                darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200"
              } shadow-xl`}>
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in the details below and I will respond to your inquiry promptly.
                </p>

                {formStatus === "success" && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Hello Giridharan, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="relative z-10 border-t border-slate-800/80 py-12 bg-[#04060d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-bold text-white text-sm">GIRIDHARAN S</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">Full Stack Developer</span>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href={RESUME_PDF_PATH} download="Giridharan_S_Resume.pdf" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Download CV</a>
            </div>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Giridharan S. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* ===================== INTERACTIVE RESUME MODAL ===================== */}
      <AnimatePresence>
        {resumeModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setResumeModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#090e1c] border border-slate-700 shadow-2xl overflow-hidden z-10"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Giridharan S – Resume</h4>
                    <span className="text-[11px] text-slate-400">Full Stack Developer • ATS Formatted</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Direct Print */}
                  <button
                    onClick={() => window.print()}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Print Resume"
                  >
                    <Printer className="w-4 h-4" />
                  </button>

                  {/* Direct PDF Download */}
                  <a
                    href={RESUME_PDF_PATH}
                    download="Giridharan_S_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </a>

                  {/* Close Modal */}
                  <button
                    onClick={() => setResumeModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Resume Content */}
              <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0b1122] text-slate-200 text-sm">
                {/* Header */}
                <div className="border-b border-indigo-500/30 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-white">GIRIDHARAN S</h1>
                      <div className="text-indigo-400 font-semibold text-base">Full Stack Developer</div>
                    </div>
                    <div className="text-xs text-slate-400 space-y-1 sm:text-right">
                      <div>Email: <a href={`mailto:${EMAIL}`} className="text-indigo-300 hover:underline">{EMAIL}</a></div>
                      <div>Phone: <span className="text-slate-200">{PHONE}</span></div>
                      <div>Location: <span className="text-slate-200">{LOCATION}</span></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-indigo-400">
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                      <Github className="w-3 h-3" /> github.com/giridharan0810
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                      <Linkedin className="w-3 h-3" /> linkedin.com/in/giridharan0810
                    </a>
                    <a href="https://portfolio-h9rf.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
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
                    Full Stack Developer with 2 years of experience developing web applications using React.js, JavaScript, Node.js, Express.js and SQL Server. Experienced in building REST APIs, implementing JWT authentication, developing CRUD operations and integrating databases. Contributed to CRM, ERP and business applications across frontend and backend development.
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
                        <li>Develop responsive frontend features using React.js and JavaScript.</li>
                        <li>Build RESTful APIs and CRUD operations using Node.js and Express.js.</li>
                        <li>Integrate frontend components with backend APIs and Microsoft SQL Server.</li>
                        <li>Implement JWT authentication and role-based access control.</li>
                        <li>Develop assigned features, write SQL queries and resolve frontend/backend issues.</li>
                        <li>Contribute to LFMS Insurance CRM, College ERP and School ERP projects; use Git and SourceTree for version control.</li>
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
                        <li>Developed responsive web applications using React.js, Next.js, HTML, CSS and JavaScript.</li>
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

                {/* Projects */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-4">
                    Key Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-white text-xs">
                        LFMS – Insurance CRM{" "}
                        <span className="font-normal text-slate-400 italic">
                          (Technologies: React.js, TypeScript, Node.js, Express.js, Microsoft SQL Server, ExcelJS)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-300">
                        <li>Contributed to developing an insurance CRM application from scratch to manage employees, clients, contracts, opportunities and case management.</li>
                        <li>Developed dashboard features and business statistics for role-specific insights.</li>
                        <li>Built Contract, Opportunity and Case Management modules and implemented CRUD functionality for User, Advisor, Carrier and Product management.</li>
                        <li>Implemented database-driven role-based permissions with Read, Write and Delete access controls.</li>
                        <li>Designed SQL Server relational tables and implemented Excel export functionality using ExcelJS.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-white text-xs">
                        Metric 360 – Integrated Insurance Platform{" "}
                        <span className="font-normal text-slate-400 italic">
                          (Technologies: React.js, Node.js, Express.js, Microsoft SQL Server)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-300">
                        <li>Contribute to an insurance management platform designed to consolidate data from six independent third-party applications.</li>
                        <li>Develop and enhance frontend and backend features using React.js, Node.js and Express.js.</li>
                        <li>Participate in planning and developing data synchronization workflows, including staging tables and synchronization status tracking.</li>
                        <li>Troubleshoot application issues and implement assigned feature improvements.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-white text-xs">
                        ERP – Education Management System{" "}
                        <span className="font-normal text-slate-400 italic">
                          (Technologies: React.js, TypeScript, Node.js, Express.js, Microsoft SQL Server)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-300">
                        <li>Contribute to the initial development of an education management ERP system, participating in requirement discussions and application workflow planning.</li>
                        <li>Implemented role-based login functionality for Student, HOD, Staff and Admin users; currently involved in developing CRUD operations for ERP modules.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-white text-xs">
                        POS Billing Web Application{" "}
                        <span className="font-normal text-slate-400 italic">
                          (Technologies: Next.js, Firebase)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-300">
                        <li>Developed a POS billing application with secure authentication, real-time database synchronization, product management, sales processing and inventory tracking.</li>
                        <li>Implemented invoice generation, ledger management and daily/monthly sales reporting with a responsive user interface.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-white text-xs">
                        Learning Management System (LMS){" "}
                        <span className="font-normal text-slate-400 italic">
                          (Technologies: Next.js, Firebase)
                        </span>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-slate-300">
                        <li>Developed an LMS platform with secure authentication, course management and separate dashboards for Admin, Author and User roles.</li>
                        <li>Implemented course uploads, paid and free course modules, course purchases, student enrollment and learning progress tracking.</li>
                      </ul>
                    </div>
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

                {/* Soft Skills */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-1 mb-2">
                    Soft Skills
                  </h2>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                    <span>• Problem Solving</span>
                    <span>• Leadership</span>
                    <span>• Quick Learner</span>
                    <span>• Agile Methodology</span>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Need this in PDF format? Click download to get an ATS-ready copy.
                  </span>
                  <a
                    href={RESUME_PDF_PATH}
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
        )}
      </AnimatePresence>
    </div>
  );
}
