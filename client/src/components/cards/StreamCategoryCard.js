import React from "react";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";

const StreamCategoryCard = ({ stretch }) => {
  return (
    <div className={`stream-category-card border ${stretch ? "w-max" : ""} `}>
      <Link to="/directory/game/1">
        <img
          src="http://via.placeholder.com/304x405"
          className="w-full h-auto cursor-pointer"
          alt="A new Game"
        />
      </Link>
      <div className="card-content px-2 py-2">
        <h5 className="text-sm font-semibold">Just Chatting</h5>
        <p className="text-xs">509K Views</p>
        {/* Pills*/}
        <div className="pills flex space-x-2">
          <Pill content="English" />
        </div>
      </div>
    </div>
  );
};

export default StreamCategoryCard;
