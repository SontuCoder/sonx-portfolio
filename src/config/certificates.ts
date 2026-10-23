type CertificateMeta = {
  name: string;
  code: string;
  color: string;
  logo: string;
  verifiedBy: string;
  issuedDate: Date;
  featured: boolean;
};

export interface CertificateDetails extends CertificateMeta {
  verificationUrl?: string;
  learn: readonly string[];
}

export const certificates: CertificateDetails[] = [
  {
    name: "Postman API Fundamentals Student Expert",
    code: "",
    color: "#FF6C37",
    logo: "/certificates/Postman_badges.png",
    verifiedBy: "Postman",
    issuedDate: new Date("2026-03-06"),
    featured: true,
    verificationUrl: "https://api.badgr.io/public/badges/G0U1YVeOSdGAiytb9Yw6_w",
    learn: [
    "REST API fundamentals",
    "HTTP methods — GET, POST, PATCH, DELETE",
    "Request parameters, headers, and bodies",
    "HTTP response and status codes",
    "Postman API testing",
    "Basic Postman scripting",
    "API key authentication",
    "API integration",
    ],
  },

  {
    name: "UiPath Academy Automation Developer Professional Training",
    code: "",
    color: "#CE1455",
    logo: "https://api.accredible.com/v1/credentials/mcwhzerb/artifact/badge",
    verifiedBy: "UiPath",
    issuedDate: new Date("2025-12-24"),
    featured: true,
    verificationUrl: "https://credentials.uipath.com/cf890105-e9bc-4324-9108-2d7aee0343da#acc.hRBsYZDN",
    learn: [
    "State Machines and Robotic Enterprise Framework (REFramework).",
    "Building REFramework projects using Orchestrator Queues and tabular data.",
    "Orchestrator triggers, monitoring, and solution management.",
    "Advanced data manipulation and UI automation with Studio.",
    "AI Computer Vision and automation development for UiPath A4E.",
    "Remote debugging, Invoke Method, and Invoke Code.",
    "Coded automation, attended automation frameworks, and Solution Accelerators.",
    ],
  },

  {
    name: "UiPath Academy Agentic Automation Developer Associate Training",
    code: "",
    color: "#CE1455",
    logo: "https://api.accredible.com/v1/credentials/oy47uy9x/artifact/badge",
    verifiedBy: "UiPath",
    issuedDate: new Date("2025-11-17"),
    featured: true,
    verificationUrl: "https://credentials.uipath.com/1a855e02-6cf5-46e6-8603-b2594b364fb7#acc.PvTAoWJE",
    learn: [
    "Building automation tools with UiPath Studio Web and Autopilot.",
    "Developing agentic automations using UiPath Studio Web.",
    "Orchestrating agents, robots, and human workflows with UiPath Maestro.",
    "Crafting effective prompts to guide LLM behavior and agent actions.",
    "Designing context-aware agents with human escalation capabilities.",
    "Evaluating agent performance using Generative AI and structured scoring.",
    "Optimizing agent reliability and readiness for production environments.",
    ],
  },

  {
    name: "UiPath Academy Automation Developer SAP Specialist Training",
    code: "",
    color: "#CE1455",
    logo: "https://api.accredible.com/v1/credentials/oy47uy9x/artifact/badge",
    verifiedBy: "UiPath",
    issuedDate: new Date("2025-11-17"),
    featured: true,
    verificationUrl: "https://credentials.uipath.com/e2e71dd3-b0f4-4f0f-b6eb-415138eccd98#acc.6TfQJrzy",
    learn: [
    "Understanding UiPath automation use cases and Clean Core principles for SAP systems.",
    "Developing SAP automations using SAP WinGUI and SAP Fiori.",
    "Applying best practices for different types of SAP automation.",
    "Using Object Repository and workflow libraries to build reusable automations.",
    "Developing and testing SAP automation workflows through practical exercises.",
    "Deploying UiPath Solution Accelerators for common SAP automation use cases.",
    "Leveraging reusable templates, models, and components to accelerate automation development.",
    ],
  },
];
