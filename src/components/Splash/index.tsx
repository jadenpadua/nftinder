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
            sx={{ fontWeight: "bold" }}
          >
            Find Your 
          </Typography>
        </div>
        <div className="flex-3">
          <Typography
            variant="h1"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Perfect NFT
          </Typography>
        </div>
        <div className="flex-3">
            <Button 
            type="submit"
            color ="secondary"
            variant ="outlined"
            style={{maxWidth: '27em', maxHeight: '6em', minWidth: '27em', minHeight: '6em'}}
            sx={ { borderRadius: 5 } }
            >Start Demo</Button>
        </div>
        
      </div>
    );
  };
  
  export default Splash;
  
