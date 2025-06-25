import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#3B82F6', '#F59E42', '#10B981', '#F43F5E', '#FBBF24', '#6366F1', '#EC4899', '#22D3EE'];
const CONFETTI_COUNT = 30;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ConfettiEasterEgg({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
            const left = random(5, 95);
            const size = random(12, 28);
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const delay = random(0, 0.5);
            const duration = random(1.8, 2.8);
            return (
              <motion.div
                key={i}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: '100vh', opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay, duration, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  width: size,
                  height: size,
                  borderRadius: '50%',
                  background: color,
                  boxShadow: `0 0 8px ${color}80`,
                  zIndex: 9999,
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 