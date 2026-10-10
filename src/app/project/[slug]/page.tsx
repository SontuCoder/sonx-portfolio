import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { LuCalendarDays, LuUndo2, LuGithub } from "react-icons/lu";

import { getProjectBySlug, getProjectSlugs } from "@/lib/GetProjectDetails";

import { ProjectDetails } from "@/data/projectData";
import TooltipWrapper from "@/providers/TooltipWrapper";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    display: "swap",
});

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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className={`container pt-4 pb-10 `}>
            {/* Back navigation */}
            <Link
                href="/project"
                className={`text-muted hover:text-foreground inline-flex items-center gap-2 text-xs transition-colors`}
            >
                <LuUndo2 className="h-4 w-4" />
                Back to All Projects
            </Link>

            <ProjectHeader project={project} />
            <ProjectMeta project={project} />
            <ProbSolsAndOverview project={project} />

            {/* Features */}
            {project.content.features.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-foreground mb-5 text-xl font-semibold">Features</h2>

                    <ul className="space-y-3">
                        {project.content.features.map((feature, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
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
                    <h2 className="text-foreground mb-5 text-xl font-semibold">Highlights</h2>

                    <ul className="space-y-3">
                        {project.content.highlights.map((highlight, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Technologies */}
            <section className="mt-12">
                <h2 className="text-foreground mb-5 text-xl font-semibold">Technologies</h2>

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

function ProjectHeader({ project }: { project: ProjectDetails }) {
    return (
        <header className="mt-6">
            <h1 className={`text-foreground font-hanken text-3xl font-bold tracking-wider md:text-5xl ${instrumentSerif.className}`}>
                {project.title}
            </h1>
            {/* Project cover */}
            {project.cover && (
                <div className="bg-muted/10 mt-6 overflow-hidden rounded-xl">
                    <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        className="aspect-video w-full object-cover"
                    />
                </div>
            )}
        </header>
    );
}

function ProjectMeta({ project }: { project: ProjectDetails }) {
    return (
        <>
            <p className={`text-muted mt-4 max-w-2xl leading-relaxed text-base  `}>
                {project.description}
            </p>
            {/* Metadata */}
            <div className="mt-2 flex flex-wrap items-start gap-2 text-xs">
                <div className="text-muted flex items-center gap-2">
                    <LuCalendarDays className="h-4 w-4" />
                    <span>
                        {formatDate(project.startDate)}
                        {" — "}
                        {project.endDate ? formatDate(project.endDate) : "Present"}
                    </span>
                </div>
                <span aria-hidden="true" className="text-muted">
                    •
                </span>
                <p className="text-muted">{project.team}</p>
                <span aria-hidden="true" className="text-muted ">
                    •
                </span>
                <p className="text-muted">Role: {project.role}</p>
                <span aria-hidden="true" className="text-muted">
                    •
                </span>
                <p className={`py-1 px-2 rounded-lg text-xs bg-muted/10 inline-block  ${project.status === "Completed" ? "text-green-700" : project.status === "In Progress" ? "text-blue-600" : "text-amber-600"}`}>
                    {project.status}
                </p>
            </div>

            {/* External links */}
            <div className="mt-4 flex flex-wrap gap-4 border-b-2 border-muted/20 pb-4">
                {project.links?.github && (
                    <TooltipWrapper text="Goto Github">
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-foreground inline-flex items-center gap-1 text-sm font-medium border-2 border-muted/20 rounded-full p-2 hover:bg-${project.colors.primary}/50 hover:scale-105 transition-all`}
                    >
                        <LuGithub className="h-4 w-4" />
                    </a>
                    </TooltipWrapper>
                )}

                {project.links?.live && (
                    <TooltipWrapper text="Take a Exprience">
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-foreground inline-flex items-center gap-1 text-sm font-medium border-2 border-muted/20 rounded-full p-2 hover:bg-${project.colors.primary}/50 hover:scale-105 transition-all`}
                    >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                    </TooltipWrapper>
                )}
            </div>

        </>
    );
}

function ProbSolsAndOverview({ project }: { project: ProjectDetails }) {
    return (
        <>
            {/* Overview */}
            {project.content.overview && (
                <section className="mt-6">
                    <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>Overview</h2>

                    <p className="text-muted text-md leading-5 whitespace-pre-line">
                        {project.content.overview}
                    </p>
                </section>
            )}
        </>
    )
}
