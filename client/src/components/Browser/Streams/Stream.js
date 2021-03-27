import React from "react";

/*import ChatBoxActions from "../../ChatBox/ChatBoxActions";*/
/*import ArrowCollapseLeftIcon from "mdi-react/ArrowCollapseLeftIcon";*/
import StreamerInfo from "../../cards/StreamerInfo";
import StreamChat from "../Chat/StreamChat";

class Stream extends React.Component {
  componentDidMount() {
    var textarea = document.querySelector("textarea");
    textarea.addEventListener("keydown", this.resizeTextArea);
  }
  componentWillUnmount() {
    var textarea = document.querySelector("textarea");
    textarea.removeEventListener("keydown", this.resizeTextArea);
  }

  resizeTextArea = () => {
    var el = document.querySelector("#growable-textarea");
    setTimeout(function () {
      el.style.cssText = "height:auto;";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  };

  /*
   *Checks if the user has scrolled to the bottom of the chat
   */
  onScroll = (el) => {
    if (this.state.scrolledToBottom === false) {
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 1) {
        this.setState({ scrolledToBottom: true }, () => {
          el.scrollTop = el.scrollHeight + 16; //Scroll to the bottom of the chat
        });
      }
    } else if (el.scrollHeight - el.scrollTop - el.clientHeight > 1) {
      this.setState({ scrolledToBottom: false });
    }
  };

  onSubmit = (message) => {
    if (message.trim() === "") {
      return;
    }
    const text = {
      user: "Anonymous",
      comment: message,
      userColor: "primary",
    };
    this.setState({
      chatLog: [...this.state.chatLog, text],
    });
  };

  render() {
    return (
      <div className="stream min-content-height flex">
        <div className="flex-grow relative bg-white">
          <div className="xl:flex xl:flex-row xl:grid-cols-0 xl:grid-cols-none grid-cols-1 grid grid-rows-2">
            <div className="stream-data w-full">
              <video width="960" height="600" className="w-full" controls />
            </div>
          </div>
          {/* Streamer Info*/}
          {<StreamerInfo id={this.props.match.params.id} />}
        </div>
        <div>
          <StreamChat />
        </div>
      </div>
    );
  }
}

export default Stream;
