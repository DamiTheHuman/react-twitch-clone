import React from "react";
import { contentAmountInSpace } from "../../../apis/general";
import streams from "../../../apis/streams";
import LiveStreamCard from "../../Cards/LiveStreamCard/LiveStreamCard";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import Loader from "../../Common/Loader/Loader";

/**
 * @ref @BrowserVersion
 * Suggested streams displayed for the user on the streams index
 */
class SuggestedStreams extends React.Component {
  state = { showMore: false, streams: [], contentLimit: 3 };
  componentDidMount() {
    window.addEventListener("resize", this.updateContentWidth);
    this.updateContentWidth();
    this.fetchStreams();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateContentWidth);
  }
  /**
   * Update the content width based on the resolution
   */
  updateContentWidth = () => {
    this.width = document.getElementById("main-content").offsetWidth;
    this.setState({ contentLimit: contentAmountInSpace(this.width, 300) });
  };

  /**
   * Fetch a list of streams relevent to the suggested stream set
   */
  fetchStreams = async () => {
    var query = "?_expand=user&_sort=views&_order=desc&live=true";
    if (this.props.game) {
      query = `?_expand=user&game=${this.props.game}&_sort=views&_order=asc&live=true`;
    }
    const response = await streams.get(`/streams/${query}`);
    this.setState({ streams: response.data });
  };
  /**
   * Render the current live streams
   */
  renderLiveStreams = () => {
    return this.state.streams
      .slice(
        0,
        !this.state.showMore
          ? this.state.contentLimit
          : this.state.contentLimit * 2
      )
      .map((stream, index) => {
        return (
          <div key={index}>
            <LiveStreamCard stream={stream} />
          </div>
        );
      });
  };
  /**
   * Renders the show more button if the button has not been clicked and there is enough content
   */
  renderShowMoreButton = () => {
    if (
      this.state.showMore ||
      this.state.streams.length <= this.state.contentLimit
    ) {
      return null;
    }
    return (
      <div className="flex items-center">
        <div className="flex-grow bg-gray-200 h-0.5"></div>
        <button
          className="px-4 flex text-primary text-sm font-semibold items-center"
          onClick={() => {
            this.setState({ showMore: true });
          }}
        >
          <div>Show More</div>
          <ChevronDownIcon />
        </button>
        <div className="flex-grow bg-gray-200 h-0.5"></div>
      </div>
    );
  };
  render() {
    if (!this.state.streams) {
      return <Loader extraStyle={"py-8"} />;
    }
    return (
      <div className="relative stream-recommendations mb-8">
        {this.props.title}
        <div
          className={`grid grid-cols-${this.state.contentLimit} space-x-2 mb-2`}
        >
          {this.renderLiveStreams()}
        </div>
        {this.renderShowMoreButton()}
      </div>
    );
  }
}

export default SuggestedStreams;
