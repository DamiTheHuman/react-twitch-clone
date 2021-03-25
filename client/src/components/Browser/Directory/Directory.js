import React from "react";
import { fetchCategories } from "../../../actions/";
import { connect } from "react-redux";
import LiveStreamCard from "../../cards/LiveStreamCard";
import CategoryCard from "../../cards/CategoryCard";
import DirectoryCardList from "./DirectoryCardList";
import DirectoryActions from "./DirectoryActions";
import DirectoryLink from "./DirectoryLink";

class Directory extends React.Component {
  componentDidMount() {
    if (!this.props.loadCategories) {
      this.props.fetchCategories();
    }
  }

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
  return { categories: Object.values(state.categories) };
};

export default connect(mapStateToProps, { fetchCategories })(Directory);
