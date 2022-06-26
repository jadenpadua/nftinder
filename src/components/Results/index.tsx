import React,{ useContext } from "react";
import "./styles.less";
import CardStack from "../CardStack";
import { AppContext } from "../../context/AppContext";
import { mockCards } from "../../constants/mockCards";
import { mockResults } from "../../constants/mockResults";
import { Typography } from "@mui/material";

const Results: React.FunctionComponent = () => {
  const { state } = useContext(AppContext);

  const results = mockResults.results;
  const cards = mockCards.cards;
  const rights: Array<Number> = state.swipeRights;
  const cardMap = new Map();
  const resultsMap = new Map();

  for (const c in cards){
    cardMap.set(cards[c].index, [cards[c].id, cards[c]]);
  }

  for (const c in results){
    resultsMap.set(results[c].id, results[c]);
  }

  const resultsToRender = [];
  const cardsToRender = [];
  for (let i in rights){
    resultsToRender.push(resultsMap.get(cardMap.get(rights[i])[0]));
    cardsToRender.push(cardMap.get(rights[i])[1]);
  }
  state.cards = cardsToRender;

  return (
    <>
      <div className="res-container">
        <div className="res-card">
        <Typography variant="h4" gutterBottom component={"div"}
            sx={{paddingLeft: 2, paddingTop: 4, fontFamily: "MonumentExtended-Regular", fontWeight: "bold", fontSize: 25}}>
            Results
        </Typography>
        <Typography variant="h5" gutterBottom component={"div"}
            sx={{paddingLeft: 2, paddingTop: 2, fontFamily: "MonumentExtended-Regular", fontSize: 25}}>
            Description
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontFamily: "MonumentExtended-Regular",
            fontWeight: 100,
          }}
        >
          {resultsToRender[0].description}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            pl: 1.5,
            fontFamily: "MonumentExtended-Regular",
          }}
        >
          Price History
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            pl: 1.5,
            fontFamily: "MonumentExtended-Regular",
          }}
        >
          {resultsToRender[0].blockChain}
          {resultsToRender[0].fees}
          {resultsToRender[0].tokenStandard}
        </Typography>
        </div>
        <div className="card-stack-container">
          <CardStack />
        </div>
      </div>
    </>
  );
};

export default Results;
