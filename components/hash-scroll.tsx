"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 88;
const SETTLE_MS = 3000;

// Next's own hash scrolling can land wrong: after a client navigation (e.g. the
// Back button on a case study) the router resets scroll to the top, and the
// page fades in while images resize the layout. Keep nudging the target into
// place until the layout settles, and stop the moment the visitor scrolls.
function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return () => {};

  let stopped = false;
  const stop = () => {
    stopped = true;
    window.clearInterval(timer);
    cleanup();
  };
  const cleanup = () => {
    for (const e of ["wheel", "touchstart", "keydown", "mousedown"]) {
      window.removeEventListener(e, stop);
    }
  };
  for (const e of ["wheel", "touchstart", "keydown", "mousedown"]) {
    window.addEventListener(e, stop, { passive: true });
  }

  const started = performance.now();
  const timer = window.setInterval(() => {
    if (stopped) return;
    const el = document.getElementById(id);
    if (el) {
      const top = Math.round(
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
      );
      if (Math.abs(window.scrollY - top) > 2) {
        window.scrollTo({ top, behavior: "auto" });
      }
    }
    if (performance.now() - started > SETTLE_MS) stop();
  }, 50);

  return stop;
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let stop = scrollToHash();
    const onHashChange = () => {
      stop();
      stop = scrollToHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      stop();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
