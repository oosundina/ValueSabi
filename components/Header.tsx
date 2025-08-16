
import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface HeaderProps {
  onSearch: (query: string) => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onLogoClick }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center cursor-pointer"
            onClick={onLogoClick}
          >
            <span className="text-3xl font-extrabold text-[#00B074]">Value</span>
            <span className="text-3xl font-extrabold text-zinc-800">Sabi</span>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a product (e.g., 'Samsung A54')"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B074] transition duration-200"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-[#00B074]">
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <button className="bg-transparent text-zinc-800 font-semibold py-2 px-6 border-2 border-transparent rounded-full hover:border-[#00B074] transition duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
