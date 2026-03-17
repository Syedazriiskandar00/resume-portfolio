import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Syed Azri",
  jobTitle: "AI Solutions Engineer",
  url: "https://azridev.my",
  email: "syedazriiskandar00@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/syed-azri-iskandar-b240723b1/",
    "https://github.com/Syedazriiskandar00",
  ],
  knowsAbout: [
    "AI Product Development",
    "Full-Stack Development",
    "SaaS",
    "Next.js",
    "TypeScript",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Johor",
    addressCountry: "MY",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StorySection />
      <SkillsSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
