import React from "react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
}

const SkeletonCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  if (title && description && imageUrl && link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 max-w-sm w-full mx-auto bg-gray-700 shadow-lg rounded-lg transform transition-transform hover:scale-105"
      >
        <div className="h-48 bg-gray-600 rounded-lg mb-4 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <h2 className="text-white text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </a>
    );
  }

  // Skeleton fallback
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
