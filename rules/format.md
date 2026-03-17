# Code Format Rules

## General Standards
- Always use TypeScript for Next.js projects
- Always use Tailwind CSS for styling
- Always implement mobile-first responsive design
- Always handle errors with try/catch
- Always validate inputs on both client and server
- Never commit .env files to Git
- Never leave console.log in production code

## File Naming Conventions
- Components: PascalCase (HeroSection.tsx, NavBar.tsx)
- Utilities: camelCase (formatDate.ts, useAuth.ts)
- Pages/Routes: kebab-case (about-us/, contact/)
- Config files: lowercase with dots (.eslintrc.json, tailwind.config.ts)
- Constants: UPPER_SNAKE_CASE for values, camelCase for file names

## Next.js Project Structure
- app/ — App router pages
- components/ui/ — Base UI components (Button, Input, Card)
- components/layout/ — Layout (Navbar, Footer, Sidebar)
- components/sections/ — Page sections (Hero, Features, Pricing)
- lib/ — Utilities, Supabase client, constants
- hooks/ — Custom React hooks
- types/ — TypeScript definitions
- public/ — Static assets (images, fonts, icons)

## Supabase Rules
- ALWAYS set up RLS policies on every table (no exceptions)
- Use UUID for primary keys
- Always include created_at and updated_at timestamps
- Use soft deletes (is_deleted or deleted_at)
- Environment variables for all keys
- Parameterized queries to prevent SQL injection

## Git Rules
- Commit messages: descriptive and concise
- Format: "feat: add hero section" or "fix: navbar mobile menu"
- Prefixes: feat, fix, refactor, style, docs, test, chore
- Never commit secrets, .env files, or node_modules
- Branch strategy: main (production), develop (staging), feature/* (features)

## Responsive Breakpoints
- Mobile: 375px (primary design target)
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px
- Always test all breakpoints before marking complete

## Performance Standards
- Lighthouse score: 90+ minimum
- Page load: Under 3 seconds on 4G
- Images: WebP format, compressed, lazy loaded
- Fonts: Preloaded, font-display swap
- CSS: Purge unused Tailwind classes
- JS: Code split, defer non-critical scripts
