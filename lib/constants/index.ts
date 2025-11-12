import {
  FaApple,
  FaDocker,
  FaFigma,
  FaGithub,
  FaLinux,
  FaMagnifyingGlass,
  FaNodeJs,
  FaPython,
  FaReact,
  FaXTwitter,
  FaWindows,
} from "react-icons/fa6";
import { GiHydra } from "react-icons/gi";
import { GoPaperclip } from "react-icons/go";
import { IoBrushOutline } from "react-icons/io5";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiBurpsuite,
  SiCanva,
  SiCplusplus,
  SiEslint,
  SiExcalidraw,
  SiExpress,
  SiGnubash,
  SiJavascript,
  SiLua,
  SiMetasploit,
  SiMongodb,
  SiNeovim,
  SiNextdotjs,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiWireshark,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const social_media: SocialMedia[] = [
  {
    label: "GitHub",
    link: "https://github.com/m4dd0c",
    icon: LuGithub,
  },
  {
    label: "X",
    link: "https://x.com/m4dd0c_",
    icon: FaXTwitter,
  },
  {
    label: "Resume",
    link: "",
    icon: GoPaperclip,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/m4dd0c/",
    icon: LuLinkedin,
  },
  {
    label: "Mail",
    link: "mailto:manishsuthar078@gmail.com",
    icon: LuMail,
  },
];

const experiences = [
  {
    id: 0,
    label: "Coachifylive",
    profile: "Full Stack Developer",
    link: "https://coachifylive.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes. Amet justo donec enim diam vulputate ut pharetra sit amet aliquam. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes. Amet justo donec enim diam vulputate ut pharetra sit amet aliquam. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes.",
    duration: {
      startDate: "Jun, 2025",
      endDate: "Present",
    },
  },
  {
    id: 1,
    label: "CodSoft",
    profile: "Full Stack Developer",
    link: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes. Amet justo donec enim diam vulputate ut pharetra sit amet aliquam. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes.",
    duration: {
      startDate: "Feb, 2025",
      endDate: "Nov, 2024",
    },
  },
  {
    id: 2,
    label: "Freelance",
    profile: "Full Stack Developer",
    link: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes. Amet justo donec enim diam vulputate ut pharetra sit amet aliquam. Nunc sed augue lacus viverra vitae congue eu consequat ac felis. Eget gravida cum sociis natoque penatibus et magnis dis parturient montes.",
    duration: {
      startDate: "Jul, 2024",
      endDate: "Feb, 2025",
    },
  },
];

