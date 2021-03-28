import React from "react";
/**
 * A simple data pill template that contains content
 **/
const Pill = ({ content }) => {
  return (
    <div className="h-8 relative cursor-pointer">
      <span className="text-black hover:text-primary  bg-gray-200 text-xs px-3.5 py-1 h-full rounded-full font-semibold capitalize">
        {content}
      </span>
    </div>
  );
};

export default Pill;
