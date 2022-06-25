import React from "react";
import "./styles.less";
import cards from "../../asset/cards.png";

const Preferences: React.FunctionComponent = () => {
    return (
        <>
        <div className="pref-container">
            <div className="pref-card">

            </div>

            <div className="image-container">
                <img src={cards} width="110%" height="110%" alt="" />
            </div>
        </div>
        </>
    )
}

export default Preferences;