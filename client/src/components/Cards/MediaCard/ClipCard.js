import React from "react";
import { Link } from "react-router-dom";
/**
 * A data card for live clips
 **/
const ClipCard = () => {
  return (
    <div className="clip-card card w-full">
      <div className="relative text-sm">
        <div className="card-main hover:bg-primary relative">
          <Link to="/" className="hover:bg-primary">
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src="http://via.placeholder.com/332x187/DDDDDD/stream"
                className="w-full h-auto"
                alt="A Clip Stream"
              />
              <div className="card-text-overlay align-t-l">
                <p>0:34</p>
              </div>
              <div className="card-text-overlay align-b-l">
                <p>223K Views</p>
              </div>
              <div className="card-text-overlay align-t-r">
                <p>7 Days Ago</p>
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
          <h5 className="font-semibold">A New Clip</h5>
          <p>Dami Clipper </p>
          <p>Clipped By Dami Script</p>
        </div>
      </div>
    </div>
  );
};

export default ClipCard;
