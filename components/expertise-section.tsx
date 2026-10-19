import Link from "next/link";
import { Image } from "@/components/image";
import { InteractionIconTile } from "@/components/interaction-icon-tile";
import { HoverLift } from "@/components/hover-lift";
import { ScrollReveal } from "@/components/scroll-reveal";

function ExpertiseCard({
  src,
  alt,
  aspect,
  href,
  sizes,
  children,
}: {
  src: string;
  alt: string;
  aspect: string;
  href: string;
  sizes: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`relative block w-full overflow-hidden rounded-[20px] bg-muted ${aspect}`}
    >
      {children ?? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      )}
    </Link>
  );
}

export function ExpertiseSection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl">
          Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[800fr_440fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-ui-ux.webp"
                sizes="(min-width: 768px) 64vw, 100vw"
                alt="UI/UX"
                aspect="aspect-[800/450]"
                href="/work#product-ui-ux-design"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-interaction-design.webp"
                sizes="(min-width: 768px) 36vw, 100vw"
                alt="Interaction Design"
                aspect="aspect-[440/450]"
                href="/work/interaction"
              >
                <InteractionIconTile />
              </ExpertiseCard>
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[500fr_740fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-branding.webp"
                sizes="(min-width: 768px) 40vw, 100vw"
                alt="Branding"
                aspect="aspect-[500/370]"
                href="/work#graphics-design-branding"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-illustration.webp"
                sizes="(min-width: 768px) 60vw, 100vw"
                alt="Illustrations"
                aspect="aspect-[740/370]"
                href="/work/illustration"
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-product-design.webp"
                sizes="(min-width: 768px) 50vw, 100vw"
                alt="Product Design"
                aspect="aspect-[620/500]"
                href="/work#product-ui-ux-design"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-sketching.webp"
                sizes="(min-width: 768px) 50vw, 100vw"
                alt="Sketching"
                aspect="aspect-[620/500]"
                href="/work/sketching"
              />
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
