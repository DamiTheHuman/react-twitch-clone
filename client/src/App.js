import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MiniHeader from "./components/Mobile/Header/MiniHeader";
import StreamsIndex from "./components/Mobile/Streams/StreamsIndex";
import StreamsBrowse from "./components/Mobile/StreamsBrowse/StreamsBrowse";
import StreamsBrowseCategory from "./components/Mobile/StreamsBrowse/StreamsBrowseCategory";
import Stream from "./components/Mobile/Streams/Stream";

function App() {
  return (
    <div className="App font-inter bg-light">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
