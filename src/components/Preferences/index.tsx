import React, { useContext, useState } from "react";
import "./styles.less";
import cards from "../../asset/Preferences-image.png";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControl } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Button, Box } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const Preferences: React.FunctionComponent = () => {
  const { dispatch } = useContext(AppContext);

  const categories: Array<string> = [
    "Apes",
    "Cats",
    "Pirates",
    "Music",
    "Memes",
  ];
  const [activeCategories, setActiveCategories] =
    useState<string[]>(categories);
  const onClick = () => {
    dispatch({ type: "switchGameState", payload: "cardScreen" });
  };

  /**
   * @description: multi select dropdown on change event
   */
  const handleChange = (event: SelectChangeEvent<typeof activeCategories>) => {
    const {
      target: { value },
    } = event;
    setActiveCategories(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <div className="pref-container">
        <div className="pref-card">
          <Typography
            variant="h4"
            gutterBottom
            component={"div"}
            sx={{
              paddingLeft: 2,
              paddingTop: 4,
              fontFamily: "MonumentExtended-Regular",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Preferences
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component={"div"}
            sx={{
              paddingLeft: 2,
              paddingTop: 2,
              fontFamily: "MonumentExtended-Regular",
              fontSize: 25,
            }}
          >
            Status
          </Typography>
          <div className="status-checkboxes">
            <FormGroup sx={{ paddingLeft: 2 }}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography sx={{ fontFamily: "MonumentExtended-Regular" }}>
                    Buy Now
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography sx={{ fontFamily: "MonumentExtended-Regular" }}>
                    Auction
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography sx={{ fontFamily: "MonumentExtended-Regular" }}>
                    New
                  </Typography>
                }
              />
            </FormGroup>
          </div>
          <Typography
            variant="h5"
            gutterBottom
            component={"div"}
            sx={{
              paddingLeft: 2,
              paddingTop: 2,
              fontFamily: "MonumentExtended-Regular",
              fontSize: 25,
            }}
          >
            Price Range
          </Typography>
          <div className="price-range-textboxes">
            <FormControl sx={{ paddingLeft: 2 }}>
              <TextField
                type="search"
                sx={{ width: 100, height: 30 }}
                size="small"
                label={
                  <Typography sx={{ fontFamily: "MonumentExtended-Regular" }}>
                    Min
                  </Typography>
                }
              ></TextField>
            </FormControl>
            <Typography
              sx={{
                fontFamily: "MonumentExtended-Regular",
                fontSize: 20,
                marginTop: 4,
                paddingLeft: 2,
              }}
            >
              to
            </Typography>
            <FormControl sx={{ width: 100, height: 30, paddingLeft: 2 }}>
              <TextField
                type="search"
                size="small"
                label={
                  <Typography sx={{ fontFamily: "MonumentExtended-Regular" }}>
                    Max
                  </Typography>
                }
              ></TextField>
            </FormControl>
          </div>
          <div className="categoryTitle">
            <Typography
              variant="h5"
              gutterBottom
              component={"div"}
              sx={{
                paddingLeft: 2,
                paddingTop: 2,
                fontFamily: "MonumentExtended-Regular",
                fontSize: 25,
              }}
            >
              Categories
            </Typography>
          </div>
          <Box ml={2}>
            <Select
              sx={{ width: "95%" }}
              labelId="demo-multiple-chip-checkbox-label"
              id="demo-multiple-chip-checkbox"
              multiple
              value={activeCategories}
              onChange={handleChange}
              input={<OutlinedInput id="categories" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <div key={value} className="chip-bubble">
                      <Typography
                        variant="body1"
                        gutterBottom
                        component={"div"}
                        sx={{
                          fontFamily: "MonumentExtended-Regular",
                          fontSize: 15,
                        }}
                      >
                        {value}
                      </Typography>
                    </div>
                  ))}
                </Box>
              )}
            >
              {categories.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box ml={2}>
            <Typography
              sx={{ color: "#9E9E9E" }}
              gutterBottom
              variant="body2"
              component="div"
            >
              All categories are selected by default
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button
              type="submit"
              variant="outlined"
              style={{ width: "16em", height: "2.5em", marginTop: "3%" }}
              sx={{
                borderRadius: 3,
                border: "solid black 0.25em",
                fontSize: 20,
                alignItems: "center",
                color: "black",
                fontFamily: "MonumentExtended-Regular",
              }}
              onClick={onClick}
            >
              Begin
            </Button>
          </Box>
        </div>
        <img src={cards} width="850" height="850" alt="" />
      </div>
    </>
  );
};

export default Preferences;
