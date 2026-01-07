import type { Experience, Project } from '../types/portfolio';

/**
 * Calculate total years of experience from experience entries
 * Uses the earliest startDate across all experiences
 */
export function calculateYearsOfExperience(experiences: Experience[]): number {
    if (!experiences.length) return 0;

    // Parse all start dates and find the earliest
    const startDates = experiences.map(exp => {
        const [year, month] = exp.startDate.split('-').map(Number);
        return new Date(year, month - 1, 1);
    });

    const earliestStart = new Date(Math.min(...startDates.map(d => d.getTime())));
    const now = new Date();

    const years = (now.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
}

/**
 * Format duration string from startDate and endDate
 * e.g., "Jan 2025 – Present" or "May 2022 – Aug 2024"
 */
export function formatDuration(startDate: string, endDate: string | null): string {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formatDate = (dateStr: string): string => {
        const [year, month] = dateStr.split('-').map(Number);
        return `${months[month - 1]} ${year}`;
    };

    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';

    return `${start} – ${end}`;
}

/**
 * Count total projects from projects array
 */
export function countProjects(projects: Project[]): number {
    return projects.length;
}

/**
 * Get formatted experience years string (e.g., "5+")
 */
export function getExperienceYearsLabel(experiences: Experience[]): string {
    const years = calculateYearsOfExperience(experiences);
    return `${years}+`;
}
