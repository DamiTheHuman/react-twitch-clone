import React from "react";
import Pill from "../common/Pill";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
const RecommendedStreamCard = () => {
  return (
    <div className="recommended-stream mb-16 flex flex-row justify-between items-center">
      <button>
        <ChevronLeftIcon size={32} />
      </button>
      <div className="flex shadow-xl">
        <div className="relative">
          <video width="530" height="300" controls />
          <div className="live text-xs absolute text-base text-white uppercase">
            <div className="px-2 bg-live rounded font-semibold">
              <p>Live</p>
            </div>
          </div>
        </div>
        <div className="stream-details p-2 bg-white w-52">
          {/* Main Stream Details*/}
          <div className="flex space-x-2 items-center">
            <img
              src="http://via.placeholder.com/50"
              className="rounded-full"
              alt="A User"
            />
            <div className="main-details text-sm">
              <p className="text-primary font-semibold">HeadlessCoder</p>
              <p className="text-primary">React</p>
              <p>8.7KViews</p>
            </div>
          </div>
          {/* Stream Tags*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            <Pill content="Flex" />
            <Pill content="JS" />
          </div>
          <p className="text-xs">
            Future developer trying to figure everything out.
          </p>
        </div>
      </div>
      <button>
        <ChevronRightIcon size={32} />
      </button>
    </div>
  );
};
export default RecommendedStreamCard;
