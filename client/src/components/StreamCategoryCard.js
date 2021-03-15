import React from "react";

const StreamCategoryCard = () => {
  return (
    <div className="stream-card border">
      <img
        src="http://via.placeholder.com/304x405"
        className="w-full h-auto"
        alt="A new Game"
      />
      <div className="card-content px-2">
        <h5 className="text-sm">Just Chatting</h5>
        <p className="text-xs">509K Views</p>
        {/* Pills*/}
        <div className="h-8 relative mt-2">
          <span className="text-black bg-gray-200 text-xs px-3.5 py-1 h-full rounded-full font-semibold capitalize">
            Action
          </span>
        </div>
      </div>
    </div>
  );
};

export default StreamCategoryCard;
