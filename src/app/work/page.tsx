"use client"

import {
    CompanyHeader,
    TechnologySection,
    AchievementsSection,
    getSortedWorks,
} from "@/components/sections/Experience/Works";
import { Work, Recommendation } from "@/config/work";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

export default function WorkPage() {
    return (
        <main className="container pt-10 pb-18">
            <div className="text-start">
                <h1 className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl">
                    Work Experience
                </h1>
                <p className="text-muted text-sm mt-2">
                    My work experiences across different companies and roles.
                </p>
                {getSortedWorks().map((work) => (
                    <CompanyList key={work.id} work={work} />
                ))}
            </div>
        </main>
    );
}

function CompanyList({ work }: { work: Work }) {
    return (
        <div className="mt-10 flex flex-col gap-4">
            <CompanyHeader company={work} currentRole={work.role} />
            <TechnologySection technologies={work.role.technologies} />
            <AchievementsSection achievements={work.role.achievements} />
            {RecommendationsSection({ recommendations: work.recommendations })}
        </div>
    );
}

function RecommendationsSection({
    recommendations,
}: {
    recommendations?: readonly Recommendation[];
}) {
    if (!recommendations?.length) return null;

    return (
        <div>
            <h4 className="mb-4 text-xs font-semibold">
                Recommendations
            </h4>

            <div className="grid gap-4 md:grid-cols-2">
                {recommendations.map((rec) => (
                    <article
                        key={rec.name}
                        className="
                            group relative overflow-hidden rounded-xl
                            bg-card p-5
                            shadow-[0_0_0_1px_var(--border)]
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:bg-muted/20
                            hover:shadow-[0_0_0_1px_var(--border),0_8px_24px_rgb(0_0_0/0.08)]
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <h5 className="truncate text-sm font-semibold text-foreground">
                                    {rec.name}
                                </h5>

                                <p className="mt-0.5 text-xs text-muted">
                                    {rec.position}
                                </p>
                            </div>

                            {rec.linkedIn && (
                                <a
                                    href={rec.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${rec.name}'s LinkedIn profile`}
                                    title="LinkedIn"
                                    className="
                                        flex h-8 w-8 shrink-0 items-center justify-center
                                        rounded-md bg-muted/50
                                        text-muted-foreground
                                        transition-all duration-200
                                        hover:scale-105
                                        hover:bg-[#0A66C2]/10
                                        hover:text-[#0A66C2]
                                    "
                                >
                                    <FaLinkedin className="h-4 w-4" />
                                </a>
                            )}
                        </div>

                        {/* Recommendation */}
                        <div className="relative mt-5">
                            <span
                                aria-hidden="true"
                                className="
                                    absolute -top-4 -left-1
                                    font-serif text-4xl leading-none
                                    text-muted-foreground/20
                                    transition-colors
                                    group-hover:text-muted-foreground/30
                                "
                            >
                                &ldquo;
                            </span>

                            <p className="relative pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                {rec.text}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}