import React from "react";
import Pill from "../common/Pill";
import "./LiveStreamCard.css";
const LiveStreamCard = () => {
  return (
    <div className="live-stream-card border w-max">
      <div className="relative thumbnail">
        <a href="/#">
          <img
            src="http://via.placeholder.com/332x187/000000"
            className="w-full h-auto"
            alt="A live Stream"
          />
        </a>
        <div className="live text-xs absolute text-base uppercase">
          <div className="px-2 bg-red-500 rounded font-semibold">
            <p>Live</p>
          </div>
        </div>
        <div className="views text-xs absolute text-base">
          <p>509K Views</p>
        </div>
      </div>
      <div className="card-content px-2 py-2 flex space-x-2">
        <div className="streamer-image">
          <img
            src="http://via.placeholder.com/36/FF0000"
            className="w-full h-auto rounded-full"
            alt="A User"
          />
        </div>
        <div className="stream-details text-sm">
          <h5 className="font-semibold">Discussing AI</h5>
          <p>Headless Coder</p>
          {/* Pills*/}
          <div className="pills flex space-x-2">
            <Pill content="Action" />
            <Pill content="Multiplayer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
