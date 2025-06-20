'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: 'aws' | 'linux' | 'security' | 'devops' | 'networking';
  level: 'beginner' | 'intermediate' | 'advanced';
  validity: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: 'aws-saa',
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Сертифікація підтверджує знання проектування розподілених систем на AWS, включаючи високую доступність, масштабованість та безпеку.',
    image: '/images/certificates/aws-saa.svg',
    category: 'aws',
    level: 'intermediate',
    validity: '3 роки',
    skills: ['EC2', 'S3', 'VPC', 'RDS', 'Lambda', 'CloudFormation']
  },
  {
    id: 'linux-lpic1',
    name: 'LPIC-1: Linux Administrator',
    issuer: 'Linux Professional Institute',
    date: '2023',
    description: 'Сертифікація підтверджує базові знання адміністрування Linux систем, включаючи файлові системи, мережі та безпеку.',
    image: '/images/certificates/lpic1.svg',
    category: 'linux',
    level: 'intermediate',
    validity: '5 років',
    skills: ['Bash', 'File Systems', 'Networking', 'Security', 'Package Management']
  },
  {
    id: 'comptia-security',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    description: 'Сертифікація підтверджує знання основ кібербезпеки, включаючи мережеву безпеку, криптографію та управління інцидентами.',
    image: '/images/certificates/comptia-security.svg',
    category: 'security',
    level: 'intermediate',
    validity: '3 роки',
    skills: ['Network Security', 'Cryptography', 'Risk Management', 'Incident Response']
  },
  {
    id: 'docker-certified',
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2024',
    description: 'Сертифікація підтверджує експертизу в роботі з Docker контейнерами, включаючи створення, розгортання та управління.',
    image: '/images/certificates/docker.svg',
    category: 'devops',
    level: 'intermediate',
    validity: '2 роки',
    skills: ['Docker', 'Containers', 'Docker Compose', 'Registry', 'Security']
  },
  {
    id: 'ccna',
    name: 'Cisco CCNA',
    issuer: 'Cisco Systems',
    date: '2023',
    description: 'Сертифікація підтверджує знання мережевих технологій, включаючи маршрутизацію, комутацію та безпеку мереж.',
    image: '/images/certificates/ccna.svg',
    category: 'networking',
    level: 'intermediate',
    validity: '3 роки',
    skills: ['Routing', 'Switching', 'Network Security', 'WAN Technologies']
  },
  {
    id: 'kubernetes-cka',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024',
    description: 'Сертифікація підтверджує експертизу в адмініструванні Kubernetes кластерів та управлінні контейнеризованими додатками.',
    image: '/images/certificates/kubernetes.svg',
    category: 'devops',
    level: 'advanced',
    validity: '3 роки',
    skills: ['Kubernetes', 'Container Orchestration', 'Cluster Management', 'Security']
  }
];

const categoryColors = {
  aws: 'from-orange-500 to-orange-600',
  linux: 'from-green-500 to-green-600',
  security: 'from-red-500 to-red-600',
  devops: 'from-blue-500 to-blue-600',
  networking: 'from-purple-500 to-purple-600'
};

const levelColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
};

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'Всі сертифікати', count: certificates.length },
    { id: 'aws', name: 'AWS', count: certificates.filter(c => c.category === 'aws').length },
    { id: 'linux', name: 'Linux', count: certificates.filter(c => c.category === 'linux').length },
    { id: 'security', name: 'Безпека', count: certificates.filter(c => c.category === 'security').length },
    { id: 'devops', name: 'DevOps', count: certificates.filter(c => c.category === 'devops').length },
    { id: 'networking', name: 'Мережі', count: certificates.filter(c => c.category === 'networking').length }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Професійні Сертифікати
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Header */}
              <div className={`h-32 bg-gradient-to-r ${categoryColors[certificate.category]} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[certificate.level]}`}>
                    {certificate.level === 'beginner' && 'Початковий'}
                    {certificate.level === 'intermediate' && 'Середній'}
                    {certificate.level === 'advanced' && 'Просунутий'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{certificate.name}</h3>
                  <p className="text-sm opacity-90">{certificate.issuer}</p>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Отримано: {certificate.date}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Дійсний: {certificate.validity}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {certificate.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{certificate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-r ${categoryColors[selectedCertificate.category]} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedCertificate.name}</h2>
                  <p className="text-lg opacity-90">{selectedCertificate.issuer}</p>
                </div>
                {/* Certificate Image */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    width={48}
                    height={48}
                    className="rounded"
                  />
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Дата отримання</span>
                    <p className="font-medium">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Термін дії</span>
                    <p className="font-medium">{selectedCertificate.validity}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Опис сертифікації</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedCertificate.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Навички та технології</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Завантажити резюме (PDF)</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
} 