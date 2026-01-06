import type {
  Profile,
  SkillsData,
  Project[],
  Experience[],
  ContactInfo,
  NavigationItem[],
  SeoData,
} from '../types/portfolio';

const DATA_BASE_URL = '/data';

async function fetchJson<T>(filename: string): Promise<T> {
  const response = await fetch(`${DATA_BASE_URL}/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
  }
  return response.json();
}

export async function getProfile(): Promise<Profile> {
  return fetchJson<Profile>('profile.json');
}

export async function getSkills(): Promise<SkillsData> {
  return fetchJson<SkillsData>('skills.json');
}

export async function getProjects(): Promise<Project[]> {
  return fetchJson<{ projects: Project[] }>('projects.json').then(data => data.projects);
}

export async function getExperience(): Promise<Experience[]> {
  return fetchJson<{ experience: Experience[] }>('experience.json').then(data => data.experience);
}

export async function getContact(): Promise<ContactInfo> {
  return fetchJson<ContactInfo>('contact.json');
}

export async function getNavigation(): Promise<NavigationItem[]> {
  return fetchJson<{ items: NavigationItem[] }>('navigation.json').then(data => data.items);
}

export async function getSeo(): Promise<SeoData> {
  return fetchJson<SeoData>('seo.json');
}

export async function getAllData() {
  const [profile, skills, projects, experience, contact, navigation, seo] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getExperience(),
    getContact(),
    getNavigation(),
    getSeo(),
  ]);

  return {
    profile,
    skills,
    projects,
    experience,
    contact,
    navigation,
    seo,
  };
}