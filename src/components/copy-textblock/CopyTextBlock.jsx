import React, { Component } from "react";
import "./CopyTextBlock.css";

class CopyTextBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      isEqual: false,
      copyFail: false,
    };
  }
  handleChange = (e) => {
    if (e.target.value === this.state.text) {
      this.setState({ copyFail: false });
      this.setState({ isEqual: true });
    }
  };

  handleClick = () => {
    if (this.state.isEqual) {
      this.props.handleIsTaskDone();
    } else {
      this.setState({ copyFail: true });
    }
  };

  clearInput = (e) => {
    e.target.value = "";
  };

  render() {
    return (
      <div className={`task ${this.props.isTimerRunning ? "" : "blocker"}`}>
        <p className="copy-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <textarea
          className="txt-input"
          onClick={this.clearInput}
          id="inp2"
          onChange={this.handleChange}
          type="text"
          placeholder="Paste the text here"
        ></textarea>
        {this.state.hide ? (
          ""
        ) : (
          <button onClick={this.handleClick} className="btn-submit block">
            Submit
          </button>
        )}

        {this.state.copyFail ? <p>You did not copy the whole text.</p> : ""}
      </div>
    );
  }
}

export default CopyTextBlock;
