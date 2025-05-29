export interface Project {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}