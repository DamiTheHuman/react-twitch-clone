import React from "react";
import SearchIcon from "mdi-react/SearchIcon";
/**
 * @ref @BrowserVersion
 * Manages the search and filtering operations of the streams
 */
const DirectoryActions = ({ loadCategories }) => {
  /**
   *Renders the search bar
   **/
  const renderSearchBar = () => {
    return (
      <div className="w-full search-input bg-white rounded shadow flex bg-gray-100">
        <span className="w-auto flex rounded-l justify-end items-center bg-gray-200 text-gray-800 border-r-2 px-1">
          <SearchIcon />
        </span>
        <input
          className="w-full text-sm p-1 py-1 bg-gray-200 focus:outline-none"
          type="text"
          placeholder="Search Tags"
        />
      </div>
    );
  };
  /**
   *Render the the remaining steam options if the user is on the /all url
   **/
  const renderStreamSortOptions = () => {
    if (loadCategories) {
      return (
        <React.Fragment>
          <option value="viewers-desc">Viewers (Low to High)</option>
          <option value="recenet">Recently Started</option>
        </React.Fragment>
      );
    }
    return null;
  };
  return (
    <div className="directory-action">
      <div className="flex justify-between mb-4 font-semibold text-sm">
        <div className="filter">
          <div className="flex space-x-2 items-center">
            <label>Filter</label>
            {renderSearchBar()}
          </div>
        </div>
        <div className="sort-by">
          <div className="flex space-x-2 items-center">
            <label>Sort By</label>
            <select
              name="sort-by"
              className="border px-2 py-1 rounded bg-gray-200 text-gray-900 font-semibold"
            >
              <option value="recommended">Recommended For You</option>
              <option value="viewers-desc">Viewers (High to Low)</option>
              {renderStreamSortOptions()}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryActions;
