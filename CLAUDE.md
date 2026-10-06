# Tech-Career Landing Page — Project Context for Claude Code

## Project Overview
Landing page for **טק-קריירה** (Tech-Career), a non-profit tech training org for the Ethiopian-Israeli community.
Built with **Next.js 16**, **Tailwind CSS**, RTL Hebrew, deployed on **Vercel**.

**Live URL:** https://tech-career-landing-page-avraham.vercel.app
**GitHub:** https://github.com/natirot86-coder/tech-career-landing-avraham

---

## Deploy
```bash
vercel --yes --prod --scope natirot86-4356s-projects
```

---

## Environment Variables
Required in `.env.local` and in Vercel project settings:

| Variable | Description |
|---|---|
| `MONDAY_API_TOKEN` | Monday.com personal API token (server-side only) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format e.g. `972525662885` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID (optional) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (optional) |

---

## Brand Colors (tailwind.config.js)
| Token | Hex |
|---|---|
| `brand-orange` | `#E84C1E` |
| `brand-orange-dark` | `#C73E17` |
| `brand-orange-light` | `#F5E8E4` |
| `brand-navy` | `#1A2340` |
| `brand-gray` | `#F7F8FB` |
| `brand-gray-mid` | (Tailwind slate-400 range) |

Font: **Heebo** (Google Fonts, loaded in globals.css)

---

## /v2 — Corporate Design Variant
An alternate skin of the same landing page at `/v2`, built from the TypeUI **Corporate**
design skill (`.claude/skills/design-system/SKILL.md`): 8pt spacing grid, `rounded-lg`
components instead of pill shapes, explicit `focus-visible` rings, semantic `corp-*`
color tokens (tailwind.config.js) mapped onto the existing brand-orange/navy palette.
Same content, same `/api/submit` + Monday.com flow, same `WhatsAppButton` — only the
components under `src/components/v2/` differ. Compare side by side at `/` vs `/v2`.

---

## /helpdesk — Help Desk Course Templates
Three design templates for the Help Desk course: `/helpdesk/aurora` (dark glass + gradient mesh),
`/helpdesk/bento` (light bento grid, brand colors), `/helpdesk/terminal` (neon terminal).
`/helpdesk` is a gallery page linking to all three. **All copy lives in
`src/components/helpdesk/content.js`** (currently placeholder data). Every template uses
`src/components/helpdesk/LeadForm.js` → `/api/submit` → Monday.com, with
`utm_source = landing-page-helpdesk-<template>` unless the URL supplies one.
Motion/effects CSS is in `src/app/helpdesk/helpdesk.css` (respects `prefers-reduced-motion`).

---

## Component Map

| File | Description |
|---|---|
| `src/app/page.js` | Main page — assembles all components in order |
| `src/components/Navbar.js` | Top navigation with CTA button |
| `src/components/Hero.js` | Hero section with headline + form CTA |
| `src/components/PainPoints.js` | 4 big questions — community-oriented, universal tone |
| `src/components/CtaBanner.js` | Reusable CTA strip (3 variants: orange/navy/light) |
| `src/components/WhyTech.js` | 3 real 2026 Hebrew news article cards with stats |
| `src/components/About.js` | About Tech-Career section |
| `src/components/StatsCounter.js` | Animated number counters (Intersection Observer) |
| `src/components/Courses.js` | Course cards |
| `src/components/Testimonials.js` | 3 testimonial cards with large portrait photos |
| `src/components/LeadForm.js` | Lead capture form → submits to Monday.com |
| `src/components/Footer.js` | Footer with logo, social links, contact email |
| `src/components/WhatsAppButton.js` | Floating WhatsApp button (bottom-left) |
| `src/app/api/submit/route.js` | POST endpoint → creates item in Monday.com board |

---

## Monday.com Integration

**Board ID:** `18396761860`
**Board name:** לוח מועמדים ניסיון - נטלי נתי ואורלי
**Group ID:** `topics`

Column IDs (discovered via MCP):
| Column | ID |
|---|---|
| אימייל | `text_mkyq3a1` |
| טלפון | `phone_mm46se7z` |
| עיר | `text_mm05bcne` |
| שם פרטי | `text_mkywv4ea` |
| שם משפחה | `text_mkyqqaf9` |
| סטטוס | `color_mm01x6p7` → label: `'השאיר/ה פרטים'` |
| utm_source | `text_mm5qatev` → value: `'landing-page-avraham'` |
| תאריך | `date_mm059f56` |

---

## Images (public/images/)
| File | Used in |
|---|---|
| `logo.png` | Navbar, Footer |
| `graduates-group.jpg` | Hero section |
| `students-class.jpg` | About section |
| `panel-event.jpg` | About section |
| `portrait-madlen.jpg` | Testimonials — מדלן טדלה |
| `portrait-shawanesh.jpg` | Testimonials — שואנש אבבה |
| `portrait-roi.jpg` | Testimonials — רועי מקונן |
| `article-calcalist-juniors.jpg` | WhyTech — כלכליסט 01.05.2026 |
| `article-calcalist-salary.jpg` | WhyTech — כלכליסט 04.05.2026 |
| `article-mako.jpg` | WhyTech — mako 16.04.2026 |

---

## Key Design Decisions
- **RTL:** `dir="rtl"` on `<html>` in layout.js, all layout is RTL
- **Dotted background pattern:** `radial-gradient(circle, rgba(...) 1.5px, transparent 1.5px), 28px 28px` — used in PainPoints, WhyTech, CtaBanner
- **WhyTech cards:** stat number first (orange, large) → article screenshot below → "לכתבה המלאה" link. Fixed `h-[130px]` on stat section so all images align.
- **Testimonials:** Large portrait fills top `h-60` of card, quote + name below
- **CtaBanner variants:** `orange` / `navy` / `light` — passed as `variant` prop
- **StatsCounter:** Uses Intersection Observer to trigger count-up animation on scroll
- **Contact email:** sara@tech-career.org (displayed in footer)

---

## Social Links (Footer)
- YouTube: https://www.youtube.com/@-tech-career5878
- LinkedIn: https://www.linkedin.com/school/techcareerisrael/
- Facebook: https://www.facebook.com/tech.career
- Instagram: https://www.instagram.com/techcareer
