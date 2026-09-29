# Product Requirements Document (PRD)
## Agency Website: Graphic Design, Digital Marketing & Business Consultancy

| Field | Detail |
|---|---|
| Document version | 1.0 (Draft) |
| Status | For review |
| Product type | Marketing / lead-generation website |
| Primary goal | Generate qualified leads and build authority |

---

## 1. Overview

### 1.1 Purpose
Build an engaging, fast, fully responsive website for an agency offering **graphic design**, **digital marketing**, and **business growth consultancy**. The site must present the agency's work convincingly, convert visitors into leads, and be discoverable through traditional search (**SEO**), answer engines (**AEO**) and generative AI search (**GEO**).

### 1.2 Problem Statement
Small and mid-sized businesses struggle to find a single trusted partner for branding, marketing, and growth strategy. The agency needs an online presence that proves credibility, showcases results, and makes it easy to start a conversation.

### 1.3 Goals
1. Generate consistent inbound leads (consultation bookings, contact forms, WhatsApp/calls).
2. Rank for service + location keywords and appear in AI-generated answers.
3. Showcase portfolio and case studies that prove ROI.
4. Deliver an excellent experience on mobile, tablet, and desktop.
5. Provide an easy way for non-technical staff to update content.

### 1.4 Non-Goals (v1)
- E-commerce / online payments
- Client portal or project-management dashboard
- Multi-language support (planned for v2)
- Native mobile app

### 1.5 Success Metrics (KPIs)

| Metric | Target (first 6 months) |
|---|---|
| Lighthouse Performance / SEO / Accessibility / Best Practices | 90+ on mobile |
| Core Web Vitals | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| Lead conversion rate (visitor → inquiry) | 2–4% |
| Organic traffic growth | +100% by month 6 |
| Keyword rankings | Top 10 for 15+ target keywords |
| AI citations / brand mentions | Tracked monthly across ChatGPT, Perplexity, Gemini, Google AI Overviews |
| Bounce rate | < 50% |
| Avg. engagement time | > 1m 30s |

---

## 2. Target Audience

### 2.1 Personas

**Persona A: Small Business Owner ("Growth-Seeker")**
- Runs a local or online business, needs branding + marketing help
- Cares about price clarity, trust signals, quick response
- Mostly on mobile, often arrives via Google or social

**Persona B: Startup Founder**
- Needs brand identity, launch marketing, and strategy
- Values speed, modern portfolio, case studies

**Persona C: Marketing Manager at an SMB/Mid-size firm**
- Outsources design, ads, SEO, or content
- Compares agencies; wants proof, process, and reporting

**Persona D: Individual / Personal Brand / Coach**
- Needs logo, social presence, and business guidance

### 2.2 Key User Needs
- "Can I trust this agency?" → testimonials, case studies, certifications
- "What exactly do they offer and what will it cost?" → clear services, packages
- "How do I get started?" → prominent CTAs, booking, WhatsApp

---

## 3. Scope & Site Map

### 3.1 Site Map

```
Home
├── About Us (Story, Team, Values)
├── Services
│   ├── Graphic Design
│   │   ├── Logo & Brand Identity
│   │   ├── Social Media Creatives
│   │   ├── Packaging & Print
│   │   └── UI/Web Design
│   ├── Digital Marketing
│   │   ├── SEO / AEO / GEO
│   │   ├── Social Media Marketing
│   │   ├── Performance Ads (Google/Meta)
│   │   ├── Content & Email Marketing
│   │   └── Video & Reels
│   └── Business Consultancy
│       ├── Growth Strategy
│       ├── Brand Positioning
│       └── Marketing Audit & Roadmap
├── Portfolio / Work (filterable)
│   └── Case Study pages
├── Pricing / Packages (optional)
├── Industries (optional programmatic pages)
├── Blog / Insights
│   └── Categories, Tags, Author pages
├── Resources (free guides, checklists: lead magnets)
├── Testimonials / Client Wall
├── FAQ
├── Contact / Book a Consultation
├── Legal: Privacy Policy, Terms, Cookie Policy
└── 404 / Sitemap page
```

