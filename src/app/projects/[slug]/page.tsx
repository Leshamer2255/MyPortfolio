'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TechIcon from '@/components/TechIcon';
import Image from 'next/image';

const projectDetails = {
  'task-manager': {
    title: "Frontend Task Manager",
    description: "A modern task management application with drag-and-drop functionality and real-time updates. Built with React and TypeScript, featuring a clean and intuitive user interface.",
    features: [
      "Real-time task synchronization",
      "Drag and drop interface",
      "Task categories and priorities",
      "User authentication",
      "Responsive design"
    ],
    technologies: [
      { name: "React", icon: "react", color: "blue" },
      { name: "TypeScript", icon: "typescript", color: "blue" },
      { name: "Firebase", icon: "firebase", color: "orange" },
      { name: "Tailwind CSS", icon: "tailwind", color: "cyan" }
    ],
    highlights: [
      "Implemented real-time data synchronization using Firebase",
      "Created intuitive drag-and-drop interface for task management",
      "Built secure user authentication system",
      "Developed responsive design for all devices",
      "Implemented task filtering and search functionality"
    ],
    githubUrl: "#",
    liveUrl: "http://frontend-taskmanager.s3-website.eu-north-1.amazonaws.com/",
    image: "/images/grd.png",
    color: "from-blue-500 to-blue-700"
  },
  'voodoo-test': {
    title: "Voodoo Test",
    description: "E-commerce platform with modern UI/UX design. Features a comprehensive product catalog, shopping cart functionality, and user authentication system.",
    features: [
      "Product catalog with categories",
      "Shopping cart functionality",
      "User authentication",
      "Responsive design",
      "Payment integration"
    ],
    technologies: [
      { name: "React", icon: "react", color: "blue" },
      { name: "Redux", icon: "redux", color: "purple" },
      { name: "Styled Components", icon: "styled-components", color: "pink" },
      { name: "Node.js", icon: "nodejs", color: "green" }
    ],
    highlights: [
      "Developed comprehensive product catalog with categories",
      "Implemented shopping cart functionality",
      "Created user authentication system",
      "Built responsive design for all devices",
      "Integrated payment processing system"
    ],
    githubUrl: "#",
    liveUrl: "https://leshamer2255.github.io/Voodoo-Test/",
    image: "/images/магазин.png",
    color: "from-purple-500 to-purple-700"
  },
  'wedding-website': {
    title: "Wedding Website",
    description: "Interactive wedding invitation website built with Tilda. Features a beautiful timeline, RSVP form, photo gallery, and interactive elements to engage guests.",
    features: [
      "Interactive timeline",
      "RSVP form",
      "Photo gallery",
      "Location map",
      "Countdown timer"
    ],
    technologies: [
      { name: "Tilda", icon: "tilda", color: "blue" },
      { name: "JavaScript", icon: "javascript", color: "yellow" },
      { name: "CSS3", icon: "css3", color: "blue" },
      { name: "HTML5", icon: "html5", color: "orange" }
    ],
    highlights: [
      "Created interactive timeline of the couple's journey",
      "Implemented RSVP form with data collection",
      "Built photo gallery with lightbox functionality",
      "Added interactive map for venue location",
      "Developed countdown timer to the wedding day"
    ],
    githubUrl: "#",
    liveUrl: "https://project12826877.tilda.ws/",
    image: "/images/wedding.png",
    color: "from-pink-500 to-pink-700"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <Link 
              href="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-600"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Back to Portfolio Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-6 z-10"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Назад до портфоліо</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative h-[60vh] bg-gradient-to-r ${project.color} text-white`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <TechIcon name={tech.name} icon={tech.icon} color={tech.color} />
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Project Preview</h2>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue-500 text-white text-center py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-800 text-white text-center py-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  View Source Code
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Повернутися до портфоліо</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 