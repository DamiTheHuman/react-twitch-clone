import React from "react";
import _ from "lodash";
import StreamChat from "../Chat/StreamChat/StreamChat";
import { fetchStreams } from "../../../actions/";
import { connect } from "react-redux";
/**
 * @ref @MobileVersion
 * A live stream componenet displayed to the user
 */
class Stream extends React.Component {
  componentDidMount() {
    const query = "?_expand=user&_sort=views&_order=desc";
    this.props.fetchStreams(query);
  }
  render() {
    if (!this.props.stream) {
      return null;
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
          <StreamChat stream={this.props.stream} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //Find the stream from the streams reducer
  const stream = _.find(state.streams, function (stream) {
    return stream.user.userName === ownProps.id;
  });
  return {
    stream: stream,
  };
};
export default connect(mapStateToProps, { fetchStreams })(Stream);
