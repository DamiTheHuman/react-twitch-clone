import React from "react";
import ReactDOM from "react-dom";
import "./NavigationOptions.css";
/**
 * @ref @BrowserVersion
 * Navigation options for the dropdown elements of the header
 */
class NavigationOptions extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  /**
   * Handles the event when a user clicks outside the element
   */
  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.onClickOutside();
    }
  };
  render() {
    return (
      <div className="options-dialogue overflow-y-scroll flex flex-col space-y-0.5 py-2 text-xs bg-white block shadow-xl text-gray-700 rounded text-sm px-2">
        <div className="option-header font-semibold">General</div>
        <button className="option-link w-full">About</button>
        <button className="option-link">Advertisers</button>
        <button className="option-link">Blog</button>
        <button className="option-link">Developers</button>
        <button className="option-link">Download Apps</button>
        <button className="option-link">Gift Cards</button>
        <button className="option-link">IGDB</button>
        <button className="option-link">Jobs</button>
        <button className="option-link">Loot Cave - Store</button>
        <button className="option-link">Music On Twitch</button>
        <button className="option-link">Partners</button>
        <button className="option-link">Press</button>
        <button className="option-link">Turbo</button>
        <hr />
        <div className="option-header  font-semibold">Help And Legal</div>
        <button className="option-link">Accessiblity Statement</button>
        <button className="option-link">Ad Choices</button>
        <button className="option-link">Community Guidelines</button>
        <button className="option-link">Help</button>
        <button className="option-link">Privacy Policy</button>
        <button className="option-link">Security</button>
        <button className="option-link">Terms</button>
      </div>
    );
  }
}

export default NavigationOptions;
