import React,{ useContext } from "react";
import "./styles.less";
import CardStack from "../CardStack";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AppContext } from "../../context/AppContext";
import { mockCards } from "../../constants/mockCards";
import { mockResults } from "../../constants/mockResults";
import { Typography } from "@mui/material";

const Results: React.FunctionComponent = () => {
  const { state } = useContext(AppContext);
  const data = [{
    name: 'Page A',
    uv: 40,
  },
  {
    name: 'Page B',
    uv: 30,
  },
  {
    name: 'Page C',
    uv: 20,
  },
  {
    name: 'Page D',
    uv: 10,
  },
 ];
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
        <ResponsiveContainer width="100%" height="30%">
            <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name"  style={{fontSize: '0.8rem' }}/>
              <YAxis  style={{fontSize: '0.8rem'}}/>
              <Tooltip />
            </LineChart>
          </ResponsiveContainer> 
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
