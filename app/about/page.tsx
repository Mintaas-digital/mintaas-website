import type { Metadata } from "next";
import { CareerSection } from "@/components/career-section";
import { DailyToolsSection } from "@/components/daily-tools-section";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <section className="px-3 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div>
            <ScrollReveal>
              <h1 className="leading-[0.9] font-black tracking-tight uppercase">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                  About
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                  Yours Truly
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                I’m{" "}
                <span className="font-black text-foreground">
                  Chandrashekhar
                </span>
                , a digital designer with 10 years of experience, applying my
                skills across products and experiences.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="shrink-0 md:ml-auto">
            <Image
              src="/about/user.webp"
              alt="Chandrashekhar"
              width={812}
              height={1224}
              priority
              className="aspect-[2/3] w-56 rounded-[32px] object-cover sm:w-72 lg:w-80"
            />
          </ScrollReveal>
        </div>
      </section>

      <DailyToolsSection />
      <CareerSection />
    </>
  );
}
