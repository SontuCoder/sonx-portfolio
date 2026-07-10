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

interface Role {
  position: string;
  summary?: string;

  employmentType: EmploymentType;
  workMode: WorkMode;

  startDate: Date;
  endDate: Date | null;

  technologies: readonly string[];
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

  roles: readonly Role[];

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

    roles: [
      {
        position: "API Software Developer",

        summary:
          "Built and maintained enterprise automation solutions using UiPath.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2025-06-01"),
        endDate: new Date("2026-04-01"),

        technologies: [
          "UiPath",
          "SQL Server",
          "Git",
          "Excel",
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

      {
        position: "AI Software Developer",

        summary:
          "Led automation initiatives and delivered production-ready bots.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2024-07-01"),
        endDate: null,

        technologies: [
          "UiPath",
          "C#",
          "REST APIs",
          "Power Automate",
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
    ],

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

    roles: [
      {
        position: "Associate Software Developer",

        summary:
          "Built and maintained enterprise automation solutions using UiPath.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2024-08"),
        endDate: new Date("2025-06"),

        technologies: [
          "UiPath",
          "SQL Server",
          "Git",
          "Excel",
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

      {
        position: "Software Developer",

        summary:
          "Led automation initiatives and delivered production-ready bots.",

        employmentType: "Full-time",
        workMode: "Hybrid",

        startDate: new Date("2025-07"),
        endDate: null,

        technologies: [
          "UiPath",
          "C#",
          "REST APIs",
          "Power Automate",
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
    ],

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

export type { Work, Role };