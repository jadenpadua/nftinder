import React from "react";
import cards from "../../asset/cards.png";

const Results: React.FunctionComponent = () => {
  return (
    <>
      <div className="pref-container">
        <div className="pref-card">Results</div>
        <img src={cards} width="850" height="850" alt="" />
      </div>
    </>
  );
};

export default Results;
