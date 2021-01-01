import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ResultItem from "../components/results-items/ResultItem.jsx";
import ResultControls from "../components/result-controls/ResultControls";

import "./Results.css";

function Results({ inputDevice }) {
  const [mouseResults, setMouseResults] = useState([]);
  const [touchpadResults, setTouchpadResults] = useState([]);
  const [touchscreenResults, setTouchscreenResults] = useState([]);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [hideMouseResults, setHideMouseResults] = useState(false);
  const [hideTouchpadResults, setHideTouchpadResults] = useState(false);
  const [hideTouchscreenResults, setHideTouchscreenResults] = useState(false);

  const fetchResults = () => {
    fetch("https://mmi-experiment.herokuapp.com/results/mouse") //fetch mouse results data
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.forEach((element) => {
          element.forEach((time) => {
            setMouseResults((mouseResults) => [...mouseResults, time]);
          });
        });
      })
      .then(() => {
        fetch("https://mmi-experiment.herokuapp.com/results/touchpad") //fetch touchpad results data
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            res.forEach((element) => {
              element.forEach((time) => {
                setTouchpadResults((touchpadResults) => [
                  ...touchpadResults,
                  time,
                ]);
              });
            });
          });
      })
      .then(() => {
        fetch("https://mmi-experiment.herokuapp.com/results/touchscreen") //fetch touchscreen results data
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            res.forEach((element) => {
              element.forEach((time) => {
                setTouchscreenResults((touchscreenResults) => [
                  ...touchscreenResults,
                  time,
                ]);
              });
            });
          });
      })
      .catch(() => {
        setFetchFailed(true);
      });
  };

  
  //toggle to hide/show results list
  const onHideResult = (type) => {
    if (type === "mouse") {
      setHideMouseResults(!hideMouseResults);
    } else if (type === "touchpad") {
      setHideTouchpadResults(!hideTouchpadResults);
    } else {
      setHideTouchscreenResults(!hideTouchscreenResults);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="results">
      <div className="back_link">
        <Link to="/" className="link">{`<< Back`}</Link>
      </div>

      <div id="title" className="results-title">
        <ul>
          <li>Drag</li>
          <li>Copy/Paste Url</li>
          <li>Copy/Paste Text</li>
          <li>Scroll Vertical</li>
          <li>Scroll Horizontal</li>
          <li>Point/Click</li>
        </ul>
      </div>

      {/* show Mouse results */}
      <div className="result-desc">
        <h2>Mouse</h2>
        <ResultControls //hide/show and download .csv buttons
          data={mouseResults}
          dataType="mouse"
          onHideResult={onHideResult}
          bool_hide={hideMouseResults}
        />
      </div>
      {!hideMouseResults ? (
        <div className="results-list">
          <ResultItem
            result_data={mouseResults}
            inputDevice={inputDevice}
            bool_fetch={fetchFailed}
          />
        </div>
      ) : (
        ""
      )}

      {/* show Touchpad results */}
      <div className="result-desc">
        <h2>Touchpad</h2>
        <ResultControls //hide/show and download .csv
          data={touchpadResults}
          dataType="touchpad"
          onHideResult={onHideResult}
          bool_hide={hideTouchpadResults}
        />
      </div>
      {!hideTouchpadResults ? (
        <div className="results-list">
          <ResultItem
            result_data={touchpadResults}
            inputDevice={inputDevice}
            bool_fetch={fetchFailed}
          />
        </div>
      ) : (
        ""
      )}

      {/* show Touchscreen results */}
      <div className="result-desc">
        <h2>Touchscreen</h2>
        <ResultControls //hide/show and download .csv buttons
          data={touchscreenResults}
          dataType="touchscreen"
          onHideResult={onHideResult}
          bool_hide={hideTouchscreenResults}
        />
      </div>
      {!hideTouchscreenResults ? (
        <div className="results-list">
          <ResultItem
            result_data={touchscreenResults}
            inputDevice={inputDevice}
            bool_fetch={fetchFailed}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    inputDevice: state.inputDevice.inputDevice,
  };
};

export default connect(mapStateToProps, null)(Results);
