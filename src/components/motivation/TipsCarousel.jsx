import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HEALTH_TIPS } from "./motivation.constants";

export default function TipsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HEALTH_TIPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">
        💡 Health Tips
      </h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-700"
        >
          {HEALTH_TIPS[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
