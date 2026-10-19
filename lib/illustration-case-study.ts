export const ILLUSTRATION_HERO = {
  title: "Illustrations",
  image: {
    src: "/projects/illustration/Illustration_hero_image.webp",
    width: 512,
    height: 584,
  },
};

export const ILLUSTRATION_SKETCH = {
  image: {
    src: "/projects/illustration/Illustration_image_2.webp",
    width: 720,
    height: 272,
  },
  paragraphs: [
    "I believe every great project begins with a sketch. Before diving into design or product development, I start by putting ideas on paper—exploring form, flow, composition, and possibilities through sketching. This early creative process allows me to visualise concepts clearly, experiment freely, and refine ideas before moving into digital execution.",
    "For me, sketching is more than just a starting point; it is an essential part of my design process. It helps transform initial thoughts into purposeful designs, enabling me to create stronger products and illustrations with clarity, intention, and creativity.",
  ],
};

export const ILLUSTRATION_BANNER = {
  src: "/projects/illustration/Illustration_image_3.webp",
  width: 1289,
  height: 1189,
};

export const ILLUSTRATION_STORYBOOK = {
  text: "I designed and illustrated a children’s storybook that combines engaging storytelling with vibrant, imaginative visuals. Each illustration was thoughtfully crafted to enhance the narrative, capture young readers’ attention, and bring the characters and story to life.",
  image: ILLUSTRATION_HERO.image,
};

export const ILLUSTRATION_PAIR = [
  { src: "/projects/illustration/Illustration_image_4.webp", width: 600, height: 440 },
  { src: "/projects/illustration/Illustration_image_5.webp", width: 600, height: 440 },
];

export const ILLUSTRATION_TRAVEL = {
  text: "I designed and illustrated a hero banner for a travel platform that enables users to plan complete itineraries for destinations worldwide. The platform brings together flight and hotel bookings, travel experiences, and itinerary planning—whether for a 10-day trip or a month-long journey. Starting with initial sketches, I developed the concept into a detailed illustration that visually captures the excitement and flexibility of planning an entire journey in one place.",
  bottomLeft: {
    src: "/projects/illustration/Illustration_image_6.webp",
    width: 400,
    height: 400,
  },
  right: {
    src: "/projects/illustration/Illustration_image_7.webp",
    width: 800,
    height: 620,
  },
};

export const ILLUSTRATION_DESTUO = {
  text: "Destuo is an online custom fashion design platform that empowers users to personalize and create clothing based on their individual style and preferences. I designed the logo and visual identity to reflect the brand’s focus on creativity, personalization, and modern fashion. The logo was developed to establish a distinctive and contemporary brand presence while communicating the flexibility and creative freedom offered by the platform.",
  image: {
    src: "/projects/illustration/Illustration_image_8.webp",
    width: 500,
    height: 624,
  },
};

export const ILLUSTRATION_PAIR_2 = [
  { src: "/projects/illustration/Illustration_image_9.webp", width: 2000, height: 2160 },
  { src: "/projects/illustration/Illustration_image_10.webp", width: 2000, height: 2177 },
];

export const ILLUSTRATION_WIDE = {
  src: "/projects/illustration/Illustration_image_11.webp",
  width: 1152,
  height: 628,
};

export const ILLUSTRATION_BILLD = {
  paragraphs: [
    "Billd is a digital billing and payment platform designed to simplify the dining experience and make payments faster and more convenient. Customers can book a table, view their bill, and complete payments directly from their mobile phones, creating a seamless and hassle-free experience.",
    "To visually communicate the product’s core idea, I designed a hero banner that highlights the simplicity of digital payments and the overall dining journey. I also created a custom 3D illustration of a card payment terminal, adding depth and a modern visual character to the brand while reinforcing the platform’s focus on effortless transactions.",
  ],
  image: {
    src: "/projects/illustration/Illustration_image_12.webp",
    width: 1084,
    height: 528,
  },
};

export const ILLUSTRATION_ABSTRACT = {
  heading: "Abstract Illustrations",
  image: {
    src: "/projects/illustration/Illustration_image_13.webp",
    width: 992,
    height: 304,
  },
};

export const ILLUSTRATION_ICONS = {
  heading: "Icons and Illustrations",
  // Illustration_vector_1 … Illustration_vector_12, all 300×240 SVGs. Split
  // into two rows that scroll horizontally in opposite directions.
  rows: [
    Array.from({ length: 6 }, (_, i) => i + 1),
    Array.from({ length: 6 }, (_, i) => i + 7),
  ].map((ids) =>
    ids.map((n) => ({
      src: `/projects/illustration/Illustration_vector_${n}.svg`,
      width: 300,
      height: 240,
      n,
    })),
  ),
};

// Illustration_vector_13 … Illustration_vector_18 (≈430×401 SVGs), shown as
// a 3 × 2 grid.
export const ILLUSTRATION_VECTOR_GRID = Array.from({ length: 6 }, (_, i) => ({
  src: `/projects/illustration/Illustration_vector_${i + 13}.svg`,
  width: 430,
  height: 401,
  n: i + 13,
}));

export const ILLUSTRATION_DELIVERY = {
  text: "I created a series of custom illustrations for the application to visually communicate key features such as Trackable Delivery, Speed Delivery, and Sign Up Now. Each illustration was designed with a consistent visual style to simplify the message, enhance user understanding, and make the overall application experience more engaging and intuitive.",
  image: {
    src: "/projects/illustration/Illustration_image_14.webp",
    width: 3312,
    height: 3548,
  },
};

export const ILLUSTRATION_BANNER_2 = {
  src: "/projects/illustration/Illustration_image_15.webp",
  width: 1295,
  height: 449,
};

export const ILLUSTRATION_BANNER_3 = {
  src: "/projects/illustration/Illustration_image_16.webp",
  width: 1316,
  height: 524,
};

export const ILLUSTRATION_ZIPPO = {
  text: "I designed a distinctive logo for an authorised Zippo partner in India, combining the brand’s timeless character with a bold and contemporary visual identity. The concept was crafted to reflect confidence, individuality, and a fearless spirit while maintaining a strong connection to Zippo’s iconic heritage.",
  images: [
    { src: "/projects/illustration/Illustration_image_17.webp", width: 1068, height: 854 },
    { src: "/projects/illustration/Illustration_image_18.webp", width: 1036, height: 813 },
    { src: "/projects/illustration/Illustration_image_19.webp", width: 1051, height: 824 },
  ],
};

export const ILLUSTRATION_BANNER_4 = {
  src: "/projects/illustration/Illustration_image_20.webp",
  width: 1122,
  height: 386,
};

export const ILLUSTRATION_PANKAJ = {
  text: "I created a character illustration of Pankaj, a 50-year-old married man, focusing on capturing his personality, lifestyle, and individual characteristics through visual storytelling. His personality reflects a balance between introversion and extroversion, which influenced the character’s expressions, posture, and overall visual style. The illustration was developed to give the character a relatable and authentic personality while bringing his story to life visually.",
  bottomLeft: {
    src: "/projects/illustration/Illustration_image_21.webp",
    width: 2560,
    height: 2560,
  },
  right: {
    src: "/projects/illustration/Illustration_image_22.webp",
    width: 3106,
    height: 3377,
  },
};

export const ILLUSTRATION_BANNER_5 = {
  src: "/projects/illustration/Illustration_image_23.webp",
  width: 1864,
  height: 1643,
};
