import { ExpertiseSection } from "@/components/expertise-section";
import { Marquee } from "@/components/marquee";
import { ProjectsSection } from "@/components/projects-section";
import { ThemedBackgroundVideo } from "@/components/themed-background-video";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem-1px)] flex-col items-center justify-between overflow-hidden px-3 py-16 text-center">
        <ThemedBackgroundVideo
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          lightSrc="/home/home-background-hero-video_white.mp4"
          darkSrc="/home/home-background-hero-video_dark.mp4"
        />
        <div className="absolute inset-0 -z-10 hidden bg-black/50 dark:block" />

        <h1 className="mx-auto max-w-7xl text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-6xl">
          <span className="block text-lg font-normal text-foreground/70 dark:text-white/70 sm:text-xl">
            Where
          </span>
          <span className="block">Complexity</span>
          <span className="block">
            Becomes <span className="text-[#FF5D64]">Simple</span>
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-foreground/70 dark:text-white/70">
          I’m Chandrashekhar, a digital designer with 10 years of experience,
          applying my skills across products and experiences.
        </p>
      </div>

      <Marquee />
      <ProjectsSection />
      <ExpertiseSection />
    </>
  );
}
