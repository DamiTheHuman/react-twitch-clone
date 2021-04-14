import React from "react";
import _ from "lodash";
import "./StreamerInfo.css";
import { msToTime, numberFormatter } from "../../../../apis/general";
import PillList from "../../../Common/Pill/PillList";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import UploadIcon from "mdi-react/UploadIcon";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import Loader from "../../../Common/Loader/Loader";
import ChannelInfoAbout from "../../Channel/ChannelInfoContent/ChannelInfoAbout";

/**
 * Renders the stream info for stream sections
 **/
class StreamerInfo extends React.Component {
  state = { uptime: 0, intervalUpdateUptime: null };
  componentDidMount() {
    this.beginTimerLoad();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalUpdateUptime);
  }
  /**
   * Mimics live data by updating the "uptime" every second
   **/
  beginTimerLoad = () => {
    if (!this.state.intervalUpdateUptime && this.props.userStreams) {
      const intervalUpdateUptime = setInterval(() => {
        this.setState({ uptime: this.state.uptime + 1000 }); //increment by a second
      }, 1000);
      this.setState({
        uptime: this.props.userStreams.liveStream.uptime,
        intervalUpdateUptime: intervalUpdateUptime,
      });
    }
  };
  render() {
    if (!this.props.userStreams) {
      return <Loader style="py-8" />;
    }

    return (
      <div className="streamer-info bg-gray-100">
        <div className="stream-details flex flex-row justify-between p-4">
          <div className="flex items-center space-x-2">
            <div>
              <img
                src={`http://localhost:3000/avatars/${this.props.userStreams.avatar}`}
                className={`border-${this.props.userStreams.color}-400 avatar rounded-full border-2 p-0.5`}
                alt="A User"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">
                {this.props.userStreams.liveStream.title}
              </h4>
              <p className="font-semibold text-sm">
                {this.props.userStreams.userName}
              </p>
              <div className="flex space-x-2">
                <a className="text-primary text-sm" href="/#">
                  {this.props.userStreams.liveStream.game}
                </a>
                <div className="pills flex space-x-2">
                  <PillList list={this.props.userStreams.liveStream.tags} />
                </div>
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
                <div>{this.props.userStreams.liveStream.views}</div>
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
        <ChannelInfoAbout userStreams={this.props.userStreams} />
      </div>
    );
  }
}

export default StreamerInfo;
