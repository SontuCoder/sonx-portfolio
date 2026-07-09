type Recommendation = {
  name: string;
  position: string;
  text: string;

  linkedIn?: string;
  avatar?: string;
};

type Work = {
  id: string;

  company: string;
  companyLogo: string;
  companyUrl?: string;
  companyColor?: string;

  position: string;
  summary?: string;

  employmentType:
    | "Full-time"
    | "Part-time"
    | "Internship"
    | "Freelance"
    | "Contract";

  workMode: "Remote" | "Hybrid" | "On-site";

  location: string;

  startDate: string;
  endDate: string | null;
  currentlyWorking: boolean;

  technologies: readonly string[];

  achievements: readonly string[];
  highlights?: readonly string[];

  recommendations?: readonly Recommendation[];
};


// Example
export const works = [
  {
    id: "innova-business-solutions",

    company: "Innova Business Solutions",
    companyLogo: "/companies/innova.webp",
    companyUrl: "https://innovabusinesssolutions.com",
    companyColor: "#0F62FE",

    position: "RPA Developer",

    summary:
      "Develop enterprise-grade automation solutions using UiPath to streamline business processes and improve operational efficiency.",

    employmentType: "Full-time",
    workMode: "Hybrid",

    location: "Kolkata, India",

    startDate: "2025-02",
    endDate: null,
    currentlyWorking: true,

    technologies: [
      "UiPath",
      "C#",
      "SQL Server",
      "Power Automate",
      "REST APIs",
      "Git",
      "Excel",
      "Outlook",
      "Regex",
      "JSON",
    ],

    highlights: [
      "10+ automation workflows delivered",
      "80% reduction in manual effort",
      "5 production bots deployed",
      "Integrated multiple enterprise systems",
    ],

    achievements: [
      "Developed end-to-end UiPath automation workflows for order processing and email automation.",
      "Integrated REST APIs with SQL Server databases for seamless data exchange.",
      "Created reusable workflow libraries to improve development speed.",
      "Implemented robust exception handling and centralized logging.",
      "Automated Excel and Outlook-based business operations.",
      "Collaborated with business analysts to gather requirements and deliver scalable automation solutions.",
    ],

    recommendations: [
      {
        name: "Rahul Sharma",
        position: "Automation Lead",

        text:
          "Sontu consistently delivered high-quality automation solutions with excellent attention to detail and ownership.",

        linkedIn: "https://linkedin.com/in/rahulsharma",

        avatar: "/testimonials/rahul.webp",
      },
    ],
  },
] as const satisfies readonly Work[];


