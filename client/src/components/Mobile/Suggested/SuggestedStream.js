import React from "react";
import streams from "../../../apis/streams";
import LiveStreamCard from "../../Cards/LiveStreamCard/LiveStreamCard";
import Loader from "../../Common/Loader/Loader";
import ScrollableContent from "../../Common/ScrollableContent/ScrollableContent";
/**
 * @ref @MobileVersion
 * Suggested streams displayed for the user on the streams index
 */
class SuggestedStreams extends React.Component {
  state = { streams: null };
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
    if (!this.state.streams) {
      return (
        <div className="w-full">
          <Loader extraStyle={"py-8"} />
        </div>
      );
    }
    return this.state.streams.map((stream, index) => {
      return (
        <div className="w-max" key={index}>
          <LiveStreamCard stream={stream} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="stream-recommendations">
        {this.props.title}
        <ScrollableContent>{this.renderLiveStreams()}</ScrollableContent>
      </div>
    );
  }
}

export default SuggestedStreams;
