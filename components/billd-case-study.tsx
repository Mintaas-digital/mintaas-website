import { Image } from "@/components/image";
import { BilldAurora } from "@/components/billd-aurora";
import { BilldDripBand } from "@/components/billd-drip-band";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BILLD_HERO, BILLD_FEATURES, BILLD_INTRO, BILLD_PRICING, BILLD_TAGLINE } from "@/lib/billd-case-study";

export function BilldCaseStudy() {
  return (
    <div>
      <div className="w-full">
        <Image
          src={BILLD_HERO.src}
          alt="BILLD hero banner"
          width={BILLD_HERO.width}
          height={BILLD_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="relative overflow-hidden px-3 py-24 md:py-44">
        <BilldAurora />
        <div className="relative mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {BILLD_INTRO.heading}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {BILLD_INTRO.body}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-left text-4xl leading-[1.1] font-bold tracking-tight text-[#3F1652] sm:text-5xl lg:text-7xl">
              {BILLD_TAGLINE.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {BILLD_FEATURES.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-12 flex flex-col gap-16 md:gap-24">
            {BILLD_FEATURES.items.map((item, i) => (
              <div
                key={item.alt}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <ScrollReveal className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Image
                    src={item.image.src}
                    alt={item.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-auto w-full"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  {item.title && (
                    <h3 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                  )}
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BilldDripBand />

      <div className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-3">
          <ScrollReveal>
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#3A1A4F] sm:text-4xl lg:text-5xl">
                {BILLD_PRICING.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                {BILLD_PRICING.body}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-16 md:gap-24">
            {BILLD_PRICING.images.map((img) => (
              <ScrollReveal key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-16 md:mt-24">
          <Image
            src={BILLD_PRICING.illustration.src}
            alt={BILLD_PRICING.illustration.alt}
            width={BILLD_PRICING.illustration.width}
            height={BILLD_PRICING.illustration.height}
            className="h-auto w-full"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
