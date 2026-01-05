import { SLEEP_QUALITY_OPTIONS } from "./sleep.constants";

export default function SleepIndicator({ quality }) {
  const option = SLEEP_QUALITY_OPTIONS.find((q) => q.value === quality);

  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${option.color}`} />
      <span className="capitalize text-sm font-medium">
        {option.label} Sleep
      </span>
    </div>
  );
}
