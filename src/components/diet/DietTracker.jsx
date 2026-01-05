import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MealForm from "./MealForm";
import MealList from "./MealList";
import CalorieProgress from "./CalorieProgress";

const STORAGE_KEY = "daily_diet";
const DAILY_CALORIE_GOAL = 2000;

export default function DietTracker() {
  const [meals, setMeals] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meals));
  }, [meals]);

  const addMeal = (meal) => {
    setMeals((prev) => [...prev, meal]);
  };

  const removeMeal = (id) => {
    setMeals((prev) => prev.filter((m) => m.id !== id));
  };

  const totalCalories = meals.reduce(
    (sum, meal) => sum + Number(meal.calories),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl shadow-xl"
    >
      {/* ✅ BACKGROUND IMAGE (THIS WORKS) */}
      <img
        src="/images/diet-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 via-white/85 to-pink-50/90" />

      {/* CONTENT */}
      <div className="relative z-10 p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">🥗 Diet Tracker</h2>
          <p className="text-sm text-gray-600">
            Track your meals and calories for the day
          </p>
        </div>

        <CalorieProgress
          total={totalCalories}
          goal={DAILY_CALORIE_GOAL}
        />

        <MealForm onAdd={addMeal} />

        <MealList meals={meals} onRemove={removeMeal} />
      </div>
    </motion.div>
  );
}
