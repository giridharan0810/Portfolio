export type Theme = "dark" | "light";

export interface Project {
  id: string;
  title: string;
  category: "enterprise" | "web";
  categoryLabel: string;
  description: string;
  tech: string[];
  highlights: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  bullets: string[];
  tech: string[];
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level?: string;
}

export interface SkillCategory {
  title: string;
  category: "frontend" | "backend" | "database" | "tools";
  description: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
