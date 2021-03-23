import React from "react";
import { fetchCategories } from "../../../actions/";
import { connect } from "react-redux";
import RecommendedStreamCard from "../../cards/RecommendedStreamCard";
import SuggestedStreams from "./SuggestedStreams";
import SuggestedCategories from "./SuggestedCategories";
import DirectoryCardList from "../Directory/DirectoryCardList";
/**
 * The main URL for all the streams displayed
 **/
class StreamsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    var streams = [0, 1, 2, 3, 4, 5];
    return (
      <div className="streams-index py-8 px-8">
        <RecommendedStreamCard />
        {/*Stream Recommendations*/}
        <SuggestedStreams
          title={
            <h4 className="font-semibold mb-2 text-lg">
              Live channels we think you’ll like
            </h4>
          }
          streams={streams}
        />
        {/*Directories*/}
        <DirectoryCardList />
        {/*Categories*/}
        <SuggestedCategories
          title={
            <h4 className="font-semibold mb-2 text-lg">
              <a href="/#" className="text-primary">
                Categories
              </a>{" "}
              channels we think you’ll like
            </h4>
          }
          categories={this.props.categories}
        />
        <SuggestedStreams
          title={
            <h4 className="font-semibold mb-2 text-lg">
              Recommended{" "}
              <a href="/#" className="text-primary">
                Minecraft
              </a>{" "}
              channels
            </h4>
          }
          streams={streams}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) };
};

export default connect(mapStateToProps, { fetchCategories })(StreamsIndex);
