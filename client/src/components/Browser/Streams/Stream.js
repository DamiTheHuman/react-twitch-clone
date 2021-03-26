import React from "react";
import ChatBox from "../../ChatBox/ChatBox";
/*import ChatBoxActions from "../../ChatBox/ChatBoxActions";*/
import Pill from "../../common/Pill";
/*import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";*/
import StarOutlineIcon from "mdi-react/StarOutlineIcon";

import DotsVerticalIcon from "mdi-react/DotsVerticalIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import UploadIcon from "mdi-react/UploadIcon";

import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import ArrowCollapseRightIcon from "mdi-react/ArrowCollapseRightIcon";
import AccountMultipleOutlineIcon from "mdi-react/AccountMultipleOutlineIcon";
import EmoticonNeutralOutlineIcon from "mdi-react/EmoticonNeutralOutlineIcon";

import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import GiftIcon from "mdi-react/GiftIcon";
import CogOutlineIcon from "mdi-react/CogOutlineIcon";
import FlareIcon from "mdi-react/FlareIcon";

class Stream extends React.Component {
  state = {
    scrolledToBottom: false,
    textAreaFocus: false,
    chatLog: Array(50).fill({
      user: "HeadlessCoder",
      comment: "Hello World!",
      userColor: "red-400",
    }),
  };
  componentDidMount() {
    var textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", this.resizeTextArea);
  }
  componentWillUnmount() {
    var textarea = document.querySelector("textarea");
    textarea.removeEventListener("keydown", this.resizeTextArea);
  }
  resizeTextArea = () => {
    var el = document.querySelector("#growable-textarea");
    setTimeout(function () {
      el.style.cssText = "height:auto;";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  };

  /*
   *Checks if the user has scrolled to the bottom of the chat
   */
  onScroll = (el) => {
    if (this.state.scrolledToBottom === false) {
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 1) {
        this.setState({ scrolledToBottom: true }, () => {
          el.scrollTop = el.scrollHeight + 16; //Scroll to the bottom of the chat
        });
      }
    } else if (el.scrollHeight - el.scrollTop - el.clientHeight > 1) {
      this.setState({ scrolledToBottom: false });
    }
  };

  onSubmit = (message) => {
    if (message.trim() === "") {
      return;
    }
    const text = {
      user: "HeadlessCoder",
      comment: message,
      userColor: "primary",
    };
    this.setState({
      chatLog: [...this.state.chatLog, text],
    });
  };

  render() {
    const collapse = false;
    return (
      <div className="stream min-content-height flex">
        <div className="flex-grow relative bg-white">
          <div className="xl:flex xl:flex-row xl:grid-cols-0 xl:grid-cols-none grid-cols-1 grid grid-rows-2">
            <div className="stream-data w-full">
              <video width="960" height="600" className="w-full" controls />
            </div>
          </div>
          {/* Streamer Info*/}
          <div className="bg-gray-100">
            <div className="flex flex-row justify-between p-4">
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src="http://via.placeholder.com/70"
                    className="rounded-full"
                    alt="A User"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold">HeadlessCoder</h4>
                  <p className="font-semibold text-sm">HeadlessCoder</p>
                  <div className="flex space-x-2">
                    <a className="text-primary text-sm" href="/#">
                      MineCraft
                    </a>
                    <div className="pills flex space-x-2">
                      <Pill content="English" />
                      <Pill content="Platfromer" />
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
                    <div>9001</div>
                  </div>
                  <div>2:32:00</div>
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
                    <p className="text-sm text-center">0 Followers</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">About HeadlessCoder</h3>
                    <p className="text-sm">
                      We don't know much about them, but we're sure
                      HeadlessCoder is great
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            id="sideNav"
            className={`${
              collapse ? "w-14 space-y-2" : "xl:w-80 w-14"
            } text-sm sticky content-height flex flex-col border-l-2 overflow-y-auto`}
          >
            {/* Render Chat Actions*/}
            <div className="relative flex justify-between px-3 items-center py-4 border-b">
              <div>
                <ArrowCollapseRightIcon size={20} />
              </div>
              <div>STREAM CHAT</div>
              <div>
                <AccountMultipleOutlineIcon size={20} />
              </div>
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
            <div className="px-2 py-2">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  //this.submitForm();
                }}
                className={`${
                  this.state.textAreaFocus ? "active" : ""
                } chat-box-actions text-xs w-full`}
              >
                <div className=" flex items-center px-2 py-1 space-x-4  mb-2 bg-gray-200 outline rounded">
                  <div className="flex-grow">
                    <textarea
                      id="growable-textarea"
                      rows="1"
                      value={this.state.message}
                      onFocus={() => {
                        this.setState({ textAreaFocus: true });
                      }}
                      onBlur={() => {
                        this.setState({ textAreaFocus: false });
                      }}
                      onChange={(event) => {
                        //this.onTextAreaChange(event.target.value);
                      }}
                      onKeyDown={(event) => {
                        if (event.key !== undefined && event.key === "Enter") {
                          event.preventDefault();
                          // this.submitForm();
                        }
                      }}
                      placeholder="Send A Message"
                      className="border-opacity-0 px-2 py-1"
                    />
                  </div>
                  <div className="justify-self-end">
                    <button className="text-gray-800">
                      <EmoticonNeutralOutlineIcon size={20} />
                    </button>
                  </div>
                </div>
              </form>
              <div className="channel-actions flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <FlareIcon size={20} />
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <CogOutlineIcon size={20} />
                  <div className="justify-self-end">
                    <button className="bg-primary text-white rounded p-2">
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stream;
