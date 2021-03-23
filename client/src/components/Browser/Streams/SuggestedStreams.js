import React from "react";
import LiveStreamCard from "../../cards/LiveStreamCard";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
class SuggestedStreams extends React.Component {
  state = { showMore: false };
  renderLiveStreams = () => {
    return this.props.streams
      .slice(0, !this.state.showMore ? 3 : 6)
      .map((stream, index) => {
        return (
          <div className="w-max" key={index}>
            <LiveStreamCard />
          </div>
        );
      });
  };
  renderShowMore = () => {
    if (this.state.showMore) {
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
    return (
      <div className="stream-recommendations mb-8">
        {this.props.title}
        <div className="grid grid-cols-3 gap-8 mb-2">
          {this.renderLiveStreams()}
        </div>
        {this.renderShowMore()}
      </div>
    );
  }
}

export default SuggestedStreams;
