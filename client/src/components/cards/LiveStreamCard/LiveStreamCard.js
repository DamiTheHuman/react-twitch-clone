import React from "react";
import { numberFormatter } from "../../../apis/general";
import { Link } from "react-router-dom";
import PillList from "../../Common/Pill/PillList";
import "./LiveStreamCard.css";
/**
 * A data card for live streams
 **/
const LiveStreamCard = ({ stream }) => {
  if (!stream) {
    return <div>NO STREAM Available</div>;
  }
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
                src={`http://localhost:3000/streams/${stream.thumbnail}`}
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
            src={`http://localhost:3000/avatars/${stream.user.avatar}`}
            className="w-full h-auto rounded-full avatar"
            alt="A User"
          />
        </div>
        <div className="stream-details text-sm text-black">
          <h5 className="font-semibold">{stream.title}</h5>
          <p>{stream.user.userName}</p>
          {/* Pills*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            <PillList list={stream.tags}></PillList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
