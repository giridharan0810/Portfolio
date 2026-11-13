import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "vconnex",
    role: "Software Developer",
    company: "VConnex Software Solutions",
    location: "Remote",
    period: "Dec 2025 – Present",
    current: true,
    summary:
      "Core full-stack engineer responsible for architecting and building enterprise-grade business applications including LFMS Insurance CRM, College ERP, and School ERP platforms.",
    bullets: [
      "Develop responsive and accessible frontend features using React.js and modern JavaScript (ES6+).",
      "Architect and build high-performance RESTful APIs and CRUD operations using Node.js and Express.js.",
      "Integrate modular frontend components with backend microservices and Microsoft SQL Server.",
      "Implement secure JWT (JSON Web Token) authentication flows and granular role-based access control (RBAC).",
      "Develop assigned business features, write complex SQL queries, and resolve cross-stack frontend/backend issues.",
      "Contribute to LFMS Insurance CRM, College ERP, and School ERP projects using Git and SourceTree for version control.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Microsoft SQL Server",
      "JWT",
      "ExcelJS",
      "Git",
      "SourceTree",
    ],
  },
  {
    id: "dynamic-liquids",
    role: "Software Developer",
    company: "Dynamic Liquids",
    location: "Pudukottai, Tamil Nadu",
    period: "Dec 2024 – Nov 2025",
    current: false,
    summary:
      "Developed responsive web applications, modular UI components, and integrated real-time cloud databases for internal tools and business portals.",
    bullets: [
      "Developed responsive, mobile-first web applications using React.js, Next.js, HTML5, CSS3, and JavaScript.",
      "Built reusable UI components and interactive modules to elevate usability and frontend rendering performance.",
      "Integrated Firebase Authentication and Firestore; implemented real-time data synchronization across client sessions.",
      "Maintained source code branching, pull requests, and version control workflows using Git and GitHub.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Firebase Auth",
      "Firestore",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
];
