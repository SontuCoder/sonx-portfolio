interface Recommendation {
  name: string;
  position: string;
  text: string;

  linkedIn?: string;
  avatar?: string;
}

type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Internship"
  | "Freelance"
  | "Contract";

type WorkMode = "Remote" | "Hybrid" | "On-site";

type Tech = {
  name: string,
  icon: string
}

interface Role {
  position: string;
  summary?: string;

  employmentType: EmploymentType;
  workMode: WorkMode;

  startDate: Date;
  endDate: Date | null;

  technologies: readonly Tech[];
  highlights?: readonly string[];
  achievements: readonly string[];
}

interface Work {
  id: string;

  company: string;
  companyLogo: string;
  companyUrl?: string;
  companyColor?: string;

  location: string;
  currentlyWorking: boolean;

  role: Role;

  recommendations?: readonly Recommendation[];
}


// Example
export const works = [
    {
    id: "centelli sec",

    company: "Centelli India LLP",
    companyLogo: "/companies/centelli.svg",
    companyUrl: "https://centelli.com",

    companyColor: "#1F3C91",

    location: "Noida, India",
    currentlyWorking: false,

    role: {
        position: "API Software Developer",

        summary:
          "Built and maintained enterprise automation solutions using UiPath.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2025-06-01"),
        endDate: new Date("2026-04-01"),

        technologies: [ {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  }
        ],

        highlights: [
          "8+ automations delivered",
          "60% reduction in manual effort",
        ],

        achievements: [
          "Developed enterprise automation workflows.",
          "Integrated SQL databases with UiPath.",
        ],
      },

    recommendations: [
      {
        name: "John Doe",
        position: "Automation Lead",
        text:
          "Sontu consistently delivered high-quality automation solutions.",
      },
    ],
  },
  {
    id: "centelli",

    company: "Centelli India LLP",
    companyLogo: "/companies/centelli.svg",
    companyUrl: "https://centelli.com",

    companyColor: "#1F3C91",

    location: "Noida, India",
    currentlyWorking: true,

    role: 
      {
        position: "Software Developer",

        summary:
          "Led automation initiatives and delivered production-ready bots.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2025-07"),
        endDate: null,

        technologies: [ {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  }
        ],

        highlights: [
          "15+ production automations",
          "80% manual effort reduction",
        ],

        achievements: [
          "Designed reusable automation frameworks.",
          "Mentored junior developers.",
          "Improved bot reliability and monitoring.",
        ],
      },

    recommendations: [
      {
        name: "John Doe",
        position: "Automation Lead",
        text:
          "Sontu consistently delivered high-quality automation solutions.",
      },
    ],
  },

] as const satisfies readonly Work[];

export type { Work, Role, Tech };