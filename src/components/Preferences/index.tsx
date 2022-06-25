import React from "react";
import "./styles.less";
import cards from "../../asset/cards.png";

const Preferences: React.FunctionComponent = () => {
  return (
    <>
      <div className="pref-container">
        <div className="pref-card">Preferences</div>
        <img src={cards} width="850" height="850" alt="" />
      </div>
    </>
  );
};

export default Preferences;
