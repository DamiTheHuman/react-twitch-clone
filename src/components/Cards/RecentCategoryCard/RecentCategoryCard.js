import React from "react";
import { Link } from "react-router-dom";

/**
 * A card for the recent categories for games that have been streamed
 **/
const RecentCategoryCard = ({ stream, userStreams }) => {
  if (!stream) {
    return null;
  }
  return (
    <div className="recent-category-card card">
      <div className="relative">
        <div className={`hover:bg-${userStreams.color}-400 card-main relative`}>
          <Link
            to={`/directory/game/${stream.game}`}
            className={`hover:bg-${userStreams.color}-400`}
          >
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src={`${process.env.PUBLIC_URL} categories/${stream.game}.jpg`}
                className="w-full h-auto cursor-pointer"
                alt="Recent Game"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="card-content py-2">
        <p className="text-sm font-semibold">{stream.game}</p>
      </div>
    </div>
  );
};

export default RecentCategoryCard;
