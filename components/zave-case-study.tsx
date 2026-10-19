import { Poppins } from "next/font/google";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ZAVE_BANNER_FULL,
  ZAVE_BANNERS_PAIR,
  ZAVE_BRANDING_COLOUR,
  ZAVE_BREAKDOWN,
  ZAVE_COLORS,
  ZAVE_CONCEPT,
  ZAVE_FONT,
  ZAVE_HERO,
  ZAVE_HOARDING,
  ZAVE_INTRO,
  ZAVE_LOGO,
  ZAVE_LOGO_CARDS,
  ZAVE_LOGO_VARIANTS,
  ZAVE_SKETCH,
  ZAVE_STATIONERY,
  ZAVE_WIREFRAME,
} from "@/lib/zave-case-study";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

function Heading({ text }: { text: string }) {
  return (
    <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
      {text}
    </h2>
  );
}

// Contained block: page padding with a max-width column.
function Contained({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-3 py-12 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}

function FullWidth({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <div className="w-full pb-12 md:pb-20">
      <ScrollReveal>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
        />
      </ScrollReveal>
    </div>
  );
}

export function ZaveCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={ZAVE_HERO.src}
          alt="Zave hero banner"
          width={ZAVE_HERO.width}
          height={ZAVE_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <Contained>
        <ScrollReveal className="flex justify-center">
          <Image
            src={ZAVE_LOGO.src}
            alt="Zave logo"
            width={ZAVE_LOGO.width}
            height={ZAVE_LOGO.height}
            className="h-auto w-full max-w-4xl"
          />
        </ScrollReveal>
      </Contained>

      <Contained>
        <ScrollReveal>
          <Heading text={ZAVE_INTRO.heading} />
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            {ZAVE_INTRO.body}
          </p>
        </ScrollReveal>
      </Contained>

      <Contained>
        <Heading text={ZAVE_COLORS.heading} />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ZAVE_COLORS.items.map((color, i) => (
            <ScrollReveal key={color.hex} delay={i * 0.1}>
              <div
                className="h-44 rounded-[20px] border border-border"
                style={{ backgroundColor: color.hex }}
              />
              <h3 className="mt-5 text-lg font-semibold text-black">
                {color.name}
              </h3>
              <p className="mt-1 text-sm font-medium tracking-wide text-muted-foreground">
                {color.hex}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {color.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Contained>

      <FullWidth
        src={ZAVE_WIREFRAME.src}
        width={ZAVE_WIREFRAME.width}
        height={ZAVE_WIREFRAME.height}
        alt="Zave logo wireframe"
      />

      <Contained className="!pt-0">
        <ScrollReveal>
          <Image
            src={ZAVE_BREAKDOWN.image.src}
            alt="Zave logo breakdown"
            width={ZAVE_BREAKDOWN.image.width}
            height={ZAVE_BREAKDOWN.image.height}
            className="h-auto w-full"
          />
          <p className="mt-10 ml-auto w-full text-lg leading-relaxed text-muted-foreground md:w-[80%]">
            {ZAVE_BREAKDOWN.body}
          </p>
        </ScrollReveal>
      </Contained>

      <Contained>
        <ScrollReveal>
          <Image
            src={ZAVE_LOGO.src}
            alt="Zave logo"
            width={ZAVE_LOGO.width}
            height={ZAVE_LOGO.height}
            className="h-auto w-full md:w-[80%]"
          />
        </ScrollReveal>
        <ScrollReveal className="mt-14">
          <Heading text={ZAVE_BRANDING_COLOUR.heading} />
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            {ZAVE_BRANDING_COLOUR.body}
          </p>
        </ScrollReveal>
      </Contained>

      <Contained>
        <ScrollReveal className="flex justify-center">
          <Image
            src={ZAVE_CONCEPT.src}
            alt="Zave logo concept"
            width={ZAVE_CONCEPT.width}
            height={ZAVE_CONCEPT.height}
            className="h-auto w-full max-w-3xl"
          />
        </ScrollReveal>
      </Contained>

      <Contained className="!pt-0">
        <ScrollReveal className="flex justify-center">
          <Image
            src={ZAVE_SKETCH.src}
            alt="Zave logo sketch"
            width={ZAVE_SKETCH.width}
            height={ZAVE_SKETCH.height}
            className="h-auto w-full max-w-3xl"
          />
        </ScrollReveal>
      </Contained>

      <Contained>
        <Heading text={ZAVE_FONT.heading} />
        <div
          className={`mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 ${poppins.className}`}
        >
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {ZAVE_FONT.style}
            </span>
            <span className="mt-3 block text-5xl leading-none tracking-tight text-black min-[400px]:text-6xl sm:text-7xl lg:text-8xl">
              {ZAVE_FONT.name}
            </span>
            <p className="mt-6 text-lg text-black">{ZAVE_FONT.weight}</p>
            <p className="mt-2 text-2xl text-black sm:text-3xl">
              {ZAVE_FONT.numbers}
            </p>
            <p className="mt-1 text-2xl break-all text-black sm:text-3xl">
              {ZAVE_FONT.lowercase}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-col gap-5">
            {ZAVE_FONT.body.map((text) => (
              <p
                key={text}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {text}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </Contained>

      <Contained className="!pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ZAVE_LOGO_VARIANTS.map((image, i) => (
            <ScrollReveal key={image.src} delay={(i % 2) * 0.1}>
              <Image
                src={image.src}
                alt={`Zave logo variation ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px]"
              />
            </ScrollReveal>
          ))}
        </div>
      </Contained>

      <Contained className="!pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ZAVE_LOGO_CARDS.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.1}>
              <Image
                src={image.src}
                alt={`Zave logo card ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px]"
              />
            </ScrollReveal>
          ))}
        </div>
      </Contained>

      <Contained className="!pt-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ZAVE_BANNERS_PAIR.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.1} className="h-full">
              <Image
                src={image.src}
                alt={`Zave banner ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          ))}
        </div>
      </Contained>

      <FullWidth
        src={ZAVE_BANNER_FULL.src}
        width={ZAVE_BANNER_FULL.width}
        height={ZAVE_BANNER_FULL.height}
        alt="Zave banner"
      />

      <Contained className="!pb-10">
        <Heading text={ZAVE_STATIONERY.heading} />
      </Contained>

      <Contained className="!pt-0">
        <div className="flex flex-col gap-6">
          {ZAVE_STATIONERY.images.map((image, i) => (
            <ScrollReveal key={image.src}>
              <Image
                src={image.src}
                alt={`Zave stationery design ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          ))}
        </div>
      </Contained>

      <Contained className="!pb-10">
        <Heading text={ZAVE_HOARDING.heading} />
      </Contained>

      <FullWidth
        src={ZAVE_HOARDING.image.src}
        width={ZAVE_HOARDING.image.width}
        height={ZAVE_HOARDING.image.height}
        alt="Zave hoarding design"
      />
    </div>
  );
}
