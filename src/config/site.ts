
export const siteConfig = {
    name: "SontuCoder",
    title: "Subhadip Maity | AI Automation & Full Stack Developer",
    description:
        "Portfolio of Subhadip Maity. AI Automation Developer, Full Stack Engineer, RPA Developer, and System Design Enthusiast.",
    url: "https://sontucoder.dev",
    ogImage: "/og-image.png",

    author: {
        name: "Sontu Maity",
        username: "@SontuCoder",
        email: "hello@sontucoder.dev",
    },

    links: {
        github: "https://github.com/SontuCoder",
        linkedin: "https://linkedin.com/in/your-profile",
        twitter: "https://x.com/your-handle",
        email: "mailto:hello@sontucoder.dev",
        resume: "/resume.pdf",
    },

    keywords: [
        "Subhadip Maity",
        "SontuCoder",
        "Portfolio",
        "Frontend Developer",
        "Full Stack Developer",
        "AI Automation",
        "FastAPI",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "RPA",
        "UiPath",
    ],

} as const;

export type SiteConfig = typeof siteConfig;
