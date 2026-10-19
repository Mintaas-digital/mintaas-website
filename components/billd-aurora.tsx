"use client";

import { motion, useReducedMotion } from "framer-motion";

const BLOBS = [
  {
    color: "#3A1A4F",
    opacity: 0.35,
    className: "left-[-10%] top-[-20%] h-[28rem] w-[28rem]",
    x: [0, 120, -40, 0],
    y: [0, 60, 120, 0],
    duration: 22,
  },
  {
    color: "#8B4FD0",
    opacity: 0.3,
    className: "right-[-8%] top-[10%] h-[26rem] w-[26rem]",
    x: [0, -140, 30, 0],
    y: [0, 80, -40, 0],
    duration: 26,
  },
  {
    color: "#C58AF0",
    opacity: 0.35,
    className: "bottom-[-25%] left-[30%] h-[24rem] w-[24rem]",
    x: [0, 100, -100, 0],
    y: [0, -60, 20, 0],
    duration: 30,
  },
];

// Blurred purple blobs drifting slowly behind a section. The mask fades the
// effect out at the top and bottom edges so it never forms a hard seam.
export function BilldAurora() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
    >
      {BLOBS.map((blob) => (
        <motion.div
          key={blob.color}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          style={{ backgroundColor: blob.color, opacity: blob.opacity }}
          animate={reduceMotion ? undefined : { x: blob.x, y: blob.y }}
          transition={{
            duration: blob.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
