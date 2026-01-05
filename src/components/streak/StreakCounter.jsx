import { motion } from "framer-motion";

export default function StreakCounter({ completed }) {
  const streak = completed > 0 ? 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl p-8 shadow-xl text-white
                 bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500"
    >
      {/* ✅ Background image (Vite & Netlify safe) */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/streak-bg.jpg)`,
        }}
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-xs">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold mb-2"
        >
          🔥 {streak} Day Streak
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 0.3 }}
          className="text-sm mb-3"
        >
          Consistency beats intensity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.4 }}
          className="text-xs leading-relaxed"
        >
          Show up every day. Even one small habit keeps the streak alive.
          Miss a day and the streak resets.
        </motion.p>
      </div>
    </motion.div>
  );
}
