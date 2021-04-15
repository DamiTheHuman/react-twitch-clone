import React from "react";
/**
 * Manages the actions for the chatbox
 **/
class ChatBoxActions extends React.Component {
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
   * Resize the text area based on how much the user has typed
   **/
  resizeTextArea = () => {
    var el = document.querySelector("#growable-textarea");
    setTimeout(function () {
      el.style.cssText = "height:auto;";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  };
  /**
   *When the user types in the text area update the state message object
   **/
  onTextAreaChange = (message) => {
    this.setState({ message: message });
  };
  /**
   *Submits the current form
   **/
  submitForm = () => {
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.submitForm();
        }}
        className="chat-box-actions text-xs w-full flex items-center px-2 py-2 space-x-4 bg-gray-200"
      >
        <div className="flex-grow">
          <textarea
            id="growable-textarea"
            rows="1"
            value={this.state.message}
            onChange={(event) => {
              this.onTextAreaChange(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key !== undefined && event.key === "Enter") {
                event.preventDefault();
                this.submitForm();
              }
            }}
            placeholder="Send A Message"
            className="border-opacity-0 p-2"
          />
        </div>
        <div className="justify-self-end">
          <button className="bg-primary text-white rounded p-2">Chat</button>
        </div>
      </form>
    );
  }
}
export default ChatBoxActions;
