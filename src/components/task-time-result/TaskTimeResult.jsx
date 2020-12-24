import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setInputDeviceType } from "../../redux/input-device/input.actions.js";
import RegisterTimeForm from "../register-time-form/RegisterTimeForm";

import "./TaskTimeResult.css";

class TaskTimeResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: "", //message shown if registering time is succesful/failed
      registerFormHidden: true, //shows the choice box for input device before registering time results
    };
  }

  //send data as post request to register time result into database
  handleRegister = () => {
    fetch("https://mmi-experiment.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputDevice: this.props.inputDevice,
        task1: this.props.dragDropTime,
        task2: this.props.copyUrlTime,
        task3: this.props.copyTextBlockTime,
        task4: this.props.scrollVerticalTime,
        task5: this.props.scrollHorizontalTime,
        task6: this.props.pointClickTime,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        if (r.msg === "true") {
          this.setState({
            isRegistered:
              "Your time results have been succesfully saved. Thank you:)",
          });
          this.setState({ registerFormHidden: true });
        } else {
          this.setState({ isRegistered: "Failed" });
        }
      });
  };

  handleChange = (e) => {//get passed to <RegisterTimeForm /> component
    //updates inputDevice on redux, values(mouse, touchpad, touchscreen)
    this.props.setInputDevice(e.target.value);
  };

  showRegisterForm = () => {
    this.setState({ registerFormHidden: false });
  };

  render() {
    const {
      dragDropTime,
      copyUrlTime,
      copyTextBlockTime,
      scrollVerticalTime,
      scrollHorizontalTime,
      pointClickTime,
    } = this.props;
    return (
      <div>
        {this.state.isRegistered.length ? (
          <div>
            <p className="reg_success_info">{this.state.isRegistered}</p>
            <Link to="/results" className="btn">
              See Results
            </Link>
          </div>
        ) : (
          <div>
            {this.state.registerFormHidden ? (
              <div>
                <h2>You have finished all tasks! :)</h2>
                <ul className="result_list">
                  <li>Drag and Drop: {dragDropTime} secs</li>
                  <li>Copy and Paste Url: {copyUrlTime} secs</li>
                  <li>Copy and Paste Text Block: {copyTextBlockTime} secs</li>
                  <li>Scroll Vertically: {scrollVerticalTime} secs</li>
                  <li>Scroll Horizontally: {scrollHorizontalTime} secs</li>
                  <li>Point and Click: {pointClickTime} secs</li>
                </ul>
                <p onClick={this.showRegisterForm} className="btn">
                  Register Results
                </p>
              </div>
            ) : (
              <div>
                <RegisterTimeForm handleChange={this.handleChange} />
                {this.props.inputDevice ? (
                  <p onClick={this.handleRegister} className="btn">
                    Register
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

function maptStateToProps(state) {
  return {
    inputDevice: state.inputDevice.inputDevice,
    dragDropTime: state.time.dragDropTime,
    copyUrlTime: state.time.copyUrlTime,
    copyTextBlockTime: state.time.copyTextBlockTime,
    scrollVerticalTime: state.time.verticalScrollTime,
    scrollHorizontalTime: state.time.horizontalScrollTime,
    pointClickTime: state.time.pointClickTime,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setInputDevice: (type) => dispatch(setInputDeviceType(type)),
});

export default connect(maptStateToProps, mapDispatchToProps)(TaskTimeResult);
