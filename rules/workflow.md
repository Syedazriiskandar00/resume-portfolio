# Workflow Rules

## Orchestration Principles

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity
- Write plan to `tasks/todo.md` with checkable items before starting

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution
- Read `team.md` for routing rules

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness
- Open in browser and verify visual output for UI tasks

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in with user before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

---

## Website Project Phases

Follow this EXACT order. Do NOT skip steps. VERIFY before moving to next phase.

### PHASE 1 - PROJECT SETUP (project-organizer)
- Set up folder structure, config files, CLAUDE.md
- Create tasks/ folder with todo.md and lessons.md
- Initial git commit
- VERIFY: Structure correct, all files exist

### PHASE 2 - UX PLANNING (ux-specialist)
- Define user goals, map user journey, wireframe pages, CTA strategy
- VERIFY: Journey makes sense, all pages planned

### PHASE 3 - DESIGN AND CONTENT (ui-designer + copywriter)
- Build pages based on wireframes, write all content
- Anti-AI rules: no template look, no AI-sounding copy
- VERIFY: Open in browser, check responsive, content reads naturally

### PHASE 4 - BACKEND (backend-dev) — if needed
- Supabase tables with RLS, API endpoints, auth, connect forms
- VERIFY: Endpoints correct, RLS tested, forms submit

### PHASE 5 - SYSTEMS — if needed
- booking-specialist / chatbot-builder / ai-voice-agent / crm-automation / automation-specialist
- VERIFY: Each system tested end-to-end

### PHASE 6 - OPTIMIZATION (seo-specialist + performance-optimizer + analytics-setup)
- Meta tags, schema, sitemap, image optimization, Core Web Vitals, analytics tracking
- VERIFY: Lighthouse 90+, meta tags present, tracking confirmed

### PHASE 7 - HUMANIZE (humanizer)
- Review all pages and content, fix AI-generated feel
- VERIFY: Read out loud, sounds like real person

### PHASE 8 - QUALITY CHECK (qa-tester + security-auditor)
- Test all pages, forms, responsive, security vulnerabilities
- VERIFY: Zero critical bugs, zero vulnerabilities
- If issues: Follow ERROR RECOVERY below

### PHASE 9 - FINAL CLEANUP (project-organizer)
- Remove unused files, console.logs, organize imports
- VERIFY: Clean build, no warnings

### PHASE 10 - DEPLOY (devops-eng)
- Push GitHub, deploy Vercel/Netlify, connect domain, final test
- VERIFY: All pages load, all features work on production

---

## Automation System Phases

### PHASE 1 - PLANNING (ux-specialist)
### PHASE 2 - CORE SYSTEM (automation-specialist + relevant specialists)
### PHASE 3 - BACKEND (backend-dev)
### PHASE 4 - MESSAGES (copywriter)
### PHASE 5 - HUMANIZE (humanizer)
### PHASE 6 - QUALITY AND SECURITY (qa-tester + security-auditor)
### PHASE 7 - DEPLOY (devops-eng)

---

## Error Recovery Flow

### qa-tester finds bugs:
- Design bug > ui-designer fix > qa-tester re-test
- Functionality bug > backend-dev fix > qa-tester re-test
- System bug > relevant specialist fix > qa-tester re-test

### security-auditor finds vulnerabilities:
- Any security issue > backend-dev fix > security-auditor re-audit

### humanizer finds AI content:
- Copy issue > copywriter rewrite > humanizer re-review
- Design issue > ui-designer redesign > humanizer re-review

### performance-optimizer finds slow loading:
- Image/CSS/JS issue > fix > re-run Lighthouse

### Loop limit: Maximum 3 rounds per issue. After 3 rounds, flag to user.

### After ANY recovery: Update `tasks/lessons.md` with what went wrong.
