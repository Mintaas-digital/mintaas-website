"use client";

import { usePathname } from "next/navigation";
import { Image } from "@/components/image";
import { CtaButton } from "@/components/cta-button";
import { getCaseStudyTheme } from "@/lib/projects";

export function Footer() {
  // Like the nav, pin the light theme on case study pages (some ship a dark
  // theme) so the footer looks the same on every page.
  const isFixedThemeRoute = getCaseStudyTheme(usePathname()) !== null;

  return (
    <footer
      data-theme={isFixedThemeRoute ? "light" : undefined}
      className="border-t border-border bg-background text-foreground"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-3 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <Image
            src="/home/logomark.svg"
            alt="Logo"
            width={160}
            height={160}
            className="h-20 w-20 invert sm:h-24 sm:w-24 dark:invert-0"
          />

          <CtaButton href="/contact" label="Let’s talk" />
        </div>

        <div className="flex flex-col gap-2 lg:items-end">
          <a
            href="mailto:info@csdn.design"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            info@csdn.design
          </a>
          <a
            href="tel:+919304898229"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            +91 93048 98229
          </a>
        </div>
      </div>
    </footer>
  );
}
