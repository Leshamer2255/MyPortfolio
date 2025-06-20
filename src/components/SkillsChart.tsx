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
          <div className="space-y-6">
            {Object.entries(skills).map(([skill, data], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-gray-300">{skill}</span>
                  <span className="text-gray-400">{data.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${data.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${data.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
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