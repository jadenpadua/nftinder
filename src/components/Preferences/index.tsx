import React,{ useContext } from "react";
import "./styles.less";
import cards from "../../asset/cards.png";
import { Typography } from "@mui/material";
import { FormControlLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import {Button,Box} from "@mui/material";
import { AppContext } from "../../context/AppContext";

const Preferences: React.FunctionComponent = () => {
  const { dispatch } = useContext(AppContext);
  const onClick = () => 
  {
    dispatch({ type: "switchGameState",payload: "cardScreen" });
  }
  return (
    <>
      <div className="pref-container">

        <div className="pref-card">
            <Typography variant="h4" gutterBottom component={"div"} 
                sx={{paddingLeft: 2, paddingTop: 4, fontFamily: "MonumentExtended-Regular", fontWeight: "bold", fontSize: 25}}>
                Preferences
            </Typography>
            <Typography variant="h5" gutterBottom component={"div"}
                sx={{paddingLeft: 2, paddingTop: 2, fontFamily: "MonumentExtended-Regular", fontSize: 25}}>
                Status
            </Typography>
            <div className="status-checkboxes">
                <FormGroup sx={{paddingLeft: 2}}>
                    <FormControlLabel control={<Checkbox />} label={<Typography sx={{fontFamily: "MonumentExtended-Regular"}}> 
                    Buy Now</Typography>} />
                    <FormControlLabel control={<Checkbox />} label={<Typography sx={{fontFamily: "MonumentExtended-Regular"}}> 
                    Auction</Typography>} />
                    <FormControlLabel control={<Checkbox />} label={<Typography sx={{fontFamily: "MonumentExtended-Regular"}}> 
                    New</Typography>} />
                </FormGroup>
            </div>
            <Typography variant="h5" gutterBottom component={"div"}
                sx={{paddingLeft: 2, paddingTop: 2, fontFamily: "MonumentExtended-Regular", fontSize: 25}}>
                Price Range
            </Typography>
            <div className="price-range-textboxes">
                <FormControl sx={{ width: 100, height: 30 }}>
                    <InputLabel htmlFor="component-outlined"><Typography sx={{fontFamily: "MonumentExtended-Regular"}}>Min</Typography></InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="Name"/>
                </FormControl>
            </div>
            <Box textAlign='center'>
               <Button 
                type="submit"
                variant="outlined"
                style={{ width: "18em", height: "3em", marginTop: "2%" }}
                sx={{
                  borderRadius: 5,
                  border: "solid black 0.25em",
                  fontSize: 20,
                  alignItems:"center",
                  color: "black",
                  fontFamily: "MonumentExtended-Regular",
                }}
                onClick = {onClick}
              >Begin</Button>
            </Box>
            
        </div>
        <img src={cards} width="850" height="850" alt="" />
      </div>
    </>
  );
};

export default Preferences;
