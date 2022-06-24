import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { Card } from "../../constants/mockCards";

/**
 * @description:
 */
type Props = { index: number}

const Bubbles = (props: Props ) => {
    const { state } = useContext(AppContext);
    const cards: Array<Card> = state.cards;
    const i: number = props.index;
    return (
        <>
            {/* Do flexbox stuff in here  */}
            <div className="card-container">
              <div className="title">
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", pl: 1.5, pt: 4.25  }}>
                  {cards[i].title}
                </Typography>
              </div>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", pl: 1.5 }}>
                {cards[i].id}
              </Typography>
              <div className="footer">
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", pl: 1, pt: 50 }}>
                    Characteristics
                </Typography>
              </div>
              <div className="bubbles-container">
                <div className="bubble">
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18, fontWeight: "bold" }}>
                      Base
                  </Typography>
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18 }}>
                      {cards[i].category}
                  </Typography>
                </div> 
                <div className="bubble">
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18, fontWeight: "bold" }}>
                      Rarity
                  </Typography>
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18 }}>
                      {cards[i].rarity}
                  </Typography>
                </div> 
                <div className="bubble">
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Size
                  </Typography>
                  <Typography variant="h4" gutterBottom sx={{ fontSize: 18 }}>
                    {cards[i].size}
                  </Typography>
                </div> 
              </div>
            </div>
        </>
    );
};

export default Bubbles;