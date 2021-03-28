import React from "react";
import ReactDOM from "react-dom";
import "./HeaderOptions.css";
/**
 * @ref @MobileVersion
 * Header options for the dropdown elements of the header
 */
class HeaderOptions extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  /** Handles the event when a user clicks outside the element*/
  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.onClickOutside();
    }
  };
  render() {
    return (
      <div className="options-dialogue flex flex-col w-80 absolute bg-light block shadow-xl text-primary rounded text-sm px-2">
        <div className="py-2.5">Privacy Policy</div>
        <div className="py-2.5">Cookie Policy</div>
        <div className="py-2.5 border-b border-gray-300">Terms Of Service</div>
        <div className="py-2.5">Toggle Dark Theme</div>
      </div>
    );
  }
}

export default HeaderOptions;
