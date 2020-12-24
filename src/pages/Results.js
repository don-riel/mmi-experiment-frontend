import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ResultList from "../components/results-list/ResultList.jsx";

import "./Results.css";

function Results({ inputDevice }) {
  const [mouseResults, setMouseResults] = useState([]);
  const [touchpadResults, setTouchpadResults] = useState([]);
  const [touchscreenResults, setTouchscreenResults] = useState([]);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [hideMouseResults, setHideMouseResults] = useState(false);
  const [hideTouchpadResults, setHideTouchpadResults] = useState(false);
  const [hideTouchscreenResults, setHideTouchscreenResults] = useState(false);

  const getMouseResults = () => {
    fetch("https://mmi-experiment.herokuapp.com/results/mouse")
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
      .catch(() => {
        setFetchFailed(true);
      });
  };

  const getTouchPadResults = () => {
    fetch("https://mmi-experiment.herokuapp.com/results/touchpad")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.forEach((element) => {
          element.forEach((time) => {
            setTouchpadResults((touchpadResults) => [...touchpadResults, time]);
          });
        });
      })
      .catch(() => {
        setFetchFailed(true);
      });
  };

  const getTouchscreenResults = () => {
    fetch("https://mmi-experiment.herokuapp.com/results/touchscreen")
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
      })
      .catch(() => {
        setFetchFailed(true);
      });
  };

  const onDownload = (type) => {
    window.open(`https://mmi-experiment.herokuapp.com/results/download/${type}`);
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
    getMouseResults();
    getTouchPadResults();
    getTouchscreenResults();
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

        <div className="dl">
          <p onClick={() => {
            onDownload("mouse")
          }}>Download as .csv file</p>
          <p
            onClick={() => {
              onHideResult("mouse");
            }}
          >
            {hideMouseResults ? "show" : "hide"}
          </p>
        </div>
      </div>
      {!hideMouseResults ? (
        <div className="results-list">
          {mouseResults.length ? (
            <div>
              <ResultList
                data={mouseResults}
                input={inputDevice === "mouse" ? inputDevice : ""}
              />
            </div>
          ) : (
            <p>
              {fetchFailed
                ? "Failed to fetched data. Pleses try again later!"
                : "Fetching data..."}
            </p>
          )}
        </div>
      ) : (
        ""
      )}

      {/* show Touchpad results */}
      <div className="result-desc">
        <h2>Touchpad</h2>
        <div className="dl">
          <p onClick={() => {
            onDownload("touchpad")
          }}>Download as .csv file</p>
          <p
            onClick={() => {
              onHideResult("touchpad");
            }}
          >
            {hideTouchpadResults ? "show" : "hide"}
          </p>
        </div>
      </div>
      {!hideTouchpadResults ? (
        <div className="results-list">
          {touchpadResults.length ? (
            <div>
              <ResultList
                data={touchpadResults}
                input={inputDevice === "touchpad" ? inputDevice : ""}
              />
            </div>
          ) : (
            <p>
              {fetchFailed
                ? "Failed to fetched data. Pleses try again later!"
                : "Fetching data..."}
            </p>
          )}
        </div>
      ) : (
        ""
      )}

      {/* show Touchscreen results */}
      <div className="result-desc">
        <h2>Touchscreen</h2>
        <div className="dl">
          <p onClick={() => {
            onDownload("touchscreen")
          }}>Download as .csv file</p>
          <p
            onClick={() => {
              onHideResult("touchscreen");
            }}
          >
            {hideTouchscreenResults ? "show" : "hide"}
          </p>
        </div>
      </div>
      {!hideTouchscreenResults ? (
        <div className="results-list">
          {touchscreenResults.length ? (
            <div>
              <ResultList
                data={touchscreenResults}
                input={inputDevice === "touchscreen" ? inputDevice : ""}
              />
            </div>
          ) : (
            <p>
              {fetchFailed
                ? "Failed to fetched data. Please try again later!"
                : "Fetching data..."}
            </p>
          )}
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
