export const BILLD_HERO = {
  src: "/projects/billd/billd_hero_image.webp",
  width: 1440,
  height: 800,
};

export const BILLD_INTRO = {
  heading: "Website Landing Page Design / Visual Design",
  body: "BILLD is a powerful billing and invoicing solution designed to simplify financial operations for modern businesses. It streamlines the entire billing cycle—from invoice creation to payment tracking—ensuring accuracy, speed, and transparency. With automated workflows, real-time insights, and seamless integration capabilities, BILLD helps businesses reduce manual effort, improve cash flow management, and deliver a professional billing experience.",
};

export const BILLD_TAGLINE = {
  lines: [
    "End-to-end marketing",
    "& technology solutions",
    "for restaurants",
  ],
};

export const BILLD_FEATURES = {
  heading: "Features",
  items: [
    {
      image: {
        src: "/projects/billd/billd_illustration_1.svg",
        width: 930,
        height: 540,
      },
      alt: "Role-based admin management illustration",
      title: "Role-Based Admin – Smart Access & Permission Management",
      body: "This illustration represents a role-based admin management system designed to streamline operations through a structured hierarchy of user roles and permissions. The system includes four key roles: Super Admin, Store Admin, Billing Admin, and Kitchen Admin, each with specific responsibilities and access levels. The Super Admin oversees the entire platform, while other administrators manage their respective operations. The concept highlights how role-based access improves workflow efficiency, simplifies administrative tasks, enhances security, and creates a seamless experience for managing multiple business functions within a centralized platform.",
    },
    {
      image: {
        src: "/projects/billd/billd_illustration_2.svg",
        width: 766,
        height: 543,
      },
      alt: "QR code table ordering illustration",
      title: "Table Ordering App – Scan, Order & Enjoy",
      body: "This illustration represents a smart, QR code-based table ordering application designed to simplify and enhance the restaurant dining experience. Customers can scan a QR code placed on their table to instantly access the digital menu, explore food and beverage options, customize their selections, and place orders directly from their smartphones. The concept highlights a seamless, contactless ordering process that reduces waiting time, minimizes manual effort, and improves order accuracy. Through a clean and intuitive interface, the application connects customers with restaurant operations, creating a faster, more convenient, and efficient dining experience.",
    },
    {
      image: {
        src: "/projects/billd/billd_illustration_3.svg",
        width: 770,
        height: 536,
      },
      alt: "Waiter app illustration",
      title: "Waiter App – Smart Service Management",
      body: "This illustration represents a smart Waiter App designed to simplify restaurant service operations and improve staff efficiency. The application enables waiters to manage customer orders, track table status, communicate with kitchen staff, and coordinate food and beverage service through an intuitive mobile interface. By digitizing traditional restaurant workflows, the app helps reduce manual errors, minimize service delays, and improve order accuracy. The concept highlights the integration of technology with hospitality, creating a seamless connection between waiters, customers, and restaurant management while delivering a faster, more organized, and personalized dining experience.",
    },
    {
      image: {
        src: "/projects/billd/billd_illustration_4.svg",
        width: 590,
        height: 596,
      },
      alt: "Restaurant e-commerce platform illustration",
      title: "Online Ordering – Restaurant E-Commerce Platform",
      body: "This illustration represents a restaurant e-commerce platform designed to make online food ordering simple, fast, and convenient. Through an intuitive mobile interface, customers can explore digital menus, select their favorite meals and beverages, and place orders effortlessly. The concept highlights a seamless shopping experience that connects restaurants with customers, improves order management, and enhances accessibility through a modern digital solution.",
    },
    {
      image: {
        src: "/projects/billd/billd_illustration_5.svg",
        width: 663,
        height: 558,
      },
      alt: "Kitchen app illustration",
      title: "Kitchen App – Smart Kitchen Order Management",
      body: "This illustration represents a smart Kitchen App designed to streamline restaurant kitchen operations and improve order efficiency. The application enables chefs and kitchen staff to receive digital Kitchen Order Tickets (KOT), track incoming orders, manage food preparation, and update order status in real time. By reducing manual processes and improving communication between the kitchen and service teams, the app helps minimize errors, speed up order preparation, and ensure a smooth dining experience.",
    },
  ] as {
    image: { src: string; width: number; height: number };
    alt: string;
    title?: string;
    body: string;
  }[],
};

export const BILLD_BUSINESS_TYPES = {
  heading: "Business Types",
  body: "BILLD adapts to the way every kind of food and beverage business operates. From quick-service counters to fine dining rooms, its role-based access, QR ordering, waiter, kitchen and online ordering tools can be tailored to each setup, helping teams serve faster and stay organized.",
  items: [
    "Cafe / Bakery",
    "Cinema",
    "QSR",
    "Fine Dining",
    "Cloud Kitchen",
    "Ice Cream Parlor",
    "Bar & Beverages",
  ],
  image: {
    src: "/projects/billd/billd_image_11.webp",
    width: 1089,
    height: 1625,
  },
};

export const BILLD_PRICING = {
  heading: "BILLD Pricing",
  body: "A transparent pricing experience that helps restaurant owners compare plans at a glance and pick the one that fits their business. Clear tiers, simple feature breakdowns, and a straightforward path to getting started keep the decision quick and confident.",
  images: [
    {
      src: "/projects/billd/billd_image_1.webp",
      width: 2400,
      height: 1529,
      alt: "BILLD pricing page",
    },
    {
      src: "/projects/billd/billd_image_2.webp",
      width: 2400,
      height: 1558,
      alt: "BILLD pricing plans",
    },
  ],
  illustration: {
    src: "/projects/billd/billd_illustration_3.webp",
    width: 2400,
    height: 868,
    alt: "BILLD pricing illustration",
  },
};