const nonTechSkills: Skills[] = [
  {
    id: 0,
    label: "Adobe Illustrator",
    icon: SiAdobeillustrator,
    color: "#FF9A00",
  },
  { id: 1, label: "Infinite Design", icon: IoBrushOutline, color: "#31A8FF" }, // unclear, set to red
  { id: 2, label: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { id: 3, label: "Adobe Lightroom", icon: SiAdobelightroom, color: "#30A8C3" },
  { id: 4, label: "Canva", icon: SiCanva, color: "#00C4CC" },
  { id: 5, label: "UI/UX", icon: FaFigma, color: "#F24E1E" }, // Figma orange
  { id: 6, label: "Sketch", icon: SiExcalidraw, color: "#FFAE00" }, // Sketch yellow
];
const techSkills: Skills[] = [
  { id: 1, label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 2, label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 3, label: "C++", icon: SiCplusplus, color: "#00599C" },
  { id: 4, label: "Python", icon: FaPython, color: "#3776AB" },
  { id: 5, label: "Lua", icon: SiLua, color: "#2C2D72" },
  { id: 6, label: "Bash", icon: SiGnubash, color: "#4EAA25" },
  // --- Frameworks & Libraries ---
  { id: 6, label: "React", icon: FaReact, color: "#61DAFB" },
  { id: 7, label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { id: 8, label: "React Native", icon: FaReact, color: "#61DAFB" },
  { id: 9, label: "Node.js", icon: FaNodeJs, color: "#339933" },
  { id: 10, label: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { id: 11, label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 12, label: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
  { id: 13, label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { id: 14, label: "ESLint", icon: SiEslint, color: "#4B32C3" },
  { id: 15, label: "Vitest", icon: SiVitest, color: "#6E9F18" },
  // --- Tools / Platforms ---
  { id: 16, label: "Docker", icon: FaDocker, color: "#2496ED" },
  { id: 17, label: "Redis", icon: SiRedis, color: "#DC382D" },
  // { id: 18, label: "Kafka", icon: SiApachekafka, color: "#FFFFFF" },
  { id: 19, label: "Git & GitHub", icon: FaGithub, color: "#FFFFFF" },
  { id: 20, label: "VS Code", icon: VscVscode, color: "#007ACC" },
  { id: 21, label: "Neovim", icon: SiNeovim, color: "#57A143" },
  { id: 22, label: "Windows", icon: FaWindows, color: "#0078D6" },
  { id: 23, label: "Mac", icon: FaApple, color: "#A2AAAD" },
  { id: 24, label: "Linux", icon: FaLinux, color: "#FCC624" },
  { id: 25, label: "Metasploit", icon: SiMetasploit, color: "#1C3552" },
  { id: 26, label: "NMap", icon: FaMagnifyingGlass, color: "#FF0000" }, // unclear, set to red
  { id: 27, label: "Wireshark", icon: SiWireshark, color: "#1679A7" },
  { id: 28, label: "Burpsuite", icon: SiBurpsuite, color: "#FF8000" },
  { id: 29, label: "Hydra", icon: GiHydra, color: "#FF0000" }, // unclear, set to red
];

const github_prs: PR[] = [
  {
    pr: {
      label: "Feat: Disable indentation for saved text files",
      link: "https://github.com/monkeytypegame/monkeytype/pull/6909",
      number: 6909,
      createdAt: "Aug 22, 2024",
    },
    upstream: {
      label: "monkeytypegame/monkeytype",
      link: "https://github.com/monkeytypegame/monkeytype",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
  {
    pr: {
      label: "Fix: Prevent duplicate layout entries in emulator schema",
      link: "https://github.com/monkeytypegame/monkeytype/pull/6932",
      number: 6932,
      createdAt: "Sep 05, 2024",
    },
    upstream: {
      label: "monkeytypegame/monkeytype",
      link: "https://github.com/monkeytypegame/monkeytype",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
  {
    pr: {
      label: "Chore: Refactor layout emulator schema validation",
      link: "https://github.com/asyncapi/parser-js/pull/1142",
      number: 1142,
      createdAt: "Oct 01, 2024",
    },
    upstream: {
      label: "asyncapi/parser-js",
      link: "https://github.com/asyncapi/parser-js",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
  {
    pr: {
      label: "Feat: Added Redis-based cache layer for socket connections",
      link: "https://github.com/palisadoesfoundation/talawa-api/pull/2314",
      number: 2314,
      createdAt: "Oct 18, 2024",
    },
    upstream: {
      label: "palisadoesfoundation/talawa-api",
      link: "https://github.com/palisadoesfoundation/talawa-api",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
];

const projects = [
  {
    id: 0,
    title: "E-Commerce Platform",
    tagline: "Full-featured online shopping platform",
    description:
      "A comprehensive e-commerce solution built with Next.js and MongoDB. Features include user authentication, product management, shopping cart, order processing, and payment integration. Implements real-time inventory updates and responsive design for seamless shopping experience across devices.",
    image: "/assets/imgs/candycode.com.png",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    github: "https://github.com/m4dd0c/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 1,
    title: "Real-time Chat Application",
    tagline: "Instant messaging with Socket.IO",
    description:
      "A modern real-time chat application supporting multiple rooms, private messaging, and file sharing. Built with React and Socket.IO for instant communication. Features include typing indicators, read receipts, emoji support, and message history with MongoDB persistence.",
    image: "/assets/imgs/2.jpg",
    techStack: ["React", "Node.js", "Socket.IO", "Express", "MongoDB", "Redis"],
    github: "https://github.com/m4dd0c/chat-app",
    live: "https://chat-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management System",
    tagline: "Collaborative project management tool",
    description:
      "A feature-rich task management application inspired by tools like Trello and Asana. Supports drag-and-drop task organization, team collaboration, deadline tracking, and progress visualization. Includes role-based access control and real-time updates for team synchronization.",
    image: "/assets/imgs/3.jpg",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/m4dd0c/task-manager",
    live: "",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    tagline: "Accurate weather predictions at your fingertips",
    description:
      "A beautiful weather application providing detailed forecasts, real-time weather data, and location-based predictions. Features include hourly and weekly forecasts, weather maps, severe weather alerts, and historical data visualization with interactive charts.",
    image: "/assets/imgs/1.jpg",
    techStack: ["React Native", "TypeScript", "OpenWeather API", "Redux"],
    github: "https://github.com/m4dd0c/weather-app",
    live: "https://weather-demo.vercel.app",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    tagline: "Content management for creative professionals",
    description:
      "A headless CMS specifically designed for portfolio websites. Allows easy management of projects, blog posts, and media assets. Features include drag-and-drop file uploads, image optimization, SEO tools, and customizable templates with live preview functionality.",
    image: "/assets/imgs/2.jpg",
    techStack: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/m4dd0c/portfolio-cms",
    live: "",
  },
];

export {
  social_media,
  experiences,
  nonTechSkills,
  techSkills,
  github_prs,
  projects,
};
