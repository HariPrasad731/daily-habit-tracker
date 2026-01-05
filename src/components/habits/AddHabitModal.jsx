import { motion } from "framer-motion";

export default function AddHabitModal({
  isOpen,
  onClose,
  onAdd,
  value,
  setValue,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl"
      >
        <h3 className="text-lg font-bold mb-4">
          Add New Habit
        </h3>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Habit name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </motion.div>
    </div>
  );
}
