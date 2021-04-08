import React from "react";
import { fetchUserStream } from "../../../actions";
import { connect } from "react-redux";
import "./BrowserPattern.css";
/**
 * Manages the background of the application based on the url
 */
class BrowserPattern extends React.Component {
  state = { width: 0 };
  /**
   * Renders the text patterns which will serve as the bacgkrounud
   * @returns void
   */
  renderTextPatterns() {
    if (!this.state.width) {
      return null;
    }
    return [0, 1, 2].map((pattern, index) => {
      var offset = 10;
      if (index === 1) {
        offset = -290;
      } else if (index === 2) {
        offset = -150;
      }
      return (
        <pattern
          key={index}
          id={`pattern-circles-` + index}
          x={offset}
          y="0"
          width={this.state.width + 10}
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <text x="auto" y={80 * (index + 1)}>
            {this.props.userStreams.userName}
          </text>
        </pattern>
      );
    });
  }
  /**
   * Renders the rects that hold the patterns
   * @returns void
   */
  renderPatternRects() {
    if (!this.state.width) {
      return null;
    }
    return [0, 1, 2].map((pattern, index) => {
      return (
        <rect
          key={index}
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#pattern-circles-${index})`}
        />
      );
    });
  }
  render() {
    if (!this.props.userStreams) {
      return <React.Fragment />;
    }
    if (this.props.userStreams.liveStream) {
      return <React.Fragment />;
    }
    return (
      <div className="browser-pattern absolute h-full w-full min-h-screen bg-primary">
        <span
          ref={(node) => {
            if (node && this.state.width != node.offsetWidth) {
              this.setState({
                width: node.offsetWidth,
              });
            }
          }}
          className="fixed"
        >
          {this.props.userStreams.userName}
        </span>

        <svg width="100%" height="100%">
          {this.renderTextPatterns()}
          {this.renderPatternRects()}
        </svg>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStreams: state.userStreams.recentLiveStream,
  };
};
export default connect(mapStateToProps, { fetchUserStream })(BrowserPattern);
