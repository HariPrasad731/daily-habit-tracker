import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const navCardClass = ({ isActive }) =>
    `
    px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200
    border shadow-sm flex items-center justify-center
    ${
      isActive
        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
        : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:-translate-y-0.5 hover:shadow-md"
    }
  `;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h1 className="text-xl font-bold text-indigo-600 tracking-tight">
            Daily Habit Tracker
          </h1>
          <p className="text-sm text-gray-500">{today}</p>
        </motion.div>

        {/* Right nav (card buttons) */}
        <motion.nav
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <NavLink to="/dashboard" className={navCardClass}>
            Dashboard
          </NavLink>

          <NavLink to="/history" className={navCardClass}>
            History
          </NavLink>
        </motion.nav>

      </div>
    </motion.header>
  );
}
