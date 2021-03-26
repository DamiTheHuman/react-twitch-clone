import React from "react";
import "./BrowserVersion.css";
import { Switch, Route } from "react-router-dom";
import Directory from "./Directory/Directory";
import DirectoryGame from "./Directory/DirectoryGame";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import StreamsIndex from "./Streams/StreamsIndex";
import Stream from "./Streams/Stream";

const BrowserVersion = () => {
  return (
    <div className="browser">
      <Header />
      <div className="mt-12 min-content-height flex">
        <div>
          <SideNav />
        </div>

        <div className="flex-grow relative bg-white">
          <Switch>
            <Route path="/" component={StreamsIndex} exact />
            <Route path="/directory" component={Directory} exact />
            <Route
              path="/directory/all"
              render={(props) => <Directory {...props} loadCategories={true} />}
              exact
            />
            <Route
              path="/directory/game/:id"
              render={(props) => (
                <DirectoryGame {...props} loadCategories={true} />
              )}
            />
            <Route path="/streams/:id" component={Stream} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default BrowserVersion;
