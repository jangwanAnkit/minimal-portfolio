export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  socials: Social;
  location?: string;
}

export interface Technology {
  name: string;
  category?: string;
}

export type ProjectStatus = 'ongoing' | 'completed';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl: string;
  sourceUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export interface ExperienceDetail {
  detail: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
  logo: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
}

export interface NavigationItem {
  label: string;
  icon: string;
  href: string;
}

export interface SeoData {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  keywords: string[];
  author: string;
  siteName: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillsData;
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
  navigation: NavigationItem[];
  seo: SeoData;
}