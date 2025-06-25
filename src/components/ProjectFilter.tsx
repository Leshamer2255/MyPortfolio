'use client';

import { useState } from 'react';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilter: (filtered: Project[]) => void;
}

const allTechs = [
  'All',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Node.js',
  'MongoDB',
  'Express',
  'Redux',
  'Styled Components',
  'Firebase',
  'Tilda',
  'JavaScript',
  'CSS3',
  'HTML5',
];

export default function ProjectFilter({ projects, onFilter }: ProjectFilterProps) {
  const [active, setActive] = useState('All');

  const handleFilter = (tech: string) => {
    setActive(tech);
    if (tech === 'All') {
      onFilter(projects);
    } else {
      onFilter(projects.filter(p => p.technologies.includes(tech)));
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {allTechs.map(tech => (
        <button
          key={tech}
          onClick={() => handleFilter(tech)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
            ${active === tech ? 'bg-blue-500 text-white border-blue-500 shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300'}`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
} 