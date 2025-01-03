import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Cloudify',
    role: 'Business Integration Specialist',
    duration: 'Aug 2024 – Dec 2024',
    location: 'Delhi',
    logo: 'https://cms.cloudify.biz/uploads/cloudify_logo_5b1553310b.svg',
    details: [
      'Custom Integration Lead: Led the team in delivering tailored solutions using the AWS Serverless tech stack (Lambda, SST framework), React, and Next.js.',
      'Client Delivery and Collaboration: Managed client communication, team coordination, and delivery of B2B solutions, working directly with the CEO and end clients.',
      'Third-Party Integrations: Implemented integrations with Pipedrive, Hubspot, Zapier, Fortnox, E-conomic (invoicing), Brevo, MSG91 (WhatsApp/SMS), Stripe (payments), and Shopify/WooCommerce APIs for E-Commerce.',
      'Project Management: Oversaw sprints, release planning, and daily stand-ups to ensure seamless project execution.'
    ]
  },
  {
    company: 'Saara Inc',
    role: 'Lead Software Developer',
    duration: 'May 2022 – Aug 2024',
    location: 'Bangalore',
    logo: 'https://saara.io/wp-content/uploads/2024/05/cropped-Saara_Logo-1.png',
    details: [
      'Leadership and Development: Led full-stack development and lifecycle management of AI-powered products like EcoReturns and SalesGPT, incorporating Django, React, Next.js, and PostgreSQL.',
      'Cloud Deployments: Executed end-to-end Azure deployments, including server setup, database management, and SSL configuration.',
      'Third-Party Integrations: Delivered multiple integrations, such as Amazon SES, MSG91, Celery/Redis, and Shopify/WooCommerce APIs for seamless E-Commerce operations.',
      'Project Management: Coordinated with stakeholders for sprint planning, backlog grooming, and timely product releases.'
    ]
  },
  {
    company: 'SHL',
    role: 'Software Engineer',
    duration: 'July 2020 – May 2022',
    location: 'Gurgaon',
    logo: 'https://www.shl.com/assets/header-graphics/SHL-logo-colour-update.svg',
    details: [
      'Backend Development and Optimization: Improved web applications for the Reporting and Scoring team using Python and PHP, achieving a 30% efficiency boost, and delivered custom reporting solutions for clients like NASSCOM and Adecco by transitioning legacy platforms to a universal system.'
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
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