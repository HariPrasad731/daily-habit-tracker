import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkoutForm({ onAdd }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!type || !duration) return;

    onAdd({
      id: Date.now(),
      type,
      duration,
    });

    setType("");
    setDuration("");
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_140px_auto] gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Workout type (e.g. Cardio, Yoga)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
      />

      <input
        type="number"
        placeholder="Minutes"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
      >
        Add
      </button>
    </motion.form>
  );
}
