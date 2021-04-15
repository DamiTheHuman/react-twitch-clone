import React from "react";
import "./RecommendedChannel.css";
import { Link } from "react-router-dom";
import { numberFormatter } from "../../../apis/general";
/**
 * A data button for recommended channels
 **/
const RecommendedChannel = ({ stream, collapse }) => {
  return (
    <Link
      to={`/${stream.user.userName}`}
      className="recommended-channel px-2 pb-1 flex text-sm items-center space-x-2 hover:bg-gray-200"
    >
      {/* Streamer Avi*/}
      <img
        src={`${process.env.PUBLIC_URL}/avatars/${stream.user.avatar}`}
        className={`avatar border-${stream.user.color}-400 rounded-full border-2 p-0.5`}
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
            <p className="font-semibold">{stream.user.userName}</p>
          </div>
          {/* Streamer Views*/}
          <div
            className={`${
              collapse ? "hidden" : "xl:flex hidden"
            } "flex space-x-1 items-center self-start"`}
          >
            <div className="rounded-full bg-live h-2 w-2" />
            <div>{numberFormatter(stream.views)}</div>
          </div>
        </div>
        <p>{stream.game}</p>
      </div>
    </Link>
  );
};
export default RecommendedChannel;
