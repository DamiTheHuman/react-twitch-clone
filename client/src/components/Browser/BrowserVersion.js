import React from "react";
import { Switch, Route } from "react-router-dom";
import Directory from "./Directory/Directory";
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
        <Switch>
          <div className="flex-grow relative bg-white">
            <Route path="/" component={StreamsIndex} exact />
            <Route path="/directory" component={Directory} exact />
            <Route
              path="/directory/all"
              render={(props) => <Directory {...props} loadCategories={true} />}
              exact
            />
          </div>
        </Switch>
      </div>
    </div>
  );
};
export default BrowserVersion;
