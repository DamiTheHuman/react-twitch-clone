import React from "react";
import { fetchCategories, fetchStreams } from "../../../actions/";
import { connect } from "react-redux";
import LiveStreamCard from "../../cards/LiveStreamCard";
import CategoryCard from "../../cards/CategoryCard";
import DirectoryCardList from "./DirectoryCardList";
import DirectoryActions from "./DirectoryActions";
import DirectoryLink from "./DirectoryLink";
/**
 * @ref @BrowserVersion
 * The main directory which displays a categories or streams
 */
class Directory extends React.Component {
  componentDidMount() {
    if (!this.props.loadCategories) {
      this.props.fetchCategories();
    } else {
      const query = "?_expand=user&_sort=views&_order=desc";
      this.props.fetchStreams(query);
    }
  }

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
      return <div className="grid grid-cols-3 gap-4">{liveStreams}</div>;
    } else if (this.props.categories) {
      const categories = this.props.categories.map((category, index) => {
        return (
          <div key={index}>
            <CategoryCard category={category} />
          </div>
        );
      });
      return <div className="grid grid-cols-5 gap-4">{categories}</div>;
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
