import { IllustrationHeroImage } from "@/components/illustration-hero-image";
import { IllustrationPlates } from "@/components/illustration-plates";
import { IllustrationIconRows } from "@/components/illustration-icon-rows";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ILLUSTRATION_ABSTRACT,
  ILLUSTRATION_BANNER,
  ILLUSTRATION_BANNER_2,
  ILLUSTRATION_BANNER_3,
  ILLUSTRATION_BANNER_4,
  ILLUSTRATION_BANNER_5,
  ILLUSTRATION_BILLD,
  ILLUSTRATION_DELIVERY,
  ILLUSTRATION_DESTUO,
  ILLUSTRATION_HERO,
  ILLUSTRATION_ICONS,
  ILLUSTRATION_PANKAJ,
  ILLUSTRATION_VECTOR_GRID,
  ILLUSTRATION_PAIR,
  ILLUSTRATION_PAIR_2,
  ILLUSTRATION_WIDE,
  ILLUSTRATION_ZIPPO,
  ILLUSTRATION_SKETCH,
  ILLUSTRATION_STORYBOOK,
  ILLUSTRATION_TRAVEL,
} from "@/lib/illustration-case-study";

export function IllustrationCaseStudy() {
  const { title, image } = ILLUSTRATION_HERO;

  return (
    <div className="pb-24">
      <div className="relative -mt-16 flex min-h-svh flex-col items-center overflow-hidden justify-center bg-black px-3 pt-36 pb-28 text-center">
        <IllustrationPlates />

        <ScrollReveal className="relative z-10 flex flex-col items-center">
          <IllustrationHeroImage
            image={image}
            alt="Illustrated book cover of Stories and Poems for Li'l Ones"
          />

          <h1 className="mt-12 text-5xl leading-[1.05] font-bold tracking-tight text-white [text-shadow:0_0_28px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.7)] sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
        </ScrollReveal>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_SKETCH.image.src}
              alt="Sketches on paper"
              width={ILLUSTRATION_SKETCH.image.width}
              height={ILLUSTRATION_SKETCH.image.height}
              className="h-auto w-full"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-col gap-6">
            {ILLUSTRATION_SKETCH.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-[#3f3f46] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_BANNER.src}
              alt="Illustration"
              width={ILLUSTRATION_BANNER.width}
              height={ILLUSTRATION_BANNER.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
              {ILLUSTRATION_STORYBOOK.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex justify-center md:justify-end">
            <Image
              src={ILLUSTRATION_STORYBOOK.image.src}
              alt="Illustrated children's storybook cover"
              width={ILLUSTRATION_STORYBOOK.image.width}
              height={ILLUSTRATION_STORYBOOK.image.height}
              className="h-auto w-full max-w-md"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {ILLUSTRATION_PAIR.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.1}>
              <Image
                src={image.src}
                alt={`Illustration ${i + 4}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-[auto_auto]">
          <ScrollReveal className="h-full">
            <div className="flex h-full items-center rounded-[20px] bg-muted p-8 md:p-10">
              <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
                {ILLUSTRATION_TRAVEL.text}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="h-full md:col-start-2 md:row-span-2 md:row-start-1">
            <Image
              src={ILLUSTRATION_TRAVEL.right.src}
              alt="Travel platform hero banner illustration"
              width={ILLUSTRATION_TRAVEL.right.width}
              height={ILLUSTRATION_TRAVEL.right.height}
              className="h-full w-full rounded-[20px] object-cover"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="h-full md:col-start-1 md:row-start-2">
            <Image
              src={ILLUSTRATION_TRAVEL.bottomLeft.src}
              alt="Travel illustration"
              width={ILLUSTRATION_TRAVEL.bottomLeft.width}
              height={ILLUSTRATION_TRAVEL.bottomLeft.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
              {ILLUSTRATION_DESTUO.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex justify-center md:justify-end">
            <Image
              src={ILLUSTRATION_DESTUO.image.src}
              alt="Destuo logo and visual identity"
              width={ILLUSTRATION_DESTUO.image.width}
              height={ILLUSTRATION_DESTUO.image.height}
              className="h-auto w-full max-w-md"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {ILLUSTRATION_PAIR_2.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.1}>
              <Image
                src={image.src}
                alt={`Illustration ${i + 9}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px]"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_WIDE.src}
              alt="Illustration 11"
              width={ILLUSTRATION_WIDE.width}
              height={ILLUSTRATION_WIDE.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[3fr_7fr] md:gap-16">
          <ScrollReveal className="flex flex-col gap-6">
            {ILLUSTRATION_BILLD.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-[#3f3f46] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Image
              src={ILLUSTRATION_BILLD.image.src}
              alt="Billd hero banner and 3D card payment terminal"
              width={ILLUSTRATION_BILLD.image.width}
              height={ILLUSTRATION_BILLD.image.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {ILLUSTRATION_ABSTRACT.heading}
          </h2>

          <ScrollReveal>
            <Image
              src={ILLUSTRATION_ABSTRACT.image.src}
              alt="Abstract illustration: simple, secure, seamless"
              width={ILLUSTRATION_ABSTRACT.image.width}
              height={ILLUSTRATION_ABSTRACT.image.height}
              className="mt-10 h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-3">
          <ScrollReveal>
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
              {ILLUSTRATION_ICONS.heading}
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="mt-12 w-full">
          <IllustrationIconRows />
        </ScrollReveal>
      </section>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[3fr_7fr] md:gap-16">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
              {ILLUSTRATION_DELIVERY.text}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Image
              src={ILLUSTRATION_DELIVERY.image.src}
              alt="Delivery app illustrations: trackable delivery, speed delivery, sign up now"
              width={ILLUSTRATION_DELIVERY.image.width}
              height={ILLUSTRATION_DELIVERY.image.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_BANNER_2.src}
              alt="Illustration"
              width={ILLUSTRATION_BANNER_2.width}
              height={ILLUSTRATION_BANNER_2.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_BANNER_3.src}
              alt="Illustration"
              width={ILLUSTRATION_BANNER_3.width}
              height={ILLUSTRATION_BANNER_3.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-5 md:gap-8">
          <ScrollReveal className="md:col-span-2 md:pr-8">
            <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
              {ILLUSTRATION_ZIPPO.text}
            </p>
          </ScrollReveal>

          {ILLUSTRATION_ZIPPO.images.map((image, i) => (
            <ScrollReveal key={image.src} delay={0.1 + i * 0.1}>
              <Image
                src={image.src}
                alt={`Zippo partner logo ${i + 1}`}
                width={image.width}
                height={image.height}
                className="aspect-[5/4] w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ILLUSTRATION_BANNER_4.src}
              alt="Illustration"
              width={ILLUSTRATION_BANNER_4.width}
              height={ILLUSTRATION_BANNER_4.height}
              className="h-auto w-full rounded-[20px]"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <div className="rounded-[20px] bg-muted p-8 md:p-10">
                <p className="text-base leading-relaxed text-[#3f3f46] sm:text-lg">
                  {ILLUSTRATION_PANKAJ.text}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Image
                src={ILLUSTRATION_PANKAJ.bottomLeft.src}
                alt="Pankaj character illustration"
                width={ILLUSTRATION_PANKAJ.bottomLeft.width}
                height={ILLUSTRATION_PANKAJ.bottomLeft.height}
                className="h-auto w-full rounded-[20px]"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="md:h-full">
            <Image
              src={ILLUSTRATION_PANKAJ.right.src}
              alt="Pankaj character illustration"
              width={ILLUSTRATION_PANKAJ.right.width}
              height={ILLUSTRATION_PANKAJ.right.height}
              className="h-auto w-full rounded-[20px] object-cover md:h-full"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ILLUSTRATION_VECTOR_GRID.map((vector, i) => (
            <ScrollReveal key={vector.n} delay={(i % 3) * 0.1}>
              <Image
                src={vector.src}
                alt={`Vector illustration ${vector.n}`}
                width={vector.width}
                height={vector.height}
                className="h-auto w-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="w-full">
        <ScrollReveal>
          <Image
            src={ILLUSTRATION_BANNER_5.src}
            alt="Illustration"
            width={ILLUSTRATION_BANNER_5.width}
            height={ILLUSTRATION_BANNER_5.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
