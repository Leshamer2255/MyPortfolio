'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import SkillsChart from '@/components/SkillsChart';
import LinuxCommands from '@/components/LinuxCommands';
import NetworkArchitecture from '@/components/NetworkArchitecture';
import ProjectCard from '@/components/ProjectCard';
import TechIcon from '@/components/TechIcon';
import ExperienceTimeline from '@/components/ExperienceTimeline';

const projects = [
  {
    title: "Frontend Task Manager",
    description: "A modern task management application with drag-and-drop functionality",
    image: "/images/grd.png",
    slug: "task-manager",
    liveUrl: "http://frontend-taskmanager.s3-website.eu-north-1.amazonaws.com/"
  },
  {
    title: "Voodoo Test",
    description: "E-commerce platform with modern UI/UX design",
    image: "/images/grd.png",
    slug: "voodoo-test",
    liveUrl: "https://leshamer2255.github.io/Voodoo-Test/"
  },
  {
    title: "Wedding Website",
    description: "Interactive wedding invitation website",
    image: "/images/магазин.png",
    slug: "wedding-website",
    liveUrl: "https://project12826877.tilda.ws/"
  },
  {
    title: "Tax Manager",
    description: "Comprehensive tax management system for businesses",
    image: "/images/grd.png",
    slug: "tax-manager",
    liveUrl: "https://tax-manager-demo.com"
  }
];

const techIcons = [
  { name: 'React', icon: '/icons/react.svg', color: '#61DAFB' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', color: '#3178C6' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', color: '#000000' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg', color: '#06B6D4' },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </motion.button>

      {/* Main Title Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center z-10">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Melnichuk Oleksii
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer & System Administrator
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
          style={{ opacity }}
        />
      </motion.section>

      {/* Skills Section */}
      <SkillsChart />

      {/* Experience Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Professional Experience
          </motion.h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Linux Commands Section */}
      <LinuxCommands />

      {/* System Architecture Section */}
      <motion.section 
        className="relative py-16 flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900"
        style={{ y }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            System Architecture & Infrastructure
          </motion.h2>
          <div className="w-full max-w-5xl mx-auto">
            <NetworkArchitecture />
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 