import React from "react";
import { fetchCategories } from "../../../actions/";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "mdi-react/SearchIcon";
import LiveStreamCard from "../../cards/LiveStreamCard";
import CategoryCard from "../../cards/CategoryCard";
import DirectoryCardList from "./DirectoryCardList";

class Directory extends React.Component {
  componentDidMount() {
    if (!this.props.loadCategories) {
      this.props.fetchCategories();
    }
  }
  /**
   *Renders the search bar
   **/
  renderSearchBar = () => {
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
   *Loads the necessary directory content
   *This is based on if the user is on the /all url or not
   **/
  renderDirectoryContent = () => {
    if (this.props.loadCategories) {
      var streams = [0, 1, 2, 3, 4, 5];
      const liveStreams = streams.map((stream, index) => {
        return (
          <div key={index}>
            <LiveStreamCard />
          </div>
        );
      });
      return <div class="grid grid-cols-3 gap-4">{liveStreams}</div>;
    } else {
      const categories = this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <CategoryCard category={category} />
          </div>
        );
      });
      return <div class="grid grid-cols-5 gap-4">{categories}</div>;
    }
  };
  /**
   *Render the the remaining steam options if the user is on the /all url
   **/
  renderStreamSortOptions = () => {
    if (this.props.loadCategories) {
      return (
        <React.Fragment>
          <option value="viewers-desc">Viewers (Low to High)</option>
          <option value="recenet">Recently Started</option>
        </React.Fragment>
      );
    }
    return null;
  };
  render() {
    return (
      <div className="streams-directory p-8 relative">
        {/* Title */}
        <div className="mb-8">
          <h2 className="font-bold text-5xl mb-2">Browse</h2>
        </div>
        {/*Directories*/}
        <DirectoryCardList />
        <div className="flex space-x-4 font-semibold text-lg mb-4">
          <Link
            to="/directory"
            className={`${
              !this.props.loadCategories
                ? "border-b-2  border-primary text-primary"
                : ""
            } hover:text-primary pb-1`}
          >
            <p>Categories</p>
          </Link>
          <Link
            to="/directory/all"
            className={`${
              this.props.loadCategories
                ? "border-b-2  border-primary text-primary"
                : ""
            } hover:text-primary pb-1`}
          >
            <p>Live Channels</p>
          </Link>
        </div>
        {/* Search Bar*/}
        <div className="flex justify-between mb-4 font-semibold text-sm">
          <div className="filter">
            <div className="flex space-x-2 items-center">
              <label>Filter</label>
              {this.renderSearchBar()}
            </div>
          </div>
          <div className="sort-by">
            <div class="flex space-x-2 items-center">
              <label>Sort By</label>
              <select
                name="sort-by"
                className="border px-2 py-1 rounded bg-gray-200 text-gray-900 font-semibold"
              >
                <option value="recommended">Recommended For You</option>
                <option value="viewers-desc">Viewers (High to Low)</option>
                {this.renderStreamSortOptions()}
              </select>
            </div>
          </div>
        </div>
        {/* Categories*/}
        {this.renderDirectoryContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) };
};

export default connect(mapStateToProps, { fetchCategories })(Directory);
