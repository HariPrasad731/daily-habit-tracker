import { motion } from "framer-motion";
import { STREAK_STORAGE_KEY } from "./streak.constants";
import { getLast7Days } from "./streak.utils";

export default function WeeklyHistory() {
  const stored = JSON.parse(
    localStorage.getItem(STREAK_STORAGE_KEY) || "{}"
  );

  const daysData = stored.days || {};
  const days = getLast7Days();
  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl bg-white p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        📅 Weekly Activity
      </h3>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day, index) => {
          const completed = daysData[day];
          const isToday = day === today;

          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.08 }}
              className={`
                h-14 rounded-xl flex flex-col items-center justify-center
                text-xs font-medium cursor-default
                transition-all duration-200
                ${
                  completed
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-400"
                }
                ${
                  isToday
                    ? "ring-2 ring-indigo-500 ring-offset-2"
                    : ""
                }
              `}
            >
              <span>
                {new Date(day).toLocaleDateString("en-IN", {
                  weekday: "short",
                })}
              </span>

              <span className="text-[11px] mt-0.5">
                {completed ? "✔" : "—"}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
