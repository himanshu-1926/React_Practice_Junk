import { Link } from 'react-router-dom';

const CharacterCard = ({ character, isFavorite, onToggleFavorite }) => {
  // Fallback image if the API doesn't provide one
  const imageUrl = character.images?.[0] || 'https://via.placeholder.com/300x400?text=No+Image';

  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:-translate-y-2">
      
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent navigating to details when clicking heart
          onToggleFavorite(character);
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-slate-700 hover:scale-110 transition-transform"
      >
        <svg
          className={`w-5 h-5 ${isFavorite ? 'fill-orange-500 text-orange-500' : 'text-slate-300'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <Link to={`/character/${character.id}`}>
        {/* Image Container */}
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            src={imageUrl}
            alt={character.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 bg-slate-900/90 border-t border-orange-900/30 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
            {character.name}
          </h3>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {character.personal?.notableDetails && (
              <span className="text-[10px] uppercase tracking-widest bg-orange-600/20 text-orange-500 px-2 py-1 rounded">
                {character.personal.notableDetails}
              </span>
            )}
            <span className="text-[10px] uppercase tracking-widest bg-slate-800 text-slate-400 px-2 py-1 rounded">
              ID: #{character.id}
            </span>
          </div>

          <div className="mt-4 flex justify-between items-center text-xs text-slate-500 italic">
            <span>View Intel →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;