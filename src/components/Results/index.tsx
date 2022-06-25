import React from "react";
import "./styles.less";
import CardStack from "../CardStack";

const Results: React.FunctionComponent = () => {
  return (
    <>
      <div className="res-container">
        <div className="res-card">Results</div>
        <div className="card-stack-container">
          <CardStack />
        </div>
      </div>
    </>
  );
};

export default Results;
