import React from "react";
import { fetchCategories, fetchStreams } from "../../../actions/";
import { connect } from "react-redux";
import { contentAmountInSpace } from "../../../apis/general";
import LiveStreamCard from "../../Cards/LiveStreamCard/LiveStreamCard";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import DirectoryCardList from "./DirectoryCard/DirectoryCardList";
import DirectoryActions from "./DirectoryActions/DirectoryActions";
import DirectoryLink from "./DirectoryLink/DirectoryLink";
/**
 * @ref @BrowserVersion
 * The main directory which displays a categories or streams
 */
class Directory extends React.Component {
  state = { contentLimitCategories: 5, contentLimitStreams: 0 };
  componentDidMount() {
    window.addEventListener("resize", this.updateContentWidth);
    this.updateContentWidth();
    if (!this.props.loadCategories) {
      this.props.fetchCategories();
    } else {
      const query = "?_expand=user&_sort=views&_order=desc";
      this.props.fetchStreams(query);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateContentWidth);
  }
  /**
   * Update the content width based on the resolution
   */
  updateContentWidth = () => {
    this.width = document.getElementById("main-content").offsetWidth;
    this.setState({
      contentLimitCategories: contentAmountInSpace(this.width, 200),
      contentLimitStreams: contentAmountInSpace(this.width, 300),
    });
  };
  /**
   *Loads the necessary directory content
   *This is based on if the user is on the /all url or not
   **/
  renderDirectoryContent = () => {
    if (this.props.streams && this.props.loadCategories) {
      const liveStreams = this.props.streams.map((stream, index) => {
        return (
          <div key={index}>
            <LiveStreamCard stream={stream} />
          </div>
        );
      });
      return (
        <div
          className={`grid grid-cols-${this.state.contentLimitStreams} space-x-2 mb-2`}
        >
          {liveStreams}
        </div>
      );
    } else if (this.props.categories) {
      const categories = this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <CategoryCard category={category} />
          </div>
        );
      });
      return (
        <div
          className={`grid grid-cols-${this.state.contentLimitCategories} space-x-2`}
        >
          {categories}
        </div>
      );
    }
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
          <DirectoryLink to="/directory" active={!this.props.loadCategories}>
            <p>Categories</p>
          </DirectoryLink>
          <DirectoryLink to="/directory/all" active={this.props.loadCategories}>
            <p>Live Channels</p>
          </DirectoryLink>
        </div>
        {/* Search Bar*/}
        <DirectoryActions loadCategories={this.props.loadCategories} />
        {/* Categories*/}
        {this.renderDirectoryContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchCategories, fetchStreams })(
  Directory
);
