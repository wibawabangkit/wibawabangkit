export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
}

export interface TechStackCategory {
  title: string;
  icon: string;
  skills: string[];
  className: string;
}

export interface Project {
  title: string;
  highlight: string;
  icon: string;
  tags: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  techStack: TechStackCategory[];
  projects: Project[];
  timeline: TimelineEvent[];
}
