import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Experience } from '../types/portfolio';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48?text=' + experience.company[0];
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{experience.company}</h3>
              <p className="text-gray-600">{experience.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">{experience.duration}</p>
              <p className="text-sm text-gray-500">{experience.location}</p>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6 pt-2">
          <ul className="space-y-3">
            {experience.details.map((detail, index) => (
              <li key={index} className="text-gray-600 text-sm">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch('/data/experience.json')
      .then(res => res.json())
      .then(data => setExperiences(data.experience || []))
      .catch(err => console.error('Failed to load experience:', err));
  }, []);

  if (!experiences.length) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-lg mx-auto"></div>
            </div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <p className="mt-4 text-gray-500">
            My professional journey and contributions
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;