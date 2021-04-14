import React from "react";
import BellOutlineIcon from "mdi-react/BellOutlineIcon";
import ChannelInfoContent from "./ChannelInfoContent/ChannelInfoContent";

const ChannelInfo = ({ userStreams }) => {
  return (
    <div className="channel-info min-h-screen flex flex-col">
      <div className="py-16 px-8 pr-32">
        <div className="flex space-x-4">
          {/* Left Content*/}
          <div className="flex flex-col justify-between bg-white py-8 px-4 w-1/3">
            <div className="px-2">
              <div>
                <span className="bg-black text-white px-2 rounded text-sm font-semibold">
                  Offline
                </span>
              </div>
              <div className="text-xl font-semibold">
                <p id="userName">{userStreams.userName}</p> is offline
              </div>
            </div>
            <div>
              <button className="text-sm flex space-x-2 items-center font-semibold text-primary px-2 py-1 rounded hover:bg-gray-200 flex">
                <BellOutlineIcon size={16} />
                <p>Turn On Notifications</p>
              </button>
            </div>
          </div>
          {/* Right Player*/}
          <div className="stream-data w-2/3">
            <video className="w-full" controls />
          </div>
        </div>
      </div>
      {/* Channel Info Content*/}
      <div className="flex-grow">
        <ChannelInfoContent userStreams={userStreams} />
      </div>
    </div>
  );
};

export default ChannelInfo;
