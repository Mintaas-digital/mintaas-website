import Link from "next/link";
import { ProjectCaption } from "@/components/project-caption";
import { InteractionIconTile } from "@/components/interaction-icon-tile";
import { ProjectMedia } from "@/components/project-media";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WORK_CARD_COPY, WORK_GROUPS, getProject } from "@/lib/projects";

export function WorkGrid() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 px-3 py-10">
      {WORK_GROUPS.map((group) => (
        <section
          key={group.heading}
          id={group.heading
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")}
          className="scroll-mt-24"
        >
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {group.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {group.slugs.map((slug, index) => {
              const project = getProject(slug);
              if (!project) return null;
              const copy = WORK_CARD_COPY[slug];

              return (
                <ScrollReveal key={slug} delay={Math.min(index * 0.05, 0.2)}>
                  <Link href={`/work/${slug}`} className="group block">
                    <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-muted">
                      {slug === "interaction" ? (
                        <InteractionIconTile />
                      ) : (
                        <ProjectMedia
                          media={project.gridMedia ?? project.media}
                          alt={copy?.name ?? project.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <ProjectCaption
                      title={copy?.name ?? project.title}
                      tags={project.tags}
                      description={copy?.description}
                      className="mt-6"
                    />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
