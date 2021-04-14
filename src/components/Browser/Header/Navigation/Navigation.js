import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import TwitchLogo from "../../../Icon/TwitchLogo";
import NavigationOptions from "../NavigationOptions/NavigationOptions";
import SearchBar from "../../../Common/SearchBar/SearchBar";
import Login from "../../Authentication/Login";
import SignUp from "../../Authentication/SignUp";
import Modal from "../../../Common/Modal/Modal";
import AlertIcon from "mdi-react/DotsHorizontalIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import CrownOutlineIcon from "mdi-react/CrownOutlineIcon";

/**
 * @ref @BrowserVersion
 * The main header for the browser component
 */
class Navigation extends React.Component {
  state = { options: false, modalActive: false, modalLink: 0 };
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
  /** Render the modal when active*/
  renderModal = () => {
    if (this.state.modalActive === false) {
      return null;
    } else {
      const content = this.state.modalLink === 0 ? <Login /> : <SignUp />;
      return (
        <Modal
          title={this.renderModalTitle()}
          content={content}
          onDismiss={() => {
            this.setState({ modalActive: false });
          }}
        />
      );
    }
  };
  /** Render the title section of the modal*/
  renderModalTitle = () => {
    const text =
      this.state.modalLink === 0 ? "Log In To Twitch" : "Join Twitch today";
    return (
      <div>
        <div className="flex justify-center items-center space-x-2 mb-2">
          <div>
            <TwitchLogo />
          </div>
          <div className="text-xl font-bold">{text}</div>
        </div>
        <div className="modal-navigation text-base border-b flex pb-2 space-x-2">
          <button
            className={`${
              this.state.modalLink === 0 ? "active text-primary" : ""
            } font-semibold`}
            onClick={() => {
              this.setState({ modalLink: 0 });
            }}
          >
            Login
          </button>
          <button
            className={`${
              this.state.modalLink === 1 ? "active text-primary" : ""
            } font-semibold`}
            onClick={() => {
              this.setState({ modalLink: 1 });
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="z-20 mini-header fixed top-0 w-full py-2 px-3 bg-white shadow-xl text-xl">
        {this.renderModal()}
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
            <button className="reltaive cursor-pointer hover:bg-gray-300 py-0.5 rounded">
              <CrownOutlineIcon />
              <span className="text-white bg-red-600 px-1.5 py-0.5 rounded-full text-xs absolute noti-amount">
                34
              </span>
            </button>
            <button
              className="text-sm bg-secondary text-black rounded px-2 py-1.5 font-semibold"
              onClick={() => {
                this.setState({ modalActive: true, modalLink: 0 });
              }}
            >
              Log In
            </button>
            <button
              className="text-sm bg-primary text-white rounded px-2 py-1.5 font-semibold"
              onClick={() => {
                this.setState({ modalActive: true, modalLink: 1 });
              }}
            >
              Sign Up
            </button>
            <AccountOutlineIcon />
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
