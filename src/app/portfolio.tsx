'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Code2,
  Briefcase,
  Sparkles,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import {db} from "./firebase"

/**
 * Enhanced portfolio with extraordinary animations and UI
 * Replace placeholder data with your actual information
 */

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
  title: "E-Commerce Website",
  description:
    "A modern, responsive e-commerce website built with Next.js, Tailwind CSS, shadcn/ui, Framer Motion, and Firebase. Features cart, wishlist, checkout, and user authentication.",
  tags: ["Next.js", "Firebase", "Tailwind", "Framer Motion", "shadcn/ui"],
  link: "https://e-commerce-website-flame-two.vercel.app/",
  repo: "https://github.com/giridharan0810/E-commerce-Website",
},

  {
    title: "Smart Billing UI",
    description:
      "Printable multi‑section invoice system with tax summaries and thermal receipt layout.",
    tags: ["React", "Print", "UX"],
    link: "#",
    repo: "https://github.com/giridharan0810/Portfolio.git",
  },
  // {
  //   title: "Event Hub",
  //   description:
  //     "Real‑time events dashboard with subscribe/unsubscribe, reminders, and calendar filters.",
  //   tags: ["Next.js", "Firestore", "n8n"],
  //   link: "#",
  //   repo: "#",
  // },
];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: serverTimestamp(),
      });

      alert("✅ Message saved to Firestore!");
      form.reset();
    } catch (error) {
      console.error("Error saving message:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

const skills = [
  "React", "Next.js", "Javascript", "Tailwind", "Firebase", "Firestore", "Auth",
  "Cloud Functions", "n8n", "MUI", "Zustand", "React Hook Form"
];

const experiences = [
  {
    role: "Software Developer",
    company: "Dynamic Liquids",
    period: "2024 — Present",
    bullets: [
      "Developed scalable React and Next.js applications with Firebase backends",
      "Designed and implemented clean, responsive UIs using Tailwind CSS and JSX",
      "Built a custom POS website for efficient billing and inventory management",
      "Developed a bike showroom management system with real-time data tracking",
      "Automated business workflows with n8n and integrated WhatsApp notifications for customers"
    ]
  },
  {

    role: "Frontend Developer Intern",
    company: "Brainwave Matrix Solutions",
    period: "6 Months",
    bullets: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Optimized UI for cross-browser compatibility and performance",
      "Collaborated with team members to implement design changes and features"
    ],
    
  }];

// Floating particles background component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-300/20"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            x: [null, Math.random() * 100 + 'vw'],
            y: [null, Math.random() * 100 + 'vh'],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            width: Math.random() * 20 + 10 + 'px',
            height: Math.random() * 20 + 10 + 'px',
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient background
const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(60rem 60rem at 20% 20%, rgba(120, 119, 198, 0.3), transparent 60%)",
            "radial-gradient(60rem 60rem at 80% 80%, rgba(120, 119, 198, 0.3), transparent 60%)",
            "radial-gradient(60rem 60rem at 50% 20%, rgba(100, 200, 255, 0.3), transparent 60%)",
            "radial-gradient(60rem 60rem at 20% 80%, rgba(120, 119, 198, 0.3), transparent 60%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    </div>
  );
};

