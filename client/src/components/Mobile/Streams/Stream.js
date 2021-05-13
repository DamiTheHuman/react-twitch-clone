import React from "react";
import StreamChat from "../Chat/StreamChat/StreamChat";
import { fetchUserStream } from "../../../actions/";
import { connect } from "react-redux";
import Loader from "../../Common/Loader/Loader";
/**
 * @ref @MobileVersion
 * A live stream componenet displayed to the user
 */
class Stream extends React.Component {
  componentDidMount() {
    const userName = this.props.match.params.id;
    this.props.fetchUserStream(userName);
  }
  render() {
    if (!this.props.userStreams && this.props.userStreams !== "") {
      return <Loader extraStyle="py-8" />;
    } else if (this.props.userStreams === "") {
      return (
        <div className="text-center py-32 text-2xl font-bold">
          This streamer does not exist
        </div>
      );
    }
    return (
      <div className="stream flex xl:flex-row flex-col relative">
        <div className="flex-grow bg-white">
          <div className="flex">
            <div className="stream-data w-full">
              <video
                width="960"
                height="600"
                className="w-full mobile-video"
                controls
              />
            </div>
          </div>
        </div>
        <div>
          <StreamChat stream={this.props.userStreams.recentLiveStream} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStreams: state.userStreams.recentLiveStream,
  };
};
export default connect(mapStateToProps, { fetchUserStream })(Stream);
