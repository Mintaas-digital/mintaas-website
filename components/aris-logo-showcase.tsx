"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Image } from "@/components/image";
import { ARIS_UNITERN_LOGO } from "@/lib/aris-unitern-case-study";

const ACCENT = "#FAA82C";

// Same sunrise language as the hero: white sky into peach, with a warm glow
// rising from the bottom of the stage.
const STAGE = [
  "radial-gradient(90% 70% at 50% 100%, rgba(250,168,44,0.75) 0%, rgba(255,128,96,0.3) 45%, rgba(255,128,96,0) 75%)",
  "linear-gradient(to bottom, #FFFFFF 0%, #FFEFE0 70%, #FFE3C4 100%)",
].join(", ");

export function ArisLogoShowcase() {
  const reduced = useReducedMotion() ?? false;
  const { heading, title, intro, principles, palette, image } =
    ARIS_UNITERN_LOGO;

  return (
    <div className="px-3 py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[28px] border border-border md:grid-cols-2">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8 bg-white p-8 text-black md:p-14"
        >
          <div>
            <span className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
              {heading}
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{intro}</p>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.label}>
                <dt className="flex items-center gap-2 text-sm font-semibold">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex gap-2">
            {palette.map((hex) => (
              <span
                key={hex}
                title={hex}
                className="h-8 w-8 rounded-full border border-black/10"
                style={{ backgroundColor: hex }}
              />
            ))}
          </div>
        </motion.div>

        <div
          className="relative flex min-h-[22rem] items-center justify-center overflow-hidden p-10"
          style={{ background: STAGE }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute bottom-[-20%] left-1/2 h-[80%] w-[90%] -translate-x-1/2 rounded-full blur-3xl"
            style={{ backgroundColor: ACCENT, opacity: 0.45 }}
            animate={
              reduced
                ? undefined
                : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            initial={reduced ? false : { scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src={image.src}
              alt="ArisUnitern logo"
              width={image.width}
              height={image.height}
              unoptimized
              className="h-auto w-[150px] rounded-[20px] shadow-[0_24px_60px_-16px_rgba(120,60,0,0.45)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
