import React from "react";
import "./styles.less";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import cards from "../../asset/cards.png";

const Splash: React.FunctionComponent = () => {
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
        >
          Start Demo
        </Button>
      </div>
      <div className="background">
        <img src={cards} width="100%" height="100%" alt="" />
      </div>
    </div>
  );
};

export default Splash;
