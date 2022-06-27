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
  const currCard = 1;

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
  for (const i in rights){
    resultsToRender.push(resultsMap.get(cardMap.get(rights[i])[0]));
    cardsToRender.push(cardMap.get(rights[i])[1]);
  }
  state.cards = cardsToRender;

  const data = [];
  const prices = resultsToRender[currCard].priceHistory;
  for (const i in prices){
    data.push({"Year": "Year" + i.toString(), "Price": prices[i]});
  }


  return (
    <>
      <div className="res-container">
        <div className="res-card">
        <div className="results">
          <Typography variant="h4" gutterBottom component={"div"}
              sx={{paddingLeft: 2, paddingTop: 4, fontFamily: "MonumentExtended-Regular", fontWeight: "bold", fontSize: 25}}>
              Results
          </Typography>
        </div>
        <div className= "description">
          <div className="descript_title">
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                pl: 1.5,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Description
            </Typography>
          </div>
          <div className="description_body">
            <Typography
              variant="body1"
              gutterBottom component={"div"}
              sx={{
                paddingLeft: 2,
                fontFamily: "MonumentExtended-Regular",
                fontWeight: 100,
              }}
            >
              {resultsToRender[currCard].description}
            </Typography>
          </div>
        </div>
        <div className="history">
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
        </div>
        <ResponsiveContainer width="100%" height="30%">
            <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="Price" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="Year"  style={{fontSize: '0.8rem' }}/>
              <YAxis  style={{fontSize: '0.8rem'}}/>
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        <div className="description">
          <div className="description_title">
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                pl: 1.5,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Details
            </Typography>
          </div>
          <div className="blockhain" style={{display:"flex"}}>
              <Typography
                variant="body1"
                gutterBottom
                noWrap
                sx={{
                  pl: 1.5,
                  fontFamily: "MonumentExtended-Regular",
                }}
              >
                Blockchain
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                noWrap
                sx={{
                  pl: 1.5,
                  marginLeft:16,
                  fontFamily: "MonumentExtended-Regular",
                }}
              >
                {resultsToRender[currCard].blockChain}
              </Typography>
          </div>
          <div className="fee" style={{display:"flex"}}>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              sx={{
                paddingLeft: 2,
                pl: 1.5,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Creator Fees
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              sx={{
                pl: 1.5,
                marginLeft:18,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              {resultsToRender[currCard].fees} %
            </Typography>
          </div>
          <div className="standard" style={{display:"flex"}}>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              sx={{
                paddingLeft: 2,
                pl: 1.5,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              Token Standard
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              sx={{
                pl: 1.5,
                marginLeft:8,
                fontFamily: "MonumentExtended-Regular",
              }}
            >
              {resultsToRender[currCard].tokenStandard}
            </Typography>
          </div>

        </div>
        </div>
        <div className="card-stack-container">
          <CardStack />
        </div>
      </div>
    </>
  );
};

export default Results;
