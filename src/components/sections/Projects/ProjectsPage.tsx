"use client";

import { useMemo, useState } from "react";
import type {
    ProjectCategory,
    ProjectDetails,
} from "@/data/projectData";

type ProjectFilter = "All" | ProjectCategory;

interface ProjectsPageProps {
    projects: ProjectDetails[];
}

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
                            className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                                active
                                    ? "bg-foreground text-background"
                                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            <span>{name}</span>

                            <span
                                className={`text-[10px] ${
                                    active
                                        ? "text-background/70"
                                        : "text-muted-foreground/70"
                                }`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Projects */}
            <div className="mt-10">
                {filteredProjects.map((project) => (
                    <div
                        key={project.slug}
                        className="border-border border-b py-6"
                    >
                        <h2 className="text-foreground font-medium">
                            {project.title}
                        </h2>

                        <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
                            {project.description}
                        </p>
                    </div>
                ))}

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <p className="text-muted-foreground py-10 text-sm">
                        No projects found.
                    </p>
                )}
            </div>
        </main>
    );
}