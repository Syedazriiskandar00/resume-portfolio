import { CAPABILITIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const PILLAR_STYLES = [
  "bg-white",
  "bg-surface-50",
  "bg-primary-50",
] as const;

const PILLAR_COLS = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wide mb-4">
          What I Build
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-surface-950 mb-12 max-w-2xl">
          Problems I solve, not technologies I list.
        </p>

        {/* 3 unequal pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className={cn(
                "rounded-xl p-6 sm:p-8",
                PILLAR_COLS[i],
                PILLAR_STYLES[i],
                i === 0 && "border border-surface-200",
                i === 2 && "border border-primary-100"
              )}
            >
              <h3 className="text-xl font-bold text-surface-950 mb-3">
                {cap.title}
              </h3>
              <p className="text-surface-800 leading-relaxed mb-5">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
