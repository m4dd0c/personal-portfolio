type SocialMedia = { label: string; link: string; icon: IconType };
type Skills = { label: string; id: number; icon: IconType; color: string };
type PR = {
  pr: {
    label: string;
    link: string;
    number: number;
    createdAt: string;
  };
  upstream: {
    label: string;
    link: string;
  };
  handle: {
    label: string;
    link: string;
  };
};
type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  live: string;
};
