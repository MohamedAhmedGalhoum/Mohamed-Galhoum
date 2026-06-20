import { motion, AnimatePresence } from "framer-motion";

export default function ParticleExplosion({ trigger }) {
  if (!trigger) return null;

  const particles = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {particles.map((_, i) => {
        const angle = (360 / particles.length) * i;
        const distance = 120;

        return (
          <motion.div
            key={i}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.cos(angle * Math.PI / 180) * distance,
              y: Math.sin(angle * Math.PI / 180) * distance,
              opacity: 0,
              scale: 0,
              rotate: 360,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              absolute left-1/2 top-1/2
              w-2 h-2
              rounded-full
              bg-primary
              shadow-[0_0_15px_rgba(30,188,99,0.8)]
            "
          />
        );
      })}
    </AnimatePresence>
  );
}