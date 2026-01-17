const SkeletonCard = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg animate-pulse">
      
      {/* Shimmering Image Placeholder */}
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        {/* The "Shine" effect */}
        <div className="absolute inset-0 shimmer-overlay"></div>
      </div>

      {/* Content Placeholders */}
      <div className="p-4 bg-slate-950/50">
        {/* Title placeholder */}
        <div className="h-6 bg-slate-800 rounded-md w-3/4 mb-3"></div>
        
        {/* Badges placeholders */}
        <div className="flex gap-2 mb-4">
          <div className="h-4 bg-slate-800 rounded w-16"></div>
          <div className="h-4 bg-slate-800 rounded w-12"></div>
        </div>

        {/* Bottom link placeholder */}
        <div className="h-3 bg-slate-800 rounded w-20"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;