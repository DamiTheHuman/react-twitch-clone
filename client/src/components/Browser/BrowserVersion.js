import React from "react";
import "./BrowserVersion.css";
import { Switch, Route } from "react-router-dom";
import Directory from "./Directory/Directory";
import DirectoryGame from "./Directory/DirectoryGame/DirectoryGame";
import Header from "./Header/Navigation/Navigation";
import SideNav from "./SideNav/SideNav";
import StreamsIndex from "./Streams/StreamsIndex";
import Channel from "./Channel/Channel";
import BrowserPattern from "../Common/BrowserPattern/BrowserPattern";
/**
 * The browser version of the application
 */
const BrowserVersion = () => {
  return (
    <div className="browser relative h-full">
      <Route path="/:id" component={BrowserPattern} />
      <Header />
      <div className="mt-12 min-content-height flex">
        <div>
          <SideNav />
        </div>
        <div className="flex-grow relative bg-transparent content">
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
            <Route path="/:id" component={Channel} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default BrowserVersion;
