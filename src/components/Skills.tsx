import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { SkillsData } from '../types/portfolio';

const iconMap = {
  Layout,
  Server,
  Database,
  Code2,
  Terminal,
  Settings,
};

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string[]; icon: string }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Code2;

  return (
    <div className="p-6 pt-0 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-4">
        <IconComponent className="w-5 h-5 text-indigo-500" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);

  useEffect(() => {
    fetch('/data/skills.json')
      .then(res => res.json())
      .then(data => setSkillsData(data))
      .catch(err => console.error('Failed to load skills:', err));
  }, []);

  if (!skillsData) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-lg mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse p-6 pt-0 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-8 bg-gray-200 rounded w-1/4"></div>
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          <p className="mt-4 text-gray-500">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;