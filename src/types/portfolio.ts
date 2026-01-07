export interface Social {
  github: string;
  linkedin: string;
}

export interface ResumeInfo {
  phone: string;
  website: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socials: Social;
  resume?: ResumeInfo;
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

export interface Experience {
  company: string;
  role: string;
  startDate: string;  // Format: "YYYY-MM"
  endDate: string | null;  // null means "Present"
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