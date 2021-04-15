import React from "react";
import "./RecommendedStreamCard.css";
import { numberFormatter } from "../../../apis/general";
import { Link } from "react-router-dom";
import PillList from "../../Common/Pill/PillList";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import Loader from "../../Common/Loader/Loader";

/**
 * A data card for  a reccomended stream
 **/
const RecommendedStreamCard = ({ stream }) => {
  if (!stream) {
    return <Loader extraStyle={"py-8"} />;
  }
  return (
    <div className="recommended-stream mb-16 flex flex-row justify-between items-center">
      <button>
        <ChevronLeftIcon size={32} />
      </button>
      <div className="flex shadow-xl">
        <div className="relative">
          <Link to={`/${stream.user.userName}`}>
            <div className="thumbnail">
              <video width="530" height="300" controls />
              <div className="card-text-overlay bg-red-600 px-1 rounded absolute align-t-l">
                <p className="font-semibold">LIVE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="stream-details p-2 bg-white w-52">
          {/* Main Stream Details*/}
          <div className="avatar flex space-x-2 items-center">
            <img
              src={`${process.env.PUBLIC_URL} avatars/${stream.user.avatar}`}
              className="rounded-full"
              alt="A User"
            />
            <div className="main-details text-sm">
              <p className="text-primary font-semibold">
                {stream.user.userName}
              </p>
              <p className="text-primary">{stream.title}</p>
              <p>{numberFormatter(stream.views)} Views</p>
            </div>
          </div>
          {/* Stream Tags*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            <PillList list={stream.tags} />
          </div>
          <p className="text-xs">{stream.description}</p>
        </div>
      </div>
      <button>
        <ChevronRightIcon size={32} />
      </button>
    </div>
  );
};
export default RecommendedStreamCard;
