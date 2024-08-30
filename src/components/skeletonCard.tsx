import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-6 max-w-sm w-full mx-auto bg-gray-700 shadow-lg rounded-lg space-y-4 animate-pulse">
      <div className="h-48 bg-gray-600 rounded-lg mb-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-gray-400 text-xl font-semibold">Coming Soon!</h2>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-5 bg-gray-600 rounded w-4/5"></div>
        <div className="h-5 bg-gray-600 rounded w-3/4"></div>
        <div className="h-5 bg-gray-600 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
