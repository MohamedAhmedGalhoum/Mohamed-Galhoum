import { motion } from "framer-motion";

const name = "Mohamed Galhoum";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AnimatedHeadingforMOName() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary drop-shadow-[0_0_12px_rgba(30,188,99,0.35)]"
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}