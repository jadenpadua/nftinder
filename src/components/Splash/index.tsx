import React,{ useContext } from "react";
import "./styles.less";
import cards from "../../asset/cards.png";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
import { AppContext } from "../../context/AppContext";
const Splash: React.FunctionComponent = () => {
  const { dispatch } = useContext(AppContext);
  const onClick = () => 
  {
    dispatch({ type: "switchGameState",payload: "pref" });
  }

  return (
    <div className="whole-splash">
    <div className="splash-container">
      <Typography
        variant="h1"
        gutterBottom
        component="div"
        sx={{
          fontWeight: "bold",
          fontFamily: "MonumentExtended-Regular",
          fontSize: 80,
        }}
      >
        Find Your Perfect NFT
      </Typography>
        <Button 
              type="submit"
              variant="outlined"
              style={{ width: "13em", height: "3em", marginTop: "2%" }}
              sx={{
                borderRadius: 5,
                border: "solid black 0.25em",
                fontSize: 20,
                color: "black",
                fontFamily: "MonumentExtended-Regular",
              }}
              onClick = {onClick}
            >Start Demo</Button>
      </div>
      <div className="background">
        <img src={cards} width="100%" height="100%" alt="" />
      </div>
    </div>
  );
};

export default Splash;
