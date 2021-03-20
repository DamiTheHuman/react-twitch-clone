import React from "react";

const ChatBoxActions = ({ onSubmit }) => {
  return (
    <div className="chat-box-actions text-xs w-full flex items-center py-3 px-3 space-x-4 bg-gray-200 ">
      <div className="w-3/4">
        <div
          contentEditable
          placeholder="Send A Message"
          className="border-opacity-0 py-2 px-2"
        ></div>
      </div>
      <div className="w-1/4 justify-self-end">
        <button className="bg-primary text-white rounded px-2 py-1.5">
          Chat
        </button>
      </div>
    </div>
  );
};
export default ChatBoxActions;
