# Nomadiet — Online Dietitian Consulting Website

## Project
A professional online consulting website for a dietitian. The site needs to feel warm,
trustworthy, credible, and human — like a real health professional's practice, not a tech
startup landing page.

## Design Philosophy: NEVER look "vibe-coded"

This is the single most important design rule for this project. Every UI change must be
checked against it before it's considered done.

"Vibe-coded" here means the generic, template-y look that AI page-builders default to.
Concretely, avoid all of the following unless the user explicitly asks for it:

- **Purple/violet as a primary or gradient color.** Especially a dark navy-to-purple
  gradient hero background, or glowing purple/magenta blobs behind content. This is the
  single most common tell of an AI-generated site — treat it as a hard no.
- The generic SaaS hero template: dark background + huge centered bold headline + a small
  pill-shaped "eyebrow" badge above it + two buttons ("Get Started" / "Request a Demo")
  + a floating gradient card/mockup on the right.
- Decorative dot-grid patterns, glowing orbs, or abstract gradient blobs as background filler.
- A generic top nav with logo + "Features / Solutions / Pricing / Resources" + "Login / Sign up"
  buttons — that's a SaaS pattern, not a consulting-practice pattern.
- One heavy geometric sans-serif font used everywhere at huge sizes with little type
  hierarchy (the "default Tailwind/shadcn" look).
- Abstract 3D-gradient illustrations or silhouette artwork standing in for real content.
- Generic floating chat-bubble icon in the bottom corner as filler.

### Instead, aim for:
- **Color palette**: warm, organic, wellness-appropriate tones — sage/olive greens, warm
  terracotta or clay, cream/off-white backgrounds, soft warm neutrals, muted earth tones.
  Accent colors should feel calm and appetite/health-appropriate, not techy or neon.
- **Layout**: editorial and human rather than "product dashboard." Real photography of
  food, people, or the practitioner; asymmetric or magazine-style layouts; generous
  whitespace; content that reads like a professional's site, not a SaaS pitch.
- **Imagery**: prefer authentic photography over abstract gradient/illustration filler.

## Typography

- Always load a real, deliberately chosen webfont (Google Fonts, Fontshare, Adobe Fonts,
  self-hosted, etc.). Never leave text on unstyled system-font fallback.
- Pair a distinctive display/heading font with a clean, readable body font — the pairing
  should feel intentional and branded, not like a framework default.
- Double check font weights/sizes create clear hierarchy, and that line-height, letter
  spacing, and contrast are comfortable to read at body-text sizes.

## Follow user-provided design references

Whenever the user shares screenshots, links, or mockups of sites/designs they like, treat
those as the primary source of truth for layout, color, spacing, and tone for that piece of
work — reproduce the specific elements they're responding to rather than falling back to a
generic default.

## Responsiveness — required every time

- Build mobile-first. Every page/component must work at minimum these breakpoints:
  375px (mobile), 768px (tablet), 1440px (desktop).
- Check nav collapse/hamburger behavior, tap target sizes, image scaling, and text reflow
  on mobile specifically — not just that desktop looks good.

## Verification checklist — run after every change, before calling it done

1. Start the dev server and actually open the page in a browser (don't just eyeball code).
2. Check both a mobile viewport (375px) and a desktop viewport (1440px).
3. Re-check this file's "never look vibe-coded" list against what's on screen — in
   particular, scan for purple gradients and the generic SaaS-hero template.
4. Confirm the custom fonts are actually loading (not silently falling back to a system font).
5. Check the browser console for errors.
6. If the user supplied reference designs for this piece of work, compare against them directly.

Do not report a design/UI task as complete without having done this check.
