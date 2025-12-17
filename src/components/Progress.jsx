import React from "react";

const Progress = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <p className="text-gray-400 text-sm mb-4">Impressions</p>

      <div className="space-y-4">
        {/* Item 1 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Solutions</span>
            <span>100%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value="100"
            max="100"
          />
        </div>

        {/* Item 2 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>UI / UX</span>
            <span>90%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value="90"
            max="100"
          />
        </div>

        {/* Item 3 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Explore</span>
            <span>72%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value="72"
            max="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
