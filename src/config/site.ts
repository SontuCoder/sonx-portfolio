
export const siteConfig = {
    name: "SontuCoder",
    title: "Subhadip Maity | AI Automation & Full Stack Developer",
    description:
        "Portfolio of Subhadip Maity. AI Automation Developer, Full Stack Engineer, RPA Developer, and System Design Enthusiast.",
    url: "https://sontucode.dev",
    ogImage: "/assets/ogImage.png",

    author: {
        name: "Sontu Maity",
        username: "@SontuCoder",
        email: "subhadipmaity791@gmail.com",
    },

    links: {
        github: "https://github.com/SontuCoder",
        linkedin: "https://linkedin.com/in/subhadip-maity-sontucode",
        // twitter: "https://x.com/your-handle",
        email: "mailto:subhadipmaity791@gmail.com",
        resume: "https://drive.google.com/file/d/1-4ecFcLR2b_xMsRLA9EuFnT0dO0O-T05/preview",
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
