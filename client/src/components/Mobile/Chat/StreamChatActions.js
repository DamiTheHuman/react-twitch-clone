import React from "react";
import EmoticonNeutralOutlineIcon from "mdi-react/EmoticonNeutralOutlineIcon";
import CogOutlineIcon from "mdi-react/CogOutlineIcon";
import FlareIcon from "mdi-react/FlareIcon";
/**
 * @ref @MobileVersion
 * Handles the stream chat actions
 */
class StreamChatActions extends React.Component {
  state = { message: "" };

  componentDidMount() {
    var textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", this.resizeTextArea);
  }
  componentWillUnmount() {
    var textarea = document.querySelector("textarea");
    textarea.removeEventListener("keydown", this.resizeTextArea);
  }
  /**
   * Updates the state value for the text area
   */
  onTextAreaChange = (value) => {
    this.setState({ message: value });
  };
  /**
   * Resizes the text area based on the lines writtien in the text area
   * A max height is set on this so it doesnt exceed 4 lines via css
   **/
  resizeTextArea = () => {
    var el = document.querySelector("#growable-textarea");
    setTimeout(function () {
      el.style.cssText = "height:auto;";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  };

  /**
   * On the the form submission
   */
  onFormSubmit = () => {
    this.props.onFormSubmit(this.state.message);
    this.setState({ message: "" });
  };
  render() {
    return (
      <div className="chat-actions bg-gray-200 border-t py-1">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.onFormSubmit();
          }}
          className="chat-box-actions text-xs w-full"
        >
          <div className=" flex items-center px-2 space-x-4 outline rounded">
            <div className="flex-grow flex items-center">
              <textarea
                id="growable-textarea"
                className="w-full"
                rows="1"
                value={this.state.message}
                onChange={(event) => {
                  this.onTextAreaChange(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key !== undefined && event.key === "Enter") {
                    event.preventDefault();
                    this.onFormSubmit();
                  }
                }}
                placeholder="Send a Message"
                className="border-opacity-0 px-2 py-1"
              />
            </div>
            <div className="justify-self-end">
              <button className="bg-primary text-white rounded p-2">
                Chat
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default StreamChatActions;
