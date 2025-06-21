'use client';

import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import ExperienceTimeline from './ExperienceTimeline';
import Certificates from './Certificates';

const techIcons = [
  { name: 'React', icon: '/icons/react.svg', color: '#61DAFB' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', color: '#3178C6' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', color: '#000000' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg', color: '#06B6D4' },
];

export default function CVContent() {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8 border-b-2 border-gray-300 pb-6">
        <img 
          src="/images/ло.png" 
          alt="Oleksii Melnichuk" 
          className="w-32 h-32 rounded-full mr-8 border-4 border-gray-300"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Melnichuk Oleksii
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Frontend Developer & System Administrator
          </p>
          <div className="flex flex-wrap gap-2">
            {techIcons.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <strong>Email:</strong> oleksii.melnichuk@example.com
          </div>
          <div>
            <strong>Phone:</strong> +380 XX XXX XX XX
          </div>
          <div>
            <strong>Location:</strong> Ukraine
          </div>
          <div>
            <strong>LinkedIn:</strong> linkedin.com/in/oleksii-melnichuk
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Experienced Frontend Developer and System Administrator with expertise in modern web technologies, 
          cloud infrastructure, and DevOps practices. Passionate about creating efficient, scalable solutions 
          and maintaining robust system architectures. Skilled in React, TypeScript, Next.js, and various 
          cloud platforms including AWS and Azure.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>React.js & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS & Styled Components</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">System Administration</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Linux/Unix Systems</li>
              <li>Docker & Kubernetes</li>
              <li>AWS & Azure Cloud Services</li>
              <li>Network Administration</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">Frontend Developer</h3>
            <p className="text-gray-600">Company Name • 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developed responsive web applications using React and TypeScript</li>
              <li>Implemented modern UI/UX designs with Tailwind CSS</li>
              <li>Collaborated with backend teams for API integration</li>
              <li>Optimized application performance and user experience</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">System Administrator</h3>
            <p className="text-gray-600">Previous Company • 2020 - 2022</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Managed Linux servers and network infrastructure</li>
              <li>Implemented containerization with Docker</li>
              <li>Configured monitoring and backup solutions</li>
              <li>Provided technical support and troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <img src="/images/certificates/aws-saa.svg" alt="AWS SAA" className="w-8 h-8" />
            <span className="text-gray-700">AWS Solutions Architect Associate</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/images/certificates/ccna.svg" alt="CCNA" className="w-8 h-8" />
            <span className="text-gray-700">Cisco CCNA</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/images/certificates/docker.svg" alt="Docker" className="w-8 h-8" />
            <span className="text-gray-700">Docker Certified Associate</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/images/certificates/kubernetes.svg" alt="Kubernetes" className="w-8 h-8" />
            <span className="text-gray-700">Kubernetes Administrator</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Projects</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">Frontend Task Manager</h3>
            <p className="text-gray-600 mb-2">Modern task management application with drag-and-drop functionality</p>
            <p className="text-sm text-gray-500">Technologies: React, TypeScript, Tailwind CSS</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">E-commerce Platform</h3>
            <p className="text-gray-600 mb-2">Full-featured online store with modern UI/UX design</p>
            <p className="text-sm text-gray-500">Technologies: Next.js, TypeScript, Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800">Bachelor's Degree in Computer Science</h3>
          <p className="text-gray-600">University Name • 2016 - 2020</p>
          <p className="text-gray-700 mt-1">Specialized in Software Engineering and System Administration</p>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <strong className="text-gray-800">Ukrainian:</strong> Native
          </div>
          <div>
            <strong className="text-gray-800">English:</strong> Professional
          </div>
          <div>
            <strong className="text-gray-800">Russian:</strong> Fluent
          </div>
        </div>
      </div>
    </div>
  );
} 