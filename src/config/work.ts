interface Recommendation {
    name: string;
    position: string;
    text: string;

    linkedIn?: string;
    avatar?: string;
}

type EmploymentType = "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract";

type WorkMode = "Remote" | "Hybrid" | "On-site";

type Tech = {
    name: string;
    icon: string;
};

interface Role {
    position: string;
    summary?: string;

    employmentType: EmploymentType;
    workMode: WorkMode;

    startDate: Date;
    endDate: Date | null;

    technologies: readonly Tech[];
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
        id: "centelli",

        company: "Centelli India LLP",
        companyLogo: "/companies/Centelli.svg",
        companyUrl: "https://centelli.com",

        companyColor: "#1F3C91",

        location: "Chandigarh, India",
        currentlyWorking: true,

        role: {
            position: "Associate Software Developer (RPA)",

            summary: "Led automation initiatives and delivered production-ready bots.",

            employmentType: "Full-time",
            workMode: "On-site",

            startDate: new Date("2025-04"),
            endDate: null,

            technologies: [
                {
                    name: "Agentic Ai",
                    icon: "mdi:robot-outline",
                },
                {
                    name: "UiPath",
                    icon: "thesvg-color:uipath",
                },
                {
                    name: "Playwright",
                    icon: "thesvg-color:playwright",
                },
                {
                    name: "C#",
                    icon: "devicon:csharp",
                },
                {
                    name: "API Automate",
                    icon: "gcp:api",
                },
                {
                    name: "Devops Automate",
                    icon: "selfhst:azure-devops",
                },
                {
                    name: "TypeScript",
                    icon: "logos:typescript-icon",
                },
            ],

            achievements: [
              "Designed and maintained reusable UiPath automation frameworks, improving development consistency and scalability.",
  "Built reliable RPA and agentic automation solutions with exception handling, retries, logging, monitoring, and production-grade workflows.",
"Integrated automations with REST APIs, databases, Excel, PDF, email, Azure Devops and enterprise applications to support end-to-end business processes.",
"Worked with advanced UiPath capabilities including Action Center, Queues, Mestro, and Human-in-the-Loop workflows.",
"Built and maintained browser automation solutions using Playwright and TypeScript, with a focus on reliability, maintainability, and test coverage.",
"Mentored junior developers and collaborated with cross-functional teams to improve code quality, maintainability, debugging, and bot reliability.",
            ],
        },

        recommendations: [
            {
                name: "John Doe",
                position: "Automation Lead",
                text: "Sontu consistently delivered high-quality automation solutions.",
                linkedIn: "https://www.linkedin.com/in/johndoe",
            },
            {
                name: "John lio",
                position: "Automation Lead",
                text: "Sontu consistently delivered high-quality automation solutions.",
                linkedIn: "https://www.linkedin.com/in/johndoe",
            },
        ],
    },
] as const satisfies readonly Work[];

export type { Work, Role, Tech, Recommendation };

/* Recomandations should be Two or Less then it. */