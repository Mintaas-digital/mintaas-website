import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AapCaseStudy } from "@/components/aap-case-study";
import { BookduCaseStudy } from "@/components/bookdu-case-study";
import { PrepmyskillsCaseStudy } from "@/components/prepmyskills-case-study";
import { ArisUniternCaseStudy } from "@/components/aris-unitern-case-study";
import { ZaveCaseStudy } from "@/components/zave-case-study";
import { IllustrationCaseStudy } from "@/components/illustration-case-study";
import { SketchingCaseStudy } from "@/components/sketching-case-study";
import { InteractionCaseStudy } from "@/components/interaction-case-study";
import { NexaCaseStudy } from "@/components/nexa-case-study";
import { SwashCaseStudy } from "@/components/swash-case-study";
import { BilldCaseStudy } from "@/components/billd-case-study";
import { UaxCaseStudy } from "@/components/uax-case-study";
import { PackagingCaseStudy } from "@/components/packaging-case-study";
import { HapptagCaseStudy } from "@/components/happtag-case-study";
import { TenxCaseStudy } from "@/components/tenx-case-study";
import { ProjectMedia } from "@/components/project-media";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return { title: project?.title ?? "Work" };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  if (project.slug === "happtag") {
    return <HapptagCaseStudy />;
  }

  if (project.slug === "ten-x") {
    return <TenxCaseStudy />;
  }

  if (project.slug === "aap") {
    return <AapCaseStudy />;
  }

  if (project.slug === "bookdu") {
    return <BookduCaseStudy />;
  }

  if (project.slug === "prepmyskills") {
    return <PrepmyskillsCaseStudy />;
  }

  if (project.slug === "swash") {
    return <SwashCaseStudy />;
  }

  if (project.slug === "billd") {
    return <BilldCaseStudy />;
  }

  if (project.slug === "uax-stake") {
    return <UaxCaseStudy />;
  }

  if (project.slug === "product-packaging") {
    return <PackagingCaseStudy />;
  }

  if (project.slug === "zave") {
    return <ZaveCaseStudy />;
  }

  if (project.slug === "aris-unitern") {
    return <ArisUniternCaseStudy />;
  }

  if (project.slug === "illustration") {
    return <IllustrationCaseStudy />;
  }

  if (project.slug === "sketching") {
    return <SketchingCaseStudy />;
  }

  if (project.slug === "interaction") {
    return <InteractionCaseStudy />;
  }

  if (project.slug === "ai-platform") {
    return <NexaCaseStudy />;
  }

  return (
    <div className="mx-auto max-w-5xl px-3 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{project.tags}</p>

      <div className="mt-10 overflow-hidden rounded-[20px]">
        <ProjectMedia
          media={project.media}
          alt={project.title}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
