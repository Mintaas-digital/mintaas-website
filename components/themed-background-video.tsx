"use client";

import { useEffect, useRef } from "react";

// Renders both theme variants and lets CSS (the `dark:` variant, driven by
// [data-theme]) show the matching one, so the swap is instant on toggle and
// there is no hydration mismatch. The hidden variant is paused so only one
// 1080p video is decoded at a time.
export function ThemedBackgroundVideo({
  lightSrc,
  darkSrc,
  className,
}: {
  lightSrc: string;
  darkSrc: string;
  className?: string;
}) {
  const lightRef = useRef<HTMLVideoElement>(null);
  const darkRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    const dark = darkRef.current;
    if (!light || !dark) return;
    // Setting `muted` as a JSX prop causes a hydration warning on <video>.
    light.muted = true;
    dark.muted = true;

    const sync = () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const [show, hide] = isDark ? [dark, light] : [light, dark];
      hide.pause();
      show.play().catch(() => {});
    };
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <video
        ref={lightRef}
        src={lightSrc}
        className={`${className ?? ""} block dark:hidden`}
        autoPlay
        loop
        playsInline
      />
      <video
        ref={darkRef}
        src={darkSrc}
        className={`${className ?? ""} hidden dark:block`}
        autoPlay
        loop
        playsInline
      />
    </>
  );
}
