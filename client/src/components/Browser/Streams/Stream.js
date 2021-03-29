import React from "react";
import StreamerInfo from "../Chat/StreamerInfo";
import StreamChat from "../Chat/StreamChat";
/**
 * @ref @BrowserVersion
 * A live stream componenet displayed to the user
 */
class Stream extends React.Component {
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
