import React from "react";

const ChatBox = ({ chatLog, onScroll, scrolledToBottom }) => {
  /**
   *Renders the current chat log
   **/
  const renderChat = () => {
    return chatLog.map((comment, index) => {
      return (
        <li className="py-1 px-4 break-words" key={index}>
          <span className="chat-icons">
            <img
              src="http://via.placeholder.com/18"
              className="inline mr-1"
              alt="icon"
            />
          </span>
          <span className={`chat-user text-${comment.userColor}`}>
            {comment.user}
          </span>
          <span> : </span>
          <span className="chat-message">{comment.comment}</span>
        </li>
      );
    });
  };
  return (
    <div className="chat-box-text text-sm h-full relative">
      <div className="overflow-hidden flex-grow">
        <div
          className="scrollable overflow-auto h-full w-full"
          onScroll={(event) => {
            onScroll(event.target);
          }}
        >
          <ul className={`${!scrolledToBottom ? "" : ""}`}>
            <li className=" px-4 py-1 text-gray-900">
              Welcome to the chat room!
            </li>
            {renderChat()}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
