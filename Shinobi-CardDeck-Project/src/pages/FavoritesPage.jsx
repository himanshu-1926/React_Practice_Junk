import { useContext } from 'react';
import { FavoritesContext } from '../App'; // Importing from App since it's defined there
import CharacterCard from '../components/CharacterCard';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="space-y-10">
      <header className="border-l-4 border-orange-600 pl-6">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">
          My <span className="text-orange-600">Elite Squad</span>
        </h2>
        <p className="text-slate-400 mt-2">Your saved collection of legendary ninjas.</p>
      </header>

      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-slate-800">
          <p className="text-slate-500 mb-6">Your squad is currently empty, sensei.</p>
          <Link to="/" className="bg-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all">
            Recruit Shinobi
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((ninja) => (
            <CharacterCard 
              key={ninja.id} 
              character={ninja} 
              isFavorite={true} 
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;