import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border-l-4 border-accent-500 bg-white shadow-sm overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        {/* Left — gradient with floating stats */}
        <div className="bg-gradient-to-br from-surface-900 to-primary-900 p-8 md:p-10 flex flex-col justify-center relative min-h-[240px]">
          <div className="space-y-3">
            {project.stats.map((stat) => (
              <div
                key={stat}
                className="inline-block mr-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-mono text-white/90"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Right — details */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <p className="text-xs font-mono text-primary-500 uppercase tracking-wide mb-2">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold text-surface-950 mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-surface-500 mb-4">{project.tagline}</p>
          <p className="text-surface-800 leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div>
            <Button href={project.url} size="md">
              View Live &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: "filled" | "outlined";
}) {
  return (
    <div
      className={
        variant === "filled"
          ? "rounded-xl bg-surface-50 p-6 sm:p-8"
          : "rounded-xl border border-surface-200 bg-white p-6 sm:p-8"
      }
    >
      <h3 className="text-xl font-bold text-surface-950 mb-2">
        {project.name}
      </h3>
      <p className="text-sm text-surface-500 mb-3">{project.tagline}</p>
      <p className="text-surface-800 leading-relaxed mb-5 text-sm">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <Button href={project.url} variant="ghost" size="sm">
        View Live &rarr;
      </Button>
    </div>
  );
}

function BuildingCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-surface-200 bg-surface-50/50 p-6">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-bold text-surface-950">{project.name}</h3>
        <Badge variant="accent">Building</Badge>
      </div>
      <p className="text-surface-800 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const medium = PROJECTS.filter((p) => !p.featured && p.status === "live");
  const building = PROJECTS.filter((p) => p.status === "building");

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wide mb-4">
          What I&apos;ve Shipped
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-surface-950 mb-12 max-w-2xl">
          Real products. Real users. Real revenue.
        </p>

        <div className="space-y-6">
          {/* Featured — LeadCari */}
          <FeaturedProject project={featured} />

          {/* Medium projects — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medium.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant={i === 0 ? "filled" : "outlined"}
              />
            ))}
          </div>

          {/* Building */}
          {building.map((project) => (
            <BuildingCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
