import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AlertIcon from "mdi-react/DotsHorizontalIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import CrownOutlineIcon from "mdi-react/CrownOutlineIcon";
import TwitchLogo from "../../Icon/TwitchLogo";
import HeaderOptions from "./HeaderOptions";
import SearchBar from "../../common/SearchBar";

/**
 * @ref @BrowserVersion
 * The main header for the browser component
 */
class Header extends React.Component {
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
          <div className="flex header-column space-x-5 items-center">
            <Link to="/" className="relative">
              <TwitchLogo className="main-logo z-10" />
              <TwitchLogo
                fill="text-primary"
                className="absolute top-0 z-neg10"
              />
            </Link>
            <Link to="/directory" className="hover:text-primary">
              <p className="text-sm font-semibold">Browse</p>
            </Link>
            <div className="relative">
              <div
                className="cursor-pointer hover:bg-gray-300 py-0.5 rounded"
                onClick={() => {
                  this.toggleOptions(true);
                }}
              >
                <AlertIcon />
              </div>
              {this.renderOptionsMenu()}
            </div>
          </div>
          {/* Second Column */}
          <div className="flex-grow header-column justify-center flex ">
            <div className="w-5/12 ">
              <SearchBar />
            </div>
          </div>
          {/* Third Column */}
          <div className="flex header-column space-x-2.5 items-center">
            <button className="cursor-pointer hover:bg-gray-300 py-0.5 rounded">
              <CrownOutlineIcon />
            </button>
            <button className="text-sm bg-secondary text-black rounded px-2 py-1.5 font-semibold">
              Log In
            </button>
            <button className="text-sm bg-primary text-white rounded px-2 py-1.5 font-semibold">
              Sign Up
            </button>
            <AccountOutlineIcon />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
