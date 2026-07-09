export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Automation"
  | "AI"
  | "Agentic"
  | "System Design";

export interface ProjectMeta {
  slug: string;

  title: string;
  description: string;

  cover: string;
  gallery?: string[];

  featured: boolean;
  order?: number;
  published: boolean;

  category: ProjectCategory[];
  status: ProjectStatus;

  startDate: string;
  endDate?: string | null;

  role: string;
  team: "Solo" | "Team";

  technologies: string[];

  highlights?: string[];

  links: {
    github?: string;
    live?: string;
  };

  colors?: {
    background: string;
    primary: string;
  };
}

export interface ProjectContent {
  overview: string;
  features: string[];
  challenges?: string[];
  highlights?: string[];
  learnings?: string[];
  futureImprovements?: string[];
}

export interface ProjectDetails extends ProjectMeta {
  content: ProjectContent;
}


