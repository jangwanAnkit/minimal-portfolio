import { CheckCircle2, Clock, ExternalLink, Github } from 'lucide-react';
import React from 'react';

// This type can be moved to a separate types file later for API integration
type Technology = {
  name: string;
  category?: string;
};

type ProjectStatus = 'ongoing' | 'completed';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl: string;
  sourceUrl?: string;
  status: ProjectStatus;
};

const ProjectCard: React.FC<Project> = ({ title, description, image, technologies, liveUrl, sourceUrl, status }) => (
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

// This can be moved to an API service later
const projectsData: Project[] = [
  {
    title: 'Dynamics Classes',
    description: 'A comprehensive educational platform built with modern web technologies. Features include SEO optimization, data management with Airtable, and deal tracking through Hubspot.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Vite' },
      { name: 'Airtable' },
      { name: 'Hubspot' },
    ],
    liveUrl: 'http://dynamicsclasses.com/',
    status: 'ongoing'
  },
  {
    title: 'Architect Portfolio',
    description: 'A modern portfolio website for an architecture firm, built with Astro framework. Features include responsive design, optimized performance, and integrated contact form using Tally.so.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=400',
    technologies: [
      { name: 'Astro' },
      { name: 'Bolt.new' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Node.js' },
      { name: 'Tally.so' },
    ],
    liveUrl: 'https://ankit-rana-portfolio.pages.dev/',
    sourceUrl: 'https://github.com/jangwanAnkit/ankit-rana-portfolio',
    status: 'ongoing'
  }
];

const Projects = () => {
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
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;