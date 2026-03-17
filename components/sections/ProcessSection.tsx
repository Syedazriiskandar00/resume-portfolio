import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wide mb-4">
          How I Work
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-surface-950 mb-12 max-w-2xl">
          Find the problem. Ship the solution. Repeat.
        </p>

        {/* Desktop: horizontal grid. Mobile: vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-surface-200" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative">
              {/* Mobile left border */}
              <div className="md:hidden absolute left-4 top-10 bottom-0 w-0.5 bg-surface-200" />

              <div className="flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0">
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm md:text-base md:mb-5">
                  {step.step}
                </div>

                <div className="md:px-2">
                  <h3 className="text-lg font-bold text-surface-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-surface-800 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-surface-200 italic">
                    {step.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
