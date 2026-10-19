type ProjectMediaAsset =
  | { type: "image"; src: string; width: number; height: number }
  | { type: "video"; src: string };

export type Project = {
  slug: string;
  title: string;
  tags: string;
  media: ProjectMediaAsset;
  // Thumbnail used only on the /work grid — falls back to `media` when
  // absent. Kept separate so swapping the work-page thumbnail never
  // changes what the home page's project cards show.
  gridMedia?: ProjectMediaAsset;
  // Case study pages (/work/[slug]) don't use the site-wide light/dark
  // toggle — each one ships with a fixed theme baked into its design.
  // Set per project as its case study gets designed; defaults to "light".
  theme: "light" | "dark";
};

export const PROJECTS: Project[] = [
  {
    slug: "happtag",
    title: "Happtag (Tag it & forget forgetting)",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "video", src: "/home/case-study-Happtag-1.mp4" },
    gridMedia: { type: "video", src: "/work/happtag.mp4" },
    theme: "light",
  },
  {
    slug: "ten-x",
    title: "TEN X money exchange platform",
    tags: "UI/UX Design · APP Design · Branding",
    media: {
      type: "image",
      src: "/home/case-study-tenx.webp",
      width: 1992,
      height: 2924,
    },
    gridMedia: {
      type: "image",
      src: "/work/tenx_money_exchange_platform.webp",
      width: 2480,
      height: 2480,
    },
    theme: "dark",
  },
  {
    slug: "aap",
    title: "AAP (American Academy of Pediatrics App)",
    tags: "UI/UX Design · APP Design · Desktop App Design",
    media: {
      type: "image",
      src: "/home/case-study-app.webp",
      width: 3990,
      height: 1969,
    },
    gridMedia: {
      type: "image",
      src: "/work/prep.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "bookdu",
    title:
      "Bookdu is a SaaS platform for discovering, reading, and tracking digital books.",
    tags: "UI/UX Design · APP Design · Branding",
    media: {
      type: "image",
      src: "/home/case-study-bookdu.webp",
      width: 2204,
      height: 3064,
    },
    gridMedia: {
      type: "image",
      src: "/work/bookdu.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "prepmyskills",
    title: "PREPMYSKILLS (App kids will get to know and explore the world)",
    tags: "UI/UX Design · Desktop App Design",
    media: {
      type: "image",
      src: "/home/case-study-prepmyskills.webp",
      width: 2401,
      height: 1692,
    },
    gridMedia: {
      type: "image",
      src: "/work/prep_myskills.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "ai-platform",
    title:
      "AI platform that allows our team to research, write, and generate content seamlessly without switching between multiple tools",
    tags: "Product Design · UI/UX Design · Desktop App Design",
    media: {
      type: "image",
      src: "/home/case-study-nexa.webp",
      width: 3692,
      height: 2814,
    },
    gridMedia: {
      type: "image",
      src: "/work/nexa_knoweledge_agentic_ai_tool.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "swash",
    title:
      "Swash (Desktop application design for monitoring breathing quality)",
    tags: "Product Design · UI/UX Design · APP Design · Desktop App Design",
    media: {
      type: "image",
      src: "/home/case-study-swash.webp",
      width: 3656,
      height: 2012,
    },
    gridMedia: {
      type: "image",
      src: "/work/swash.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "billd",
    title: "BILLD",
    tags: "Product Design · UI/UX Design",
    media: { type: "image", src: "/work/billd.webp", width: 2480, height: 2480 },
    theme: "light",
  },
  {
    slug: "uax-stake",
    title: "UAX Stake",
    tags: "Product Design · UI/UX Design",
    media: {
      type: "image",
      src: "/work/uax_stake.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "aris-unitern",
    title: "ArisUnitern",
    tags: "Graphic Design · Branding",
    media: {
      type: "image",
      src: "/work/aris_unitern.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "zave",
    title: "Zave",
    tags: "Graphic Design · Branding",
    media: { type: "image", src: "/work/zave.webp", width: 2480, height: 2480 },
    theme: "light",
  },
  {
    slug: "product-packaging",
    title: "Product Packaging Design",
    tags: "Packaging Design · Graphic Design",
    media: {
      type: "image",
      src: "/work/product_packaging.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "illustration",
    title: "Illustration",
    tags: "Illustration",
    media: {
      type: "image",
      src: "/work/illustrations.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "sketching",
    title: "Sketching",
    tags: "Sketching",
    media: {
      type: "image",
      src: "/work/sketching.webp",
      width: 2481,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "interaction",
    title: "Interaction",
    tags: "Interaction Design · Animation",
    media: {
      type: "image",
      src: "/work/interaction.webp",
      width: 2480,
      height: 2480,
    },
    theme: "light",
  },
];

// Groups shown on the /work page, in display order. Items render in the
// order listed here, not the order of PROJECTS.
export const WORK_GROUPS: { heading: string; slugs: string[] }[] = [
  {
    heading: "Product / UI UX Design",
    slugs: [
      "happtag",
      "ten-x",
      "aap",
      "bookdu",
      "swash",
      "prepmyskills",
      "ai-platform",
      "billd",
      "uax-stake",
    ],
  },
  { heading: "Graphics Design / Branding", slugs: ["aris-unitern", "zave", "product-packaging"] },
  { heading: "Illustration / Sketching", slugs: ["illustration", "sketching"] },
  { heading: "Interaction Design / Animation", slugs: ["interaction"] },
];

// Short name and one-line description shown on each /work card. The long
// `title` stays for the case study page and metadata.
export const WORK_CARD_COPY: Record<
  string,
  { name: string; description: string }
> = {
  happtag: {
    name: "Happtag",
    description:
      "Tag it and stop forgetting. Happtag is a mobile app that helps people keep track of the things they use every day, designed with a friendly, simple interface and a fresh brand identity.",
  },
  "ten-x": {
    name: "TenX",
    description:
      "A money exchange platform designed to make sending and converting money fast, transparent and secure, with a clear interface that guides users through every step of a transaction.",
  },
  aap: {
    name: "PREP",
    description:
      "App and desktop experience design for the American Academy of Pediatrics, helping pediatric professionals learn, practise and keep up with their field through a clear, easy-to-navigate interface.",
  },
  bookdu: {
    name: "BOOKDU",
    description:
      "Bookdu is a SaaS platform for discovering, reading and tracking digital books, combining a clean reading experience with smart tools that help readers build and follow their habits.",
  },
  swash: {
    name: "Swash",
    description:
      "A desktop application for monitoring breathing quality. The design turns complex health data into calm, clear dashboards so users and clinical teams can understand patterns at a glance.",
  },
  prepmyskills: {
    name: "PrepMySkills",
    description:
      "An app where kids get to know and explore the world. The interface uses playful visuals and simple interactions to make learning engaging for children while staying easy for parents and teachers.",
  },
  "ai-platform": {
    name: "NEXA",
    description:
      "An AI platform that lets teams research, write and create with multiple AI models in one place. The design simplifies complex capabilities into a clean, conversion-focused interface.",
  },
  billd: {
    name: "BILLD",
    description:
      "Product and UI/UX design for the BILLD platform, focused on a clear structure, a consistent visual language and an interface that makes everyday tasks quick and straightforward.",
  },
  "uax-stake": {
    name: "UAX Stake",
    description:
      "Product and UI/UX design for the UAX staking platform, making staking easy to understand with clear information, confident visuals and a simple path from first visit to first stake.",
  },
  "aris-unitern": {
    name: "ArisUnitern",
    description:
      "Logo and brand identity design for ArisUnitern, creating a confident, modern mark and a visual system that works across digital and print touchpoints.",
  },
  zave: {
    name: "Zave",
    description:
      "Brand identity and stationery design for Zave, including the logo, colour palette and business cards that carry the brand across print.",
  },
  "product-packaging": {
    name: "Product Packaging",
    description:
      "Packaging design that turns a product into a shelf-ready experience, combining brand identity, clear information and a distinctive look that stands out in store.",
  },
  illustration: {
    name: "Illustration",
    description:
      "A collection of digital illustrations exploring colour, character and storytelling, created for brands, products and editorial use.",
  },
  sketching: {
    name: "Sketching",
    description:
      "Hand sketches and concept drawings used to explore ideas quickly, from early product thinking to character and composition studies.",
  },
  interaction: {
    name: "Interaction",
    description:
      "Interaction design and animation work that brings interfaces to life with purposeful motion, smooth transitions and small details that make products feel polished.",
  },
};

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

// Case study routes (/work/[slug]) are fixed-theme and don't expose the
// site-wide toggle. Returns the project's fixed theme for a case study
// route, or null for every other route (home/about/work listing/contact),
// which stay on the user's chosen theme.
export function getCaseStudyTheme(pathname: string): "light" | "dark" | null {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (!match) return null;
  return getProject(match[1])?.theme ?? null;
}
