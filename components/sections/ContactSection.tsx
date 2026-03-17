import { SOCIAL_LINKS, SITE } from "@/lib/constants";

const ICON_MAP: Record<string, string> = {
  email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  linkedin:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  github:
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z",
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
  whatsapp:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  website:
    "text-white/70 hover:text-white hover:bg-white/5",
};

export function ContactSection() {
  // Filter out website for contact — keep email, whatsapp, linkedin, github
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
                fill={link.icon === "whatsapp" ? "currentColor" : "none"}
                stroke={link.icon === "whatsapp" ? "none" : "currentColor"}
                strokeWidth={link.icon === "whatsapp" ? 0 : 2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={ICON_MAP[link.icon]}
                />
              </svg>
              {link.icon === "whatsapp" ? "+6011-6114 4639" : link.label}
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
