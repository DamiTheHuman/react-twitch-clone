import React from "react";
import SearchIcon from "mdi-react/SearchIcon";
/**
 * Renders and manages the main search bar for the application
 */
const SearchBar = ({ onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <div className="w-full search-input bg-white rounded shadow flex bg-gray-100">
        <input
          className="w-full text-sm p-1 py-1.5 bg-gray-200 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <span className="w-auto flex justify-end items-center text-gray-300 border-r-2 px-2">
          <SearchIcon />
        </span>
      </div>
    </form>
  );
};
export default SearchBar;
