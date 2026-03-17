import type { Project, Capability, ProcessStep, SocialLink } from "@/types";

export const SITE = {
  name: "Syed Azri",
  title: "AI Solutions Engineer",
  tagline:
    "I build AI-powered products that solve real business problems, from concept to deployment.",
  origin:
    "Former sales exec. Self-taught developer. Shipped 3 production SaaS products in under a year.",
  email: "syedazriiskandar00@gmail.com",
  location: "Johor, Malaysia",
} as const;

export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    url: "mailto:syedazriiskandar00@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/syed-azri-iskandar-b240723b1/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/Syedazriiskandar00",
    icon: "github",
  },
  {
    label: "Website",
    url: "https://azridev.my",
    icon: "website",
  },
];

export const STORY = {
  paragraphs: [
    "A year ago, I was selling water filters door to door. Good at it, too. I could read people, figure out what they actually needed, and close the deal. But I kept thinking: there has to be a smarter way to solve problems than knocking on doors.",
    "So I taught myself to code. No bootcamp, no CS degree. Just me, a laptop, and an unhealthy amount of documentation. Within months, I wasn't just writing code. I was shipping products. Real ones, with real users and real problems solved.",
    "I've since built 3 production SaaS products, compiled a database of 107,000+ Malaysian business contacts, integrated AI voice agents, payment systems, and automation pipelines. The sales background wasn't a detour. It's why I build things that actually solve problems, not just things that look good in a demo.",
  ],
  highlightStat: "3 production SaaS products shipped in under 12 months",
} as const;

export const CAPABILITIES: Capability[] = [
  {
    title: "AI Product Development",
    description:
      "End-to-end AI-powered SaaS. From LLM integration and voice AI to intelligent chatbots that handle real conversations.",
    tools: ["Claude API", "Retell AI", "OpenAI", "LangChain", "Vector DBs"],
  },
  {
    title: "Full-Stack Shipping",
    description:
      "Not just prototypes. Production-ready apps with auth, payments, databases, and the boring stuff that makes products actually work.",
    tools: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Stripe",
    ],
  },
  {
    title: "Automation & Integration",
    description:
      "Connect systems, automate workflows, and build the pipes that make data flow between tools without human babysitting.",
    tools: ["n8n", "Twilio", "WhatsApp API", "Telegram Bot", "Retell AI"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "LeadCari",
    slug: "leadcari",
    tagline: "B2B lead generation SaaS with AI voice agent",
    description:
      "Built a full B2B SaaS platform with 107K+ Malaysian business contacts in database, Stripe subscriptions, and an AI voice agent that calls leads automatically. The kind of thing that used to need a 10-person sales team.",
    url: "https://leadcari.com",
    stats: ["107K+ contacts", "Stripe payments", "AI voice calling"],
    tech: ["Next.js", "Supabase", "Stripe", "Retell AI", "TypeScript"],
    featured: true,
    status: "live",
  },
  {
    name: "ContentScriptPro",
    slug: "contentscriptpro",
    tagline: "AI content automation for creators",
    description:
      "AI-powered content automation SaaS that helps creators generate, schedule, and manage content across platforms. Takes the grunt work out of content creation.",
    url: "https://contentscriptpro.co",
    stats: ["Multi-platform", "AI generation", "Auto-scheduling"],
    tech: ["Next.js", "Supabase", "Claude API", "TypeScript"],
    featured: false,
    status: "live",
  },
  {
    name: "AIHAA System",
    slug: "aihaa",
    tagline: "AI chatbot ecosystem with tech mapping",
    description:
      "A multi-component AI system: chatbot for customer queries, technology mapper for business analysis, and a Telegram bot tying it all together.",
    url: "https://aihaainfo.com",
    stats: ["AI chatbot", "Tech mapper", "Telegram bot"],
    tech: ["Next.js", "Supabase", "Claude API", "Telegram Bot API"],
    featured: false,
    status: "live",
  },
  {
    name: "AI Social Media SWOT Analyzer",
    slug: "swot-analyzer",
    tagline: "AI-powered competitive analysis tool",
    description:
      "Analyzes social media presence and generates SWOT reports for businesses. Feed it a brand, get back actionable competitive intelligence.",
    url: "#",
    stats: ["SWOT analysis", "Social media", "AI-powered"],
    tech: ["Next.js", "Claude API", "TypeScript"],
    featured: false,
    status: "building",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Identify the Problem",
    description:
      "Talk to users, find the pain point that costs them time or money. No building until the problem is crystal clear.",
    example:
      "LeadCari started because Malaysian B2B companies had no easy way to find business leads.",
  },
  {
    step: 2,
    title: "Prototype Fast",
    description:
      "Get a working version in days, not months. Ship ugly, validate early, iterate based on real usage.",
    example:
      "First version of ContentScriptPro was rough, but it proved people wanted AI content automation.",
  },
  {
    step: 3,
    title: "Ship to Production",
    description:
      "Auth, payments, error handling, monitoring. The 80% of work nobody sees but everyone depends on.",
    example:
      "LeadCari handles Stripe subscriptions, 107K+ contacts, and AI voice calls in production daily.",
  },
  {
    step: 4,
    title: "Iterate with Data",
    description:
      "Watch what users actually do, not what they say they'll do. Let usage data drive the next feature.",
    example:
      "AIHAA's Telegram bot was added after seeing users wanted notifications outside the web app.",
  },
];
