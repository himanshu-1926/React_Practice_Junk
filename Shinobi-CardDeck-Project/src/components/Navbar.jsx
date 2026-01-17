import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function for active link styling
  const navLinkStyles = ({ isActive }) => 
    `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500 font-bold' : 'text-slate-300'}`;

  return (
    <nav className="bg-slate-900 border-b border-orange-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,88,12,0.5)]">
            <span className="text-white font-black text-xl">渦</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            Shinobi<span className="text-orange-600">Deck</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 uppercase text-sm tracking-widest font-semibold">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/favorites" className={navLinkStyles}>My Squad</NavLink>
          <NavLink to="/login" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-all">
            Login
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-orange-900/20 px-4 py-6 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyles}>Home</NavLink>
          <NavLink to="/favorites" onClick={() => setIsOpen(false)} className={navLinkStyles}>My Squad</NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)} className="text-orange-500 font-bold">Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;