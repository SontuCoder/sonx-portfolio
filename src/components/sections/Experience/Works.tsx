"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { works, Work, Role } from "@/config/work";
import TooltipWrapper from "@/providers/TooltipWrapper";
import { ChevronRight } from "lucide-react";

export function getSortedWorks() {
    return works
        .map((work) => ({
            ...work,
            roles: [...work.roles].sort((a, b) => b.startDate.getTime() - a.startDate.getTime()),
        }))
        .sort((a, b) => b.roles[0].startDate.getTime() - a.roles[0].startDate.getTime());
}

export default function Experience() {
    const companies = getSortedWorks().slice(0, 3);

    return (
        <section id="experience" aria-labelledby="experience-heading" className="mt-14">
            <h2
                id="experience-heading"
                className="test-foreground mb-4 font-mono text-lg font-semibold tracking-tight md:text-2xl"
            >
                Experience
            </h2>

            <Accordion type="single" collapsible>
                {companies.map(renderCompany)}
            </Accordion>
        </section>
    );
}

/* ------------------------------------------------ */
/* Company */
/* ------------------------------------------------ */

function renderCompany(company: Work) {
    const currentRole = company.roles[0];
    const previousRoles = company.roles.slice(1);

    return (
        <AccordionItem key={company.id} value={company.id}>
            <AccordionTrigger className="group cursor-pointer hover:no-underline focus:no-underline focus-visible:no-underline">
                <CompanyHeader company={company} currentRole={currentRole} />
            </AccordionTrigger>

            <AccordionContent className="space-y-8 pb-6">
                <TechnologySection technologies={currentRole.technologies} />

                {currentRole.highlights && (
                    <HighlightsSection highlights={currentRole.highlights} />
                )}

                <AchievementsSection achievements={currentRole.achievements} />

                {previousRoles.length > 0 && <PreviousRolesSection roles={previousRoles} />}
            </AccordionContent>
        </AccordionItem>
    );
}

/* ------------------------------------------------ */
/* Header */
/* ------------------------------------------------ */

function CompanyHeader({ company, currentRole }: { company: Work; currentRole: Role }) {
    return (
        <div className="flex w-full items-start gap-4 text-left">
            <div className="rounded-md p-2 mt-2.5" style={{ backgroundColor: company.companyColor }}>
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
                    <h3 className="text-md md:text-lg font-semibold">{company.company}</h3>

                    <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <p className="text-muted text-sm">{currentRole.position}</p>
            </div>
            {company.currentlyWorking && (
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Working
                </div>
            )}

            <div className="text-muted hidden text-right text-xs md:block">
                <p>
                    {new Date(currentRole.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "2-digit",
                    })}{" "}
                    —{" "}
                    {company.currentlyWorking || !currentRole.endDate
                        ? "Present"
                        : new Date(currentRole.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "2-digit",})}
                </p>

                <p>
                    {company.location} ({currentRole.workMode})
                </p>
            </div>
        </div>
    );
}

/* ------------------------------------------------ */
/* Technologies */
/* ------------------------------------------------ */

function TechnologySection({ technologies }: { technologies: readonly string[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold">Technologies & Tools</h4>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------ */
/* Highlights */
/* ------------------------------------------------ */

function HighlightsSection({ highlights }: { highlights: readonly string[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold">Highlights</h4>

            <ul className="list-disc space-y-2 pl-5">
                {highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

/* ------------------------------------------------ */
/* Achievements */
/* ------------------------------------------------ */

function AchievementsSection({ achievements }: { achievements: readonly string[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold">What I've done</h4>

            <ul className="list-disc space-y-2 pl-5">
                {achievements.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

/* ------------------------------------------------ */
/* Previous Roles */
/* ------------------------------------------------ */

function PreviousRolesSection({ roles }: { roles: readonly Role[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold">Previously</h4>

            <div className="space-y-4">
                {roles.map((role) => (
                    <div key={role.position} className="flex justify-between">
                        <div>
                            <p className="font-medium">{role.position}</p>

                            <p className="text-muted-foreground text-sm">{role.workMode}</p>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            {new Date(role.startDate).toLocaleDateString("en-US", {
                                month: "short",
                                year: "2-digit",
                            })}{" "}
                            —{" "}
                            {role.endDate
                                ? new Date(role.endDate).toLocaleDateString("en-US", {
                                      month: "short",
                                      year: "2-digit",
                                  })
                                : "Present"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
