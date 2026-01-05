import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import ProgressRing from "../components/dashboard/ProgressRing";
import StreakCounter from "../components/streak/StreakCounter";
import WeeklyHistory from "../components/streak/WeeklyHistory";
import HabitList from "../components/habits/HabitList";
import DietTracker from "../components/diet/DietTracker";
import WorkoutTracker from "../components/workout/WorkoutTracker";
import WaterTracker from "../components/water/WaterTracker";
import SleepTracker from "../components/sleep/SleepTracker";
import DailyQuote from "../components/motivation/DailyQuote";
import TipsCarousel from "../components/motivation/TipsCarousel";
import { HABITS_STORAGE_KEY } from "../components/habits/habits.constants";

/* 🔹 Motion presets */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Dashboard() {
  const [totalHabits, setTotalHabits] = useState(0);
  const [completedHabits, setCompletedHabits] = useState(0);

  useEffect(() => {
    const updateStats = () => {
      const stored = localStorage.getItem(HABITS_STORAGE_KEY);
      if (!stored) return;

      const habits = JSON.parse(stored);
      setTotalHabits(habits.length);
      setCompletedHabits(habits.filter((h) => h.completed).length);
    };

    updateStats();
    const interval = setInterval(updateStats, 300);
    return () => clearInterval(interval);
  }, []);

  const progress =
    totalHabits === 0
      ? 0
      : Math.round((completedHabits / totalHabits) * 100);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10"
    >
      <div className="mx-auto max-w-md md:max-w-4xl lg:max-w-6xl space-y-16">

        {/* 1️⃣ Greeting */}
        <motion.div variants={item}>
          <DashboardHeader />
        </motion.div>

        {/* 2️⃣ Stats */}
        <motion.div variants={item}>
          <DashboardStats completed={completedHabits} total={totalHabits} />
        </motion.div>

        {/* 3️⃣ Progress + Streak */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-6"
          >
            <ProgressRing progress={progress} />
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <StreakCounter completed={completedHabits} />
          </motion.div>
        </motion.div>

        {/* 4️⃣ Daily Habits */}
        <motion.div variants={item}>
          <HabitList />
        </motion.div>

        {/* 5️⃣ Diet */}
        <motion.div variants={item}>
          <DietTracker />
        </motion.div>

        {/* 6️⃣ Workout */}
        <motion.div variants={item}>
          <WorkoutTracker />
        </motion.div>

        {/* 7️⃣ Water */}
        <motion.div variants={item}>
          <WaterTracker />
        </motion.div>

        {/* 8️⃣ Sleep */}
        <motion.div variants={item}>
          <SleepTracker />
        </motion.div>

        {/* 9️⃣ Weekly History */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-6"
        >
          <WeeklyHistory />
        </motion.div>

        {/* 🔟 Motivation */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <DailyQuote />
          <TipsCarousel />
        </motion.div>

      </div>
    </motion.div>
  );
}
