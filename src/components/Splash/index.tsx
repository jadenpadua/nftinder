import React from "react";
import "./styles.less";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
import triangle from '../../asset/bg-triangle.png';
import cards from '../../asset/cards.png';

const Splash: React.FunctionComponent = () => {
    return (
      <div className="whole-splash">
        <div className="splash-container">
          <div className="flex-3">
            <Typography
              variant="h1"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold",
              fontFamily: "MonumentExtended-Regular", }}
            >
              Find Your Perfect NFT
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
        <div className="background">
          <img src={cards} width="100%" height="100%" alt=""/>
        </div>
      </div>
        
    );
  };
  
  export default Splash;
  
