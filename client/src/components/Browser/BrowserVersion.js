import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import StreamsIndex from "./Streams/StreamsIndex";

const BrowserVersion = () => {
  return (
    <div className="browser">
      <Header />
      <div className="mt-12 min-content-height flex">
        <div>
          <SideNav />
        </div>

        <div className="flex-grow relative">
          <StreamsIndex />
        </div>
      </div>
    </div>
  );
};
export default BrowserVersion;
