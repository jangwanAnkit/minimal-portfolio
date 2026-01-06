import { CheckCircle2, Clock, ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Project } from '../types/portfolio';

type ProjectProps = Project;

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, technologies, liveUrl, sourceUrl, status }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className={`absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
        status === 'ongoing' 
          ? 'bg-yellow-100 text-yellow-800' 
          : 'bg-green-100 text-green-800'
      }`}>
        {status === 'ongoing' ? (
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
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects || []))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  if (!projects.length) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-lg mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-gray-500">
            A showcase of my recent development work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;