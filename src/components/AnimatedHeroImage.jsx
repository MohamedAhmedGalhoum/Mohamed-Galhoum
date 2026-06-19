import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        {/* Floating animated wrapper */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-full overflow-hidden border-4 border-primary/50 relative"
        >
          {/* Image */}
          <img
            src="src/assets/Hero_Here.jpeg"
            alt="Mohamed Galhoum"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70" />
        </motion.div>

        {/* Glow ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/40"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}