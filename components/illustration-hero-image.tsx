"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Image } from "@/components/image";

type HeroImage = { src: string; width: number; height: number };

// On landing the book starts zoomed in far enough to fill the screen, then
// eases out and settles in its centred spot. The hero clips the overflow.
export function IllustrationHeroImage({
  image,
  alt,
}: {
  image: HeroImage;
  alt: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative z-20"
      initial={reduceMotion ? false : { scale: 4 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        priority
        className="h-auto w-64 sm:w-80 md:w-96"
      />
    </motion.div>
  );
}
