import React from "react";

const RecommendedChannel = ({ stream, collapse }) => {
  return (
    <a
      href="/#"
      className="px-2 pb-1 flex text-sm items-center space-x-2 hover:bg-gray-200"
    >
      {/* Streamer Avi*/}
      <img
        src="http://via.placeholder.com/30/9147FF"
        className="rounded-full border-4 border-red-200 p-0.5"
        alt="A User"
      />
      {/* Stream Details*/}
      <div
        className={`${
          collapse ? "hidden" : "xl:block hidden"
        } flex-grow relative"`}
      >
        <div className="flex space-x-2 w-full">
          <div className="flex-grow">
            <p className="font-semibold">{stream.user}</p>
          </div>
          {/* Streamer Views*/}
          <div
            className={`${
              collapse ? "hidden" : "xl:flex hidden"
            } "flex space-x-1 items-center self-start"`}
          >
            <div className="rounded-full bg-live h-2 w-2" />
            <div>{stream.views}</div>
          </div>
        </div>
        <p>{stream.game}</p>
      </div>
    </a>
  );
};
export default RecommendedChannel;
