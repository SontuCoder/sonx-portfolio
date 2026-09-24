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
    href: "https://www.linkedin.com/in/subhadip-maity-5ba595300/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/SontuCoder",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/subha_dip002",
    icon: FaInstagram,
  },
  {
    name: "Email",
    href: "mailto:subhadipmaity791@gmail.com",
    icon: MdMail
  },
] as const;
