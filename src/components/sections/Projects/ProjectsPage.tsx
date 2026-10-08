"use client";

import { useMemo, useState } from "react";
import type {
    ProjectCategory,
    ProjectDetails,
} from "@/data/projectData";
import { LuCalendarDays } from "react-icons/lu";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

type ProjectFilter = "All" | ProjectCategory;

interface ProjectsPageProps {
    projects: ProjectDetails[];
}

const formatDate = (date: Date | string) =>
    new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
        timeZone: "UTC",
    });

export default function ProjectsPage({
    projects,
}: ProjectsPageProps) {
    const [activeFilter, setActiveFilter] =
        useState<ProjectFilter>("All");

    // Generate filters and their project counts
    const categories = useMemo(() => {
        const categoryCount = new Map<ProjectCategory, number>();

        projects.forEach((project) => {
            project.category.forEach((category) => {
                categoryCount.set(
                    category,
                    (categoryCount.get(category) ?? 0) + 1,
                );
            });
        });

        return [
            {
                name: "All" as ProjectFilter,
                count: projects.length,
            },
            ...Array.from(categoryCount.entries()).map(
                ([name, count]) => ({
                    name,
                    count,
                }),
            ),
        ];
    }, [projects]);

    // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") {
            return projects;
        }

        return projects.filter((project) =>
            project.category.includes(activeFilter),
        );
    }, [projects, activeFilter]);

    return (
        <main className="container py-10">
            {/* Header */}
            <div className="text-start">
                <h1 className="text-foreground font-mono text-lg font-semibold tracking-tight md:text-2xl">
                    Projects
                </h1>

                <p className="text-muted mt-2 max-w-2xl text-sm">
                    Here are some of the projects I have worked on.
                    Each project showcases my skills and experience
                    across various technologies and frameworks.
                </p>
            </div>

            {/* Filters */}
            <div className="mt-8 flex flex-wrap gap-2">
                {categories.map(({ name, count }) => {
                    const active = activeFilter === name;

                    return (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setActiveFilter(name)}
                            className={`flex items-center gap-3 rounded-full px-3 py-2 font-semibold text-xs transition-all duration-200 ${
                                active
                                    ? "bg-foreground/90 text-background"
                                    : "bg-muted/20 text-muted hover:bg-muted/50 hover:text-foreground"
                            }`}
                        >
                            <span>{name}</span>

                            <span
                                className={`${
                                    active
                                        ? "text-background/70"
                                        : "text-muted/70"
                                }`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Projects */}
            <div className="group/list mt-10">
                {filteredProjects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group/project block py-4 hover:bg-card-bg transition-all duration-300 ease-in-out px-4 rounded-lg cursor-pointer hover:scale-105 group-hover/list:blur-[2px] group-hover/list:opacity-70 hover:blur-none! hover:opacity-100!"
                    >
                        <h2 className="text-foreground font-bold text-lg">
                            {project.title}
                        </h2>

                        <p className="text-muted mt-2 max-w-2xl text-xs">
                            {project.description}
                        </p>
                        <p className={`py-1 px-2 mt-2 rounded-lg text-xs bg-muted/10 inline-block  ${project.status === "Completed" ? "text-green-700" : project.status === "In Progress" ? "text-blue-600" : "text-amber-600"}`}>{project.status}</p>
                        <p>
                            <LuCalendarDays className="inline-block mr-1 text-muted" />
                            <span className="text-muted text-xs font-semibold ml-2">
                                {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
                            </span>
                            <span className="text-muted text-xs font-semibold ml-4">
                                Read more 
                                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover/project:translate-x-1.5" />
                            </span>
                        </p>
                    </Link>
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-muted py-10 text-sm">
                        No projects found.
                    </p>
                )}
            </div>
        </main>
    );
}