### 3.2 Page Requirements

#### Home
- Hero: clear value proposition, primary CTA ("Book a Free Consultation"), secondary CTA ("View Our Work")
- Trust bar: client logos, ratings, years of experience
- Services overview (3 pillars: Design, Marketing, Consultancy)
- Featured work / case study highlights with measurable results
- Process ("How we work": Discover → Strategy → Create → Grow)
- Testimonials with photos/names/companies
- Stats counters (projects, clients, growth achieved)
- Latest insights (blog teasers)
- FAQ snippet
- Final CTA banner + contact strip

#### Services (hub + individual pages)
- Each service page: problem → solution → deliverables → process → pricing hint → related case studies → FAQ → CTA
- Unique, keyword-targeted copy (no duplicate content)

#### Portfolio & Case Studies
- Filter by service and industry
- Case study template: Client, Challenge, Approach, Solution, Results (numbers), Testimonial, Visuals, CTA
- Lightbox / image galleries, lazy-loaded

#### About
- Brand story, mission, values, team profiles (E-E-A-T signals), awards, tools/certifications

#### Blog
- Categories, tags, search, reading time, author bio, related posts, table of contents, share buttons, newsletter CTA

#### Contact / Book a Consultation
- Short lead form (name, email, phone, service interested, budget range, message)
- Calendar booking integration (Calendly / Cal.com)
- WhatsApp click-to-chat, phone, email, map, business hours
- Spam protection (reCAPTCHA / Turnstile / honeypot)

---

## 4. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Responsive layout for all devices (320px → 4K) | Must |
| FR-02 | Lead capture forms with validation, spam protection, and confirmation | Must |
| FR-03 | Forms send email notification + store in CRM/Google Sheet | Must |
| FR-04 | Calendar booking integration | Must |
| FR-05 | Sticky header with CTA; mobile hamburger/bottom CTA bar | Must |
| FR-06 | Filterable portfolio with case-study detail pages | Must |
| FR-07 | Blog with CMS-driven content | Must |
| FR-08 | Floating WhatsApp / call button | Must |
| FR-09 | Headless CMS so staff can edit pages, posts, portfolio, testimonials | Must |
| FR-10 | Newsletter signup (Mailchimp / Brevo / ConvertKit) | Should |
| FR-11 | Site search (blog + services) | Should |
| FR-12 | Dark / light mode | Could |
| FR-13 | Exit-intent / timed lead magnet popup (non-intrusive, dismissible) | Could |
| FR-14 | Interactive ROI / marketing-budget calculator | Could |
| FR-15 | Live chat or AI chatbot for FAQs and lead qualification | Could |
| FR-16 | Cookie consent banner (GDPR / DPDP compliant) | Must |
| FR-17 | Analytics + conversion event tracking | Must |
| FR-18 | Automated sitemap.xml, robots.txt, RSS feed | Must |
| FR-19 | Custom 404 page with helpful navigation | Must |
| FR-20 | Before/after sliders and project image galleries | Should |

---

## 5. Design & UX Requirements

### 5.1 Design Principles
- **Creative but clear:** the site is itself a portfolio piece; it must look the part without sacrificing usability.
- **Conversion-first:** every page has a purpose and a next step.
- **Fast and light:** visuals must never compromise performance.
- **Accessible:** WCAG 2.2 AA.

### 5.2 Visual Direction
- Bold typography, generous whitespace, strong brand color palette + accent for CTAs
- Custom illustrations / icons, high-quality imagery, short looping video or Lottie animations
- Consistent design system (tokens for color, spacing, typography, components)

### 5.3 Engagement Features
- Scroll-triggered animations (subtle, respect `prefers-reduced-motion`)
- Micro-interactions on hover/tap, animated stat counters
- Horizontal scroll or carousel for testimonials and work
- Sticky "Book a call" CTA on mobile
- Custom cursor on desktop (optional)

### 5.4 Responsive Requirements

| Breakpoint | Range | Notes |
|---|---|---|
| Mobile | 320–767px | Mobile-first, single column, thumb-friendly targets (min 44px) |
| Tablet | 768–1023px | Two-column layouts, adaptive nav |
| Desktop | 1024–1439px | Full layout |
| Large | 1440px+ | Max-width container, no stretched content |

