import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { LuCalendarDays } from "react-icons/lu";

import {
    getProjectBySlug,
    getProjectSlugs,
} from "@/lib/GetProjectDetails";

const formatDate = (date: Date | string) =>
    new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
        timeZone: "UTC",
    });

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({
        slug,
    }));
}

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container py-10">
            {/* Back navigation */}
            <Link
                href="/project"
                className="text-muted hover:text-foreground inline-flex items-center gap-2 text-xs transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                All Projects
            </Link>

            {/* Project header */}
            <header className="mt-10">
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.category.map((category) => (
                        <span
                            key={category}
                            className="bg-muted/20 text-muted rounded-full px-3 py-1 text-xs"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                <h1 className="text-foreground font-hanken text-3xl font-bold tracking-tight md:text-5xl">
                    {project.title}
                </h1>

                <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
                    {project.description}
                </p>

                {/* Metadata */}
                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs">
                    <div className="text-muted flex items-center gap-2">
                        <LuCalendarDays className="h-4 w-4" />
                        <span>
                            {formatDate(project.startDate)}
                            {" — "}
                            {project.endDate
                                ? formatDate(project.endDate)
                                : "Present"}
                        </span>
                    </div>

                    <span className="text-muted">
                        {project.team}
                    </span>

                    <span className="text-muted">
                        {project.role}
                    </span>

                    <span className="bg-muted/20 text-foreground rounded-full px-3 py-1">
                        {project.status}
                    </span>
                </div>

                {/* External links */}
                <div className="mt-6 flex flex-wrap gap-4">
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        >
                            GitHub
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    )}

                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground inline-flex items-center gap-1 text-sm font-medium hover:underline"
                        >
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </header>

            {/* Project cover */}
            {project.cover && (
                <div className="bg-muted/10 mt-10 overflow-hidden rounded-xl">
                    <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="aspect-video w-full object-cover"
                    />
                </div>
            )}

            {/* Overview */}
            {project.content.overview && (
                <section className="mt-14">
                    <h2 className="text-foreground mb-4 text-xl font-semibold">
                        Overview
                    </h2>

                    <p className="text-muted whitespace-pre-line text-sm leading-7">
                        {project.content.overview}
                    </p>
                </section>
            )}

            {/* Features */}
            {project.content.features.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-foreground mb-5 text-xl font-semibold">
                        Features
                    </h2>

                    <ul className="space-y-3">
                        {project.content.features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-muted text-sm leading-relaxed"
                            >
                                <span className="text-foreground mr-3 font-mono">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Highlights */}
            {project.content.highlights.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-foreground mb-5 text-xl font-semibold">
                        Highlights
                    </h2>

                    <ul className="space-y-3">
                        {project.content.highlights.map((highlight, index) => (
                            <li
                                key={index}
                                className="text-muted text-sm leading-relaxed"
                            >
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Technologies */}
            <section className="mt-12">
                <h2 className="text-foreground mb-5 text-xl font-semibold">
                    Technologies
                </h2>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="bg-muted/20 text-muted rounded-lg px-3 py-2 text-xs"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}