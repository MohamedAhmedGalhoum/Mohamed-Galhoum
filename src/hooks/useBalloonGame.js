import { useMemo, useState } from "react";
import { FACTS } from "../constants/facts";

export function useBalloonGame() {
  const [poppedIds, setPoppedIds] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [selectedFact, setSelectedFact] = useState(null);

  const totalPoints = useMemo(
    () => FACTS.reduce((sum, f) => sum + f.points, 0),
    []
  );

  const earnedPoints = useMemo(
    () =>
      FACTS.filter((f) => poppedIds.includes(f.id)).reduce(
        (sum, f) => sum + f.points,
        0
      ),
    [poppedIds]
  );

  const progress = Math.round((earnedPoints / totalPoints) * 100);

  const popBalloon = (fact) => {
    if (poppedIds.includes(fact.id)) return;
    const next = [...poppedIds, fact.id];
    setSelectedFact(fact);
    setPoppedIds(next);
    if (next.length === FACTS.length) setShowDone(true);
  };

  const restartGame = () => {
    setPoppedIds([]);
    setShowDone(false);
    setSelectedFact(null);
  };

  return {
    facts: FACTS,
    poppedIds,
    showDone,
    selectedFact,
    totalPoints,
    earnedPoints,
    progress,
    popBalloon,
    restartGame,
  };
}