// Typing animation component
const Typewriter = ({ text, delay = 50, className = "" }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const opacity = useTransform(scrollY, [0, 300], [1, 0.1]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // Ref for intersection observers
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Check if sections are in view
  const aboutInView = useInView(aboutRef, { once: true, margin: "-20%" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-20%" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-20%" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-20%" });
  const contactInView = useInView(contactRef, { once: true, margin: "-20%" });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'}`}>
      {/* Animated backgrounds */}
      <AnimatedGradient />
      <FloatingParticles />

      {/* Animated cursor follower */}
      <motion.div
        className="fixed z-50 w-6 h-6 rounded-full pointer-events-none"
        animate={{
          background: darkMode ?
            "radial-gradient(circle, rgba(120,119,198,0.4) 0%, transparent 70%)" :
            "radial-gradient(circle, rgba(120,119,198,0.2) 0%, transparent 70%)"
        }}
        transition={{ type: "spring", damping: 10 }}
        style={{
          x: useTransform(scrollY, [0, 300], [0, 10]),
          y: useTransform(scrollY, [0, 300], [0, 10]),
        }}
      />

      {/* Top Nav */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#home"
              className="font-semibold tracking-tight text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Giri.dev</span>
            </motion.a>

            <nav className="hidden gap-6 md:flex">
              {nav.map((n) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>

              <motion.a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Mail className="h-4 w-4" /> Contact
              </motion.a>

              <motion.button
                className="md:hidden p-2"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/5 md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-4 space-y-4">
                {nav.map((n) => (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    className="text-sm text-neutral-300 hover:text-white py-2"
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {n.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" /> Contact
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              <Typewriter text="Giridharan" delay={100} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-neutral-300 md:text-lg"
          >
            Full‑stack developer focused on React, Next.js, Firebase, and delightful product UX.
            I build fast, reliable web apps—clean code, crisp UI, and solid data models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            <motion.a
              href="https://github.com/giridharan0810"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/giridharan-s-a873b0218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 py-20" ref={aboutRef}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="grid items-start gap-10 md:grid-cols-12"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="md:col-span-5">
              <motion.div
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="h-6 w-6" />
                <h2 className="mt-3 text-2xl font-semibold">About</h2>
                <p className="mt-3 text-neutral-300">
                  I build pragmatic, product-focused solutions that balance usability and scalability. I care deeply about developer experience, creating clean abstractions, and designing precise, reliable interfaces.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-7">
              <motion.ul className="space-y-4">
                <motion.li
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-sm text-neutral-300">
                   Delivered production-ready applications for billing, events, visitor management, and admin dashboards, leveraging Next.js with Firebase (Auth, Firestore, Cloud Functions) to ensure scalability and reliability.
                  </p>
                </motion.li>

                <motion.li
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-sm text-neutral-300">
                    Opinions: simple UIs win, data should be normalized, and prints should look as good as screens.
                  </p>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-white/5 py-20" ref={experienceRef}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs text-neutral-400">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-300">{exp.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                  {exp.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/5 py-20" ref={projectsRef}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Projects</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-indigo-500/20 to-cyan-300/20 flex items-center justify-center">
                    <Code2 className="h-12 w-12 text-white/30" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <motion.span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </motion.a>

                  <motion.a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    Repo <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/5 py-20" ref={skillsRef}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="mb-6 text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(90deg, rgba(120,119,198,0.2), rgba(100,200,255,0.2))"
                }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 py-20" ref={contactRef}>
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>

          <motion.p
            className="mt-3 max-w-2xl text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Want to collaborate or need a hand on your next product? Drop a line.
          </motion.p>

         <motion.form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 md:max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={contactInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.input
        name="name"
        placeholder="Your name"
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-white/20"
        required
        whileFocus={{ scale: 1.01 }}
      />

      <motion.input
        type="email"
        name="email"
        placeholder="you@example.com"
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-white/20"
        required
        whileFocus={{ scale: 1.01 }}
      />

      <motion.textarea
        name="message"
        placeholder="Tell me about your project..."
        rows={5}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-neutral-400 focus:border-white/20"
        required
        whileFocus={{ scale: 1.01 }}
      />

      <motion.button
        type="submit"
        className="inline-flex w-max items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-900"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Send <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-400 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Giri. All rights reserved.
          </motion.p>

          <motion.div
            className="flex justify-center mt-4 space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a
              href="https://github.com/giridharan0810"
              whileHover={{ y: -2 }}
              className="text-neutral-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/giridharan-s-a873b0218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              whileHover={{ y: -2 }}
              className="text-neutral-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="mailto:giridh2001@gmail.com"
              whileHover={{ y: -2 }}
              className="text-neutral-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}