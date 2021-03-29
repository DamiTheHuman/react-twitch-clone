import "./App.css";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
import BrowserVersion from "./components/Browser/BrowserVersion";
import MobileVersion from "./components/Mobile/MobileVersion";

function App() {
  return (
    <div className="App font-inter bg-light">
      <BrowserRouter>
        <MobileVersion />
      </BrowserRouter>
    </div>
  );
  return (
    <div className="App font-inter bg-light">
      <BrowserRouter>
        {/* Borwser Only Version*/}
        <BrowserView>
          <BrowserVersion />
        </BrowserView>
        {/* Mobile Only Version*/}
        <MobileView>
          <MobileVersion />
        </MobileView>
      </BrowserRouter>
    </div>
  );
}

export default App;
