import { Roboto } from "next/font/google";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  PACKAGING_BOX,
  PACKAGING_COLORS,
  PACKAGING_CONCEPT,
  PACKAGING_DIELINE,
  PACKAGING_HERO,
  PACKAGING_ICONS,
  PACKAGING_IMAGE_2,
  PACKAGING_IMAGE_8,
  PACKAGING_PAIR,
  PACKAGING_LANGUAGE,
  PACKAGING_SYSTEM,
  PACKAGING_TYPE,
} from "@/lib/packaging-case-study";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function SectionHeading({ index, text }: { index: number; text: string }) {
  const [first, ...rest] = text.split(" ");

  return (
    <>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-foreground tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <span className="h-px w-16 bg-foreground" />
      </div>

      <h2 className="mt-6 text-left text-4xl leading-[1] font-black tracking-tight uppercase sm:text-5xl lg:text-7xl">
        <span className="block text-foreground">{first}</span>
        {rest.length > 0 && (
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            {rest.join(" ")}
          </span>
        )}
      </h2>
    </>
  );
}

export function PackagingCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={PACKAGING_HERO.src}
          alt="HappTag product packaging hero"
          width={PACKAGING_HERO.width}
          height={PACKAGING_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={1} text={`${PACKAGING_CONCEPT.headingSolid} ${PACKAGING_CONCEPT.headingOutline}`} />

            <p className="mt-10 max-w-3xl text-left text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {PACKAGING_CONCEPT.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-3">
        <Image
          src={PACKAGING_IMAGE_2.src}
          alt="HappTag packaging"
          width={PACKAGING_IMAGE_2.width}
          height={PACKAGING_IMAGE_2.height}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={2} text={PACKAGING_LANGUAGE.heading} />
            <p className="mt-10 max-w-3xl text-left text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {PACKAGING_LANGUAGE.body}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={3} text={PACKAGING_DIELINE.heading} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Image
              src={PACKAGING_DIELINE.image.src}
              alt="HappTag packaging dieline"
              width={PACKAGING_DIELINE.image.width}
              height={PACKAGING_DIELINE.image.height}
              className="mt-12 h-auto w-full"
            />
          </ScrollReveal>
        </div>
      </div>
      <div className="px-3 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={4} text={PACKAGING_COLORS.heading} />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-8">
            {PACKAGING_COLORS.items.map((color, i) => (
              <ScrollReveal key={color.hex} delay={i * 0.1}>
                <div
                  className="aspect-square w-full border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                  {color.name}
                </h3>
                <p className="mt-1 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  {color.hex}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={5} text={PACKAGING_TYPE.heading} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
              <div className="flex items-center">
                <span
                  className={`${roboto.className} text-8xl leading-none text-foreground sm:text-9xl lg:text-[12rem]`}
                >
                  {PACKAGING_TYPE.fontName}
                </span>
              </div>

              <div className="md:border-l md:border-border md:pl-16">
                <dl className="flex flex-col gap-1">
                  <dt className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    Font Family
                  </dt>
                  <dd className="text-lg font-medium text-foreground">
                    {PACKAGING_TYPE.family}
                  </dd>
                  <dd className="text-lg text-muted-foreground">
                    {PACKAGING_TYPE.style} · {PACKAGING_TYPE.classification}
                  </dd>
                </dl>

                <div
                  className={`${roboto.className} mt-10 flex flex-col gap-6 text-2xl leading-relaxed break-words text-foreground sm:text-3xl`}
                >
                  <p>{PACKAGING_TYPE.uppercase}</p>
                  <p>{PACKAGING_TYPE.lowercase}</p>
                  <p>{PACKAGING_TYPE.numbers}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="px-3 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={6} text={PACKAGING_ICONS.heading} />
          </ScrollReveal>

          <div className="mt-12 grid max-w-3xl grid-cols-4 gap-6 sm:gap-10">
            {PACKAGING_ICONS.icons.map((icon, i) => (
              <ScrollReveal key={icon.src} delay={i * 0.05}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className="h-auto w-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={7} text={PACKAGING_SYSTEM.heading} />
            <h3 className="mt-6 text-left text-xl font-semibold tracking-wide text-foreground uppercase sm:text-2xl">
              {PACKAGING_SYSTEM.subheading}
            </h3>
            <p className="mt-6 max-w-3xl text-left text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {PACKAGING_SYSTEM.body}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-3 pb-20 md:pb-32">
        <Image
          src={PACKAGING_SYSTEM.image.src}
          alt="HappTag packaging system"
          width={PACKAGING_SYSTEM.image.width}
          height={PACKAGING_SYSTEM.image.height}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading index={8} text={PACKAGING_BOX.heading} />
          </ScrollReveal>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl px-3">
        <Image
          src={PACKAGING_BOX.image.src}
          alt="HappTag box design"
          width={PACKAGING_BOX.image.width}
          height={PACKAGING_BOX.image.height}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-2 px-3 md:mt-32">
        {PACKAGING_PAIR.map((img, i) => (
          <div key={img.src} className="aspect-video overflow-hidden">
            <Image
              src={img.src}
              alt={`HappTag packaging ${i + 1}`}
              width={img.width}
              height={img.height}
              className="block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="px-3 pt-20 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={PACKAGING_IMAGE_8.src}
              alt="HappTag packaging"
              width={PACKAGING_IMAGE_8.width}
              height={PACKAGING_IMAGE_8.height}
              className="h-auto w-full"
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
