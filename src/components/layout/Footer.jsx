export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* App Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Daily Habit Tracker
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Build healthy habits step by step. Track your daily routines,
              stay consistent, and improve your lifestyle over time.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Features
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>• Daily Habit Tracking</li>
              <li>• Diet & Calorie Monitoring</li>
              <li>• Workout & Sleep Tracking</li>
              <li>• Streaks & Weekly History</li>
              <li>• Motivation & Tips</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Built With
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>• Hope</li>
              <li>• Love</li>
              <li>• Trust</li>
              
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Daily Habit Tracker. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built for Daily Helath tracking.
          </p>
        </div>

      </div>
    </footer>
  );
}
