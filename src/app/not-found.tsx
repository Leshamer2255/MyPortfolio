'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="text-center"
      >
        <div className="mb-8">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mx-auto">
            <circle cx="60" cy="60" r="56" stroke="#3B82F6" strokeWidth="8" fill="#fff" />
            <text x="50%" y="54%" textAnchor="middle" fill="#3B82F6" fontSize="48" fontWeight="bold" dy=".3em">404</text>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Сторінку не знайдено</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Можливо, ви перейшли за неіснуючим посиланням або сторінка була видалена.</p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
          >
            На головну
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
} 