import React from "react";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";
import "./LiveStreamCard.css";
const LiveStreamCard = () => {
  return (
    <div className="live-card card w-full">
      <div className="relative text-sm">
        <div className="card-main hover:bg-gray-400 relative">
          <Link to="/streams/1" className="hover:bg-gray-400">
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src="http://via.placeholder.com/332x187/000000/stream"
                className="w-full h-auto"
                alt="A live Stream"
              />
              <div className="card-text-overlay bg-red-600 px-1  rounded absolute align-t-l">
                <p className="font-semibold">LIVE</p>
              </div>
              <div className="card-text-overlay bg-none absolute align-b-l">
                <p>223K Views</p>
              </div>
            </div>
          </Link>
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
        <div className="stream-details text-sm text-black">
          <h5 className="font-semibold">Discussing AI</h5>
          <p>Headless Coder</p>
          {/* Pills*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            <Pill content="Action" />
            <Pill content="Multiplayer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
