import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  SKETCHING_HERO,
  SKETCHING_IMAGES,
  SKETCHING_INTRO,
} from "@/lib/sketching-case-study";

export function SketchingCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full bg-black">
        <Image
          src={SKETCHING_HERO.src}
          alt="Sketching"
          width={SKETCHING_HERO.width}
          height={SKETCHING_HERO.height}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="px-3 pt-12 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
              {SKETCHING_INTRO.heading}
            </h2>
            <div className="mt-6 flex max-w-3xl flex-col gap-6">
              {SKETCHING_INTRO.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-[#3f3f46] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pt-12 md:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-8">
          {SKETCHING_IMAGES.map((image, i) => (
            <ScrollReveal
              key={image.src}
              // Sketch 3 is a tall portrait, so it sits centred at 40% width
              // instead of stretching across the page.
              className={i === 2 ? "mx-auto w-full md:w-[40%]" : undefined}
            >
              <Image
                src={image.src}
                alt={`Sketch ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px]"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
