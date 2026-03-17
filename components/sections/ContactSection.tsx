import { SOCIAL_LINKS, SITE } from "@/lib/constants";

const ICON_MAP: Record<string, string> = {
  email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  linkedin:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  github:
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  website:
    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
};

const LINK_STYLES: Record<string, string> = {
  email:
    "bg-primary-500 text-white hover:bg-primary-600",
  linkedin:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  github:
    "text-white/70 hover:text-white hover:bg-white/5",
  website:
    "text-white/70 hover:text-white hover:bg-white/5",
};

export function ContactSection() {
  // Filter out website for contact — keep email, linkedin, github
  const contactLinks = SOCIAL_LINKS.filter((l) => l.icon !== "website");

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-sm font-mono text-primary-400 uppercase tracking-wide mb-6">
          Let&apos;s Talk
        </h2>
        <p className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          I&apos;m looking for my next challenge.
        </p>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          If your team builds AI-powered products and you need someone who ships
          fast and thinks like a product person, let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {contactLinks.map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${LINK_STYLES[link.icon]}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={ICON_MAP[link.icon]}
                />
              </svg>
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-white/40">
          Based in {SITE.location}
        </p>
      </div>
    </section>
  );
}
