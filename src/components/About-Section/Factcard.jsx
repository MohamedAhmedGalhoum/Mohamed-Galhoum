import { motion } from "framer-motion";

export default function FactCard({ fact }) {
  if (!fact) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      className="
        max-w-3xl
        mx-auto
        mt-12
        rounded-3xl
        border border-primary/20
        bg-card/70
        backdrop-blur-xl
        p-8
      "
    >
      <h3 className="text-3xl font-bold text-primary">
        {fact.title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {fact.description}
      </p>

      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <span>Proficiency</span>
          <span>{fact.level}%</span>
        </div>

        <div className="h-4 bg-primary/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${fact.level}%`,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              h-full
              bg-primary
              rounded-full
              shadow-[0_0_20px_rgba(30,188,99,0.8)]
            "
          />
        </div>
      </div>
    </motion.div>
  );
}