import { STORY } from "@/lib/constants";

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wide mb-8">
          The Story
        </h2>

        <div className="space-y-6">
          {/* First two paragraphs */}
          <p className="text-lg text-surface-800 leading-relaxed">
            {STORY.paragraphs[0]}
          </p>
          <p className="text-lg text-surface-800 leading-relaxed">
            {STORY.paragraphs[1]}
          </p>

          {/* Pull quote — breaks the rhythm */}
          <blockquote className="border-l-4 border-accent-500 pl-6 py-4 my-10">
            <p className="text-2xl sm:text-3xl font-bold text-surface-950 leading-snug">
              {STORY.highlightStat}
            </p>
          </blockquote>

          {/* Final paragraph */}
          <p className="text-lg text-surface-800 leading-relaxed">
            {STORY.paragraphs[2]}
          </p>
        </div>
      </div>
    </section>
  );
}
