import { Github, Linkedin, Mail, ArrowRight, Download, MapPin, Briefcase, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Profile } from '../types/portfolio';

const HeroEnhanced = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        fetch('/data/profile.json')
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error('Failed to load profile:', err));
    }, []);

    // Stats to showcase experience
    const stats = [
        { label: 'Years Experience', value: profile?.experience_years || '5+', icon: Calendar },
        { label: 'Projects Delivered', value: profile?.projects_delivered || '15+', icon: Briefcase },
    ];

    // Core tech stack to highlight
    const techStack = ['Django', 'Express', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS'];

    if (!profile) {
        return (
            <section id="about" className="section-py min-h-[80vh] flex items-center">
                <div className="container-premium">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="h-12 w-48 bg-navy-100 rounded-lg animate-shimmer"></div>
                            <div className="h-16 w-full bg-navy-100 rounded-lg animate-shimmer"></div>
                            <div className="h-24 w-full bg-navy-100 rounded-lg animate-shimmer"></div>
                            <div className="flex gap-4">
                                <div className="h-12 w-36 bg-navy-100 rounded-lg animate-shimmer"></div>
                                <div className="h-12 w-36 bg-navy-100 rounded-lg animate-shimmer"></div>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <div className="w-72 h-72 rounded-full bg-navy-100 animate-shimmer"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="section-py min-h-[80vh] flex items-center relative overflow-hidden">
            {/* Background gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none"></div>

            <div className="container-premium relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="animate-fade-in-up order-2 lg:order-1">
                        {/* Location badge */}
                        {profile.location && (
                            <div className="inline-flex items-center gap-2 mb-6 badge badge-primary">
                                <MapPin className="w-4 h-4" />
                                <span>{profile.location}</span>
                            </div>
                        )}

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="text-navy-800 block">Hi, I'm {profile.name.split(' ')[0]}</span>
                            <span className="text-gradient block mt-2">{profile.title.split('|')[0].trim()}</span>
                        </h1>

                        {/* Bio */}
                        <p className="text-lg text-navy-600 mb-8 max-w-xl leading-relaxed">
                            {profile.bio}
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-card-sm">
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-navy-800">{stat.value}</p>
                                        <p className="text-sm text-navy-500">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a href="#contact" className="btn btn-primary">
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/jangwanAnkit/minimal-portfolio/releases/download/latest/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
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
                                    className="px-3 py-1.5 text-sm font-medium text-navy-600 bg-white rounded-full border border-navy-200 shadow-card-sm hover:border-cyan-400 hover:text-cyan-600 transition-all cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Avatar & Social Links */}
                    <div className="flex flex-col items-center order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Avatar with glow effect */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-card-lg border-4 border-white"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {profile.socials.github && (
                                <a
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-white shadow-card-sm border border-navy-100 flex items-center justify-center text-navy-600 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-card-md transition-all"
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
                                    className="w-12 h-12 rounded-xl bg-white shadow-card-sm border border-navy-100 flex items-center justify-center text-navy-600 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-card-md transition-all"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            <a
                                href={profile.socials.email}
                                className="w-12 h-12 rounded-xl bg-white shadow-card-sm border border-navy-100 flex items-center justify-center text-navy-600 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-card-md transition-all"
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
