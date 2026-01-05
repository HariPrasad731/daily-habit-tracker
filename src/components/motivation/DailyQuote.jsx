import { DAILY_QUOTES } from "./motivation.constants";

export default function DailyQuote() {
  const todayIndex =
    new Date().getDate() % DAILY_QUOTES.length;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-2">
        💬 Daily Motivation
      </h3>
      <p className="text-sm opacity-90 leading-relaxed">
        “{DAILY_QUOTES[todayIndex]}”
      </p>
    </div>
  );
}
