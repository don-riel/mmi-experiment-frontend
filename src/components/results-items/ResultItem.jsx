import React from "react";
import ResultList from "../results-list/ResultList";

function ResultItem({ result_data, inputDevice, bool_fetch }) {
  return (
    <div>
      {result_data.length ? (
        <ResultList
          data={result_data}
          input={inputDevice === "mouse" ? inputDevice : ""}
        />
      ) : (
        <p>
          {bool_fetch
            ? "Failed to fetched data. Pleses try again later!"
            : "Fetching data..."}
        </p>
      )}
    </div>
  );
}

export default ResultItem;
