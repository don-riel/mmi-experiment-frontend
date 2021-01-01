import React from "react";

import "./ResultControls.css";

const onDownload = (type) => {
  window.open(`https://mmi-experiment.herokuapp.com/results/download/${type}`);
};

function ResultControls({ data, dataType, onHideResult, bool_hide }) {
  return (
    <div>
      {data.length ? (
        <div className ="controls">
          <p
            onClick={() => {
              onDownload(dataType);
            }}
          >
            Download as .csv file
          </p>
          <p
            onClick={() => {
              onHideResult(dataType);
            }}
          >
            {bool_hide ? "show" : "hide"}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ResultControls;
