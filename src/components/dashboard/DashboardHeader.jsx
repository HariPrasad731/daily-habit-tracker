import { motion } from "framer-motion";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl p-8 shadow-xl
                 bg-gradient-to-r from-indigo-100 via-blue-50 to-pink-100"
    >
      {/* Right-side background image */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=80)",
        }}
      />

      {/* Soft blend overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative flex items-center gap-5">
        <div
          className="h-14 w-14 flex items-center justify-center rounded-full
                     bg-indigo-500 text-white text-2xl shadow-md"
        >
          🧘
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            Good Day <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-gray-600">{today}</p>
          <p className="mt-1 text-sm text-gray-500 max-w-xl">
            Track your habits, stay consistent, and grow every day.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
