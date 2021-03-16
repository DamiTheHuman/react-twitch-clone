import React from "react";
import Pill from "../common/Pill";

const StreamCategoryCard = ({ stretch }) => {
  return (
    <div className={`stream-category-card border ${stretch ? "w-max" : ""} `}>
      <a href="/#">
        <img
          src="http://via.placeholder.com/304x405"
          className="w-full h-auto cursor-pointer"
          alt="A new Game"
        />
      </a>
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
