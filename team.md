# Sub-Agent Team (17 Agents)

## Agent List

| Agent | Role | Model |
|-------|------|-------|
| ux-specialist | Plan user journey, wireframe, page structure | sonnet |
| ui-designer | Visual design, layout, responsive, animations | sonnet |
| copywriter | Website content, sales copy, email/WhatsApp sequences | sonnet |
| backend-dev | Database, API, Supabase, authentication | sonnet |
| seo-specialist | Meta tags, schema markup, sitemap, page speed | sonnet |
| humanizer | Review all output, fix anything that looks AI-generated | sonnet |
| qa-tester | Test features, responsive, forms, find bugs | sonnet |
| security-auditor | Check vulnerabilities, secure payment, data protection | sonnet |
| devops-eng | Deploy, CI/CD, GitHub, hosting | sonnet |
| project-organizer | Setup project structure AND cleanup before deploy | sonnet |
| automation-specialist | General workflow automation, integrations | sonnet |
| booking-specialist | Appointment scheduling, time slots, reminders | sonnet |
| chatbot-builder | WhatsApp bot, Telegram bot, web chat widget | sonnet |
| ai-voice-agent | Retell AI, Twilio voice, call flows | sonnet |
| crm-automation | Lead management, follow-ups, sales pipeline | sonnet |
| performance-optimizer | Website speed, Core Web Vitals, image optimization | sonnet |
| analytics-setup | Google Analytics, tracking, conversion goals | sonnet |

## Routing Rules (Auto-Delegate)

### project-organizer
- Starting a new project (setup folder structure)
- Before deployment (cleanup files)
- Reorganizing messy codebase

### ux-specialist
- Planning new pages or features
- Designing user flows and journeys
- Before ui-designer starts any new page

### ui-designer
- Building or modifying any UI component, page, or layout
- Working with Tailwind CSS, responsive design, animations
- Creating landing pages, hero sections, navbars, footers, cards

### copywriter
- Writing website content, headlines, CTAs
- Creating product descriptions or sales copy
- Writing email sequences or WhatsApp message templates
- Any content that will be read by customers

### backend-dev
- Working with Supabase, database, APIs
- Building server-side logic or Edge Functions
- Authentication, authorization, data operations

### seo-specialist
- Optimizing pages for search engines
- Adding meta tags, schema markup, sitemap

### performance-optimizer
- Optimizing website speed and loading time
- Compressing images, reducing bundle size
- Improving Core Web Vitals scores

### analytics-setup
- Setting up Google Analytics or tracking
- Configuring conversion goals
- Adding event tracking to buttons and forms

### humanizer
- Reviewing completed work for AI-generated feel
- After copywriter and ui-designer finish their work
- Making content and design feel authentically human

### qa-tester
- Testing features or user flows
- Checking responsive design
- Pre-launch quality checks

### security-auditor
- Checking for security vulnerabilities
- Reviewing authentication or payment flows
- Pre-production security review

### devops-eng
- Deploying to production or staging
- Configuring CI/CD, GitHub Actions
- Managing environments, domains

### automation-specialist
- Building general workflow automations
- Connecting multiple services together

### booking-specialist
- Building appointment scheduling systems
- Managing availability and time slots

### chatbot-builder
- Building WhatsApp bots, Telegram bots, or web chat
- Designing conversational flows

### ai-voice-agent
- Building AI reception or voice calling systems
- Configuring Retell AI or Twilio Voice

### crm-automation
- Building lead management or tracking systems
- Setting up follow-up sequences or sales pipelines
