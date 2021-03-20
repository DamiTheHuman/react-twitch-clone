import React from "react";
import ChatBox from "../../ChatBox/ChatBox";
import ChatBoxActions from "../../ChatBox/ChatBoxActions";
import Pill from "../../common/Pill";

class Stream extends React.Component {
  state = { scrolledToBottom: false };
  /*
   *Checks if the user has scrolled to the bottom of the chat
   */
  onScroll = (el) => {
    if (this.state.scrolledToBottom == false) {
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 1) {
        this.setState({ scrolledToBottom: true }, () => {
          el.scrollTop = el.scrollHeight + 16; //Scroll to the bottom of the chat
        });
      }
    } else if (el.scrollHeight - el.scrollTop - el.clientHeight > 1) {
      this.setState({ scrolledToBottom: false });
    }
  };

  render() {
    return (
      <div className="stream relative">
        <div className="xl:flex xl:flex-row xl:grid-cols-0 xl:grid-cols-none grid-cols-1 grid grid-rows-2 content-height">
          <div className="stream-data xl:w-3/4 ">
            <video
              width="960"
              height="600"
              className="w-full h-full"
              controls
            />
          </div>
          <div className="stream-data relative xl:w-1/4 flex flex-col">
            <div className="title border-b border-black p-4 w-full">
              <div className="mb-4 flex space-x-4 items-center text-xs">
                <img
                  src="http://via.placeholder.com/50/FF0000"
                  className="rounded-full"
                  alt="A User"
                />
                <div>
                  <p className="text-xl">Headless Coder</p>
                  <p>
                    Playing{" "}
                    <a href="/#" className="text-primary">
                      Just Chatting
                    </a>
                  </p>
                </div>
              </div>
              <Pill content="English" />
            </div>
            <ChatBox
              onScroll={this.onScroll}
              scrolledToBottom={this.state.scrolledToBottom}
              chatLog={Array(50).fill({
                user: "HeadlessCoder",
                comment: "Hello World!",
                userColor: "red-400",
              })}
            />
            <div
              className={`chat-actions ${
                !this.state.scrolledToBottom ? "absolute bottom-0" : ""
              } w-full `}
            >
              <ChatBoxActions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stream;
