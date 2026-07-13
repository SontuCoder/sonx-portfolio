"use client";

import {ShowDetails, ViewMoreButton} from "@/components/common/button";
import { Accordion } from "@radix-ui/react-accordion";
import { ProjectCategory, ProjectDetails, ProjectStatus } from "@/data/projectData";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import HoverPreview from "@/components/common/HoverPreview";
import { useMotionValue, MotionValue } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import TooltipWrapper from "@/providers/TooltipWrapper";
import { Icon } from "@iconify/react";



type HoverProject = {
    title: string;
    src: string;
};


export default function ProjectSection ( {projects}: {projects:ProjectDetails[]}){


    const [hoveredProject, setHoveredProject] = useState<HoverProject | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);   


    const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
    return (
        <section id="project" aria-labelledby="project-heading" className="mt-14">
            <h2
                id="project-heading"
                className="test-foreground font-mono text-md font-semibold tracking-tight md:text-2xl"
            >
                Projects
            </h2>
            <Accordion type="single" collapsible>
                {projects.map(project => renderProject(project,  setHoveredProject, mouseX, mouseY))}
            </Accordion>
            { isDesktop && <HoverPreview title={hoveredProject?.title} src={hoveredProject?.src} x={mouseX} y={mouseY} /> }
            <ViewMoreButton text="projects" href="/projects" />
        </section>
    )
}


function renderProject(project : ProjectDetails,  setHoveredProject:React.Dispatch<
    React.SetStateAction<HoverProject | null>>,
    mouseX: MotionValue<number>,
    mouseY: MotionValue<number>,) {

    return (
        <AccordionItem key={project.slug} value={project.slug}>
            <AccordionTrigger className="group cursor-pointer hover:no-underline focus:no-underline focus-visible:no-underline"
                onMouseEnter={() =>
        setHoveredProject({title: project.title, src: project.cover})
    }
        onMouseMove={(e) => {
        mouseX.set(e.clientX + 25);
        mouseY.set(e.clientY - 110);
    }}
    onMouseLeave={() =>
        setHoveredProject(null)
    }
            >
                <ProjectHeader {...project}/>
            </AccordionTrigger>

            <AccordionContent className="space-y-8 px-4">
                <TechnologySection technologies={project.technologies} />
                <ProjectShortDetails project={project}/>
            </AccordionContent>
        </AccordionItem>
    );
}


function ProjectHeader (projectData : ProjectDetails){

    return (
        <div className={`flex w-full flex-col border-l-4 rounded-md border-t-4 pl-4 pt-4 border-${projectData.colors.primary}`}>
        <div className="flex w-full items-start gap-4 text-left ">

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-md font-semibold md:text-lg">{projectData.title}</h3>

                    <ChevronRight className="h-4 w-4 -translate-x-1 rounded bg-slate-500/20 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-data-[state=open]:translate-x-0 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-100" />
                </div>
                <p className="text-muted text-sm">{projectData.category.join(" • ")}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
                {projectData.status !== "Completed" && (
                    <div className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${projectData.status === "In Progress" ? "text-green-600 dark:text-green-400 bg-green-500/10" : "text-blue-600 dark:text-blue-400 bg-blue-500/10"} `} >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                            <span className={`relative inline-flex h-2 w-2 rounded-full ${projectData.status === "In Progress" ? "bg-green-500" : "bg-blue-500"} `}/>
                        </span>
                        {projectData.status}
                    </div>
                )}

                <div className="text-muted text-right text-xs">
                    <p>
                        {new Date(projectData.startDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "2-digit",
                        })}{" "}
                        -{" "}
                        {projectData.status === "Completed" || !projectData.endDate
                            ? "Present"
                            : new Date(projectData.endDate).toLocaleDateString("en-US", {
                                month: "short",
                                year: "2-digit",
                            })}
                    </p>

                    <p>
                        ({projectData.team})
                    </p>
                </div>
            </div>
        </div>
        <p className="text-muted text-left text-sm mt-2">{projectData.description}</p>
        </div>
    );
}

function TechnologySection({ technologies }: { technologies: string[] }) {
    return (
        <div>
            <h4 className="mb-3 font-semibold text-xs">Technologies & Tools</h4>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <TooltipWrapper key={tech} text={tech.split("-")[0]}>
                        <div className="border-muted/20 hover:bg-slate-500/50 bg-slate-500/10 flex h-7 w-7 items-center justify-center rounded-md border-2 border-dashed transition-all hover:scale-105">
                            <Icon icon={`logos:${tech.toLowerCase()}`} className="h-4 w-4" />
                        </div>
                    </TooltipWrapper>
                ))}
            </div>
        </div>
    );
}


function ProjectShortDetails(
    {project } : 
    {project: ProjectDetails}) {
        return (
            <div>
            <h4 className="mb-3 mt-4 font-semibold text-xs">Highlights</h4>

            <ul className="list-disc space-y-1 pl-5 text-xs text-muted">
                {project.content.highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <ul className="list-disc space-y-1 pl-5 text-xs text-muted">
                <li key="github">{project.links?.github ? <ShowDetails href={project.links.github} text="Goto repo tour" external />  : "coming"}</li>
                <li key="live">{project.links?.live ? 
                    <ShowDetails href={project.links.live} text="Take a look" external /> 
                    : "Live coming"}</li>
            </ul>
            <ShowDetails href={`/project/${project.slug}`} text="Show details" external={false}/>
        </div>
        )
}