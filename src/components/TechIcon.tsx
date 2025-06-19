'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TechIconProps {
  name: string;
  icon: string;
  color: string;
}

export default function TechIcon({ name, icon, color }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
        style={{ backgroundColor: color }}
        animate={{
          rotateY: isHovered ? 180 : 0,
          transition: { duration: 0.5 }
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: isHovered ? 0 : 1,
            transition: { duration: 0.3 }
          }}
        >
          <img src={icon} alt={name} className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{
            opacity: isHovered ? 1 : 0,
            rotateY: 180,
            transition: { duration: 0.3 }
          }}
        >
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 