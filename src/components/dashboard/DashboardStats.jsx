import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function AnimatedNumber({ value, className }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, motionValue]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
}

export default function DashboardStats({ completed, total }) {
  const remaining = total - completed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {/* Completed */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl p-6 shadow-lg
                   bg-gradient-to-br from-green-200 via-green-100 to-white"
      >
        <p className="text-sm text-gray-700">
          Completed
        </p>

        <AnimatedNumber
          value={completed}
          className="text-4xl font-extrabold text-green-700"
        />
      </motion.div>

      {/* Remaining */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl p-6 shadow-lg
                   bg-gradient-to-br from-yellow-200 via-yellow-100 to-white"
      >
        <p className="text-sm text-gray-700">
          Remaining
        </p>

        <AnimatedNumber
          value={remaining}
          className="text-4xl font-extrabold text-yellow-700"
        />
      </motion.div>
    </motion.div>
  );
}
