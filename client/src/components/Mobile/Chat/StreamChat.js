import React from "react";
import "./StreamChat.css";
import ArrowCollapseRightIcon from "mdi-react/ArrowCollapseRightIcon";
import ChatBox from "../../ChatBox/ChatBox";
import StreamChatActions from "./StreamChatActions";
import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";
import StreamerInfo from "./StreamerInfo";
/**
 * @ref @MobileVersion
 * Manages the stream chat
 */
class StreamChat extends React.Component {
  state = {
    collapse: false,
    scrolledToBottom: false,
    chatLog: Array(5).fill({
      user: "A_Streamer",
      comment: "Hello Mobile World!",
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
          this.state.collapse ? "w-0 space-y-2" : "xl:w-80 w-full"
        } text-sm sticky mobile-chat flex flex-col border-l-2 overflow-y-auto`}
      >
        {/* Render Chat Actions*/}
        <div className="p-1.5 justify-between items-center border-b">
          <StreamerInfo stream={this.props.stream} />
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
