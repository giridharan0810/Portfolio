# Giri | Full Stack Developer

[![Live Site](https://img.shields.io/badge/Live%20Portfolio-portfolio--h9rf.vercel.app-2563eb?style=for-the-badge&logo=vercel)](https://portfolio-h9rf.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-giridharan0810-181717?style=for-the-badge&logo=github)](https://github.com/giridharan0810)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-giridharan0810-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/giridharan0810)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.29-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

Personal developer brand and production portfolio of **Giri** (Giridharan S), Full Stack Developer with 2+ years of production experience developing enterprise CRMs, ERPs, high-throughput REST APIs, and modern responsive web applications at **VConnex Software Solutions**.

🌐 **Live URL:** [https://portfolio-h9rf.vercel.app/](https://portfolio-h9rf.vercel.app/)

---

## 🌟 Key Highlights & Architecture

- **✒️ Authentic Signature Loading Experience ("Crafted by Giri"):**
  - Custom handwritten SVG signature for "Giri" animated with `stroke-dasharray` and `stroke-dashoffset`.
  - True cursive path execution with natural acceleration, loops, and descenders.
  - Organic curved arrow flourish extending as a continuation of the signature.
  - Subtle pen-tip indicator tracking along the active handwriting coordinates.
  - Seamless exit dissolve into the portfolio with zero layout shift.
- **🎨 Complete Design System & Dual Themes:**
  - Premium **Dark Mode** (`#060913`, deep obsidian with indigo/cyan accents).
  - Clean, high-contrast **Light Mode** (slate-50 background, dark typography, crisp card borders).
  - Instant theme switching with `localStorage` persistence and anti-flicker pre-hydration script.
- **💼 Enterprise Experience:**
  - **VConnex Software Solutions** (*Dec 2025 – Present | Remote*): Software Developer working on LFMS Insurance CRM, College ERP, and School ERP with React, Node.js, Express, and Microsoft SQL Server.
  - **Dynamic Liquids** (*Dec 2024 – Nov 2025 | Pudukottai*): Software Developer building responsive Next.js apps with Firebase real-time data sync.
- **📂 Real Production Projects:**
  - **LFMS – Insurance CRM:** Role-based access control (RBAC), executive analytics dashboard, and high-volume Excel exports via ExcelJS.
  - **Metric 360 – Integrated Insurance Platform:** Unifying 6 independent third-party data pipelines with SQL Server staging tables and sync tracking.
  - **ERP – Education Management System:** Institutional ERP with multi-tier role portals (Student, HOD, Staff, Admin).
  - **POS Billing Web Application:** Real-time stock reconciliation, invoice generation, and ledger accounting.
  - **Learning Management System (LMS):** Multi-role e-learning platform with course authoring and progress tracking.
  - **Modern E-Commerce Storefront:** Full shopping flow with cart, wishlist, and Firebase auth.
- **📬 Production-Ready Contact System:**
  - Serverless API route (`/api/contact`) with server-side validation and honeypot spam protection.
  - Support for direct Resend email delivery or native mail client fallback.
  - Quick one-click copy buttons for email (`giridh2001@gmail.com`) and phone (`+91 9080875938`).
- **📄 Resume Integration:**
  - Direct ATS-ready PDF download (`/Giridharan_S_Resume.pdf`).
  - Interactive in-browser modal preview with print (`Ctrl+P`) and download capabilities.

---

## 🏗️ Clean Project Architecture

```
src/
├── app/
│   ├── api/contact/route.ts      # Serverless contact form handler with validation & spam filtering
│   ├── favicon.ico
│   ├── globals.css               # Global tokens, light/dark themes, custom scrollbars
│   ├── layout.tsx                # Root layout with SEO, OpenGraph metadata, theme anti-flicker
│   ├── page.tsx                  # Modular page orchestrating all sections
│   ├── robots.ts                 # Production robots.txt generator
│   └── sitemap.ts                # Production sitemap.xml generator
├── components/
│   ├── common/
│   │   ├── Logo.tsx              # Minimal G-symbol brand monogram
│   │   └── ThemeToggle.tsx       # Smooth dark/light switcher with localStorage sync
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky responsive navigation with resume CTA
│   │   └── Footer.tsx            # Brand footer with links and copyright
│   ├── loading/
│   │   ├── CraftedByLoading.tsx  # Real handwritten signature stroke animation with pen indicator
│   │   └── CraftedByLoading.module.css
│   ├── sections/
│   │   ├── HeroSection.tsx       # Personal introduction, stats, primary CTAs
│   │   ├── AboutSection.tsx      # Background, engineering ethos, technical principles
│   │   ├── ExperienceSection.tsx # VConnex & Dynamic Liquids editorial timeline
│   │   ├── ProjectsSection.tsx   # Filterable production showcase with live links
│   │   ├── SkillsSection.tsx     # Categorized skills matrix (Frontend, Backend, Database, Tools)
│   │   └── ContactSection.tsx    # Validated contact form with instant status feedback
│   └── ui/
│       └── ResumeModal.tsx       # Interactive in-browser ATS resume preview
├── data/
│   ├── siteConfig.ts             # Centralized brand data, social links, SEO metadata
│   ├── experienceData.ts         # Career timeline and technical bullet points
│   ├── projectsData.ts           # Enterprise and web projects portfolio
│   └── skillsData.ts             # Technical skills taxonomy and core philosophy
├── hooks/
│   └── useTheme.ts               # Type-safe theme hook managing localStorage & system theme
└── types/
    └── index.ts                  # Shared TypeScript interfaces
```

---

## 🛠️ Local Development & Build

### 1. Clone the repository
```bash
git clone https://github.com/giridharan0810/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables (optional)
```bash
cp .env.example .env.local
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production build test
```bash
npm run build
npm run start
```

---

## 🌐 Custom Domain Setup & Vercel Deployment Guide

### Recommended Personal Domains:
- **`giri.dev`** *(Strongest developer branding, short & memorable)*
- **`giridev.com`** *(Global commercial recognition)*
- **`giris.dev`** *(Includes last initial, professional)*
- **`giridharan.dev`** *(Full formal brand)*

### How to Connect a Custom Domain on Vercel:
1. Purchase your chosen domain from a registrar (e.g. Namecheap, Cloudflare, Porkbun, or Google Domains/Squarespace).
2. Go to your **Vercel Project Dashboard** → **Settings** → **Domains**.
3. Add your root domain (e.g., `giri.dev`) and subdomain (e.g., `www.giri.dev`).
4. At your domain registrar's DNS settings, add the following records:
   - **Type:** `A`, **Name:** `@`, **Value:** `76.76.21.21`
   - **Type:** `CNAME`, **Name:** `www`, **Value:** `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL/TLS certificate (HTTPS) and configure 308 permanent redirects between `www` and root.

---

## 📬 Contact Information

- **Name:** Giri (Giridharan S)
- **Role:** Full Stack Developer
- **Email:** [giridh2001@gmail.com](mailto:giridh2001@gmail.com)
- **Phone:** [+91 9080875938](tel:+919080875938)
- **LinkedIn:** [linkedin.com/in/giridharan0810](https://www.linkedin.com/in/giridharan0810)
- **GitHub:** [github.com/giridharan0810](https://github.com/giridharan0810)
- **Location:** Karaikudi, Tamil Nadu, India
