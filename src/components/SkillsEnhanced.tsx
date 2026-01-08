import { Code2, Database, Layout, Server, Settings, Terminal, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { SkillsData, SkillCategory as SkillCategoryType, Experience } from '../types/portfolio';
import { getExperienceYearsLabel } from '../lib/utils';

const iconMap = {
    Layout,
    Server,
    Database,
    Code2,
    Terminal,
    Settings,
};

const SkillCategoryCard = ({ category }: { category: SkillCategoryType }) => {
    const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code2;

    return (
        <div className="skill-card group">
            {/* Category Header */}
            <div className="skill-card-header">
                <div className="skill-icon">
                    <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="skill-title">{category.title}</h3>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="skill-badge"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const SkillsEnhanced = () => {
    const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        Promise.all([
            fetch('/data/skills.json').then(res => res.json()),
            fetch('/data/experience.json').then(res => res.json()),
        ])
            .then(([skills, expData]) => {
                setSkillsData(skills);
                setExperiences(expData.experience || []);
            })
            .catch(err => console.error('Failed to load data:', err));
    }, []);

    // Summary stats - calculated from actual data
    const totalSkills = skillsData?.categories.reduce((acc, cat) => acc + cat.skills.length, 0) || 0;
    const totalCategories = skillsData?.categories.length || 0;
    const yearsExperience = getExperienceYearsLabel(experiences);

    if (!skillsData) {
        return (
            <section id="skills" className="section-py">
                <div className="container-premium">
                    <div className="text-center mb-12">
                        <div className="animate-shimmer h-10 w-64 mx-auto rounded-lg mb-4"></div>
                        <div className="animate-shimmer h-6 w-96 mx-auto rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="card p-6 animate-shimmer">
                                <div className="h-10 w-32 bg-navy-100 rounded-lg mb-4"></div>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3, 4].map((j) => (
                                        <div key={j} className="h-8 w-20 bg-navy-100 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="skills" className="section-py relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow opacity-30 pointer-events-none"></div>

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Technical Expertise</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-lg text-theme-secondary max-w-2xl mx-auto">
                        {totalSkills}+ technologies across {totalCategories} domains — from frontend
                        frameworks to cloud infrastructure
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.categories.map((category, index) => (
                        <div
                            key={category.title}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <SkillCategoryCard category={category} />
                        </div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-6 glass-card px-8 py-4 rounded-2xl">
                        <div className="text-center">
                            <p className="text-2xl font-bold stat-value">{totalCategories}</p>
                            <p className="text-sm stat-label">Domains</p>
                        </div>
                        <div className="w-px h-10 divider-theme"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold stat-value">{totalSkills}+</p>
                            <p className="text-sm stat-label">Technologies</p>
                        </div>
                        <div className="w-px h-10 divider-theme"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold stat-value">{yearsExperience}</p>
                            <p className="text-sm stat-label">Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsEnhanced;
