import React from "react";

const Pill = ({ content }) => {
  return (
    <div className="h-8 relative mt-2 cursor-pointer">
      <span className="text-black hover:text-primary  bg-gray-200 text-xs px-3.5 py-1 h-full rounded-full font-semibold capitalize">
        {content}
      </span>
    </div>
  );
};

export default Pill;
