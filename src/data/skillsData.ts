import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    category: "frontend",
    description: "Building responsive, accessible, high-performance user interfaces with modern React ecosystems.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & REST APIs",
    category: "backend",
    description: "Architecting reliable microservices, RESTful interfaces, and database-driven authentication flows.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "CRUD Operations",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Middleware Architecture",
      "API Integrations",
    ],
  },
  {
    title: "Database Engineering",
    category: "database",
    description: "Designing normalized schemas, complex querying, data synchronization pipelines, and reporting.",
    skills: [
      "Microsoft SQL Server",
      "SQL Queries & Procedures",
      "Firebase Firestore",
      "Relational Table Design",
      "Data Synchronization",
      "ExcelJS Export",
      "MongoDB (Basic)",
    ],
  },
  {
    title: "Tools & Workflow",
    category: "tools",
    description: "Enterprise source control, API testing, debugging, and continuous integration workflows.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "SourceTree",
      "VS Code",
      "Vercel",
      "Agile / Scrum",
    ],
  },
];

export const corePhilosophy = [
  "Clean code architecture and pragmatic abstractions.",
  "Normalized relational schemas with strict data integrity.",
  "Defensive backend design with granular role-based permissions.",
  "Snappy, accessible UIs that respect device constraints.",
];
