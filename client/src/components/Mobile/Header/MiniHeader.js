import React from "react";
import AlertIcon from "mdi-react/DotsHorizontalIcon";
import ContentCopyIcon from "mdi-react/ContentCopyIcon";
import SearchIcon from "mdi-react/SearchIcon";
import TwitchLogo from "../../Icon/TwitchLogo";

const MiniHeader = () => {
  return (
    <div className="z-20 mini-header fixed top-0 w-full py-2 px-3 bg-white shadow-xl text-xl">
      <div className="flex justify-between">
        {/* First Column */}
        <div className="flex space-x-6 items-center">
          <TwitchLogo />
          <ContentCopyIcon className="hover:text-primary" />
        </div>
        {/* Second Column */}
        <div className="flex space-x-6 items-center">
          <button className="hidden text-sm bg-primary text-white rounded px-2 py-1.5 font-bold">
            Open in App
          </button>
          <SearchIcon color="#black" />
          <AlertIcon />
        </div>
      </div>
    </div>
  );
};
export default MiniHeader;
