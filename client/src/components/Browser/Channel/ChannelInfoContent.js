import React from "react";
import { numberFormatter } from "../../../apis/general";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
class ChannelInfoContent extends React.Component {
  state = { link: 0 };
  renderChannelLinks = () => {
    const channelLinks = ["Home", "About", "Schedule", "Videos", "Chart"];
    const renderLinks = channelLinks.map((link, index) => {
      return (
        <button
          className={`${
            this.state.link === index
              ? "border-b-2  border-primary text-primary"
              : ""
          } hover:text-primary pb-1 font-semibold`}
          onClick={() => {
            this.setState({ link: index });
          }}
        >
          <p>{link}</p>
        </button>
      );
    });
    return (
      <div className="flex space-x-4 text-lg font-semibold">{renderLinks}</div>
    );
  };
  render() {
    return (
      <div className="channel-info-content h-full pr-16">
        <div className="bg-white px-8 py-4 h-96">
          <div className="flex justify-between mb-4">
            {/**Main Channel details */}
            <div className="flex space-x-2 items-center">
              <img
                src={`http://localhost:3000/avatars/${this.props.userStreams.avatar}`}
                className={`avatar border-${this.props.userStreams.color}-400 w-16 h-16  rounded-full border-2 p-0.5`}
                alt="A User"
              />
              <div className="flex flex-col">
                <div className="text-xl font-semibold">
                  {this.props.userStreams.userName}
                </div>
                <p className="text-sm text-center flex-grow">
                  {numberFormatter(this.props.userStreams.followers)} Followers
                </p>
              </div>
            </div>
            {/** User-Channel interactions */}
            <div>
              {" "}
              <div className="flex space-x-2 font-semibold text-white">
                <button className="text-sm">
                  <div className="flex items-center space-x-1 bg-primary rounded px-2 py-1.5">
                    <HeartOutlineIcon size={16} />
                    <p>Follow</p>
                  </div>
                </button>
                <button className="text-sm text-black">
                  <DotsVerticalIcon size={24} />
                </button>
              </div>
            </div>
          </div>
          {/* Content Length*/}

          {this.renderChannelLinks()}
        </div>
      </div>
    );
  }
}

export default ChannelInfoContent;
