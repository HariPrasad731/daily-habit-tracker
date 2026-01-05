import { motion } from "framer-motion";

export default function WaterGlass({ filled, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={`relative h-16 w-12 rounded-lg border-2 
        ${filled ? "border-blue-500" : "border-gray-300"}
        flex items-end justify-center overflow-hidden`}
    >
      {/* Water fill */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: filled ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 w-full bg-blue-400"
      />

      {/* Icon */}
      <span className="relative z-10 text-xs text-white font-bold">
        💧
      </span>
    </motion.button>
  );
}
