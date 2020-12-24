import React from "react";
import "./PointClick.css";

class PointClick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: "0123456789",
      numberClicked: "",
      isEqual: true,
    };
  }

  handleClick = (e) => {
    this.setState({
      numberClicked: this.state.numberClicked + `${e.target.id}`,
    });
    if (this.state.numberClicked.length === 9) {
      if (this.state.numberClicked.localeCompare("012345678") === 0) {
        this.props.handleIsTaskDone();
      } else {
        this.setState({ isEqual: !this.state.isEqual });
        this.setState({ numberClicked: "" });
      }
    }
  };

  render() {
    return (
      <div className={`task ${this.props.isTimerRunning ? "" : "blocker"}`}>
        <p className="numbers">{this.state.numberClicked}</p>
        {this.state.isEqual ? (
          ""
        ) : (
          <div>
            {this.state.numberClicked.length ? (
              ""
            ) : (
              <p>Numbers did not match! Try again!</p>
            )}
          </div>
        )}
        <ul className="num-list">
          <li id="1" onClick={this.handleClick}>
            1
          </li>
          <li id="2" onClick={this.handleClick}>
            2
          </li>
          <li id="3" onClick={this.handleClick}>
            3
          </li>
        </ul>
        <ul className="num-list">
          <li id="4" onClick={this.handleClick}>
            4
          </li>
          <li id="5" onClick={this.handleClick}>
            5
          </li>
          <li id="6" onClick={this.handleClick}>
            6
          </li>
        </ul>
        <ul className="num-list">
          <li id="7" onClick={this.handleClick}>
            7
          </li>
          <li id="8" onClick={this.handleClick}>
            8
          </li>
          <li id="9" onClick={this.handleClick}>
            9
          </li>
        </ul>
        <ul className="num-list center">
          <li id="0" onClick={this.handleClick}>
            0
          </li>
        </ul>
      </div>
    );
  }
}

export default PointClick;
