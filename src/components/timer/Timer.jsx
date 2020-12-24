import React, { useEffect, useState } from "react";
import useInterval from "./interval.js";

import "./Timer.css"

function Timer({
  updateTaskTime,
  isTaskDone,
  isTimerRunning,
  setIsTimerRunning,
}) {
  const [prevTime, setPrevTime] = useState(null);
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(60000);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isTaskDone) {

      setIsTimerRunning(false);
      //compute comletion time for a task
      let secs = 60 - timer.seconds;
      let ms = 1000 - timer.milliseconds;
      let total = (secs + ms / 1000).toFixed(2);
      updateTaskTime(total);
      setTimeInMilliseconds(60000);
      setPrevTime(null)
    }
  }, [timer, updateTaskTime, isTaskDone, setIsTimerRunning]);

  const interval = 10;
  useInterval(
    () => {
      let prev = prevTime ? prevTime : Date.now();
      let diffTime = Date.now() - prev;
      let newMilliTime = timeInMilliseconds - diffTime;
      let newTime = toTime(newMilliTime);
      setPrevTime(Date.now());
      setTimeInMilliseconds(newMilliTime);
      setTimer(newTime);
    },
    isTimerRunning ? interval : null
  );

  const toTime = (time) => {
    let milliseconds = parseInt(time % 1000),
      seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor(time / (1000 * 60));

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return {
      milliseconds,
      seconds,
      minutes,
    };
  };

  return (
    <div className="timer">
      {isTimerRunning ? (
        <p>{`${timer.minutes}:${timer.seconds}:${timer.milliseconds}`}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Timer;
