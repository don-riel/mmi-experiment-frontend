import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <h1 className="title">Mouse vs Touchpad vs Touchscreen</h1>
      <div className="info">
        <p>
          This website was made as tool for an experiment in my Human Machine
          Interaction Course. The goal was to gain quantitative data to evaluate
          what task takes more time to perform on three different input devices{" "}
          <i>(mouse, touchpad, touchscreen)</i>.
        </p>
        <p>
          It was mainly designed to work on desktops/laptops and on an
          iPad/tablet. Some of tasks are not designed to work an small mobile
          devices.
        </p>
      </div>

      <div className="choice_box">
        <div className="choice_item choice_left">
          <p>
            Try and find out how long it will take for you to finish the
            experiment tasks. You can also send your results after :)
          </p>
          <Link to="/reminder">I want to try!</Link>
        </div>
        <div className="choice_item choice_right">
          <p>The results can be viewed here.</p>
          <br></br>
          <Link to="/results">View Results</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
