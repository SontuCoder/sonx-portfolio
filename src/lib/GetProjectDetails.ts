import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { ProjectContent, ProjectDetails } from "@/data/projectData";

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
        content: parseProjectContent(content),
    };
}

export function getAllProjects(): ProjectDetails[] {
    return getProjectSlugs()
        .map((slug) => getProjectBySlug(slug))
        .filter((project): project is ProjectDetails => project !== null).sort(
            (a, b) =>
                (a.order ?? Infinity) -
                (b.order ?? Infinity),
        );;
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

export function parseProjectContent(content: string): ProjectContent {
    const sections: Record<string, string[]> = {};

    let currentSection = "";

    const lines = content.split(/\r?\n/);

    for (const line of lines) {
        const trimmed = line.trim();

        // Detect Markdown headings (#, ##, ###)
        const heading = trimmed.match(/^#{1,3}\s+(.+)$/);

        if (heading) {
            currentSection = heading[1]
                .toLowerCase()
                .trim();

            sections[currentSection] ??= [];
            continue;
        }

        if (currentSection) {
            sections[currentSection].push(line);
        }
    }

    // Extract paragraph content
    const getText = (section: string): string => {
        return (sections[section] ?? [])
            .join("\n")
            .trim();
    };

    // Extract Markdown list items
    const getList = (section: string): string[] => {
        return (sections[section] ?? [])
            .map((line) => line.trim())
            .filter((line) => /^[-*+]\s+/.test(line))
            .map((line) => line.replace(/^[-*+]\s+/, "").trim());
    };

    return {
        overview: getText("overview"),
        features: getList("features"),
        challenges: getList("challenges"),
        highlights: getList("highlights"),
        learnings: getList("what i learned"),
        futureImprovements: getList("future improvements"),
    };
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
