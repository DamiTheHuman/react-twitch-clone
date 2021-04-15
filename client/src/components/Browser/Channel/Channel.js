import React from "react";
import { fetchUserStream } from "../../../actions";
import { connect } from "react-redux";
import Stream from "../Streams/Stream";
import Loader from "../../Common/Loader/Loader";
import ChannelInfo from "./ChannelInfo";

/**
 * Renders content pertaining to the active channel
 **/
class Channel extends React.Component {
  state = { uptime: 0, intervalUpdateUptime: null };
  componentDidMount() {
    const userName = this.props.match.params.id;
    this.props.fetchUserStream(userName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const userName = this.props.match.params.id;
      this.props.fetchUserStream(userName);
      return;
    }
  }
  /**
   * Renders content based on whethere the user is currently streaming or not
   */
  renderContent = () => {
    if (this.props.userStreams.liveStream) {
      return <Stream userStreams={this.props.userStreams} />;
    } else {
      return <ChannelInfo userStreams={this.props.userStreams} />;
    }
  };
  render() {
    if (!this.props.userStreams) {
      return <Loader extraStyle="py-8" />;
    }
    return <div className="channel">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userStreams: state.userStreams.recentLiveStream,
  };
};
export default connect(mapStateToProps, { fetchUserStream })(Channel);
