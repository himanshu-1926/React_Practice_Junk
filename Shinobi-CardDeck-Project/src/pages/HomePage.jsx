import { useState, useEffect, useContext } from 'react'; // Added useContext
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import SkeletonCard from '../components/SkeletonCard';
import SearchBar from '../components/SearchBar';
import { FavoritesContext } from '../App'; // Added Context Import

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  // Consume the favorites state and toggle function from App.jsx
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters?page=${page}&limit=20`);
        setCharacters(prev => page === 1 ? response.data.characters : [...prev, ...response.data.characters]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Shinobi data:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-3xl border border-slate-800 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
          Shinobi <span className="text-orange-600">Database</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          Search and collect your favorite ninjas from the Five Great Shinobi Nations.
        </p>
      </section>

      {/* Search Bar Component */}
      <div className="sticky top-24 z-40 py-2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && characters.length === 0 ? (
          Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          filteredCharacters.map((ninja) => (
            <CharacterCard 
              key={ninja.id} 
              character={ninja} 
              // NOW CONNECTED:
              isFavorite={favorites.some(fav => fav.id === ninja.id)} 
              onToggleFavorite={toggleFavorite} 
            />
          ))
        )}
      </div>

      {/* Empty State */}
      {!loading && filteredCharacters.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-xl italic">No Shinobi found with that name...</p>
        </div>
      )}

      {/* Load More Button */}
      {!loading && searchTerm === "" && (
        <div className="flex justify-center pb-12">
          <button 
            onClick={() => setPage(prev => prev + 1)}
            className="bg-slate-800 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all border border-slate-700 hover:border-orange-400 shadow-lg"
          >
            Summon More Ninjas
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;