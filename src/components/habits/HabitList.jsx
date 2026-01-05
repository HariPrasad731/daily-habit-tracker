import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HabitItem from "./HabitItem";
import AddHabitModal from "./AddHabitModal";
import {
  DEFAULT_HABITS,
  HABITS_STORAGE_KEY,
} from "./habits.constants";

export default function HabitList() {
  // ✅ Initialize state safely from localStorage
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem(HABITS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_HABITS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState("");

  // ✅ Persist habits
  useEffect(() => {
    localStorage.setItem(
      HABITS_STORAGE_KEY,
      JSON.stringify(habits)
    );
  }, [habits]);

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  const removeHabit = (id) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const addHabit = () => {
    if (!newHabit.trim()) return;

    setHabits((prev) => [
      ...prev,
      {
        id: newHabit.toLowerCase().replace(/\s+/g, "-"),
        name: newHabit,
        completed: false,
      },
    ]);

    setNewHabit("");
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-2xl shadow-xl p-6
                 bg-gradient-to-br from-indigo-50 via-white to-pink-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">
          Daily Habits
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-sm bg-indigo-600
                     text-white rounded-lg shadow
                     hover:bg-indigo-700 transition"
        >
          + Add Habit
        </motion.button>
      </div>

      {/* Habit List */}
      <div className="space-y-3">
        <AnimatePresence>
          {habits.map((habit) => (
            <HabitItem
              key={habit.id}
              habit={habit}
              onToggle={toggleHabit}
              onRemove={removeHabit}
            />
          ))}
        </AnimatePresence>

        {/* Empty state */}
        {habits.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-500 text-center py-6"
          >
            No habits added yet. Start with one small habit 💪
          </motion.p>
        )}
      </div>

      {/* Add Habit Modal */}
      <AddHabitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addHabit}
        value={newHabit}
        setValue={setNewHabit}
      />
    </motion.div>
  );
}
