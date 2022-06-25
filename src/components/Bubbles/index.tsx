import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { Card } from "../../constants/mockCards";

/**
 * @description:
 */
type Props = { index: number };

const Bubbles = (props: Props) => {
  const { state } = useContext(AppContext);
  const cards: Array<Card> = state.cards;
  const i: number = props.index;
  return (
    <>
      {/* Do flexbox stuff in here  */}
      <div className="card-container">
        <div className="title">
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              pl: 1.5,
              pt: 4.25,
              fontFamily: "MonumentExtended-Regular",
            }}
          >
            {cards[i].title}
          </Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            pl: 1.5,
            fontFamily: "MonumentExtended-Regular",
          }}
        >
          {cards[i].id}
        </Typography>
        <div className="footer">
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              pl: 1,
              pt: 47,
              fontFamily: "MonumentExtended-Regular",
            }}
          >
            Characteristics
          </Typography>
        </div>
        <div className="bubbles-container">
          <div className="bubble">
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Base
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "MonumentExtended-Regular",
                fontWeight: 100,
              }}
            >
              {cards[i].category}
            </Typography>
          </div>
          <div className="bubble">
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Rarity
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontFamily: "MonumentExtended-Regular" }}
            >
              {cards[i].rarity}
            </Typography>
          </div>
          <div className="bubble">
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Size
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontFamily: "MonumentExtended-Regular" }}
            >
              {cards[i].size}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bubbles;
