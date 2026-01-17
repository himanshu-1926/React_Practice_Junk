const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-xl mx-auto group">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-slate-500 group-focus-within:text-orange-500 transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-500 transition-all shadow-xl"
        placeholder="Enter Shinobi name (e.g. Kakashi, Itachi...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear Button (only shows when typing) */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-orange-500"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;