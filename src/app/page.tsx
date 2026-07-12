import Experience from "@/components/sections/Experience/Works";
import Hero from "@/components/sections/Hero/Hero";
import ProjectSection from "@/components/sections/Projects/ProjectSection";
import { ProjectDetails } from "@/data/projectData";
import { getFeaturedProjects } from "@/lib/GetProjectDetails";


export default function Home() {
  const projects : ProjectDetails[] = getFeaturedProjects()

  return (
    <main>
      <Hero/>
      <Experience/>
      <ProjectSection projects = {projects}/>
    </main>
  );
}