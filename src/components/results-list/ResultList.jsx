import React from "react";

import "./ResultsList.css";

const ResultList = ({ data, input }) => {
  const length = data.length - 1;
  return (
    <div className="results_lists">
      {input
        ? data.map((item, i) => (
            <ul key={i} className={i === length ? "current" : ""}>
              {" "}
              {/*current result is highlighted on front end */}
              <li>{item.task1}</li>
              <li>{item.task2}</li>
              <li>{item.task3}</li>
              <li>{item.task4}</li>
              <li>{item.task5}</li>
              <li>{item.task6}</li>
            </ul>
          ))
        : data.map((item, i) => (
            <ul key={i}>
              <li>{item.task1}</li>
              <li>{item.task2}</li>
              <li>{item.task3}</li>
              <li>{item.task4}</li>
              <li>{item.task5}</li>
              <li>{item.task6}</li>
            </ul>
          ))}
    </div>
  );
};

export default ResultList;
