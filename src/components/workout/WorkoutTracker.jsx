import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkoutForm from "./WorkoutForm";
import WorkoutCard from "./WorkoutCard";
import { calculateTotalMinutes } from "./workout.utils";

const STORAGE_KEY = "daily_workouts";

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, workout]);
  };

  const removeWorkout = (id) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  const totalMinutes = calculateTotalMinutes(workouts);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl p-6 shadow-xl
                 bg-gradient-to-br from-indigo-50 via-white to-blue-50"
    >
      <h2 className="text-2xl font-bold mb-1">🏋️ Workout Tracker</h2>
      <p className="text-sm text-gray-600 mb-4">
        Log your workouts and track total active time
      </p>

      <div className="mb-6 text-lg font-semibold text-indigo-600">
        Total Workout Time: {totalMinutes} minutes
      </div>

      <WorkoutForm onAdd={addWorkout} />

      {workouts.length === 0 ? (
        <p className="text-sm text-gray-400">
          No workouts added today
        </p>
      ) : (
        <div className="space-y-4">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={removeWorkout}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
