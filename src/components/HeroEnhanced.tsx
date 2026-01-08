import { Github, Linkedin, Mail, ArrowRight, Download, MapPin, Briefcase, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Profile, Experience, Project, ContactInfo } from '../types/portfolio';
import { getExperienceYearsLabel, countProjects } from '../lib/utils';

const HeroEnhanced = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [contact, setContact] = useState<ContactInfo | null>(null);

    useEffect(() => {
        Promise.all([
            fetch('/data/profile.json').then(res => res.json()),
            fetch('/data/experience.json').then(res => res.json()),
            fetch('/data/projects.json').then(res => res.json()),
            fetch('/data/contact.json').then(res => res.json()),
        ])
            .then(([profileData, expData, projData, contactData]) => {
                setProfile(profileData);
                setExperiences(expData.experience || []);
                setProjects(projData.projects || []);
                setContact(contactData);
            })
            .catch(err => console.error('Failed to load data:', err));
    }, []);

    // Calculate stats from actual data
    const yearsExperience = getExperienceYearsLabel(experiences);
    const projectCount = `${countProjects(projects)}+`;

    const stats = [
        { label: 'Years Experience', value: yearsExperience, icon: Calendar },
        { label: 'Projects Delivered', value: projectCount, icon: Briefcase },
    ];

    // Core tech stack to highlight
    const techStack = ['Django', 'Express', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS'];

    if (!profile || !contact) {
        return (
            <section id="about" className="section-py">
                <div className="container-premium">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="h-10 w-48 bg-navy-100 rounded-lg animate-shimmer"></div>
                            <div className="h-12 w-full bg-navy-100 rounded-lg animate-shimmer"></div>
                            <div className="h-20 w-full bg-navy-100 rounded-lg animate-shimmer"></div>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <div className="w-64 h-64 rounded-full bg-navy-100 animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="section-py lg:min-h-[70vh] flex items-center relative overflow-hidden">
            {/* Background gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none"></div>

            <div className="container-premium relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Text Content (Always first on mobile) */}
                    <div className="animate-fade-in-up">
                        {/* Mobile: Compact header with avatar and inline tooltip */}
                        <div className="flex items-center gap-4 mb-4 lg:hidden">
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="w-16 h-16 rounded-full object-cover shadow-card-sm border-2 border-white flex-shrink-0"
                            />
                            <div className="relative group">
                                <h1 className="text-xl font-bold text-theme-primary">
                                    Hi, I'm {profile.name.split(' ')[0]}. <span className="cursor-help border-b-2 border-dashed border-theme hover:border-theme-accent transition-colors pb-0.5">I build things.</span>
                                </h1>
                                {/* Mobile Tooltip Content */}
                                <div className="absolute top-full left-0 mt-3 w-[280px] p-4 tooltip-theme opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-30">
                                    {/* Arrow */}
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-theme-card border-t border-l border-theme transform rotate-45"></div>
                                    <p className="text-sm text-theme-secondary leading-relaxed font-normal">
                                        {profile.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            {/* Desktop Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                <span className="text-theme-primary block">Hi, I'm {profile.name.split(' ')[0]}</span>
                            </h1>
                        </div>

                        {/* Bio / Hook with Elegant Tooltip - Desktop only */}
                        <div className="relative group w-fit mb-8 z-20 hidden lg:block">
                            <h2 className="text-2xl lg:text-3xl font-bold text-theme-primary cursor-help border-b-2 border-dashed border-theme hover:border-theme-accent transition-colors inline-block pb-1">
                                I build things.
                            </h2>

                            {/* Tooltip Content */}
                            <div className="absolute top-full left-0 mt-4 w-[280px] sm:w-[400px] p-6 tooltip-theme opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                                {/* Arrow */}
                                <div className="absolute -top-2 left-8 w-4 h-4 bg-theme-card border-t border-l border-theme transform rotate-45"></div>

                                <p className="text-base text-theme-secondary leading-relaxed font-normal">
                                    {profile.bio}
                                </p>
                            </div>
                        </div>

                        {/* Stats Row - Compact on mobile */}
                        <div className="flex flex-wrap gap-4 lg:gap-6 mb-6 lg:mb-8 relative z-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="stat-box">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 stat-icon">
                                        <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-theme-inverse" />
                                    </div>
                                    <div>
                                        <p className="text-xl lg:text-2xl stat-value">{stat.value}</p>
                                        <p className="text-xs lg:text-sm stat-label">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons - Stack on very small screens */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6 lg:mb-8">
                            <a href="#contact" className="btn btn-primary text-center">
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/jangwanAnkit/minimal-portfolio/releases/download/latest/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary text-center"
                            >
                                <Download className="w-4 h-4" />
                                <span>View Resume</span>
                            </a>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="tech-pill px-2.5 py-1 lg:px-3 lg:py-1.5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Mobile: Social links inline */}
                        <div className="flex items-center gap-3 mt-6 lg:hidden">
                            {profile.socials.github && (
                                <a
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 social-icon"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                            {profile.socials.linkedin && (
                                <a
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 social-icon"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            <a
                                href={`mailto:${contact.email}`}
                                className="w-10 h-10 social-icon"
                                aria-label="Email Contact"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Avatar & Social Links (Desktop only) */}
                    <div className="hidden lg:flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Avatar with glow effect */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-card-lg border-4 border-white"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {profile.socials.github && (
                                <a
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 social-icon"
                                    aria-label="GitHub Profile"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {profile.socials.linkedin && (
                                <a
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 social-icon"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            <a
                                href={`mailto:${contact.email}`}
                                className="w-12 h-12 social-icon"
                                aria-label="Email Contact"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroEnhanced;
