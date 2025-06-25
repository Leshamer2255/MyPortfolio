import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  image: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ image, alt, onClose }: ImageLightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative max-w-3xl w-full mx-4"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={image}
            alt={alt || ''}
            className="w-full h-auto rounded-xl shadow-2xl object-contain bg-black"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 