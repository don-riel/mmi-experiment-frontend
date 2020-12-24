import React from "react";
import { Link } from "react-router-dom";
import "./Reminder.css";

function Reminder() {
  return (
    <div className="reminder_container">
      <Link to="/" className="link home_link">Home</Link>
      <div className="reminder_info">
        <p>
          Always read the description of each tasks. Remember to click the{" "}
          <i>"Start Timer"</i> button before doing the task.
        </p>
        <small>(Can only be performed on dekstop/laptop or iPad/tablet.)</small>

        <Link to="/tasks" className="link tasks_link">I'm ready!</Link>
      </div>
    </div>
  );
}

export default Reminder;
