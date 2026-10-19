import Link from "next/link";
import { HoverLift } from "@/components/hover-lift";
import { ProjectCaption } from "@/components/project-caption";
import { ProjectMedia } from "@/components/project-media";
import { WORK_CARD_COPY, type Project } from "@/lib/projects";

export function ProjectCard({
  project,
  mediaClassName = "h-auto w-full rounded-[20px] object-cover",
  className,
}: {
  project: Project;
  mediaClassName?: string;
  className?: string;
}) {
  const copy = WORK_CARD_COPY[project.slug];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group block w-full ${className ?? ""}`}
    >
      <HoverLift className="w-full">
        <ProjectMedia
          media={project.media}
          alt={copy?.name ?? project.title}
          className={mediaClassName}
        />
      </HoverLift>

      <ProjectCaption
        title={copy?.name ?? project.title}
        description={copy?.description}
        tags={project.tags}
        className="mt-6"
      />
    </Link>
  );
}
