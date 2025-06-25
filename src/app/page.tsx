'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import SkillsChart from '@/components/SkillsChart';
import NetworkArchitecture from '@/components/NetworkArchitecture';
import ProjectCard from '@/components/ProjectCard';
import TechIcon from '@/components/TechIcon';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Certificates from '@/components/Certificates';
import SystemMonitor from '@/components/SystemMonitor';
import MonitoringCharts from '@/components/MonitoringCharts';
import PDFGenerator from '@/components/PDFGenerator';
import CVContent from '@/components/CVContent';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import ProjectFilter from '@/components/ProjectFilter';
import GitHubRepos from '@/components/GitHubRepos';
import ImageLightbox from '@/components/ImageLightbox';
import ConfettiEasterEgg from '@/components/ConfettiEasterEgg';

const projects = [
  {
    title: "Frontend Task Manager",
    description: "A modern task management application with drag-and-drop functionality",
    image: "/images/grd.png",
    slug: "task-manager",
    liveUrl: "http://frontend-taskmanager.s3-website.eu-north-1.amazonaws.com/",
    technologies: ["React", "TypeScript", "Tailwind", "Firebase"]
  },
  {
    title: "Voodoo Test",
    description: "E-commerce platform with modern UI/UX design",
    image: "/images/магазин.png",
    slug: "voodoo-test",
    liveUrl: "https://leshamer2255.github.io/Voodoo-Test/",
    technologies: ["React", "Redux", "Styled Components", "Node.js"]
  },
  {
    title: "Wedding Website",
    description: "Interactive wedding invitation website",
    image: "/images/wedding.png",
    slug: "wedding-website",
    liveUrl: "https://project12826877.tilda.ws/",
    technologies: ["Tilda", "JavaScript", "CSS3", "HTML5"]
  },
  {
    title: "ЩОсь на потім",
    description: "опис",
    image: "/images/grd.png",
    slug: "tax-manager",
    liveUrl: "https://tax-manager-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
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
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [eggClicks, setEggClicks] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="fixed top-20 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-500"
        aria-label="Toggle theme"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {theme === 'dark' ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </motion.span>
      </motion.button>

      {/* Main Title Section */}
      <motion.section 
        id="home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-200/40 via-white/0 to-pink-200/40 dark:from-blue-900/40 dark:via-gray-900/0 dark:to-pink-900/40 z-0 pointer-events-none"
          style={{ y: parallaxY }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
            {/* Left Side - Large Photo */}
            <motion.div
              className="flex-1 flex justify-center mb-8 lg:mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src="/images/ло.png"
                alt="Oleksii Melnichuk"
                className="w-80 h-80 lg:w-[500px] lg:h-[500px] cursor-pointer"
                onClick={() => {
                  setEggClicks(c => {
                    if (c + 1 >= 7) {
                      setShowConfetti(true);
                      setTimeout(() => setShowConfetti(false), 3000);
                      return 0;
                    }
                    return c + 1;
                  });
                }}
              />
            </motion.div>

            {/* Right Side - Name and Buttons */}
            <motion.div
              className="flex-1 text-center lg:text-left lg:ml-20"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Melnichuk
                <br />
                <span className="text-blue-400">Oleksii</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Frontend Developer & System Administrator
              </motion.p>
              
              <motion.div
                className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <button 
                  onClick={() => {
                    console.log('View Projects button clicked');
                    const element = document.getElementById('projects');
                    console.log('Projects element:', element);
                    if (element) {
                      const offsetTop = element.offsetTop - 80; // Відступ для навігації
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                      });
                    } else {
                      console.error('Projects section not found');
                    }
                  }}
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 text-lg font-semibold text-center cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 relative z-20"
                >
                  View Projects
                </button>
                <div className="relative z-20">
                  <PDFGenerator filename="Oleksii_Melnichuk_CV.pdf">
                    <CVContent />
                  </PDFGenerator>
                </div>
                <button 
                  onClick={() => {
                    console.log('Contact Me button clicked');
                    const element = document.getElementById('contact');
                    console.log('Contact element:', element);
                    if (element) {
                      const offsetTop = element.offsetTop - 80; // Відступ для навігації
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                      });
                    } else {
                      console.error('Contact section not found');
                    }
                  }}
                  className="px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-900 active:bg-gray-100 transition-all duration-200 text-lg font-semibold text-center cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 relative z-20"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-0"
          style={{ opacity }}
        />
      </motion.section>

      {/* Skills Section */}
      <ScrollRevealSection id="skills">
        <SkillsChart />
      </ScrollRevealSection>

      {/* Experience Section */}
      <ScrollRevealSection id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
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
      </ScrollRevealSection>

      {/* Certificates Section */}
      <ScrollRevealSection id="certificates">
        <Certificates />
      </ScrollRevealSection>

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

      {/* System Monitor Section */}
      <SystemMonitor />

      {/* Monitoring Charts Section */}
      <MonitoringCharts />

      {/* Projects Section */}
      <ScrollRevealSection id="projects" className="py-20 bg-white dark:bg-gray-800">
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
          <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} onImageClick={() => setLightboxImage(project.image)} />
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* GitHub Projects Section */}
      <ScrollRevealSection id="github" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">GitHub Projects</h2>
          <GitHubRepos username="Leshamer2255" count={6} />
        </div>
      </ScrollRevealSection>

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

      {lightboxImage && (
        <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}

      <ConfettiEasterEgg show={showConfetti} />
    </main>
  );
} 