import { motion } from "framer-motion";

export default function HabitItem({ habit, onToggle, onRemove }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`flex items-center justify-between p-4 rounded-xl
        transition-colors duration-300
        ${
          habit.completed
            ? "bg-green-100"
            : "bg-gradient-to-r from-indigo-50 to-blue-50"
        }`}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <motion.input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          whileTap={{ scale: 0.9 }}
          className="h-5 w-5 accent-indigo-600 cursor-pointer"
        />

        <motion.span
          layout
          initial={false}
          animate={{
            opacity: habit.completed ? 0.6 : 1,
          }}
          transition={{ duration: 0.25 }}
          className={`font-medium transition-all duration-300
            ${
              habit.completed
                ? "line-through text-gray-500"
                : "text-gray-800"
            }`}
        >
          {habit.name}
        </motion.span>
      </div>

      {/* Remove */}
      <motion.button
        onClick={() => onRemove(habit.id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-sm font-medium text-red-500
                   hover:text-red-700 transition"
      >
        Remove
      </motion.button>
    </motion.div>
  );
}
