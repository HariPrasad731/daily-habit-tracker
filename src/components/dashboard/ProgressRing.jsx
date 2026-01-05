import { motion } from "framer-motion";

export default function ProgressRing({ progress }) {
  const circumference = 314; // 2πr (r = 50)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl p-8 shadow-xl
                 bg-gradient-to-br from-indigo-50 via-white to-pink-50"
    >
      {/* Decorative background icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png"
        alt=""
        className="absolute bottom-4 right-4 w-32 opacity-10 pointer-events-none"
      />

      {/* Soft glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        {/* Ring */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <svg width="130" height="130">
            {/* Background ring */}
            <circle
              cx="65"
              cy="65"
              r="50"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />

            {/* Progress ring */}
            <motion.circle
              cx="65"
              cy="65"
              r="50"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset:
                  circumference - (circumference * progress) / 100,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage */}
          <motion.span
            key={progress}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center
                       text-2xl font-extrabold text-gray-800"
          >
            {progress}%
          </motion.span>
        </motion.div>

        {/* Text */}
        <h3 className="mt-5 text-lg font-semibold text-gray-800">
          Today’s Progress
        </h3>
        <p className="text-sm text-gray-500">
          Small steps lead to big wins
        </p>
      </div>
    </motion.div>
  );
}
