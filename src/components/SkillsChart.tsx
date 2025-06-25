'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillData {
  level: number;
  details: string[];
  color: string;
}

interface Skills {
  [key: string]: SkillData;
}

const skills: Skills = {
  "Frontend Development": {
    level: 80,
    details: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
    color: "from-blue-500 to-blue-600"
  },
  "Backend Development": {
    level: 55,
    details: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"],
    color: "from-green-500 to-green-600"
  },
  "DevOps & Infrastructure": {
    level: 60,
    details: ["Docker", "AWS", "CI/CD", "Linux", "Nginx"],
    color: "from-purple-500 to-purple-600"
  },
  "Security": {
    level: 50,
    details: ["Web Security", "Authentication", "Authorization", "HTTPS", "CORS"],
    color: "from-red-500 to-red-600"
  }
};

export default function SkillsChart() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Chart */}
          <div className="space-y-6 grid grid-cols-2 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([skill, data], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg width="100%" height="100%" viewBox="0 0 120 120">
                    <circle
                      cx="60" cy="60" r="52"
                      stroke="#374151"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="60" cy="60" r="52"
                      stroke={`url(#grad${index})`}
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 52}
                      strokeDashoffset={2 * Math.PI * 52}
                      animate={{ strokeDashoffset: (1 - data.level / 100) * 2 * Math.PI * 52 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      style={{
                        filter: 'drop-shadow(0 0 8px #3B82F6AA)',
                        strokeLinecap: 'round',
                      }}
                    />
                    <defs>
                      <linearGradient id={`grad${index}`} x1="0" y1="0" x2="120" y2="120">
                        <stop offset="0%" stopColor={data.color.split(' ')[0].replace('from-', '').replace('-500', '') || '#3B82F6'} />
                        <stop offset="100%" stopColor={data.color.split(' ')[1]?.replace('to-', '').replace('-600', '') || '#2563EB'} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">{data.level}%</span>
                    <span className="text-xs text-gray-300 text-center mt-1">{skill}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Details */}
          <div className="bg-gray-800 rounded-xl p-6">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-blue-400">{selectedSkill}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills[selectedSkill].details.map((detail: string, index: number) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg p-3 text-center"
                    >
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-gray-400">
                Click on a skill to see details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 