export interface Project {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  url: string;
  stats: string[];
  tech: string[];
  featured: boolean;
  status: "live" | "building";
}

export interface Capability {
  title: string;
  description: string;
  tools: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  example: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "email" | "whatsapp" | "linkedin" | "github" | "website";
}
