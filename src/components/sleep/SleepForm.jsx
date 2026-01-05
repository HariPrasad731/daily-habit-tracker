import { useState } from "react";
import { SLEEP_QUALITY_OPTIONS } from "./sleep.constants";

export default function SleepForm({ onSave }) {
  const [hours, setHours] = useState("");
  const [quality, setQuality] = useState("good");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hours) return;

    onSave({
      hours: Number(hours),
      quality,
      date: new Date().toDateString(),
    });

    setHours("");
    setQuality("good");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
    >
      <input
        type="number"
        step="0.5"
        placeholder="Sleep hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {SLEEP_QUALITY_OPTIONS.map((q) => (
          <option key={q.value} value={q.value}>
            {q.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 transition"
      >
        Save Sleep
      </button>
    </form>
  );
}
