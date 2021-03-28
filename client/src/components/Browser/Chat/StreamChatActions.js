import React from "react";
import EmoticonNeutralOutlineIcon from "mdi-react/EmoticonNeutralOutlineIcon";
import CogOutlineIcon from "mdi-react/CogOutlineIcon";
import FlareIcon from "mdi-react/FlareIcon";
/**
 * @ref @BrowserVersion
 * Handles the stream chat actions
 */
class StreamChatActions extends React.Component {
  state = { textAreaFocus: false, message: "" };
  /**
   * When the text area is focused on by the user
   */
  onTextAreaFocus = () => {
    this.setState({ textAreaFocus: true });
  };
  /**
   * When the user exits the text area
   */
  onTextAreaBlur = () => {
    this.setState({ textAreaFocus: false });
  };
  /**
   * Updates the state value for the text area
   */
  onTextAreaChange = (value) => {
    this.setState({ message: value });
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
      <div className="px-2 py-2">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.onFormSubmit();
          }}
          className={`${
            this.state.textAreaFocus ? "active" : ""
          } chat-box-actions text-xs w-full`}
        >
          <div className=" flex items-center px-2 py-1 space-x-4  mb-2 bg-gray-200 outline rounded">
            <div className="flex-grow">
              <textarea
                id="growable-textarea"
                rows="1"
                value={this.state.message}
                onFocus={this.onTextAreaFocus}
                onBlur={this.onTextAreaBlur}
                onChange={(event) => {
                  this.onTextAreaChange(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key !== undefined && event.key === "Enter") {
                    event.preventDefault();
                    this.onFormSubmit();
                  }
                }}
                placeholder="Send A Message"
                className="border-opacity-0 px-2 py-1"
              />
            </div>
            <div className="justify-self-end">
              <button className="text-gray-800">
                <EmoticonNeutralOutlineIcon size={20} />
              </button>
            </div>
          </div>
        </form>
        <div className="channel-actions flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <FlareIcon size={20} />
            <span className="font-semibold">0</span>
          </div>
          <div className="flex space-x-2 items-center">
            <CogOutlineIcon size={20} />
            <div className="justify-self-end">
              <button className="bg-primary text-white rounded p-2">
                Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StreamChatActions;
