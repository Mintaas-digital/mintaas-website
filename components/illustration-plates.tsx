"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// Dark indigo (small, near the book) → bright sky blue (large, in the corner).
// The fan is drawn twice, mirrored, so it reaches both bottom corners.
const COLORS = [
  "#22124a",
  "#2f1a6b",
  "#3c2a8f",
  "#4b3fb0",
  "#5b52cf",
  "#6a63ee",
  "#6b78f5",
  "#5f90f8",
  "#5ea5fb",
];

// The spikes radiate from a point behind the hero book (the centre of a
// 1440×900 box) and grow with each step until the last one reaches the
// bottom-right corner. The box is sliced to cover the hero, so the corner
// spike overshoots and is clipped by the hero's overflow.
const ORIGIN = { x: 720, y: 410 };

const PLATES = COLORS.map((color, i) => {
  const t = i / (COLORS.length - 1);
  const length = 330 + t * 820;
  const halfWidth = length * (0.1 + 0.03 * t);
  // Degrees from the +x axis, positive is clockwise (downwards): the first
  // spike points up-right, the last one down toward the corner.
  const angle = -52 + t * 90;
  return {
    color,
    angle,
    points: `0,${-halfWidth * 0.6} ${length},0 ${length * 0.45},${halfWidth * 1.9}`,
  };
});

export function IllustrationPlates() {
  const reduceMotion = useReducedMotion();

  // Scrolling turns the whole fan about its centre like a nut on a bolt: the
  // inner ends stay put behind the book while the outer tips swing upward.
  // The left fan is a mirror image, so the same turn lifts its tips too.
  const { scrollY } = useScroll();
  const turn = useSpring(
    useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -70]),
    { stiffness: 120, damping: 24, mass: 0.4 },
  );

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Right side, then the same fan mirrored across the vertical centre line
          so the left reaches the bottom-left corner. */}
      {[false, true].map((mirrored) => (
        <g
          key={String(mirrored)}
          transform={mirrored ? `translate(${ORIGIN.x * 2} 0) scale(-1 1)` : undefined}
        >
          {PLATES.map((plate, index) => (
            <g
              key={plate.color}
              transform={`translate(${ORIGIN.x} ${ORIGIN.y}) rotate(${plate.angle})`}
            >
              {/* On landing, each spike grows out of the centre one after
                  another, smallest first, until the corner ones arrive. */}
              <motion.g
                style={{
                  rotate: turn,
                  transformBox: "view-box",
                  transformOrigin: "0px 0px",
                }}
              >
                <motion.polygon
                  points={plate.points}
                  fill={plate.color}
                  initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  // A light nudge on hover: the spike sways a few degrees about
                  // the centre and stretches a touch, then eases back.
                  whileHover={{
                    rotate: -4,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 140, damping: 12 },
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 1 + index * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-auto"
                  // Scale and sway about the spike's base (the local origin),
                  // not the centre of its own bounding box.
                  style={{ transformBox: "view-box", transformOrigin: "0px 0px" }}
                />
              </motion.g>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}
