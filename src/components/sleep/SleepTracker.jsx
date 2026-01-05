import { useEffect, useState } from "react";
import SleepForm from "./SleepForm";
import SleepIndicator from "./SleepIndicator";
import { SLEEP_STORAGE_KEY } from "./sleep.constants";

export default function SleepTracker() {
  const [sleep, setSleep] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(SLEEP_STORAGE_KEY);
    if (stored) {
      setSleep(JSON.parse(stored));
    }
  }, []);

  const saveSleep = (data) => {
    setSleep(data);
    localStorage.setItem(SLEEP_STORAGE_KEY, JSON.stringify(data));
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg space-y-6">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          😴 Sleep Tracker
        </h2>
        <p className="text-sm text-gray-600">
          Track your sleep hours and quality
        </p>
      </div>

      <SleepForm onSave={saveSleep} />

      {sleep && (
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Last recorded</p>
            <p className="text-lg font-semibold">{sleep.hours} hours</p>
          </div>

          <SleepIndicator quality={sleep.quality} />
        </div>
      )}

      {!sleep && (
        <p className="text-sm text-gray-500">
          No sleep data added yet. Start tracking today 🌙
        </p>
      )}
    </div>
  );
}
