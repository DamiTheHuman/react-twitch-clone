import React from "react";

const RecommendedChannel = ({ stream, collapse }) => {
  return (
    <a
      href="/#"
      className="px-2 mb-0.5 flex text-sm justify-between items-center space-x-2 items-center hover:bg-gray-200"
    >
      {/* Streamer Avi*/}
      <img
        src="http://via.placeholder.com/30/9147FF"
        className="rounded-full"
        alt="A User"
      />
      {/* Stream Details*/}
      <div className={`${collapse ? "hidden" : "xl:block hidden"} flex-grow"`}>
        <p className="font-semibold">{stream.user}</p>
        <p>{stream.game}</p>
      </div>
      {/* Streamer Views*/}
      <div
        className={`${
          collapse ? "hidden" : "xl:flex hidden"
        } "flex space-x-2 items-center "`}
      >
        <div className="rounded-full bg-live h-2 w-2" />
        <div>{stream.views}</div>
      </div>
    </a>
  );
};
export default RecommendedChannel;
