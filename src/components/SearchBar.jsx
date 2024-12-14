import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-5 max-w-lg mx-auto w-full">
      <div className="relative">
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or description..."
          className="px-4 py-2 w-full rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
        />
        
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a7 7 0 110 14 7 7 0 010-14zM20 20l-4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
