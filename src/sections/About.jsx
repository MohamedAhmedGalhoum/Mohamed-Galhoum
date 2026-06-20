import { useState } from "react";
import { motion } from "framer-motion";

import Bubble from "../components/About-Section/Bubble";
import FactCard from "../components/About-Section/Factcard";
import { facts } from "../components/About-Section/facts";

export const About = () => {
  const [selectedFact, setSelectedFact] = useState(null);
  const [poppedIds, setPoppedIds] = useState([]);

  const handlePop = (fact) => {
    setSelectedFact(fact);

    if (!poppedIds.includes(fact.id)) {
      setPoppedIds((prev) => [...prev, fact.id]);
    }
  };

  return (
    <section
      id="about"
      className="
        min-h-screen
        py-24
        px-6
        flex
        flex-col
        justify-center
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <p className="text-primary uppercase tracking-widest mb-3">
          Get To Know Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="mt-4 text-muted-foreground">
          Pop a bubble to discover a fact about me.
        </p>
      </motion.div>

      <div
        className="
          mt-20
          grid
          grid-cols-2
          md:grid-cols-4
          gap-10
          place-items-center
        "
      >
        {facts.map((fact, index) => (
          <Bubble
            key={fact.id}
            fact={fact}
            index={index}
            popped={poppedIds.includes(fact.id)}
            onPop={handlePop}
          />
        ))}
      </div>

      <FactCard fact={selectedFact} />

      {poppedIds.length === facts.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            mt-12
            text-center
            text-primary
            font-semibold
          "
        >
          🎉 You've discovered all facts about me!
        </motion.div>
      )}
    </section>
  );
};