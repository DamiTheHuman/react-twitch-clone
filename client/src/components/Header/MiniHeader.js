import React from "react";

const MiniHeader = () => {
  return (
    <div className="mini-header w-full py-4 px-2 bg-white shadow-xl">
      <div className="flex justify-between">
        {/* First Column */}
        <div className="flex space-x-2">
          <p>Icon</p>
          <p>Icon</p>
        </div>
        {/* Second Column */}
        <div className="flex space-x-2">
          <p>Icon</p>
          <p>Icon</p>
          <p>Icon</p>
        </div>
      </div>
    </div>
  );
};
export default MiniHeader;
