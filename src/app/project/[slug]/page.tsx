import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { LuCalendarDays, LuUndo2, LuGithub, LuSparkles, LuTriangleAlert, LuGraduationCap, LuRocket } from "react-icons/lu";

import { getProjectBySlug, getProjectSlugs } from "@/lib/GetProjectDetails";
import { Icon } from "@iconify/react";
import { ProjectDetails } from "@/data/projectData";
import TooltipWrapper from "@/providers/TooltipWrapper";
import { Instrument_Serif } from "next/font/google";
import ProjectProgressBar from "@/components/common/ProjectprogressBar";

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

function generateStaticParams() {
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
        <>
        <ProjectProgressBar />
        <main className={`container pt-4 pb-10`}>
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
        </main>
        </>
    );
}

function ProjectHeader({ project }: { project: ProjectDetails }) {
    return (
        <header className="mt-6">
            <h1
                className={`text-foreground font-hanken text-3xl font-bold tracking-wider md:text-5xl ${instrumentSerif.className}`}
            >
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
            <p className={`text-muted mt-4 max-w-2xl text-base leading-relaxed`}>
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
                <span aria-hidden="true" className="text-muted">
                    •
                </span>
                <p className="text-muted">Role: {project.role}</p>
                <span aria-hidden="true" className="text-muted">
                    •
                </span>
                <p
                    className={`bg-muted/10 inline-block rounded-lg px-2 py-1 text-xs ${project.status === "Completed" ? "text-green-700" : project.status === "In Progress" ? "text-blue-600" : "text-amber-600"}`}
                >
                    {project.status}
                </p>
            </div>
            {project.category.length >0 && ( <div className="gap-2 mt-2 flex flex-wrap items-start text-xs">
                {project.category.map((cat) => (
                    <span key={cat.toString()} 
                    style={{
                        backgroundColor: `color-mix(in srgb, var(--${project.colors.primary}) 50%, transparent)`,
                    }}
                    className={` inline-block rounded-lg px-2 py-1`}>
                        {cat}
                    </span>
                ))}
            </div>)}

            {/* External links */}
            <div className="border-muted/20 mt-4 flex flex-wrap gap-4 border-b-2 pb-4">
                {project.links?.github && (
                    <TooltipWrapper text="Goto Github">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-foreground border-muted/20 inline-flex items-center gap-1 rounded-full border-2 p-2 text-sm font-medium hover:bg-${project.colors.primary}/50 transition-all hover:scale-105`}
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
                            className={`text-foreground border-muted/20 inline-flex items-center gap-1 rounded-full border-2 p-2 text-sm font-medium hover:bg-${project.colors.primary}/50 transition-all hover:scale-105`}
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
                    <h2
                        className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}
                    >
                        Overview
                    </h2>

                    <p className="text-muted text-md leading-5 whitespace-pre-line">
                        {project.content.overview}
                    </p>
                </section>
            )}

            {/* Technologies */}
            <section className="mt-6">
                <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>Technologies</h2>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <TooltipWrapper key={tech} text={tech.split("-")[0]}>
                            <div className="border-muted/20 flex h-7 w-7 items-center justify-center rounded-md border-2 border-dashed bg-slate-500/10 transition-all hover:scale-105 hover:bg-slate-500/50">
                                <Icon icon={`logos:${tech.toLowerCase()}`} className="h-4 w-4" />
                            </div>
                        </TooltipWrapper>
                    ))}
                </div>
            </section>

            {/* Features */}
            {project.content.features.length > 0 && (
                <section className="mt-6">
                    <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>
                        <LuSparkles className="mr-2 -mt-1 inline-block h-4 w-4" />
                        Features
                    </h2>
                    <ul className="">
                        {project.content.features.map((feature, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
                                <span className="mr-2 text-muted/50">-</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Challenges */}
            {project.content.challenges && project.content.challenges.length > 0 && (
                <section className="mt-6">
                    <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>
                        <LuTriangleAlert className="mr-2 -mt-1 inline-block h-4 w-4" />
                        Challenges
                    </h2>
                    <ul className="">
                        {project.content.challenges.map((challenge, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
                                <span className="mr-2 text-muted/50">-</span>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Learn */}
            {project.content.learnings && project.content.learnings.length > 0 && (
                <section className="mt-6">
                    <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>
                        <LuGraduationCap className="mr-2 -mt-1 inline-block h-4 w-4" />
                        What I Learned
                    </h2>
                    <ul className="">
                        {project.content.learnings.map((learn, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
                                <span className="mr-2 text-muted/50">-</span>
                                {learn}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Improvements */}
            {project.content.futureImprovements && project.content.futureImprovements.length > 0 && (
                <section className="mt-6">
                    <h2 className={`text-foreground mb-2 text-xl font-semibold tracking-wider ${instrumentSerif.className}`}>
                        <LuRocket className="mr-2 -mt-1 inline-block h-4 w-4" />
                        Future Improvements
                    </h2>
                    <ul className="">
                        {project.content.futureImprovements.map((improv, index) => (
                            <li key={index} className="text-muted text-sm leading-relaxed">
                                <span className="mr-2 text-muted/50">-</span>
                                {improv}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

        </>
    );
}
