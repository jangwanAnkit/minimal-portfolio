import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, demo, github }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={demo}
          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
        <a
          href={github}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
        >
          <Github className="w-4 h-4" />
          <span>Source</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: 'https://demo-ecommerce.com',
      github: 'https://github.com/username/ecommerce',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      demo: 'https://demo-tasks.com',
      github: 'https://github.com/username/tasks',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with historical data analysis.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&h=400',
      tech: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      demo: 'https://demo-weather.com',
      github: 'https://github.com/username/weather',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-gray-500">
            A selection of my recent development projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;