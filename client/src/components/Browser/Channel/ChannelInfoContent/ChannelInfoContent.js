import React from "react";
import "./ChannelInfoContent.css";
import { numberFormatter } from "../../../../apis/general";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
import ChannelInfoHome from "./ChannelInfoHome";
import ChannelInfoAbout from "./ChannelInfoAbout";
import ChannelInfoSchedule from "./ChannelInfoSchedule";
import ChannelInfoVideos from "./ChannelInfoVideos";
class ChannelInfoContent extends React.Component {
  state = {
    link: 0,
    channelLinks: ["Home", "About", "Schedule", "Videos", "Chat"],
  };
  /**
   * Renders the channel links based on the link array
   */
  renderChannelLinks = () => {
    const renderLinks = this.state.channelLinks.map((link, index) => {
      return (
        <button
          key={index}
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
    return <div className="flex space-x-4 text-lg">{renderLinks}</div>;
  };
  /**
   * Renders content based on the current channel link
   */
  renderChannelLinkContent = () => {
    switch (this.state.link) {
      case 0:
        return <ChannelInfoHome userStreams={this.props.userStreams} />;
      case 1:
        return <ChannelInfoAbout userStreams={this.props.userStreams} />;
      case 2:
        return <ChannelInfoSchedule userStreams={this.props.userStreams} />;
      case 3:
        return <ChannelInfoVideos userStreams={this.props.userStreams} />;
      case 4:
        return <div>Chat</div>;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="channel-info-content h-full pr-16">
        <div className="bg-gray-100 px-8  min-h-screen">
          <div className="main-info py-4">
            <div className="flex justify-between mb-4">
              {/**Main Channel details */}
              <div className="flex space-x-2 items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/avatars/${this.props.userStreams.avatar}`}
                  className={`avatar border-${this.props.userStreams.color}-400 w-16 h-16  rounded-full border-2 p-0.5`}
                  alt="A User"
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">
                    {this.props.userStreams.userName}
                  </div>
                  <p className="text-sm text-center flex-grow">
                    {numberFormatter(this.props.userStreams.followers)}{" "}
                    Followers
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
            {/* Content Links*/}
            {this.renderChannelLinks()}
          </div>
          <div className="channel-content py-4">
            {this.renderChannelLinkContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelInfoContent;
