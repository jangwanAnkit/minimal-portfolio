import { ChevronDown, ChevronUp, MapPin, Calendar, Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Experience } from '../types/portfolio';
import { formatDuration, getExperienceYearsLabel } from '../lib/utils';

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(index === 0); // First one expanded by default
    const duration = formatDuration(experience.startDate, experience.endDate);

    return (
        <div
            className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-navy-200 last:hidden"></div>

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-primary shadow-glow-cyan flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            {/* Card */}
            <div
                className={`
          card cursor-pointer transition-all duration-300
          ${isExpanded ? 'shadow-card-lg border-cyan-300' : ''}
        `}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Header */}
                <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                        {/* Left: Logo + Info */}
                        <div className="flex items-center gap-4 flex-1">
                            {/* Company Logo */}
                            <div className="w-14 h-14 rounded-xl bg-white shadow-card-sm border border-navy-100 flex items-center justify-center p-2 flex-shrink-0">
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `<span class="text-xl font-bold text-navy-400">${experience.company[0]}</span>`;
                                    }}
                                />
                            </div>

                            {/* Company Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-navy-800 truncate">
                                    {experience.company}
                                </h3>
                                <p className="text-cyan-600 font-medium">
                                    {experience.role}
                                </p>
                            </div>
                        </div>

                        {/* Right: Meta + Expand */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:block text-right">
                                <div className="flex items-center gap-1.5 text-navy-500 text-sm mb-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-navy-400 text-sm">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{experience.location}</span>
                                </div>
                            </div>

                            <div className={`
                w-8 h-8 rounded-full flex items-center justify-center transition-all
                ${isExpanded ? 'bg-cyan-100 text-cyan-600' : 'bg-navy-50 text-navy-400'}
              `}>
                                {isExpanded ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile meta */}
                    <div className="flex items-center gap-4 mt-3 sm:hidden">
                        <span className="flex items-center gap-1 text-navy-500 text-sm">
                            <Calendar className="w-3.5 h-3.5" />
                            {duration}
                        </span>
                        <span className="flex items-center gap-1 text-navy-400 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            {experience.location}
                        </span>
                    </div>
                </div>

                {/* Expandable Details */}
                <div
                    className={`
            overflow-hidden transition-all duration-300 ease-out
            ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
                >
                    <div className="px-6 pb-6 border-t border-navy-100">
                        <ul className="mt-4 space-y-3">
                            {experience.details.map((detail, idx) => (
                                <li
                                    key={idx}
                                    className="flex gap-3 text-navy-600 text-sm leading-relaxed"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExperienceEnhanced = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        fetch('/data/experience.json')
            .then(res => res.json())
            .then(data => setExperiences(data.experience || []))
            .catch(err => console.error('Failed to load experience:', err));
    }, []);

    // Calculate total years from actual experience data
    const totalYears = getExperienceYearsLabel(experiences);

    if (!experiences.length) {
        return (
            <section id="experience" className="section-py">
                <div className="container-premium">
                    <div className="text-center mb-12">
                        <div className="animate-shimmer h-10 w-64 mx-auto rounded-lg mb-4"></div>
                        <div className="animate-shimmer h-6 w-96 mx-auto rounded-lg"></div>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="card p-6 animate-shimmer">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-navy-100 rounded-xl"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 bg-navy-100 rounded w-1/3"></div>
                                        <div className="h-4 bg-navy-100 rounded w-1/4"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="experience" className="section-py relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-glow opacity-20 pointer-events-none"></div>

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 badge badge-success mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>Career Journey</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Work Experience</span>
                    </h2>
                    <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                        {totalYears} years building products across {experiences.length} companies —
                        from startups to enterprise
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.company} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceEnhanced;
