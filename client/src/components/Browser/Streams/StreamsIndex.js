import React from "react";
import { fetchCategories, fetchStream } from "../../../actions/";
import { connect } from "react-redux";
import RecommendedStreamCard from "../../cards/RecommendedStreamCard";
import SuggestedStreams from "./SuggestedStreams";
import SuggestedCategories from "./SuggestedCategories";
import DirectoryCardList from "../Directory/DirectoryCardList";
import { Link } from "react-router-dom";
/**
 * @ref @BrowserVersion
 * The main URL for all the streams displayed
 **/
class StreamsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div className="streams-index py-8 px-8">
        <RecommendedStreamCard stream={this.props.streams[1]} />
        {/*Stream Recommendations*/}
        <SuggestedStreams
          title={
            <h4 className="font-semibold mb-2 text-lg">
              Live channels we think you’ll like
            </h4>
          }
        />
        {/*Directories*/}
        <DirectoryCardList />
        {/*Categories*/}
        <SuggestedCategories
          title={
            <h4 className="font-semibold mb-2 text-lg">
              <Link to="/directory" className="text-primary">
                Categories
              </Link>{" "}
              we think you’ll like
            </h4>
          }
          categories={this.props.categories}
        />
        <SuggestedStreams
          title={
            <h4 className="font-semibold mb-2 text-lg">
              Recommended{" "}
              <Link to="/directory/game/Minecraft" className="text-primary">
                Minecraft
              </Link>{" "}
              channels
            </h4>
          }
          game="Minecraft"
        />
        <SuggestedStreams
          title={
            <h4 className="font-semibold mb-2 text-lg">
              Recommended{" "}
              <Link to="/directory/game/Fortnite" className="text-primary">
                Fortnite
              </Link>{" "}
              channels
            </h4>
          }
          game="Fortnite"
        />
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

export default connect(mapStateToProps, { fetchCategories, fetchStream })(
  StreamsIndex
);
