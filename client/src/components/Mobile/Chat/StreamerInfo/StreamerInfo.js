import React from "react";
import "./StreamerInfo.css";
import { Link } from "react-router-dom";
import PillList from "../../../Common/Pill/PillList";
/**
 * Renders the stream info for stream sections
 **/
class StreamerInfo extends React.Component {
  render() {
    if (!this.props.stream) {
      return null;
    }

    return (
      <div className="streamer-info bg-gray-100">
        <div className="stream-details flex flex-row p-2 ">
          <div className="flex items-center space-x-2 ">
            <div>
              <img
                src={`http://localhost:3000/avatars/${this.props.stream.user.avatar}`}
                className="rounded-full avatar"
                alt="A User"
              />
            </div>
            <div className="flex-grow flex flex-col">
              <h4 className="font-semibold">{this.props.stream.title}</h4>
              <p className="font-semibold text-sm">
                {this.props.stream.user.userName}
              </p>
              <div>
                Playing
                <Link
                  className="text-primary text-sm"
                  to={`/directory/game/${this.props.stream.game}`}
                >
                  {" " + this.props.stream.game}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 pills flex space-x-2">
          <PillList list={this.props.stream.tags} />
        </div>
      </div>
    );
  }
}

export default StreamerInfo;
