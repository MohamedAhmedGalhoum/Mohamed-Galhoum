import React from "react";
import { motion } from "framer-motion";

export default function Balloon({ fact, popped, onPop, index }) {
  const Icon = fact.icon;
  const floatDelay = index * 0.24;

  const shapeClass =
    fact.shape === "heart" ? "balloon-heart" : fact.shape === "star" ? "balloon-star" : fact.shape === "diamond" ? "balloon-diamond" : fact.shape === "teardrop" ? "balloon-teardrop" : "balloon-oval";
  return (
    <motion.button
      type="button"
      onClick={() => !popped && onPop(fact)}
      className={`group relative flex flex-col items-center outline-none ${
        popped ? "cursor-default" : "cursor-pointer"
      }`}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
        transition: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={popped ? {} : { scale: 1.03, y: -6 }}
      whileTap={popped ? {} : { scale: 0.98 }}
    >
      <motion.div
        className={`relative ${shapeClass} flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.3)]`}
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${fact.color} 26%, white), color-mix(in srgb, ${fact.color} 82%, black))`,
          boxShadow: `0 0 0 1px color-mix(in srgb, ${fact.color} 18%, transparent), 0 0 28px color-mix(in srgb, ${fact.color} 18%, transparent), 0 18px 50px rgba(0,0,0,0.34), inset 0 0 26px rgba(255,255,255,0.12)`,
        }}
        animate={popped ? { scale: 0, opacity: 0, y: 16 } : { scale: [1, 1.01, 1], opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="absolute left-[18%] top-[12%] h-[30%] w-[12%] rounded-full bg-white/25 blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.42),transparent_16%),radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.06),transparent_38%)]" />
        <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary/30 transition-all duration-300" />

        <Icon className="relative z-10 mb-6 h-10 w-10 text-[#f5f7f8] drop-shadow-[0_2px_0_rgba(0,0,0,0.18)]" strokeWidth={2.2} />

        <div className="absolute inset-x-0 bottom-10 z-10 px-4 text-center text-[18px] font-extrabold leading-tight text-[#f5f7f8] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
          {fact.title}
        </div>

        <div className="absolute bottom-0 left-1/2 h-6 w-8 -translate-x-1/2 translate-y-[60%] rounded-[50%_50%_28%_28%] bg-black/24" />
      </motion.div>

      <motion.div
        className="mt-4 h-44 w-[2px] bg-[linear-gradient(to_bottom,rgba(180,180,180,0.9),rgba(180,180,180,0.25))]"
        animate={{ height: [176, 182, 176] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      />

      <motion.div
        className="mt-0 rounded-2xl glass px-5 py-3 text-center shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-md"
        animate={popped ? { scale: 0.95, opacity: 0.45 } : { scale: 1, opacity: 1 }}
      >
        <div className="text-lg font-extrabold text-[#78d7cf] glow-text">+{fact.points}</div>
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#8a95a1]">POINTS</div>
      </motion.div>
    </motion.button>
  );
}