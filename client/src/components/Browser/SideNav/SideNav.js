import React from "react";
import "./SideNav.css";
import { fetchStreams } from "../../../actions/index";
import { connect } from "react-redux";
import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";
import ArrowCollapseRightIcon from "mdi-react/ArrowCollapseRightIcon";
import VideoOutlineIcon from "mdi-react/VideoOutlineIcon";
import RecommendedChannel from "../../Common/RecommendedChannel/RecommendedChannel";
import Loader from "../../Common/Loader/Loader";
/**
 * @ref @BrowserVersion
 * The side navigation for the website
 */
class SideNav extends React.Component {
  state = { collapse: false };
  componentDidMount() {
    const query = "?_expand=user&_sort=views&_order=desc&live=true";
    this.props.fetchStreams(query);
  }
  /**
   * Handles the event and render active stream
   */
  renderActiveStreams = () => {
    if (this.props.streams.length === 0) {
      return <Loader style="py-8" />;
    }
    if (this.props.streams) {
      return this.props.streams.map((stream, index) => {
        return (
          <RecommendedChannel
            stream={stream}
            key={index}
            collapse={this.state.collapse}
          />
        );
      });
    }
  };
  renderCollapseButton = () => {
    if (this.state.collapse) {
      return (
        <button
          onClick={() => {
            this.setState({ collapse: false });
          }}
          className="rounded px-1.5 py-2 hover:bg-gray-200"
        >
          <ArrowCollapseRightIcon size={16} />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.setState({ collapse: true });
          }}
          className="px-1.5 py-2 hover:bg-gray-200 rounded"
        >
          <ArrowCollapseLeftIcon size={16} />
        </button>
      );
    }
  };
  render() {
    const collapse = this.state.collapse;
    return (
      <div
        id="sideNav"
        className={`${
          collapse ? "w-14 space-y-2" : "xl:w-60 w-14"
        } text-sm sticky content-height flex flex-col bg-gray-100 py-4 overflow-y-auto`}
      >
        <div className="xl:flex hidden justify-center items-center px-2 mb-2">
          <div
            className={`${
              collapse ? "hidden" : "xl:flex hidden"
            } text-xs font  -semibold flex-grow`}
          >
            RECOMMENDED CHANNELS
          </div>
          {this.renderCollapseButton()}
        </div>
        <div
          className={`${
            collapse ? "xl:flex hidden" : "flex xl:hidden"
          } justify-center px-2 mb-2 w-full force-mobile-display`}
        >
          <VideoOutlineIcon size={24} />
        </div>
        <div
          className={`flex flex-col ${
            collapse ? "space-y-1" : "space-y-1 xl:space-y-0"
          }`}
        >
          {/* Render Active Streams*/}
          {this.renderActiveStreams()}
        </div>

        {/* Join the Twitch Community*/}
        <div className={`${collapse ? "hidden" : "xl:flex hidden"} px-2 mt-4`}>
          <div className="bg-white px-4 py-6 rounded">
            <h4 className="text-xl mb-2 font-semibold">
              Join the <span className="text-primary">Twitch</span> Community
            </h4>
            <p className="mb-2">Discover the best live streams anywhere.</p>
            <button className="text-sm bg-primary text-white rounded px-2 py-1.5 font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(SideNav);
