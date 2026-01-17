import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages - Note: These are in the ./pages folder relative to App.jsx
import HomePage from './pages/HomePage';
import CharacterDetails from './pages/CharacterDetails';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';

// Components - Note: These are in the ./components folder
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Create and export the context so other pages can use it
export const FavoritesContext = createContext();

function App() {
  // Initialize favorites from LocalStorage to persist data on refresh
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('shinobi-squad');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync favorites to LocalStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('shinobi-squad', JSON.stringify(favorites));
  }, [favorites]);

  // Logic to add/remove favorites
  const toggleFavorite = (character) => {
    setFavorites((prev) => {
      const isExist = prev.find((fav) => fav.id === character.id);
      if (isExist) {
        return prev.filter((fav) => fav.id !== character.id);
      }
      return [...prev, character];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500/30">
        <Navbar />
        
        {/* flex-1 ensures this area grows to push the footer down */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;