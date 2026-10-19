"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  INTERACTION_DEMOS,
  INTERACTION_HERO,
  type InteractionDemo,
} from "@/lib/interaction-case-study";

// Each demo is a self-contained Lottie export. Sandboxing without
// allow-same-origin keeps its CSS/JS from touching the site.
function DemoFrame({
  demo,
  replayKey,
  eager,
}: {
  demo: Pick<InteractionDemo, "src" | "title">;
  replayKey: number;
  eager?: boolean;
}) {
  return (
    <iframe
      key={replayKey}
      src={encodeURI(demo.src)}
      title={demo.title}
      sandbox="allow-scripts"
      loading={eager ? "eager" : "lazy"}
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}

function ReplayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function DemoCard({
  demo,
  onOpen,
}: {
  demo: InteractionDemo;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${demo.title}`}
      className="group flex w-full flex-col text-left"
    >
      <div className="relative w-full overflow-hidden rounded-[20px] bg-white ring-1 ring-border transition-shadow group-hover:ring-[#FF5D64]/60">
        <div className="relative aspect-[4/3] w-full">
          {/* Fit the demo inside the stage at its native aspect ratio. The
              iframe ignores pointer events so the whole card is the button. */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 max-h-[90%] max-w-[90%] -translate-x-1/2 -translate-y-1/2"
            style={{
              aspectRatio: `${demo.width} / ${demo.height}`,
              width: demo.width >= demo.height ? "90%" : "auto",
              height: demo.width >= demo.height ? "auto" : "90%",
            }}
          >
            <DemoFrame demo={demo} replayKey={0} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-normal sm:text-xl">{demo.title}</h3>
        <p className="mt-2 line-clamp-3 text-base text-muted-foreground">
          {demo.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm text-foreground transition-colors group-hover:text-[#FF5D64]">
          View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function BottomSheet({
  demo,
  onClose,
}: {
  demo: InteractionDemo;
  onClose: () => void;
}) {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]">
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={demo.title}
        className="absolute inset-x-0 bottom-0 flex max-h-[92vh] w-full flex-col rounded-t-[28px] bg-background text-foreground shadow-2xl ring-1 ring-border"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 320 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120 || info.velocity.y > 600) onClose();
        }}
      >
        <div className="flex justify-center pt-3">
          <span className="h-1.5 w-12 rounded-full bg-foreground/20" />
        </div>

        <div className="flex items-start justify-between gap-4 px-5 pt-4 sm:px-8">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">{demo.title}</h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-base">
              {demo.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {demo.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Replay"
              onClick={() => setReplayKey((k) => k + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-[#FF5D64] hover:text-white"
            >
              <ReplayIcon />
            </button>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-[#FF5D64] hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-5 sm:p-8">
          <div
            className="relative"
            style={{
              aspectRatio: `${demo.width} / ${demo.height}`,
              // Largest size that fits the sheet at the demo's ratio.
              width: `min(100%, calc(60vh * ${demo.width / demo.height}))`,
            }}
          >
            <DemoFrame demo={demo} replayKey={replayKey} eager />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function InteractionCaseStudy() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = INTERACTION_DEMOS.find((d) => d.id === openId);

  return (
    <div className="pb-24">
      <section className="relative -mt-16 flex min-h-screen items-center overflow-hidden bg-white px-3 pt-36 pb-20 text-black">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <h1 className="text-4xl leading-[0.95] font-black tracking-tight whitespace-nowrap uppercase sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">
                Interaction<span className="text-[#FF5D64]"> /</span>
              </span>
              <span className="block">Animation</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-black/70 sm:text-lg">
              {INTERACTION_HERO.intro}
            </p>
          </ScrollReveal>

          <div className="pointer-events-none relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative mx-auto w-4/5" style={{ aspectRatio: "342 / 326" }}>
              <iframe
                src="/projects/interaction/Icon_Largest_global_catalogue.html"
                title="1500+ brands in over 120 countries"
                sandbox="allow-scripts"
                tabIndex={-1}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="px-3 pt-12 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {INTERACTION_DEMOS.map((demo, i) => (
              <ScrollReveal key={demo.id} delay={Math.min(i * 0.05, 0.2)}>
                <DemoCard demo={demo} onOpen={() => setOpenId(demo.id)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <BottomSheet
            key={open.id}
            demo={open}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
