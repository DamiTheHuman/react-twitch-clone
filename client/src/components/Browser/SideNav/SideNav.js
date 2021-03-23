import React from "react";
import "./SideNav.css";
import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";
import ArrowCollapseRightIcon from "mdi-react/ArrowCollapseRightIcon";
import VideoOutlineIcon from "mdi-react/VideoOutlineIcon";
import RecommendedChannel from "../../common/RecommendedChannel";
class SideNav extends React.Component {
  state = {
    collapse: false,
    activeStreams: Array(10).fill({
      user: "HeadlessCoder",
      game: "React",
      views: "196K",
    }),
  };
  renderActiveStreams = () => {
    return this.state.activeStreams.map((stream, index) => {
      return (
        <RecommendedChannel
          stream={stream}
          key={index}
          collapse={this.state.collapse}
        />
      );
    });
  };
  renderCollapseButton = () => {
    if (this.state.collapse) {
      return (
        <button
          onClick={() => {
            this.setState({ collapse: false });
          }}
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
          collapse ? "w-12 space-y-2" : "xl:w-60 w-12"
        } text-sm sticky flex flex-col content-height bg-gray-100 py-4 overflow-y-auto`}
      >
        <div className="xl:flex hidden justify-center items-center px-2 mb-2">
          <div
            className={`${
              collapse ? "hidden" : "xl:flex hidden"
            } text-xs font-semibold flex-grow`}
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
          className={`${
            collapse ? "space-y-3" : "space-y-3 xl:space-y-0"
          } flex flex-col justify-center items-center`}
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
export default SideNav;
