export const INTERACTION_HERO = {
  intro:
    "Small, purposeful motion that makes interfaces feel alive — banners, icons and micro-interactions you can watch and replay.",
};

export type InteractionDemo = {
  id: string;
  title: string;
  description: string;
  // Spaces in file names are fine; the component URL-encodes the path.
  src: string;
  width: number;
  height: number;
  tags: string[];
};

// Add or reorder entries here and the grid and bottom sheet pick them up
// automatically. `title` is the heading shown on the card and in the sheet.
export const INTERACTION_DEMOS: InteractionDemo[] = [
  {
    id: "main-banner",
    title: "End-to-End Digital Technology Solutions",
    description:
      "CodeMatrix provides end-to-end digital technology solutions, covering UI/UX design, web and mobile development, e-commerce, microservices, DevOps, and AI/ML. The company brings these capabilities together to build scalable, innovative, and user-focused digital products for modern businesses.",
    src: "/projects/interaction/Main_Banner.html",
    width: 1920,
    height: 1000,
    tags: ["Banner", "Brand Animation", "Lottie"],
  },
  {
    id: "banner-product",
    title: "The Complete Product Range, in One Interface",
    description:
      "This illustration showcases the complete range of product offerings through an engaging browser-based interface, using interactive design elements to create a clear and visually compelling user experience.",
    src: "/projects/interaction/Banner_Product.html",
    width: 1018,
    height: 790,
    tags: ["Banner", "Web Interface", "Lottie"],
  },
  {
    id: "banner-solutions",
    title: "A Connected Digital Product Ecosystem",
    description:
      "This illustration is designed as an animated visual that showcases a connected digital product ecosystem. The animation can highlight the transition between web and mobile experiences, product interactions, cloud-based technology, and integrated communication tools. Moving connection lines, floating interface elements, and subtle screen interactions can demonstrate how users seamlessly explore products, interact with offers, and stay connected across multiple digital touchpoints.",
    src: "/projects/interaction/Banner_Solutions.html",
    width: 1816,
    height: 792,
    tags: ["Banner", "Ecosystem", "Lottie"],
  },
  {
    id: "banner-use-case",
    title: "Seamless Digital Gifting and Rewards",
    description:
      "This illustration represents a digital gifting and rewards experience, showing how gift cards and rewards are delivered seamlessly through a connected platform. The visual highlights the journey from digital processing to personalized gifting and customer engagement.",
    src: "/projects/interaction/Banner_Use_Case 2.html",
    width: 1816,
    height: 792,
    tags: ["Banner", "Gifting", "Lottie"],
  },
  {
    id: "icon-global-payment",
    title: "Payments Without Borders",
    description:
      "An animated icon of a globe, a payment card and orbiting currency symbols, expressing payments that work across currencies and countries. The currencies circle the globe while the card settles in place, keeping the idea of global payments simple and instantly readable.",
    src: "/projects/interaction/Icon_Global_Payment.html",
    width: 342,
    height: 458,
    tags: ["Icon", "Payments", "Lottie"],
  },
  {
    id: "icon-catalogue",
    title: "1500+ Brands in Over 120 Countries",
    description:
      "The largest global catalogue, with 1500+ brands available in over 120 countries. A rotating globe surrounded by brand imagery makes the scale and worldwide reach of the catalogue clear at a glance.",
    src: "/projects/interaction/Icon_Largest_global_catalogue.html",
    width: 342,
    height: 326,
    tags: ["Icon", "Catalogue", "Lottie"],
  },
  {
    id: "icon-operating-cost",
    title: "Lowest Operating Cost",
    description:
      "A compact animated icon that communicates efficiency and savings, showing how an integrated platform keeps running costs low. Clean, minimal motion keeps the message quick to read in a feature row.",
    src: "/projects/interaction/Icon_Lowest_operating Cost.html",
    width: 342,
    height: 326,
    tags: ["Icon", "Cost", "Lottie"],
  },
  {
    id: "icon-time",
    title: "Time Saved, Every Step",
    description:
      "An animated clock with a moving arrow, representing faster delivery and fewer manual steps. The looping motion suggests time being saved, so the benefit reads instantly without any extra copy.",
    src: "/projects/interaction/Icon_Time.html",
    width: 342,
    height: 278,
    tags: ["Icon", "Speed", "Lottie"],
  },
];
