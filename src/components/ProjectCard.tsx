'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  liveUrl: string;
  onImageClick?: () => void;
}

export default function ProjectCard({ title, description, image, slug, liveUrl, onImageClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-500 card-3d"
      onClick={onImageClick}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col justify-between card-3d-content h-full"
      >
        <div className="relative h-48 overflow-hidden rounded-lg">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover cursor-pointer"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="space-y-4">
          <motion.h3
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            {title}
          </motion.h3>
          <motion.p
            style={{
              transform: "translateZ(25px)",
            }}
            className="text-gray-600 dark:text-gray-300"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          style={{
            transform: "translateZ(50px)",
          }}
          className="flex gap-4"
        >
          <Link
            href={`/projects/${slug}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            View Details
          </Link>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
} 