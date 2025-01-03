import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="p-6 pt-0 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center space-x-2 mb-4">
      <Icon className="w-5 h-5 text-indigo-500" />
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

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Astro'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MYSQL'],
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Git', 'Docker', 'AWS', 'Azure', 'Linux', 'VS Code', 'Cursor'],
    },
    {
      title: 'Other',
      icon: Settings,
      skills: ['Agile Project Management', 'CI/CD', 'Hubspot', 'Pipedrive', 'Airtable'],
    },
  ];

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
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;