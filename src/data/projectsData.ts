import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "lfms-crm",
    title: "LFMS – Insurance CRM",
    category: "enterprise",
    categoryLabel: "Enterprise & FinTech",
    description:
      "End-to-end enterprise insurance CRM platform built from scratch to streamline employee management, client onboarding, insurance policies, sales opportunities, and case workflows.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Microsoft SQL Server", "ExcelJS"],
    highlights: [
      "Contributed to developing the application from scratch managing employees, clients, contracts, opportunities, and case management.",
      "Engineered dynamic analytics dashboards and business KPIs for role-specific insights.",
      "Built Contract, Opportunity, and Case modules with full CRUD for User, Advisor, Carrier, and Product entities.",
      "Implemented database-driven role-based access control (RBAC) with strict Read, Write, and Delete permissions.",
      "Designed normalized SQL Server relational schemas and engineered high-volume Excel exports via ExcelJS.",
    ],
    featured: true,
  },
  {
    id: "metric-360",
    title: "Metric 360 – Integrated Insurance Platform",
    category: "enterprise",
    categoryLabel: "Enterprise & Integration",
    description:
      "Comprehensive insurance data consolidation platform designed to unify data ingestion and operational workflows from six independent third-party applications.",
    tech: ["React.js", "Node.js", "Express.js", "Microsoft SQL Server", "REST APIs"],
    highlights: [
      "Engineered data pipelines consolidating records across 6 independent third-party platforms.",
      "Developed responsive frontend views and backend REST endpoints using React.js and Node.js/Express.",
      "Implemented data synchronization workflows utilizing staging tables, audit logs, and live sync-status tracking.",
      "Troubleshot complex integration bottlenecks and delivered ongoing architectural enhancements.",
    ],
    featured: true,
  },
  {
    id: "erp-education",
    title: "ERP – Education Management System",
    category: "enterprise",
    categoryLabel: "Enterprise & EdTech",
    description:
      "Institutional education management ERP automating student records, faculty administration, course curricula, and role-specific portals.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Microsoft SQL Server"],
    highlights: [
      "Participated in initial architecture discussions, requirement mapping, and workflow planning.",
      "Implemented secure, multi-tier role-based authentication for Students, HODs, Staff, and Administrators.",
      "Developed robust CRUD modules for academic records, department courses, schedules, and staff rosters.",
    ],
    featured: true,
  },
  {
    id: "pos-billing",
    title: "POS Billing Web Application",
    category: "web",
    categoryLabel: "Commercial & Retail",
    description:
      "Cloud-connected point-of-sale billing application featuring real-time stock reconciliation, invoice generation, and financial ledger tracking.",
    tech: ["Next.js", "Firebase Firestore", "Firebase Auth", "Tailwind CSS", "React"],
    highlights: [
      "Engineered fast billing flow with real-time Firestore database synchronization and secure user authentication.",
      "Implemented product catalog management, barcode-ready sales processing, and inventory alerts.",
      "Built automated invoice generation, customer ledger accounting, and daily/monthly sales reports.",
    ],
    featured: false,
  },
  {
    id: "lms-platform",
    title: "Learning Management System (LMS)",
    category: "web",
    categoryLabel: "EdTech & Learning",
    description:
      "Full-featured e-learning platform featuring multi-role dashboards, rich course modules, media uploads, and student learning analytics.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Custom role-tailored dashboards for Administrators, Course Authors, and Enrolled Learners.",
      "Engineered course upload workflows supporting both free and premium course tiers.",
      "Interactive student enrollment flows, quiz modules, and real-time learning progress tracking.",
    ],
    featured: false,
  },
  {
    id: "ecommerce-storefront",
    title: "Modern E-Commerce Platform",
    category: "web",
    categoryLabel: "E-Commerce",
    description:
      "High-performance storefront featuring product search, filtering, shopping cart, wishlist, checkout flow, and Firebase authentication.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Firebase", "shadcn/ui"],
    highlights: [
      "Dynamic catalog browsing with multi-attribute filtering, instant cart updates, and persistent wishlist.",
      "Secure user authentication with Firebase Auth and real-time user order management.",
      "Smooth Framer Motion micro-interactions and mobile-first responsive layout.",
    ],
    live: "https://e-commerce-website-flame-two.vercel.app/",
    repo: "https://github.com/giridharan0810/E-commerce-Website",
    featured: false,
  },
];
