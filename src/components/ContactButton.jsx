import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      {/* Glow Ring (only on hover) */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -inset-2 rounded-full
            border-2 border-primary
            shadow-[0_0_25px_rgba(30,188,99,0.6)]
          "
        />
      )}

      {/* Button */}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          relative z-10
          px-8 py-3 rounded-full
          bg-background
          text-primary font-semibold
          border border-primary/30
          backdrop-blur-md
          transition-all duration-300
        "
      >
        Contact Me
      </button>
    </motion.div>
  );
}