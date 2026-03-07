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

const SITE_URL = "https://m4dd0c.com";
const resume_url =
  "https://drive.google.com/file/d/1i3UBuP8tTCATDfCtNmQvNlFZFexUBl-R/view?usp=sharing";

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
    description: `
<div>
  <p class="font-semibold text-white/70">
    Contributed as a full-stack developer, building core features and optimizing platform performance.
  </p>

  <!-- Product & Learning Tools Development -->
  <dl>
    <dt class="font-semibold text-white/70">Product & Learning Tools Development</dt>
    <dd>– Built a complete Sudoku game for quant practice.</dd>
    <dd>– Developed an automated flashcard system to enhance vocabulary learning.</dd>
  </dl>

  <!-- Codebase Optimization & Architecture Improvements -->
  <dl>
    <dt class="font-semibold text-white/70">Codebase Optimization & Architecture Improvements</dt>
    <dd>– Refactored the entire repository with a cleaner architecture.</dd>
    <dd>– Removed redundant code and improved project structure.</dd>
    <dd>– Optimized media assets using WebP for reduced load times.</dd>
  </dl>

  <!-- Help & Support Infrastructure -->
  <dl>
    <dt class="font-semibold text-white/70">Help & Support Infrastructure</dt>
    <dd>– Implemented a ticketing system to streamline support operations.</dd>
    <dd>– Added role-based access control (RBAC).</dd>
    <dd>– Integrated Sentry and PostHog for real-time error tracking and user analytics.</dd>
  </dl>

  <!-- Developer Experience & Workflow -->
  <dl>
    <dt class="font-semibold text-white/70">Developer Experience & Workflow</dt>
    <dd>– Integrated Knip for unused file and dead-code detection.</dd>
    <dd>– Set up Lint-Staged with Husky for automated pre-commit checks.</dd>
    <dd>– Configured ESLint and Prettier for consistent code quality.</dd>
    <dd>– Established a testing environment using Vitest and Jest.</dd>
    <dd>– Authored CI workflows to automate testing, linting, and formatting pipelines.</dd>
  </dl>

  <!-- Platform Reliability & Communication Systems -->
  <dl>
    <dt class="font-semibold text-white/70">Platform Reliability & Communication Systems</dt>
    <dd>– Implemented mobile number verification using WATI.</dd>
    <dd>– Added Twilio fallback to ensure reliable message delivery.</dd>
  </dl>
</div>
    `,
    duration: {
      startDate: "Jun, 2025",
      endDate: "Present",
    },
  },
  {
    id: 1,
    label: "Freelance",
    profile: "Full Stack Developer",
    link: "",
    description: `
  <div>
    <p class="font-semibold text-white/70">
      Full-Stack Developer (Contract) — Built and deployed production-grade websites in the architecture and handicraft domains.
    </p>
    <!-- Mahesh Handicraft -->
    <dl>
      <dt class="font-semibold text-white/70">Mahesh Handicraft</dt>
      <dd>– Developed a fully responsive handicraft showcase website with dynamic product listings.</dd>
      <dd>– Implemented admin CRUD panels for managing products, categories, and media.</dd>
      <dd>– Integrated an inquiry/contact system connected to WhatsApp and social links.</dd>
      <dd>– Optimized Cloudinary setup with instant LQ thumbnails and seamless HD image upgrades.</dd>
      <dd>– Implemented smooth lazy loading for frictionless, continuous product browsing.</dd>
      <dd class="text-white/50">Tech: Next.js, Server Actions, MongoDB, Cloudinary</dd>
    </dl>
    <!-- Arcline Designs -->
    <dl>
      <dt class="font-semibold text-white/70">Arcline Designs</dt>
      <dd>– Built a modern portfolio website for architecture & interior design with multi-category project showcases.</dd>
      <dd>– Integrated an inquiry/contact system connected to WhatsApp and social links.</dd>
      <dd>– Integrated dynamic project sections with category-based filtering.</dd>
      <dd>– Used Cloudinary to serve heavy architectural imagery with optimized delivery.</dd>
      <dd>– Strengthened SEO via optimized routing, metadata, and fast TTI using Server Actions.</dd>
      <dd class="text-white/50">
        Tech: Next.js, Server Actions, API Routes, MongoDB, Nodemailer,
        shadcn/ui, Cloudinary
      </dd>
    </dl>
  </div>`,
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
      label:
        "feat(dialogs): skills, custom-section, and interests dialogs support draggable tags.",
      link: "https://github.com/AmruthPillai/Reactive-Resume/pull/2244",
      number: 2244,
      createdAt: "Oct 01, 2025",
    },
    upstream: {
      label: "AmruthPillai/Reactive-Resume",
      link: "https://github.com/AmruthPillai/Reactive-Resume",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
  {
    pr: {
      label:
        "fix(validation): Ensure If the terminal buffer is excluded. #1115",
      link: "https://github.com/CopilotC-Nvim/CopilotChat.nvim/pull/1115",
      number: 1115,
      createdAt: "Apr 19, 2025",
    },
    upstream: {
      label: "CopilotC-Nvim/CopilotChat.nvim",
      link: "https://github.com/CopilotC-Nvim/CopilotChat.nvim",
    },
    handle: {
      label: "m4dd0c",
      link: "https://github.com/m4dd0c",
    },
  },
  {
    pr: {
      label: "fix: TypeError while Replaying Test",
      link: "https://github.com/monkeytypegame/monkeytype/pull/4907",
      number: 4907,
      createdAt: "Jan 15, 2024",
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
];

const projects = [
  {
    id: 0,
    title: "Kairo Clothes",
    tagline: "Where Style Meets Convenience",
    description:
      "A full-fledged e-commerce platform for fashion enthusiasts. Features include product catalog with advanced filtering, user authentication, shopping cart management, secure checkout process, and order tracking. Built with a focus on performance and seamless user experience across all devices.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1764614600/kairo_tu074e.webp",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764611912/Portfolio/preview.ecom_jare9p.mov",
    techStack: [
      "Next.js",
      "TurboRepo",
      "TypeScript",
      "Razorpay",
      "Mailtrap",
      "Shadcn/ui",
      "Tailwind CSS",
      "MongoDB",
      "Nodemailer",
      "Twilio",
      "Cloudinary",
    ],
    live: "https://kairo.m4dd0c.me/",
  },
  {
    id: 1,
    title: "DevUnity",
    tagline: "Code Together, Build Together",
    description:
      "A collaborative multi-user coding platform that brings developers together in real-time. Features include live code synchronization, integrated chat, multiple language support, and shared workspaces. Perfect for pair programming, code reviews, and collaborative learning sessions.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1764614600/devunity_fhefou.webp",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764611859/Portfolio/preview.devunity_drpqes.mov",
    techStack: [
      "React",
      "WebSockets",
      "Express",
      "TypeScript",
      "Aceternity",
      "Tailwind CSS",
      "MongoDB",
      "Nodemailer",
      "Cloudinary",
    ],
    github: "https://github.com/m4dd0c/devunity",
    live: "https://devunity.netlify.app/",
  },
  {
    id: 2,
    title: "DevFlood",
    tagline: "Your Questions, Community Answers",
    description:
      "A comprehensive Q&A platform inspired by StackOverflow, designed for developers to share knowledge. Features include question posting with markdown support, voting system, accepted answers, user reputation, tags, and advanced search functionality. Built to foster a helpful developer community.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1764614600/devflood_tw2cec.webp",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764612382/preview.devflood_rwhswv.mov",
    techStack: [
      "Next.js",
      "Server Actions",
      "MongoDB",
      "Nodemailer",
      "shadcn/ui",
      "Clerk Auth",
      "Webhooks",
      "Cloudinary",
    ],
    github: "https://github.com/m4dd0c/devflood",
    live: "https://dev-flood.vercel.app/",
  },
  {
    id: 3,
    title: "Mahesh Handicraft",
    tagline: "Crafting Heritage, Delivering Worldwide",
    description:
      "An elegant e-commerce platform showcasing authentic Indian handicrafts to global customers. Features include detailed product galleries, artisan stories, international shipping integration, and multi-currency support. Designed to bridge traditional craftsmanship with modern digital commerce.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1766338811/Portfolio/maheshhandicraft_kxvw20.png",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764611894/Portfolio/preview.handicraft_mjpnyq.mov",
    techStack: [
      "Next.js",
      "Server Actions",
      "MongoDB",
      "Nodemailer",
      "shadcn/ui",
      "Cloudinary",
    ],
    live: "https://maheshhandicraft.com/",
  },
  {
    id: 30,
    title: "Arcline Designs",
    tagline: "Where Vision Meets Structure",
    description:
      "A modern portfolio website crafted for architecture and interior design professionals. Features multi-category project showcases with dynamic filtering, an inquiry system integrated with WhatsApp and social links, and optimized image delivery via Cloudinary for heavy architectural imagery. Built with SEO-first approach using optimized routing, metadata, and fast TTI through Server Actions.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1766338902/Portfolio/arclinedesigns_fa6jya.png",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764611999/Portfolio/preview.arcline_bbfypa.mov",
    techStack: [
      "Next.js",
      "Server Actions",
      "MongoDB",
      "Nodemailer",
      "shadcn/ui",
      "Cloudinary",
    ],
    live: "https://arclinedesigns.in/",
  },
  {
    id: 4,
    title: "Swaaad",
    tagline: "Taste the Experience Before You Dine",
    description:
      "A visually stunning restaurant frontend that brings culinary experiences to life. Features include interactive menu browsing, chef specials showcase, table reservation system, and immersive food photography. Designed to whet appetites and drive customer engagement.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1766338813/Portfolio/swaaad_fw2yem.png",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764611862/Portfolio/preview.swaaad_hrd6np.mov",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/m4dd0c/swaad",
    live: "https://swaaad.netlify.app",
  },
  {
    id: 5,
    title: "SkullMovies",
    tagline: "Discover Your Next Obsession",
    description:
      "A feature-rich movie discovery platform powered by comprehensive film databases. Explore movies and TV shows with detailed ratings, cast information, actor filmographies, trailers, and personalized recommendations. Your ultimate companion for finding the perfect watch.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1766340076/Portfolio/skull-movies_fuj6cm.webp",
    techStack: ["React-Native", "TypeScript", "Nativewind"],
    github: "https://github.com/m4dd0c/skullMovies",
    live: "https://github.com/m4dd0c/skullMovies/releases/tag/v1.0.0",
  },
  {
    id: 6,
    title: "StudyUnknown",
    tagline: "Learn Without Limits",
    description:
      "An innovative virtual teaching platform revolutionizing online education. Features include course creation tools, video lectures, interactive quizzes, progress tracking, and certification. Empowering educators to share knowledge and learners to achieve their goals from anywhere.",
    image:
      "https://res.cloudinary.com/dscuiqkrh/image/upload/v1764614600/coursebundler_zwsnds.webp",
    preview:
      "https://res.cloudinary.com/dscuiqkrh/video/upload/v1764614611/preview.coursebundler_kyopf0.mov",
    techStack: ["React", "JavaScript", "Express", "MongoDB"],
    github: "https://github.com/m4dd0c/courseBundler",
    live: "https://github.com/m4dd0c/courseBundler",
  },
];

export {
  social_media,
  SITE_URL,
  resume_url,
  experiences,
  nonTechSkills,
  techSkills,
  github_prs,
  projects,
};
