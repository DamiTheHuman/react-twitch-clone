import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import Pill from "../../common/Pill";
/**
 * Renders the stream info for stream sections
 **/
class StreamerInfo extends React.Component {
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
        <div className="flex flex-row p-2 ">
          <div className="flex items-center space-x-2 ">
            <div>
              <img
                src="http://via.placeholder.com/50"
                className={`rounded-full`}
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
        <div className="px-2 pills flex space-x-2">{renderPills}</div>
      </div>
    );
  }
}

export default StreamerInfo;
