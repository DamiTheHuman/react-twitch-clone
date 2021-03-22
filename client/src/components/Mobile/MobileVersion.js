import React from "react";
import { Switch, Route } from "react-router-dom";
import MiniHeader from "./Header/MiniHeader";
import StreamsIndex from "./Streams/StreamsIndex";
import StreamsBrowse from "./StreamsBrowse/StreamsBrowse";
import StreamsBrowseCategory from "./StreamsBrowse/StreamsBrowseCategory";
import Stream from "./Streams/Stream";

const MobileVersion = () => {
  return (
    <div className="mobile">
      <MiniHeader />
      <div className="mt-12 min-content-height">
        <Switch>
          <Route path="/" component={StreamsIndex} exact />
          <Route path="/directory" component={StreamsBrowse} exact />
          <Route
            path="/directory/game/:id"
            component={StreamsBrowseCategory}
            exact
          />
          <Route path="/streams/:id" component={Stream} exact />
        </Switch>
      </div>
    </div>
  );
};
export default MobileVersion;
