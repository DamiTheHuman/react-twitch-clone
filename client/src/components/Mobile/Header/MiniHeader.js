import React from "react";
import AlertIcon from "mdi-react/DotsHorizontalIcon";
import ContentCopyIcon from "mdi-react/ContentCopyIcon";
import SearchIcon from "mdi-react/SearchIcon";
import TwitchLogo from "../../Icon/TwitchLogo";
import HeaderOptions from "./HeaderOptions";

class MiniHeader extends React.Component {
  state = { options: false };
  /** Sets the value for the toggle option*/
  toggleOptions = (value) => {
    this.setState({ options: value });
  };
  /** Render the options menu*/
  renderOptionsMenu = () => {
    if (this.state.options) {
      return (
        <HeaderOptions
          onClickOutside={() => {
            this.toggleOptions(false);
          }}
        />
      );
    }
  };
  render() {
    return (
      <div className="z-20 mini-header fixed top-0 w-full py-2 px-3 bg-white shadow-xl text-xl">
        <div className="flex justify-between">
          {/* First Column */}
          <div className="flex space-x-6 items-center">
            <button>
              <TwitchLogo />
            </button>
            <button>
              <ContentCopyIcon className="hover:text-primary" />
            </button>
          </div>
          {/* Second Column */}
          <div className="flex space-x-6 items-center">
            <button className="hidden text-sm bg-primary text-white rounded px-2 py-1.5 font-bold">
              Open in App
            </button>
            <SearchIcon color="#black" />
            <div className="relative">
              <button
                onClick={() => {
                  this.toggleOptions(true);
                }}
              >
                <AlertIcon />
              </button>
              {this.renderOptionsMenu()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MiniHeader;
