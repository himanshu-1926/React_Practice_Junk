import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SkeletonCard from '../components/SkeletonCard';

const CharacterDetails = () => {
  const { id } = useParams(); // Grabs the ID from the URL path
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch shinobi intel:", error);
        setLoading(false);
      }
    };

    fetchDetails();
    window.scrollTo(0, 0); // Scroll to top when page opens
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-slate-400 animate-pulse">Accessing Secret Archives...</p>
      </div>
    </div>
  );

  if (!character) return <div className="text-center py-20">Shinobi not found in the Bingo Book.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Village
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Image Section */}
        <div className="relative group">
<div className="absolute inset-0 rounded-2xl border border-orange-600/50 shadow-[0_0_15px_rgba(234,88,12,0.3)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-all duration-700 -z-10"></div>          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
            <img 
              src={character.images?.[0] || 'https://via.placeholder.com/600x800'} 
              alt={character.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Intel Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-black uppercase italic text-white tracking-tighter">
              {character.name}
            </h1>
            <div className="flex gap-3 mt-4">
              {character.personal?.notableDetails && (
                <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-600/30">
                  {character.personal.notableDetails}
                </span>
              )}
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                ID: #{character.id}
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatBox label="Affiliation" value={character.personal?.affiliation || 'Unknown'} />
            <StatBox label="Rank" value={character.rank?.ninjaRank?.['Part II'] || 'Classified'} />
            <StatBox label="Nature Type" value={character.natureType?.[0] || 'N/A'} />
            <StatBox label="Classification" value={character.personal?.classification || 'Shinobi'} />
          </div>

          {/* Jutsu List */}
          {character.jutsu && (
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Mastered Jutsu</h3>
              <div className="flex flex-wrap gap-2">
                {character.jutsu.slice(0, 10).map((j, index) => (
                  <span key={index} className="bg-slate-800/50 text-slate-400 px-3 py-1 rounded-lg text-sm border border-slate-700">
                    {j}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simple helper component for stats
const StatBox = ({ label, value }) => (
  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">{label}</p>
    <p className="text-slate-200 font-semibold">{value}</p>
  </div>
);

export default CharacterDetails;