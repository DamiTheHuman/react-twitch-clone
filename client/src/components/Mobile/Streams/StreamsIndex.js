import React from "react";
import "./StreamsIndex.css";
import { fetchCategories } from "../../../actions/";
import { connect } from "react-redux";
import LiveStreamCard from "../../cards/LiveStreamCard";
import CategoryCard from "../../cards/CategoryCard";
import ScrollableContent from "../../common/ScrollableContent";
/**
 * @ref @MobileVersion
 * The main URL for all the streams displayed
 **/
class StreamsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  /*
   *Render the list of categories retrieved from the server when available
   */
  renderCategories = () => {
    if (!this.props.categories) {
      return <div>Loading</div>;
    }
    return this.props.categories.map((category, index) => {
      return (
        <div key={index} className="index-category">
          <CategoryCard category={category} />
        </div>
      );
    });
  };
  render() {
    var Streams = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const renderLiveStreams = Streams.map((stream, index) => {
      return (
        <div className="w-max" key={index}>
          <LiveStreamCard />
        </div>
      );
    });

    return (
      <div className="streams-index px-2 py-4">
        {/* Title */}
        <div className="title">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">
            Welcome To Twitch!
          </h2>
          <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
            <span>Live Channels </span>
            <span>We Think You'll Like</span>
          </div>
        </div>
        {/* Live Channels the user may like*/}
        <ScrollableContent>{renderLiveStreams}</ScrollableContent>
        <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
          <a href="/#" className="text-primary">
            Categories{" "}
          </a>
          <span>We Think You'll Like</span>
        </div>
        <ScrollableContent>{this.renderCategories()}</ScrollableContent>
        <div className="inline uppercase sm:text-2xl text-sm font-semibold text-secondaryV">
          <span>RECOMMENDED </span>
          <a href="/#" className="text-primary">
            Just Chatting{" "}
          </a>
          <span>Channels</span>
        </div>
        {/* Recommended [Category] Channels */}
        <ScrollableContent>{renderLiveStreams}</ScrollableContent>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) };
};

export default connect(mapStateToProps, { fetchCategories })(StreamsIndex);
