import { motion } from "framer-motion";

export default function Bubble({
  fact,
  index,
  popped,
  onPop,
}) {
  return (
    <motion.button
      onClick={() => onPop(fact)}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
      }}
      className="relative"
    >
      <motion.div
        animate={
          popped
            ? {
                scale: 0,
                opacity: 0,
                rotate: 180,
              }
            : {}
        }
        transition={{ duration: 0.5 }}
        className="
          w-32 h-32
          rounded-full
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-[0_0_40px_rgba(30,188,99,0.25)]
          flex flex-col
          items-center
          justify-center
          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-primary/10
          before:blur-xl
        "
      >
        <div className=" absolute top-5 left-6 w-10 h-10 rounded-full bg-white/40 blur-md"/>
        <div className="absolute top-8 left-10 w-3 h-3 rounded-full bg-white/70"/>
        <span className="text-3xl">{fact.icon}</span>

        <span className="text-xs mt-2 px-2">{fact.title}</span>
      </motion.div>
    </motion.button>
  );
}