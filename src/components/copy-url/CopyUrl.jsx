import React, { Component } from "react";
import "./CopyUrl.css";

class CopyUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url:
        "https://i.kym-cdn.com/entries/icons/facebook/000/017/403/218_copy.jpg",
      isEqual: false,
      copyFail: false,
    };
  }
  handleChange = (e) => {
    if (e.target.value === this.state.url) {
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
        <p className="url">
          https://i.kym-cdn.com/entries/icons/facebook/000/017/403/218_copy.jpg
        </p>
        <p>{this.props.isTimerRunning}</p>
        <input
          onClick={this.clearInput}
          id="inp"
          onChange={this.handleChange}
          type="text"
          placeholder="Paste image url here"
        />
        {this.state.hide ? (
          ""
        ) : (
          <button onClick={this.handleClick} className="btn-submit">
            Submit
          </button>
        )}

        {this.state.copyFail ? <p>You did not copy the whole url.</p> : ""}
      </div>
    );
  }
}

export default CopyUrl;
