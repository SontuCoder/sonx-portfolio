import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { ProjectDetails } from "@/data/projectData";

const PROJECTS_PATH = path.join(process.cwd(), "src", "data", "Projects");

export function getProjectFiles(): string[] {
    return fs.readdirSync(PROJECTS_PATH).filter((file) => file.endsWith(".mdx"));
}

export function getProjectSlugs(): string[] {
    return getProjectFiles().map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectFilePath(slug: string): string | null {
    const file = getProjectFiles().find((file) => file.replace(/\.mdx$/, "") === slug);

    if (!file) {
        return null;
    }

    return path.join(PROJECTS_PATH, file);
}

export function getProjectBySlug(slug: string): ProjectDetails | null {
    const filePath = getProjectFilePath(slug);

    if (!filePath) {
        return null;
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    return {
        ...(data as Omit<ProjectDetails, "content">),
        content,
    };
}

export function getAllProjects(): ProjectDetails[] {
    return getProjectSlugs()
        .map((slug) => getProjectBySlug(slug))
        .filter((project): project is ProjectDetails => project !== null);
}

export function getFeaturedProjects() {
    return getAllProjects()
        .filter((project) => project.featured)
        .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export function getPublishedProjects() {
    return getAllProjects().filter((project) => project.published);
}

export function getProjectsByCategory(category: string) {
    return getAllProjects().filter((project) => project.category.includes(category as never));
}

export function getProjectsByTechnology(technology: string) {
    return getAllProjects().filter((project) => project.technologies.includes(technology));
}

export function getLatestProjects() {
    return [...getAllProjects()].sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    );
}

export function getRelatedProjects(slug: string) {
    const project = getProjectBySlug(slug);

    if (!project) {
        return [];
    }

    return getAllProjects()
        .filter(
            (item) =>
                item.slug !== slug && item.category.some((cat) => project.category.includes(cat)),
        )
        .slice(0, 3);
}
