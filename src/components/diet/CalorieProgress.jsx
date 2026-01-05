import { motion } from "framer-motion";

export default function CalorieProgress({ total, goal }) {
  const percentage = Math.min(
    Math.round((total / goal) * 100),
    100
  );

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">Total Calories</span>
        <span>
          {total} / {goal} kcal
        </span>
      </div>

      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          key={percentage}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full bg-orange-500"
        />
      </div>

      {total >= goal && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-green-600 mt-2"
        >
          🎯 Daily calorie goal reached
        </motion.p>
      )}
    </div>
  );
}
