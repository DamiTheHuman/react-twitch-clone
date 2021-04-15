import React from "react";
import "./ScrollableContent.css";
/**
 * Defines content that can be scrolled through horizontally
 * Usually used for the mobile version
 **/
const ScrollableContent = ({ children }) => {
  return (
    <div className="overflow-hidden my-2 mb-8">
      <div className="scrollable overflow-x-auto">
        <div className="inline-block inline-flex flex-nowrap space-x-2">
          {children}
        </div>
      </div>
    </div>
  );
};
export default ScrollableContent;
