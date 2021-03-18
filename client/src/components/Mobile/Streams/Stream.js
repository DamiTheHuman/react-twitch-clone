import React from "react";
import Pill from "../../common/Pill";

class Stream extends React.Component {
  renderChat = () => {
    return Array(50)
      .fill({})
      .map((comment, index) => {
        return (
          <li className="py-1" key={index}>
            <span className="chat-icons">
              <img
                src="http://via.placeholder.com/18"
                className="inline mr-1"
                alt="icon"
              />
            </span>
            <span className="chat-user text-red-600">HeadlessCoder</span>
            <span> : </span>
            <span className="chat-message">YOO</span>
          </li>
        );
      });
  };
  render() {
    return (
      <div className="stream relative">
        <div className="flex flex-col xl:flex-row">
          <div className="stream-data xl:w-3/4 w-full">
            <img
              src="http://via.placeholder.com/960x600/000000"
              className="w-full h-full"
              alt="A Live Stream"
            />
          </div>
          <div className="chat-box xl:w-1/4 w-full flex flex-col">
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
            <div className="chat-box-text text-sm h-full xl:relative">
              <div className="overflow-hidden flex-grow">
                <div className="scrollable overflow-auto absolute h-full w-full">
                  <ul className="px-4">
                    <li className="py-1 text-gray-900">
                      Welcome to the chat room!
                    </li>
                    {this.renderChat()}
                  </ul>
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
