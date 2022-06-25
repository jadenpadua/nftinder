import React from "react";
import "./styles.less";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
const Splash: React.FunctionComponent = () => {
    return (
      <div className="splash-container">
        <div className="flex-3">
          <Typography
            variant="h1"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold",
            fontFamily: "MonumentExtended-Regular", }}
          >
            Find Your 
          </Typography>
        </div>
        <div className="flex-3">
          <Typography
            variant="h1"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold",
            fontFamily: "MonumentExtended-Regular", }}
          >
            Perfect NFT
          </Typography>
        </div>
        <Button 
            type="submit"
            variant ="outlined"
            style={{maxWidth: '13em', minWidth: '9em'}}
            sx={ { 
                borderRadius: 5 ,
                border: "solid black 0.25em",
                fontSize: 30,
                color: "black",
                fontFamily: "MonumentExtended-Regular",} 
            }
            >Start Demo</Button>
      </div>
    );
  };
  
  export default Splash;
  
