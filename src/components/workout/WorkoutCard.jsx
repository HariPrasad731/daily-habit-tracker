import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkoutCard({ workout, onRemove }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-xl bg-white shadow-sm border
                 hover:shadow-md transition"
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div>
          <h4 className="font-semibold text-gray-800">
            {workout.type}
          </h4>
          <p className="text-sm text-gray-500">
            {workout.duration} minutes
          </p>
        </div>

        {/* Arrow indicator */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 text-xl select-none"
        >
          ▼
        </motion.span>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="px-4 pb-4 text-sm text-gray-600"
          >
            <div className="border-t pt-3 space-y-2">
              <p>
                🏋️ You completed <strong>{workout.type}</strong> for{" "}
                <strong>{workout.duration} minutes</strong>.
              </p>

              <button
                onClick={() => onRemove(workout.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove workout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
