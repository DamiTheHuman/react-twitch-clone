import React from "react";
import { Link } from "react-router-dom";
import AlertIcon from "mdi-react/DotsHorizontalIcon";
import ContentCopyIcon from "mdi-react/ContentCopyIcon";
import SearchIcon from "mdi-react/SearchIcon";
import TwitchLogo from "../../Icon/TwitchLogo";
import NavigationOptions from "./NavigationOptions/NavigationOptions";
/**
 * @ref @BrowserVersion
 * The main header for the mobile component
 */
class Navigation extends React.Component {
  state = { options: false };
  /** Sets the value for the toggle option*/
  toggleOptions = (value) => {
    this.setState({ options: value });
  };
  /** Render the options menu*/
  renderOptionsMenu = () => {
    if (this.state.options) {
      return (
        <NavigationOptions
          onClickOutside={() => {
            this.toggleOptions(false);
          }}
        />
      );
    }
  };
  render() {
    return (
      <div className="z-20 navigation fixed top-0 w-full py-2 px-3 bg-white shadow-xl text-xl">
        <div className="flex justify-between">
          {/* First Column */}
          <div className="flex space-x-6 items-center">
            <Link to="/">
              <TwitchLogo />
            </Link>
            <Link to="/directory">
              <ContentCopyIcon className="hover:text-primary" />
            </Link>
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
export default Navigation;
