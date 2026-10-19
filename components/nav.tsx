"use client";

import { Image } from "@/components/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { WORK_GROUPS, getCaseStudyTheme } from "@/lib/projects";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const WORK_MENU = [
  { href: "/work#product-ui-ux-design", label: "Product / UI UX Design" },
  {
    href: "/work#graphics-design-branding",
    label: "Graphics Design / Branding",
  },
  { href: "/work#illustration-sketching", label: "Illustration / Sketching" },
  {
    href: "/work#interaction-design-animation",
    label: "Interaction Design / Animation",
  },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const { scrollY } = useScroll();
  const isFixedThemeRoute = getCaseStudyTheme(pathname) !== null;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  const caseStudySlug = isFixedThemeRoute
    ? pathname.split("/").filter(Boolean)[1]
    : null;
  // Send the back button to the section of /work the project lives in.
  const backGroup = caseStudySlug
    ? WORK_GROUPS.find((g) => g.slugs.includes(caseStudySlug))
    : null;
  const backHref = backGroup
    ? `/work#${backGroup.heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`
    : "/work";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Case study pages ship with a fixed design theme, some of them dark,
      // but the bar stays solid white on all of them. Pinning the light tokens
      // on the header keeps its text, logo and mobile menu readable.
      data-theme={isFixedThemeRoute ? "light" : undefined}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isFixedThemeRoute
          ? "border-b border-border bg-white"
          : scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/home/combination_mark.svg"
            alt="Logo"
            width={289}
            height={62}
            priority
            className={`h-10 w-auto invert ${isFixedThemeRoute ? "" : "dark:invert-0"}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const linkClass = `text-sm transition-colors ${
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`;
            if (link.href !== "/work") {
              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              );
            }
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => setWorkOpen(false)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setWorkOpen(false);
                  }
                }}
              >
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
                <div
                  className={`absolute top-full right-0 pt-4 transition-opacity duration-200 ${
                    workOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <ul className="w-64 rounded-xl border border-border bg-background p-2 shadow-lg">
                    {WORK_MENU.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setWorkOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          {!isFixedThemeRoute && <ThemeToggle />}
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          {!isFixedThemeRoute && <ThemeToggle />}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background sm:hidden"
          >
            <div className="flex flex-col gap-1 px-3 py-4">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-md px-2 py-2 text-sm transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {caseStudySlug && (
        <Link
          href={backHref}
          aria-label="Back to all work"
          className="group absolute top-full left-3 mt-4 flex items-center gap-2 rounded-full border border-black/10 bg-white/90 py-1.5 pr-4 pl-2 text-sm font-medium text-black shadow-md backdrop-blur-md transition-all hover:-translate-x-0.5 hover:shadow-lg"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:-translate-x-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </span>
          Back
        </Link>
      )}
    </motion.header>
  );
}
