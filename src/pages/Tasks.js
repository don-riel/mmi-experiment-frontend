import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Timer from "../components/timer/Timer.jsx";
import TaskItem from "../components/TaskItem";
import TaskDescription from "../components/task-description/TaskDescription.jsx";
import {
  setDragDropTime,
  setCopyUrlTime,
  setCopyTextBlockTime,
  setVerticalScrollTime,
  setHorizontalScrollTime,
  setPointClickTime,
} from "../redux/time/time.actions";

import "./Tasks.css";

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTaskDone: false /*subscribed by <Timer /> component, when "true" Timer invokes updateTaskTime()*/,
      isTimerRunning: false,
      taskNumber: 1,
    };
  }

  /* REDUX state handler */
  //registers completion time for a task in the redux store
  updateTaskTime = (time) => {
    switch (this.state.taskNumber) {
      case 1:
        this.props.registerDragDropTaskTime(time);
        break;
      case 2:
        this.props.registerCopyUrlTaskTime(time);
        break;
      case 3:
        this.props.registerCopyTextBlockTaskTime(time);
        break;
      case 4:
        this.props.registeScrollVerticalTaskTime(time);
        break;
      case 5:
        this.props.registerScrollHorizontalTaskTime(time);
        break;
      case 6:
        this.props.registerPointClickTime(time);
        break;
      default:
        break;
    }
  };

  /*==================*/

  /* LOCAL STATE handlers */

  //invoked inside each task component when the task is completed
  handleIsTaskDone = () => {
    this.setState({ isTaskDone: true });
    this.setIsTimerRunning(false);
  };

  setIsTimerRunning = (bool) => {
    this.setState({ isTimerRunning: bool });
  };

  handleStartTimer = () => {
    this.setIsTimerRunning(true);
  };

  handleNextTask = () => {
    //increment taskNumber state to render next task item from <TaksItem/> component
    this.setState({ taskNumber: this.state.taskNumber + 1 });

    //resets isTaskDone  state
    this.setState({ isTaskDone: false });
  };

  /*========================*/

  render() {
    const { taskNumber, isTaskDone, isTimerRunning } = this.state;

    return (
      <div className="task-container">
        <Link to="/" className="link home_link">
          Home
        </Link>

        {!isTaskDone ? (
          <TaskDescription taskNumber={taskNumber} />
        ) : (
          <p className="task_done_msg">Well Done. Proceed to the next task!</p>
        )}

        {isTaskDone 
          ? 
        ( //show "Next Task" button when a user finishes a task
            <p onClick={this.handleNextTask} className="btn next_task_btn">
              Next Task
            </p>
          ) : isTimerRunning ? (
            ""
          ) : taskNumber === 7 ? ( //hide "Start Timer" button when all tasks are done"
            ""
        ) : (
          <p onClick={this.handleStartTimer} className="btn start_timer_btn">
            Start Timer
          </p>
        )}

        <Timer
          updateTaskTime={this.updateTaskTime}
          isTaskDone={isTaskDone}
          isTimerRunning={isTimerRunning}
          setIsTimerRunning={this.setIsTimerRunning}
        />

        <TaskItem
          taskNumber={taskNumber} // component renders a task based on task number
          handleIsTaskDone={this.handleIsTaskDone}
          isTimerRunning={isTimerRunning}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dragDroptime: state.time.dragDropTime,
    copyUrlTime: state.time.copyUrlTime,
    copyTextBlockTime: state.time.copyTextBlockTime,
    scrollVerticalTime: state.time.verticalScrollTime,
    scrollHorizontalTime: state.time.horizontalScrollTime,
    pointClickTime: state.time.pointClickTime,
  };
};

const mapDispatchToProps = (dispatch) => ({
  registerDragDropTaskTime: (time) => dispatch(setDragDropTime(time)),
  registerCopyUrlTaskTime: (time) => dispatch(setCopyUrlTime(time)),
  registerCopyTextBlockTaskTime: (time) => dispatch(setCopyTextBlockTime(time)),
  registeScrollVerticalTaskTime: (time) =>
    dispatch(setVerticalScrollTime(time)),
  registerScrollHorizontalTaskTime: (time) =>
    dispatch(setHorizontalScrollTime(time)),
  registerPointClickTime: (time) => dispatch(setPointClickTime(time)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
