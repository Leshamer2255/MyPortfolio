'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const sections = [
  {
    id: 'hero',
    title: 'Introduction',
    content: 'System Administrator specialized in Linux infrastructure, network security, and automation.'
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: 'KNEDP DPS - January 2024 – Present'
  },
  {
    id: 'projects',
    title: 'Projects',
    content: 'Frontend Task Manager, Voodoo Test, Wedding Landing Page'
  },
  {
    id: 'contact',
    title: 'Contact',
    content: 'Get in touch with me'
  }
];

export default function ScrollNavigation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen relative">
      <div className="container mx-auto px-4 py-20">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            className="bg-gray-800 rounded-xl p-8 shadow-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">{section.title}</h2>
            <p className="text-xl text-gray-400">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 