- Test on iOS Safari, Android Chrome, Chrome, Firefox, Safari, Edge
- Responsive images (`srcset`, `sizes`), fluid typography (`clamp()`)
- No horizontal scroll; safe-area support on notched devices

### 5.5 Accessibility
- Semantic HTML, ARIA only where needed
- Color contrast ≥ 4.5:1, visible focus states, full keyboard navigation
- Alt text for all meaningful images, captions/transcripts for video
- Form labels, error messages, and screen-reader-friendly announcements

---

## 6. SEO, AEO & GEO Requirements

### 6.1 Definitions
- **SEO:** ranking in traditional search results (Google, Bing).
- **AEO (Answer Engine Optimization):** being the direct answer in featured snippets, People Also Ask, voice search, and Q&A results.
- **GEO (Generative Engine Optimization):** being cited/recommended by AI systems (ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Copilot).

### 6.2 Technical SEO (Must)
- Server-side rendering (SSR) or static generation so all content is crawlable without JS
- Clean, descriptive, lowercase URLs (`/services/digital-marketing/seo`)
- Unique `<title>` (≤ 60 chars) and meta description (≤ 155 chars) per page
- Single `<h1>` per page, logical heading hierarchy
- Canonical tags, `hreflang` ready for future languages
- `sitemap.xml` (auto-updated), `robots.txt`, RSS
- HTTPS everywhere, HSTS, clean 301 redirects, custom 404
- Open Graph + Twitter Card tags, dynamic OG images per page/post
- Breadcrumbs (visual + schema)
- Image optimization: WebP/AVIF, lazy loading, explicit width/height, descriptive file names + alt text
- Internal linking strategy (hub → spoke, blog → service pages)
- Pagination handled correctly; no duplicate/thin content; noindex for utility pages
- Google Search Console + Bing Webmaster Tools set up on launch

### 6.3 Core Web Vitals & Performance (Must)
- LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile
- Use CDN, HTTP/2 or HTTP/3, Brotli/Gzip compression
- Code splitting, font subsetting with `font-display: swap`, preload critical assets
- Defer third-party scripts; total JS budget kept minimal

### 6.4 Content SEO
- Keyword research per service and location (e.g., "digital marketing agency in Pune", "logo design services India")
- Service pages, location pages (if applicable), industry pages
- Blog content plan: topic clusters around design, marketing, and business growth
- E-E-A-T: author bios, credentials, case studies with real results, testimonials, "About" transparency, visible contact info
- Fresh content cadence (e.g., 4+ posts/month), periodic updates with visible "last updated" dates

### 6.5 Local SEO (Should)
- Google Business Profile linked and consistent NAP (Name, Address, Phone)
- `LocalBusiness` / `ProfessionalService` schema with geo coordinates, hours, service area
- Embedded map, location landing pages, review collection flow

### 6.6 AEO Requirements
- **Answer-first content:** each key page and post opens with a concise 40–60 word direct answer, followed by depth
- Question-style headings (H2/H3 phrased as real queries: "How much does a logo design cost?")
- FAQ sections on every service page with `FAQPage` schema
- `HowTo` schema for process/tutorial content where applicable
- Use lists, tables, and step formats that are snippet-friendly
- Conversational, natural-language copy to support voice search
- Concise definitions ("What is GEO?") for glossary/knowledge pages

