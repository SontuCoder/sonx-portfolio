"use client";

import Image from "next/image";
import { Icon } from "@iconify/react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { works, Work, Role, Tech } from "@/config/work";
import TooltipWrapper from "@/providers/TooltipWrapper";
import { ChevronRight } from "lucide-react";
import ViewMoreButton from "@/components/common/button";

export function getSortedWorks() {
  return [...works].sort(
    (a, b) => b.role.startDate.getTime() - a.role.startDate.getTime()
  );
}

export default function Experience() {
    const companies = getSortedWorks().slice(0, 3);

    return (
        <section id="experience" aria-labelledby="experience-heading" className="mt-14">
            <h2
                id="experience-heading"
                className="test-foreground font-mono text-md font-semibold tracking-tight md:text-2xl"
            >
                Experience
            </h2>

            <Accordion type="single" collapsible>
                {companies.map(renderCompany)}
            </Accordion>
            <ViewMoreButton text="experience" href="/work" />
        </section>
    );
}


function renderCompany(company: Work) {
    const currentRole = company.role;

    return (
        <AccordionItem key={company.id} value={company.id}>
            <AccordionTrigger className="group cursor-pointer hover:no-underline focus:no-underline focus-visible:no-underline">
                <CompanyHeader company={company} currentRole={currentRole} />
            </AccordionTrigger>

            <AccordionContent className="space-y-8">
                <TechnologySection technologies={currentRole.technologies} />

                <AchievementsSection achievements={currentRole.achievements} />
            </AccordionContent>
        </AccordionItem>
    );
}


function CompanyHeader({ company, currentRole }: { company: Work; currentRole: Role }) {
    return (
        <div className="flex w-full items-start gap-4 text-left">
            <div
                className="mt-2.5 hidden rounded-md p-2 sm:block"
                style={{ backgroundColor: company.companyColor }}
            >
                <Image
                    src={company.companyLogo}
                    alt={company.company}
                    width={80}
                    height={52}
                    className=""
                />
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-md font-semibold md:text-lg">{company.company}</h3>

                    <ChevronRight className="h-4 w-4 -translate-x-1 rounded bg-slate-500/20 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-data-[state=open]:translate-x-0 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-100" />
                </div>
                <p className="text-muted text-sm">{currentRole.position}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
                {company.currentlyWorking && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        Working
                    </div>
                )}

                <div className="text-muted text-right text-xs">
                    <p>
                        {new Date(currentRole.startDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "2-digit",
                        })}{" "}
                        -{" "}
                        {company.currentlyWorking || !currentRole.endDate
                            ? "Present"
                            : new Date(currentRole.endDate).toLocaleDateString("en-US", {
                                month: "short",
                                year: "2-digit",
                            })}
                    </p>

                    <p>
                        {company.location} ({currentRole.workMode})
                    </p>
                </div>
            </div>
        </div>
    );
}


function TechnologySection({ technologies }: { technologies: readonly Tech[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold text-xs">Technologies & Tools</h4>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <TooltipWrapper key={tech.name} text={tech.name}>
                        <div className="border-muted/20 hover:bg-slate-500/50 bg-slate-500/10 flex h-7 w-7 items-center justify-center rounded-md border-2 border-dashed transition-all hover:scale-105">
                            <Icon icon={tech.icon} className="h-4 w-4" />
                        </div>
                    </TooltipWrapper>
                ))}
            </div>
        </div>
    );
}


function AchievementsSection({ achievements }: { achievements: readonly string[] }) {
    return (
        <div>
            <h4 className="mb-3 mt-4 font-semibold text-xs">What I've done</h4>

            <ul className="list-disc space-y-1 pl-5 text-xs text-muted">
                {achievements.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

