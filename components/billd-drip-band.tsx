import { Image } from "@/components/image";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BILLD_BUSINESS_TYPES } from "@/lib/billd-case-study";

const WIDTH = 1440;
const HEIGHT = 158;
const LINE_LEFT = 76;
const LINE_RIGHT = 21;
const DROPS = 66;
const DROP_RX = 6.5;
const DROP_RY = 13;

const lineY = (x: number) => LINE_LEFT + (LINE_RIGHT - LINE_LEFT) * (x / WIDTH);

const drops = Array.from({ length: DROPS }, (_, i) => {
  const cx = (i + 0.5) * (WIDTH / DROPS);
  return { cx, cy: lineY(cx) };
});

// Full-bleed purple band whose top edge slopes up left-to-right and is
// scalloped by background-coloured drips. The drips use the page background
// so the edge reads correctly in both themes.
export function BilldDripBand() {
  return (
    <div className="relative mt-24 w-full md:mt-40" style={{ backgroundColor: "#3A1A4F" }}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[calc(100%-1px)] block h-auto w-full"
      >
        <polygon
          points={`0,${LINE_LEFT} ${WIDTH},${LINE_RIGHT} ${WIDTH},${HEIGHT} 0,${HEIGHT}`}
          fill="#3A1A4F"
        />
        {drops.map(({ cx, cy }) => (
          <ellipse
            key={cx}
            cx={cx}
            cy={cy}
            rx={DROP_RX}
            ry={DROP_RY}
            className="fill-background"
          />
        ))}
      </svg>
      <div className="px-3 pt-20 pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl text-left text-white">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {BILLD_BUSINESS_TYPES.heading}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              {BILLD_BUSINESS_TYPES.body}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <Marquee
            items={BILLD_BUSINESS_TYPES.items}
            className="text-white"
            dotClassName="bg-white/60"
          />
        </div>

        <div className="mx-auto mt-16 w-4/5">
          <ScrollReveal>
            <Image
              src={BILLD_BUSINESS_TYPES.image.src}
              alt="BILLD business types"
              width={BILLD_BUSINESS_TYPES.image.width}
              height={BILLD_BUSINESS_TYPES.image.height}
              className="h-auto w-full"
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
