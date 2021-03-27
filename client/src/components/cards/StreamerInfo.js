import React from "react";
import _ from "lodash";
import { fetchStream } from "../../actions/";
import { connect } from "react-redux";
import { msToTime, numberFormatter } from "../../apis/general";
import Pill from "../common/Pill";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import UploadIcon from "mdi-react/UploadIcon";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
class StreamerInfo extends React.Component {
  state = { uptime: 0, intervalUpdateUptime: null };
  componentDidMount() {
    this.beginTimerLoad();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id != this.props.id) {
      this.setState({ uptime: this.props.stream.uptime });
      return;
    }
    this.beginTimerLoad();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalUpdateUptime);
  }
  beginTimerLoad = () => {
    if (!this.state.intervalUpdateUptime && this.props.stream) {
      const intervalUpdateUptime = setInterval(() => {
        this.setState({ uptime: (this.state.uptime += 1000) }); //increment by a second
      }, 1000);
      this.setState({
        uptime: this.props.stream.uptime,
        intervalUpdateUptime: intervalUpdateUptime,
      });
    }
  };
  render() {
    if (!this.props.stream) {
      return null;
    }

    const renderPills = this.props.stream.tags.map((tag) => {
      return (
        <React.Fragment key={tag}>
          <Pill content={tag} />
        </React.Fragment>
      );
    });
    return (
      <div className="bg-gray-100">
        <div className="flex flex-row justify-between p-4">
          <div className="flex items-center space-x-2">
            <div>
              <img
                src="http://via.placeholder.com/70"
                className={`border-${this.props.stream.user.color}-400 rounded-full border-2 p-0.5`}
                alt="A User"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">{this.props.stream.title}</h4>
              <p className="font-semibold text-sm">
                {this.props.stream.user.userName}
              </p>
              <div className="flex space-x-2">
                <a className="text-primary text-sm" href="/#">
                  {this.props.stream.game}
                </a>
                <div className="pills flex space-x-2">{renderPills}</div>
              </div>
            </div>
          </div>
          {/* Stream data*/}
          <div className="flex flex-col justify-end space-y-2">
            <div className="flex space-x-2 font-semibold text-white">
              <button className="text-sm">
                <div className="flex items-center space-x-1 bg-primary rounded px-2 py-1.5">
                  <HeartOutlineIcon size={16} />
                  <p>Follow</p>
                </div>
              </button>
              <button className="text-sm text-black font-semibold">
                <div className="flex items-center space-x-1 bg-secondary rounded px-2 py-1.5">
                  <StarOutlineIcon size={16} />
                  <p>Subscribe</p>
                </div>
              </button>
            </div>
            <div className="flex justify-end space-x-2 text-sm items-center">
              <div className="flex space-x-1 font-semibold items-center text-red-800">
                <div>
                  <AccountOutlineIcon />
                </div>
                <div>{this.props.stream.views}</div>
              </div>
              <div>{msToTime(this.state.uptime)}</div>
              <div className="p-1 rounded hover:bg-gray-200">
                <UploadIcon />
              </div>
              <button className="p-1 rounded hover:bg-gray-200">
                <DotsVerticalIcon />
              </button>
            </div>
          </div>
        </div>
        {/* Streamer About*/}
        <div className="flex flex-col px-4 mb-4">
          <div className="p-4 bg-white rounded">
            <div className="flex items-center space-x-8">
              <div className="flex flex-col space-y-2">
                <img
                  src="http://via.placeholder.com/96"
                  className="rounded-full"
                  alt="A User"
                />
                <p className="text-sm text-center flex-grow">
                  {" "}
                  {numberFormatter(this.props.stream.user.followers)} Followers
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  About {this.props.stream.user.userName}
                </h3>
                <p className="text-sm">
                  We don't know much about them, but we're sure
                  {" " + this.props.stream.user.userName} is great
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //Find the stream from the streams reducer
  const stream = _.find(state.streams, function (stream) {
    return stream.id === parseInt(ownProps.id);
  });
  return {
    stream: stream,
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamerInfo);
