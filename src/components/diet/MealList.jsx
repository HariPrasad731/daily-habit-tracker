import { motion, AnimatePresence } from "framer-motion";

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export default function MealList({ meals, onRemove }) {
  return (
    <div className="space-y-6">
      {MEAL_TYPES.map((type) => {
        const filtered = meals.filter((m) => m.type === type);

        return (
          <div key={type}>
            <h3 className="text-lg font-semibold mb-2">
              {type}
            </h3>

            {filtered.length === 0 ? (
              <p className="text-sm text-gray-400 mb-3">
                No {type.toLowerCase()} added
              </p>
            ) : (
              <div className="space-y-3">
                <AnimatePresence>
                  {filtered.map((meal) => (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center justify-between p-4 rounded-xl
                                 bg-white shadow-sm hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-medium">
                          {meal.calories} kcal
                        </p>
                      </div>

                      <button
                        onClick={() => onRemove(meal.id)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
