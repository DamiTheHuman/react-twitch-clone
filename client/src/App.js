import "./App.css";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
import BrowserVersion from "./components/Browser/BrowserVersion";
import MobileVersion from "./components/Mobile/MobileVersion";

class App extends React.Component {
  state = { width: 0, height: 0, deviceType: "Desktop" };
  updateDimensions = () => {
    if (this.state.deviceType === "Desktop" && window.innerWidth <= 768) {
      //window.location.reload();
      return;
    } else if (this.state.deviceType === "Mobile" && window.innerWidth > 768) {
      //window.location.reload();
      return;
    }
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      deviceType: window.innerWidth <= 768 ? "Mobile" : "Desktop",
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
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
}

export default App;
