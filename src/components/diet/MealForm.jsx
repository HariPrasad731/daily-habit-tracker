import { useState } from "react";
import { motion } from "framer-motion";

export default function MealForm({ onAdd }) {
  const [type, setType] = useState("Breakfast");
  const [calories, setCalories] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!calories) return;

    onAdd({
      id: Date.now(),
      type,
      calories,
    });

    setCalories("");
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-3 mb-8"
    >
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400"
      >
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snacks</option>
      </select>

      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400"
      />

      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-orange-500 text-white
                   hover:bg-orange-600 transition"
      >
        Add Meal
      </button>
    </motion.form>
  );
}