### 6.7 GEO Requirements
- **Structured data everywhere (JSON-LD):** `Organization`, `WebSite`, `Service`, `LocalBusiness`, `Article`/`BlogPosting`, `Person` (authors), `FAQPage`, `BreadcrumbList`, `Review`/`AggregateRating`, `CreativeWork` (portfolio)
- Clear entity identity: consistent brand name, description, and `sameAs` links (LinkedIn, Instagram, X, Behance, Dribbble, Clutch, GBP, Wikipedia/Wikidata if eligible)
- **`llms.txt`** at site root summarizing the agency, services, and key pages for LLM crawlers (emerging convention; low cost, harmless)
- **robots.txt policy** explicitly allowing reputable AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, etc.) unless the business decides otherwise
- Original, citable content: proprietary data, stats, benchmarks, frameworks, and case-study numbers that AI systems can quote
- Cite credible external sources; attribute claims; keep facts consistent across the site and third-party profiles
- Clear, self-contained passages (each section understandable on its own so it can be extracted)
- Off-site authority: reviews and listings (Clutch, GoodFirms, Google), guest posts, PR mentions, LinkedIn/YouTube presence
- Server-rendered content (many AI crawlers do not execute JavaScript)
- Track AI visibility monthly: prompts like "best digital marketing agency in [city]" across major AI tools

### 6.8 Tracking & Reporting
- GA4 with conversion events (form submit, booking, WhatsApp click, call click, CTA click, scroll depth)
- Google Search Console, Bing Webmaster, Microsoft Clarity/Hotjar for heatmaps
- Monthly SEO/AEO/GEO report: rankings, snippets won, AI citations, traffic, leads

---

## 7. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | Mobile Lighthouse ≥ 90; page weight < 1.5 MB for above-the-fold |
| Availability | 99.9% uptime; CDN-backed |
| Security | HTTPS, security headers (CSP, X-Frame-Options), input sanitization, rate limiting on forms, dependency scanning |
| Privacy & Compliance | Cookie consent, Privacy Policy, GDPR + India DPDP Act readiness, consent-based analytics/marketing tags |
| Scalability | Handles traffic spikes via static generation + CDN caching |
| Maintainability | Component-based code, documented design system, CI/CD |
| Browser support | Last 2 versions of major browsers; graceful degradation |
| Accessibility | WCAG 2.2 AA |

---

## 8. Recommended Tech Stack

| Layer | Recommendation | Why |
|---|---|---|
| Framework | **Next.js (App Router)** with TypeScript | SSR/SSG/ISR, excellent SEO, metadata API, image optimization |
| Styling | Tailwind CSS + shadcn/ui or custom design system | Fast, consistent, responsive |
| Animation | Framer Motion / GSAP / Lottie | Engaging interactions |
| CMS | Sanity / Strapi / Payload / Contentful | Non-technical editing, structured content, live preview |
| Forms & CRM | Server actions or API route → email (Resend/SendGrid) + CRM (HubSpot / Zoho / Google Sheets) | Lead management |
| Booking | Cal.com / Calendly embed | Frictionless consultations |
| Newsletter | Brevo / Mailchimp / ConvertKit | Nurture leads |
| Analytics | GA4, Search Console, Clarity | Measurement |
| Hosting | Vercel / Netlify / Cloudflare Pages | Global CDN, easy CI/CD |
| Media | Cloudinary / Next Image | Optimization |
| SEO tooling | `next-sitemap`, JSON-LD helpers, Lighthouse CI | Automation |

*(Alternatives: Astro for a content-heavy, ultra-light build; WordPress + headless setup if the team prefers a familiar CMS.)*

---

## 9. Content Requirements

- Brand voice guide (professional, approachable, results-driven)
- Copy for all core pages (SEO-optimized, unique)
- 6–10 portfolio projects + at least 3 detailed case studies at launch
- 8–10 launch blog posts targeting priority keywords
- 6–10 testimonials with names, photos/logos
- Team photos and bios
- Lead magnet (e.g., "Marketing Checklist for Small Businesses" PDF)
- FAQs per service (5–8 each)
- Legal pages

---

## 10. User Flows

1. **Discovery → Lead:** Search / AI answer → Service page → Case study → Contact / Book call → Confirmation + email
2. **Content → Nurture:** Blog post → Lead magnet → Email signup → Newsletter → Consultation
3. **Mobile quick contact:** Any page → Sticky CTA / WhatsApp → Conversation

---

## 11. Milestones & Timeline (Indicative: 8–10 weeks)

