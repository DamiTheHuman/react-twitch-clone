import React from "react";
import { numberFormatter } from "../../apis/general";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";
import "./LiveStreamCard.css";
/**
 * A data card for live streams
 **/
const LiveStreamCard = ({ stream }) => {
  if (!stream) {
    return <div>NO STREAM Available</div>;
  }
  const renderPills = stream.tags.map((tag) => {
    return (
      <React.Fragment key={tag}>
        <Pill content={tag} />
      </React.Fragment>
    );
  });
  return (
    <div className="live-card card w-full">
      <div className="relative text-sm">
        <div className={`hover:bg-${stream.user.color}-400 card-main relative`}>
          <Link
            to={`/streams/${stream.id}`}
            className={`hover:bg-${stream.user.color}-400`}
          >
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src="http://via.placeholder.com/332x187/000000/stream"
                className="w-full h-auto"
                alt="A live Stream"
              />
              <div className="card-text-overlay bg-red-600 px-1 rounded absolute align-t-l">
                <p className="font-semibold">LIVE</p>
              </div>
              <div className="card-text-overlay bg-none absolute align-b-l">
                <p>{numberFormatter(stream.views)} Views</p>
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
          <h5 className="font-semibold">{stream.title}</h5>
          <p>{stream.user.userName}</p>
          {/* Pills*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            {renderPills}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
