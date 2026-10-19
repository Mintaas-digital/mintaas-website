# Chandrashekhar — Design Portfolio

Portfolio site for Chandrashekhar, a digital designer based in Bangalore, India, with 10 years of experience in UI/UX, product design, branding, illustration and interaction design. It showcases the work as a set of in-depth case studies.

Built with [Next.js](https://nextjs.org) (App Router), React, Tailwind CSS 4 and Framer Motion, and exported as a fully static site.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero video, services marquee, featured projects, expertise cards |
| `/work` | All projects, grouped by discipline |
| `/work/[slug]` | One case study per project (see below) |
| `/about` | About, daily tools and career timeline |
| `/contact` | Email, phone, availability, FAQ and social links |

### Case studies

| Slug | Project | Page |
| --- | --- | --- |
| `happtag` | Happtag | Full case study |
| `ten-x` | TenX | Full case study |
| `aap` | PREP (American Academy of Pediatrics) | Full case study |
| `bookdu` | BOOKDU | Full case study |
| `prepmyskills` | PrepMySkills | Full case study |
| `ai-platform` | NEXA | Full case study |
| `swash` | Swash | Full case study |
| `aris-unitern` | ArisUnitern (brand identity) | Full case study |
| `zave` | Zave (brand identity) | Full case study |
| `illustration` | Illustrations | Image-led page with animated hero |
| `sketching` | Sketching | Image-led page |
| `billd`, `uax-stake`, `interaction` | BILLD, UAX Stake, Interaction | Listed on `/work`; no detailed page yet (shows title, tags and one image) |

Case study pages use a fixed theme set per project in `lib/projects.ts` (`theme: "light" | "dark"`) and don't show the site-wide light/dark toggle. The navigation bar is always white on these pages.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build
npm run lint
```

> This project uses a recent Next.js with breaking changes from older versions. See `AGENTS.md` and the docs in `node_modules/next/dist/docs/` before changing framework-level code.

## Project structure

```
app/                  Routes, root layout, global styles (design tokens, animations)
  work/[slug]/        Case study route; picks the right case study component by slug
components/           UI sections and one *-case-study.tsx component per project
lib/                  Content as data: lib/projects.ts (project list, work page groups,
                      card copy) and one lib/*-case-study.ts per case study
public/               Static assets, one folder per area:
                      home/, about/, contact/, work/ (grid thumbnails),
                      projects/<name>/ (case study images and video)
```

Images go through `components/image.tsx`, a thin re-export of `next/image`.

## Adding or editing a case study

1. Add the project to `PROJECTS` in `lib/projects.ts` (slug, title, tags, thumbnail, theme). It then shows up on the work page once its slug is listed in `WORK_GROUPS`, with its short name and description in `WORK_CARD_COPY`.
2. Put the images in `public/projects/<name>/` and the thumbnail in `public/work/`.
3. Write the content in `lib/<name>-case-study.ts` and the layout in `components/<name>-case-study.tsx`.
4. Return the new component for its slug in `app/work/[slug]/page.tsx`.

## Deployment

The site is a standard Next.js app deployed on Vercel. Pushing to `main` triggers a deployment; no extra configuration is needed.

### Google Analytics

GA4 (measurement ID in `app/layout.tsx`) loads on production builds only, so local development isn't counted. Page views are tracked automatically, including client-side route changes.

## Contact

Email: info@csdn.design · Phone: +91 93048 98229
