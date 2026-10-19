import { ArisLogoShowcase } from "@/components/aris-logo-showcase";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ARIS_UNITERN_BANNER_1,
  ARIS_UNITERN_BANNER_2,
  ARIS_UNITERN_BANNER_3,
  ARIS_UNITERN_BROCHURE,
  ARIS_UNITERN_FINAL,
  ARIS_UNITERN_HERO,
  ARIS_UNITERN_POSTERS,
  ARIS_UNITERN_STANDEE,
  ARIS_UNITERN_STATIONERY,
  ARIS_UNITERN_TRIO,
} from "@/lib/aris-unitern-case-study";

const ACCENT = "#FAA82C";

// Sunrise: a pale sky at the top (behind the transparent nav) and a warm sun
// glow rising from the bottom centre.
const SUNRISE = [
  "radial-gradient(120% 75% at 50% 112%, #FAA82C 0%, rgba(250,168,44,0.6) 26%, rgba(255,128,96,0.28) 48%, rgba(255,128,96,0) 72%)",
  "linear-gradient(to bottom, #FFFFFF 0%, #FFEFE0 62%, #FFF7EC 100%)",
].join(", ");

export function ArisUniternCaseStudy() {
  const { headline, accent, body } = ARIS_UNITERN_HERO;
  const [before, after = ""] = headline.split(accent);

  return (
    <div className="pb-24">
      <div
        className="relative -mt-16 flex min-h-svh flex-col items-center justify-center px-3 pt-36 pb-28 text-center"
        style={{ background: SUNRISE }}
      >
        <ScrollReveal className="flex flex-col items-center">
          <h1 className="max-w-5xl text-5xl leading-[1.05] font-bold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
            {before}
            <span style={{ color: ACCENT }}>{accent}</span>
            {after}
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#3f3f46] sm:text-xl">
            {body}
          </p>
        </ScrollReveal>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={ARIS_UNITERN_BANNER_1.src}
            alt="ArisUnitern banner"
            width={ARIS_UNITERN_BANNER_1.width}
            height={ARIS_UNITERN_BANNER_1.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <ArisLogoShowcase />

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {ARIS_UNITERN_BROCHURE.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ARIS_UNITERN_BROCHURE.images.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.1}>
                <Image
                  src={image.src}
                  alt={`ArisUnitern brochure ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {ARIS_UNITERN_POSTERS.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ARIS_UNITERN_POSTERS.images.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.1} className="h-full">
                <Image
                  src={image.src}
                  alt={`ArisUnitern poster ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={ARIS_UNITERN_BANNER_2.src}
            alt="ArisUnitern banner"
            width={ARIS_UNITERN_BANNER_2.width}
            height={ARIS_UNITERN_BANNER_2.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <div className="px-3 pt-12 pb-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {ARIS_UNITERN_STATIONERY.heading}
          </h2>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ARIS_UNITERN_STATIONERY.image.src}
              alt="ArisUnitern stationery design"
              width={ARIS_UNITERN_STATIONERY.image.width}
              height={ARIS_UNITERN_STATIONERY.image.height}
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pt-12 pb-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            {ARIS_UNITERN_STANDEE.heading}
          </h2>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ARIS_UNITERN_STANDEE.image.src}
              alt="ArisUnitern standee design"
              width={ARIS_UNITERN_STANDEE.image.width}
              height={ARIS_UNITERN_STANDEE.image.height}
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
          {ARIS_UNITERN_TRIO.map((image, i) => (
            <ScrollReveal
              key={image.src}
              delay={i * 0.1}
              className={`h-full ${image.span}`}
            >
              <Image
                src={image.src}
                alt={`ArisUnitern design ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={ARIS_UNITERN_BANNER_3.src}
            alt="ArisUnitern banner"
            width={ARIS_UNITERN_BANNER_3.width}
            height={ARIS_UNITERN_BANNER_3.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={ARIS_UNITERN_FINAL[0].src}
              alt="ArisUnitern banner 1"
              width={ARIS_UNITERN_FINAL[0].width}
              height={ARIS_UNITERN_FINAL[0].height}
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="w-full">
        <ScrollReveal>
          <Image
            src={ARIS_UNITERN_FINAL[1].src}
            alt="ArisUnitern banner 2"
            width={ARIS_UNITERN_FINAL[1].width}
            height={ARIS_UNITERN_FINAL[1].height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
