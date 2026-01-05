import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WaterGlass from "./WaterGlass";
import {
  WATER_GOAL,
  WATER_STORAGE_KEY,
} from "./water.constants";

export default function WaterTracker() {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem(WATER_STORAGE_KEY);
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem(WATER_STORAGE_KEY, count);
  }, [count]);

  const handleGlassClick = (index) => {
    setCount(index + 1);
  };

  const completed = count >= WATER_GOAL;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl p-6 shadow-xl
                 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      <h2 className="text-2xl font-bold mb-1">🚰 Water Intake</h2>
      <p className="text-sm text-gray-600 mb-4">
        Track your daily water consumption
      </p>

      {/* Progress text */}
      <div className="mb-4 font-semibold text-blue-600">
        {count} / {WATER_GOAL} glasses
      </div>

      {/* Glasses */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Array.from({ length: WATER_GOAL }).map((_, index) => (
          <WaterGlass
            key={index}
            filled={index < count}
            onClick={() => handleGlassClick(index)}
          />
        ))}
      </div>

      {/* Completion animation */}
      {completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl bg-blue-500 text-white p-4 text-center"
        >
          🎉 Awesome! You reached your daily water goal!
        </motion.div>
      )}
    </motion.div>
  );
}
