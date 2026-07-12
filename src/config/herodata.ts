import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";


export const hero = {
  avatar: "/assets/Hero.png",

  name: "Subhadip Maity",

  surnames: [
    "AI Automation Engineer",
    "Systems Builder",
    "Lifelong Learner",
  ],

  punchline:
    "Building intelligent software, AI-powered automation, and scalable digital experiences.",
  music: "/music/Roi.mp3",
  musicName: "Roi",
  musicSinger: ""
} as const;

export const heroSocials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-username",
    icon: FaInstagram,
  },
  {
    name: "Email",
    href: "mailto:hello@yourdomain.com",
    icon: MdMail
  },
] as const;
