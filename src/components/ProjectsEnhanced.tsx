import { CheckCircle2, Clock, ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Project } from '../types/portfolio';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <div
            className={`
        card overflow-hidden group
        animate-fade-in-up
      `}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

                {/* Quick action buttons - show on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-sm py-2 px-4 flex-1 justify-center"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                    </a>
                    {project.sourceUrl && (
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary bg-white/90 backdrop-blur-sm text-sm py-2 px-4"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-navy-600 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech.name}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-navy-50 text-navy-600 border border-navy-100"
                        >
                            {tech.name}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-cyan-50 text-cyan-600">
                            +{project.technologies.length - 5} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectsEnhanced = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects || []))
            .catch(err => console.error('Failed to load projects:', err));
    }, []);

    if (!projects.length) {
        return (
            <section id="projects" className="section-py">
                <div className="container-premium">
                    <div className="text-center mb-12">
                        <div className="animate-shimmer h-10 w-64 mx-auto rounded-lg mb-4"></div>
                        <div className="animate-shimmer h-6 w-96 mx-auto rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="card animate-shimmer">
                                <div className="h-56 bg-navy-100"></div>
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
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-glow opacity-20 pointer-events-none"></div>

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 badge badge-purple mb-4">
                        <Layers className="w-4 h-4" />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                        A showcase of my recent development work — from educational platforms
                        to architecture portfolios
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* View More CTA */}
                <div className="mt-12 text-center">
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
