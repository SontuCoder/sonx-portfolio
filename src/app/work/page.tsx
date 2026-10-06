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
                <p className="text-muted text-sm">
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
            {recommendationsSection({ recommendations: work.recommendations })}
        </div>
    );
}

function recommendationsSection({
    recommendations,
}: {
    recommendations?: readonly Recommendation[];
}) {
    if (!recommendations || recommendations.length === 0) {
        return null;
    }

    return (
        <div className="mt-6">
            <h4 className="mb-3 text-xs font-semibold">Recommendations</h4>
            <div className="flex flex-col gap-4">
                {recommendations.map((rec) => (
                    <div
                        key={rec.name}
                        className="group bg-card hover:bg-muted/30 flex gap-4 rounded-2xl p-4 shadow-[0_0_0_1px_var(--border)] transition-all duration-300 sm:gap-5 sm:p-5"
                    >
                        {/* Avatar */}
                        {rec.avatar && (
                            <div className="shrink-0">
                                <Image
                                    src={rec.avatar}
                                    alt={rec.name}
                                    width={100}
                                    height={100}
                                    className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
                                />
                            </div>
                        )}

                        {/* Details */}
                        <div className="flex min-w-0 flex-1 flex-col">
                            <div>
                                <h4 className="text-foreground text-sm font-semibold sm:text-base">
                                    {rec.name}
                                </h4>

                                <p className="text-muted-foreground mt-0.5 text-xs sm:text-sm">
                                    {rec.position}
                                </p>
                            </div>

                            {/* Recommendation */}
                            <p className="text-muted-foreground mt-3 text-xs leading-relaxed sm:text-sm">
                                &ldquo;{rec.text}&rdquo;
                            </p>

                            {/* LinkedIn */}
                            {rec.linkedIn && (
                                <a
                                    href={rec.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${rec.name}'s LinkedIn profile`}
                                    title="LinkedIn"
                                    className="text-muted-foreground mt-3 inline-flex w-fit items-center transition-all duration-200 hover:scale-110 hover:text-[#0A66C2]"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
