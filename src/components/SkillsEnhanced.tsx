import { Code2, Database, Layout, Server, Settings, Terminal, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { SkillsData, SkillCategory as SkillCategoryType } from '../types/portfolio';

const iconMap = {
    Layout,
    Server,
    Database,
    Code2,
    Terminal,
    Settings,
};

// Color schemes for different categories
const categoryColors: Record<string, { bg: string; text: string; border: string; badge: string; iconBg: string }> = {
    Frontend: {
        bg: 'bg-cyan-50',
        text: 'text-cyan-700',
        border: 'border-cyan-200 hover:border-cyan-400',
        badge: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
        iconBg: 'bg-cyan-500',
    },
    Backend: {
        bg: 'bg-electric-100',
        text: 'text-electric-600',
        border: 'border-electric-200 hover:border-electric-400',
        badge: 'bg-electric-100 text-electric-600 hover:bg-electric-200',
        iconBg: 'bg-electric-600',
    },
    Database: {
        bg: 'bg-emerald-100',
        text: 'text-emerald-600',
        border: 'border-emerald-200 hover:border-emerald-400',
        badge: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
        iconBg: 'bg-emerald-500',
    },
    Languages: {
        bg: 'bg-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200 hover:border-amber-400',
        badge: 'bg-amber-100 text-amber-600 hover:bg-amber-200',
        iconBg: 'bg-amber-500',
    },
    Tools: {
        bg: 'bg-navy-100',
        text: 'text-navy-600',
        border: 'border-navy-200 hover:border-navy-400',
        badge: 'bg-navy-100 text-navy-600 hover:bg-navy-200',
        iconBg: 'bg-navy-500',
    },
    Other: {
        bg: 'bg-navy-50',
        text: 'text-navy-600',
        border: 'border-navy-100 hover:border-cyan-400',
        badge: 'bg-navy-100 text-navy-600 hover:bg-navy-200',
        iconBg: 'bg-gradient-primary',
    },
};

const defaultColors = categoryColors.Other;

const SkillCategoryCard = ({ category }: { category: SkillCategoryType }) => {
    const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code2;
    const colors = categoryColors[category.title] || defaultColors;

    return (
        <div
            className={`
        card p-6 border ${colors.border}
        hover:shadow-card-lg transition-all duration-300
        group
      `}
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-card-sm`}>
                    <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-lg font-semibold ${colors.text}`}>{category.title}</h3>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className={`
              px-3 py-1.5 rounded-full text-sm font-medium
              ${colors.badge}
              transition-all duration-200 cursor-default
            `}
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

    useEffect(() => {
        fetch('/data/skills.json')
            .then(res => res.json())
            .then(data => setSkillsData(data))
            .catch(err => console.error('Failed to load skills:', err));
    }, []);

    // Summary stats
    const totalSkills = skillsData?.categories.reduce((acc, cat) => acc + cat.skills.length, 0) || 0;
    const totalCategories = skillsData?.categories.length || 0;

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
                    <p className="text-lg text-navy-600 max-w-2xl mx-auto">
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
                            <p className="text-2xl font-bold text-navy-800">{totalCategories}</p>
                            <p className="text-sm text-navy-500">Domains</p>
                        </div>
                        <div className="w-px h-10 bg-navy-200"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-navy-800">{totalSkills}+</p>
                            <p className="text-sm text-navy-500">Technologies</p>
                        </div>
                        <div className="w-px h-10 bg-navy-200"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-navy-800">5+</p>
                            <p className="text-sm text-navy-500">Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsEnhanced;
