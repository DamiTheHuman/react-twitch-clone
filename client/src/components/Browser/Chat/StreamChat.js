import React from "react";
import "./StreamChat.css";
import ArrowCollapseRightIcon from "mdi-react/ArrowCollapseRightIcon";
import AccountMultipleOutlineIcon from "mdi-react/AccountMultipleOutlineIcon";
import ChatBox from "../../ChatBox/ChatBox";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import GiftIcon from "mdi-react/GiftIcon";
import StreamChatActions from "./StreamChatActions";
import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";
/**
 * @ref @BrowserVersion
 * Manages the stream chat
 */
class StreamChat extends React.Component {
  state = {
    collapse: false,
    scrolledToBottom: false,
    chatLog: Array(5).fill({
      user: "A_Streamer",
      comment: "Hello World!",
      userColor: "blue",
    }),
  };
  /**
   * When the visible stream chat is collapsed
   */
  onStreamChatCollapse = () => {
    this.setState({ collapse: true });
  };
  /**
   * When the collapsed stream chat is revealed
   */
  onStreamChatReveal = () => {
    this.setState({ collapse: false });
  };
  /**
   * When a new message is submitted from the form
   */
  onFormSubmit = (message) => {
    if (message.trim() === "") {
      return;
    }
    const text = {
      user: "HeadlessCoder",
      comment: message,
      userColor: "red",
    };
    this.setState({
      chatLog: [...this.state.chatLog, text],
    });
  };
  /**
   * When the button is rendered unto the screen
   */
  renderButton = () => {
    if (this.state.collapse) {
      return (
        <button
          className="collapsed-button rounded px-1.5 py-2 hover:bg-gray-800 text-white"
          onClick={this.onStreamChatReveal}
        >
          <ArrowCollapseLeftIcon size={20} />
        </button>
      );
    } else {
      return (
        <button
          className="rounded px-1.5 py-2 hover:bg-gray-200 "
          onClick={this.onStreamChatCollapse}
        >
          <ArrowCollapseRightIcon size={20} />
        </button>
      );
    }
  };
  render() {
    return (
      <div
        id="sideNav"
        className={`${
          this.state.collapse ? "w-0 space-y-2" : "xl:w-80 w-14"
        } text-sm sticky content-height flex flex-col border-l-2 overflow-y-auto`}
      >
        {/* Render Chat Actions*/}
        <div className="relative flex  px-1.5 justify-between items-center py-4 border-b">
          {this.renderButton()}
          <div>STREAM CHAT</div>
          <button className="rounded px-1.5 py-2 hover:bg-gray-200">
            <AccountMultipleOutlineIcon size={20} />
          </button>
        </div>
        {/* Render Chat Leaders*/}
        <div className="relative flex justify-between items-center space-x-2 border-b text-xs">
          <button className="h-full hover:bg-gray-200 py-4">
            <ChevronLeftIcon size={24} />
          </button>

          <div className="flex justify-between flex-grow cursor-pointer px-2 hover:bg-gray-200 font-semibold py-4">
            <div className="flex items-center space-x-1 ">
              <GiftIcon size={32} color="red" />
              <div className="flex flex-col space-1">
                <div>
                  <p className="truncate">Headless</p>
                </div>
                <div>
                  <div className="flex">
                    <GiftIcon size={16} color="orange" />
                    <p>120</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-1">
                <GiftIcon size={20} color="gray" />
                <p className="truncate">Headless</p>
                <GiftIcon size={16} color="blue" />
                <p>120</p>
              </div>
              <div className="flex space-x-1">
                <GiftIcon size={20} color="silver" />
                <p className="truncate">Headless</p>
                <GiftIcon size={16} color="blue" />
                <p>120</p>
              </div>
            </div>
          </div>
          <button className="h-full hover:bg-gray-200 py-4">
            <ChevronRightIcon size={24} />
          </button>
        </div>

        {/* Render Chat log*/}
        <div className="flex-grow chat-box-height overflow-y-auto   w-full">
          <ChatBox
            onScroll={this.onScroll}
            scrolledToBottom={this.state.scrolledToBottom}
            chatLog={this.state.chatLog}
          />
        </div>
        {/* Render Chat Actons*/}
        <StreamChatActions onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default StreamChat;
