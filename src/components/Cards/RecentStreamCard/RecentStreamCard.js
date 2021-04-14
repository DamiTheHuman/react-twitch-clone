import React from "react";
import { numberFormatter } from "../../../apis/general";
import { Link } from "react-router-dom";
import "./RecentStreamCard.css";
/**
 * A data card for recent streams
 **/
const RecentStreamCard = ({ stream, userStreams }) => {
  if (!stream) {
    return <div>NO STREAM Available</div>;
  }
  return (
    <div className="recent-stream-card card">
      <div className="relative text-sm">
        <div className={`hover:bg-${userStreams.color}-400 card-main relative`}>
          <Link
            to={`/${userStreams.userName}`}
            className={`hover:bg-${userStreams.color}-400`}
          >
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src={`${process.env.PUBLIC_URL} streams/${stream.thumbnail}`}
                className="w-full h-auto"
                alt="A recent Stream"
              />

              <div className="card-text-overlay bg-none absolute align-b-l">
                <p>{numberFormatter(stream.views)} Views</p>
              </div>
              <div className="card-text-overlay bg-none absolute align-b-r">
                <p>Yesterday</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="card-content py-2 flex space-x-2">
        <div className="streamer-image">
          <img
            src={`${process.env.PUBLIC_URL} categories/${stream.game}.jpg`}
            className="w-full h-auto game"
            alt="The recnet game"
          />
        </div>
        <div className="stream-details text-sm text-black">
          <h5 className="font-semibold">{stream.title}</h5>
          <p>{userStreams.userName}</p>
          <p>{stream.game}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentStreamCard;
