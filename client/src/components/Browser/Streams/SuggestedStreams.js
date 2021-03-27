import React from "react";
import streams from "../../../apis/streams";
import LiveStreamCard from "../../cards/LiveStreamCard";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
class SuggestedStreams extends React.Component {
  state = { showMore: false, streams: [] };
  componentDidMount() {
    this.fetchStreams();
  }
  fetchStreams = async () => {
    var query = "?_expand=user&_sort=views&_order=desc";
    if (this.props.game) {
      query = `?_expand=user&game=${this.props.game}&_sort=views&_order=asc`;
    }
    const response = await streams.get(`/streams/${query}`);
    this.setState({ streams: response.data });
  };
  renderLiveStreams = () => {
    return this.state.streams
      .slice(0, !this.state.showMore ? 3 : 6)
      .map((stream, index) => {
        return (
          <div key={index}>
            <LiveStreamCard stream={stream} />
          </div>
        );
      });
  };
  renderShowMore = () => {
    if (this.state.showMore || this.state.streams.length <= 3) {
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
      return null;
    }
    return (
      <div className="stream-recommendations mb-8">
        {this.props.title}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {this.renderLiveStreams()}
        </div>
        {this.renderShowMore()}
      </div>
    );
  }
}

export default SuggestedStreams;
