import React, { Component } from "react";
import "./ScrollHorizontal.css";

class ScrollHorizontal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rightIsClicked: false,
      hide: false,
    };
  }

  handleClick = () => {
    this.setState({ rightIsClicked: !this.state.rightIsClicked });
  };

  onScrollDone = () => {
    this.props.handleIsTaskDone();
    this.setState({ hide: true });
  };

  handleRestart = () => {
    this.setState({ rightIsClicked: false });
    this.props.onRestart();
    this.setState({ hide: false });
  };

  render() {
    return (
      <div className={`task ${this.props.isTimerRunning ? "" : "blocker"}`}>
        <div className="scroll-box-side">
          {this.state.hide ? (
            ""
          ) : (
            <button
              className={`scroll-side-btn ${
                this.state.rightIsClicked ? "" : "hidden"
              }`}
              onClick={this.onScrollDone}
            >
              Done
            </button>
          )}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

          {this.state.rightIsClicked ? (
            "Scroll up"
          ) : (
            <button
              className={`scroll-side-btn ${
                this.state.rightIsClicked ? "hidden" : ""
              }`}
              onClick={this.handleClick}
            >
              Click Me!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ScrollHorizontal;
