import { CheckCircle2, Clock, ExternalLink, Github, Layers, ArrowUpRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import type { Project } from '../types/portfolio';

interface ExtendedProject extends Project {
    isCurrentSite?: boolean;
}

const ProjectCard = ({ project }: { project: ExtendedProject }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex-shrink-0 w-[320px] sm:w-[380px] group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card overflow-hidden h-full relative">
                {/* "You're viewing this" Badge */}
                {project.isCurrentSite && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-electric-600 text-white shadow-lg">
                        <Eye className="w-3 h-3" />
                        <span>You're viewing this!</span>
                    </div>
                )}

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Status Badge */}
                    <div
                        className={`
                            absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                            ${project.status === 'ongoing'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }
                        `}
                    >
                        {project.status === 'ongoing' ? (
                            <>
                                <Clock className="w-3 h-3" />
                                <span>In Progress</span>
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Completed</span>
                            </>
                        )}
                    </div>

                    {/* Quick action buttons */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-sm py-2 px-4 flex-1 justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary bg-white/90 backdrop-blur-sm text-sm py-2 px-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                    <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                    </h3>

                    <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-32' : 'max-h-12'}`}>
                        <p className={`text-navy-600 text-sm ${isHovered ? '' : 'line-clamp-2'}`}>
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {(isHovered ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
                            <span
                                key={tech.name}
                                className="px-2 py-0.5 text-xs font-medium rounded-md bg-navy-50 text-navy-600 border border-navy-100"
                            >
                                {tech.name}
                            </span>
                        ))}
                        {!isHovered && project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-cyan-50 text-cyan-600">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsEnhanced = () => {
    const [projects, setProjects] = useState<ExtendedProject[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects || []))
            .catch(err => console.error('Failed to load projects:', err));
    }, []);

    // Check if we can navigate in each direction
    const canGoLeft = currentIndex > 0;
    const canGoRight = currentIndex < projects.length - 1;

    // Auto-advance carousel (stops at end)
    const autoAdvance = useCallback(() => {
        if (!isHovering && projects.length > 0) {
            setCurrentIndex(prev => {
                if (prev < projects.length - 1) {
                    return prev + 1;
                }
                return prev; // Stay at end, don't wrap
            });
        }
    }, [isHovering, projects.length]);

    useEffect(() => {
        autoScrollRef.current = setInterval(autoAdvance, 4000);
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [autoAdvance]);

    // Navigate using arrow buttons (linear, no wrapping)
    const navigate = (direction: 'left' | 'right') => {
        if (!projects.length) return;
        setCurrentIndex(prev => {
            if (direction === 'right' && prev < projects.length - 1) {
                return prev + 1;
            } else if (direction === 'left' && prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    };

    // Calculate transform based on currentIndex
    const getTransform = () => {
        if (!projects.length) return 'translateX(0)';
        const cardWidth = 400; // Card width + gap
        const currentOffset = currentIndex * cardWidth;
        return `translateX(-${currentOffset}px)`;
    };

    if (!projects.length) {
        return (
            <section id="projects" className="section-py">
                <div className="container-premium">
                    <div className="text-center mb-12">
                        <div className="animate-shimmer h-10 w-64 mx-auto rounded-lg mb-4"></div>
                        <div className="animate-shimmer h-6 w-96 mx-auto rounded-lg"></div>
                    </div>
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex-shrink-0 w-[380px] card animate-shimmer">
                                <div className="h-48 bg-navy-100"></div>
                                <div className="p-6 space-y-4">
                                    <div className="h-6 bg-navy-100 rounded w-3/4"></div>
                                    <div className="h-4 bg-navy-100 rounded"></div>
                                    <div className="flex gap-2">
                                        <div className="h-6 bg-navy-100 rounded w-16"></div>
                                        <div className="h-6 bg-navy-100 rounded w-16"></div>
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
        <section id="projects" className="section-py relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-glow opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="container-premium text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 badge badge-purple mb-4">
                        <Layers className="w-4 h-4" />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                        A showcase of my recent development work — use arrows to navigate
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className="relative group/carousel"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Left Arrow - hidden at start */}
                    <button
                        onClick={() => navigate('left')}
                        disabled={!canGoLeft}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-navy-100 flex items-center justify-center transition-all ${canGoLeft
                                ? 'text-navy-600 hover:text-cyan-600 hover:border-cyan-400 opacity-0 group-hover/carousel:opacity-100'
                                : 'opacity-0 cursor-not-allowed'
                            }`}
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow - hidden at end */}
                    <button
                        onClick={() => navigate('right')}
                        disabled={!canGoRight}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-navy-100 flex items-center justify-center transition-all ${canGoRight
                                ? 'text-navy-600 hover:text-cyan-600 hover:border-cyan-400 opacity-0 group-hover/carousel:opacity-100'
                                : 'opacity-0 cursor-not-allowed'
                            }`}
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Track */}
                    <div className="carousel-mask overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex gap-6 py-4 px-8 transition-transform duration-700 ease-out"
                            style={{ transform: getTransform() }}
                        >
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={`${project.title}-${index}`}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-cyan-500 w-6'
                                        : 'bg-navy-200 hover:bg-navy-300 w-2'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* View More CTA */}
                <div className="container-premium mt-12 text-center">
                    <a
                        href="https://github.com/jangwanAnkit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                    >
                        <span>View more on GitHub</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsEnhanced;
