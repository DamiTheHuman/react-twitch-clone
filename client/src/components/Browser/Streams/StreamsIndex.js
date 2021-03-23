import React from "react";
import { fetchCategories } from "../../../actions/";
import { connect } from "react-redux";
import GamingIcon from "../../../assets/icons/gaming-icon.svg";
import IRLIcon from "../../../assets/icons/irl-icon.svg";
import MusicIcon from "../../../assets/icons/music-icon.svg";
import EsportsIcon from "../../../assets/icons/esports-icon.svg";
import RecommendedStreamCard from "../../cards/RecommendedStreamCard";
import SuggestedStreams from "./SuggestedStreams";
import SuggestedCategories from "./SuggestedCategories";
import DirectoryCard from "../Directory/DirectoryCard";

class StreamsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderDirectoryCard = () => {
    var streams = [
      { title: "games", icon: GamingIcon },
      { title: "irl", icon: IRLIcon },
      { title: "music", icon: MusicIcon },
      { title: "esports", icon: EsportsIcon },
    ];
    return streams.map((directory, index) => {
      return (
        <React.Fragment key={index}>
          <DirectoryCard directory={directory} />
        </React.Fragment>
      );
    });
  };

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
        <div className="grid grid-cols-4 gap-4 mb-8 text-3xl font-semibold text-white">
          {this.renderDirectoryCard()}
        </div>
        {/*Categories*/}
        <SuggestedCategories categories={this.props.categories} />
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