| Phase | Duration | Deliverables |
|---|---|---|
| 1. Discovery & Strategy | Week 1 | Final requirements, keyword research, competitor analysis, sitemap, content plan |
| 2. UX & Design | Weeks 2–3 | Wireframes, design system, high-fidelity mockups (mobile + desktop), approval |
| 3. Development | Weeks 4–6 | Frontend build, CMS setup, integrations, schema, performance work |
| 4. Content & SEO Implementation | Weeks 5–7 | Copy, media, metadata, structured data, internal linking, `llms.txt` |
| 5. QA & Optimization | Week 8 | Cross-device/browser testing, accessibility audit, Lighthouse, security check, UAT |
| 6. Launch | Week 9 | Go-live, redirects, Search Console/analytics setup, sitemap submission |
| 7. Post-launch | Week 10+ | Monitoring, fixes, monthly SEO/AEO/GEO reporting, content cadence |

---

## 12. Acceptance Criteria (Launch Checklist)

- [ ] All pages responsive and tested on real devices
- [ ] Lighthouse ≥ 90 (mobile) for Performance, SEO, Accessibility, Best Practices
- [ ] Core Web Vitals pass in field/lab tests
- [ ] Unique titles, meta descriptions, and H1s on every page
- [ ] Valid JSON-LD verified in Rich Results Test / Schema Validator
- [ ] Sitemap, robots.txt, and `llms.txt` live
- [ ] Forms tested end-to-end (submission, email, CRM, spam protection)
- [ ] Booking integration working
- [ ] Analytics and conversion events firing correctly
- [ ] Cookie consent and legal pages live
- [ ] Redirects and 404 verified; no broken links
- [ ] WCAG 2.2 AA audit passed
- [ ] CMS training completed for the content team

---

## 13. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Heavy animations/visuals slow the site | High | Performance budget, lazy loading, reduced-motion support |
| Thin or generic content hurts rankings and AI visibility | High | Original case studies, data, expert-authored content |
| Delayed content/assets from stakeholders | Medium | Content calendar, early kickoff, placeholder-free design |
| AI search behavior changes quickly | Medium | Focus on fundamentals (quality, structure, authority); review quarterly |
| Low lead conversion | Medium | A/B test CTAs, heatmap analysis, simplify forms |
| Compliance gaps (privacy/cookies) | Medium | Consent management platform, legal review |

---

## 14. Future Enhancements (v2+)

- Multi-language support
- Client portal with project status and invoices
- AI chatbot for lead qualification
- Online payments for productized services / packages
- Interactive brand-audit tool as a lead magnet
- Programmatic SEO pages (industry × service × city)
- Video testimonials and podcast/webinar hub

---

## 15. Open Questions

1. Agency name, brand identity (logo, colors), and tone: existing or to be created?
2. Primary target geography (local, national, global)?
3. Should pricing/packages be shown publicly?
4. Preferred CMS and hosting budget?
5. Existing social profiles, reviews, and portfolio assets available?
6. Which CRM / email tools are already in use?
7. Any competitor sites to benchmark or emulate?

---

## 16. Appendix

### A. Sample JSON-LD (Organization)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Your Agency Name",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/logo.png",
  "description": "Graphic design, digital marketing, and business growth consultancy.",
  "areaServed": "IN",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/your-agency",
    "https://www.instagram.com/your-agency"
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Consultancy" } }
  ]
}
```

### B. Sample `llms.txt`
```
# Your Agency Name
> Full-service creative and growth agency offering graphic design, digital marketing, and business consultancy.

## Services
- [Graphic Design](https://www.example.com/services/graphic-design): Branding, logos, social creatives, print
- [Digital Marketing](https://www.example.com/services/digital-marketing): SEO, AEO, GEO, ads, social media
- [Business Consultancy](https://www.example.com/services/consultancy): Growth strategy and marketing audits

## Key Pages
- [Portfolio](https://www.example.com/work)
- [Blog](https://www.example.com/blog)
- [Contact](https://www.example.com/contact)
```

### C. Sample `robots.txt` (AI-friendly)
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

### D. Priority Keyword Themes (starter)
- "[service] agency in [city]" (graphic design, digital marketing, branding)
- "logo design cost", "how to grow my business online"
- "SEO vs AEO vs GEO", "how to rank in ChatGPT / AI search"
- "business growth consultant for small business"
