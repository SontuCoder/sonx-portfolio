import { getAllProjects } from "@/lib/GetProjectDetails";
import ProjectsPage from "@/components/sections/Projects/ProjectsPage";

export default function Page() {
    const projects = getAllProjects();

    return <ProjectsPage projects={projects} />;
}