import React from "react";
import "./styles.less";
import CardStack from "../CardStack";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Results: React.FunctionComponent = () => {
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
  return (
    <>
      <div className="res-container">
        <div className="res-card">Results
          <ResponsiveContainer width="100%" height="30%">
            <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name"  style={{fontSize: '0.8rem' }}/>
              <YAxis  style={{fontSize: '0.8rem'}}/>
              <Tooltip />
            </LineChart>
          </ResponsiveContainer> 
        </div>
        <div className="card-stack-container">
          <CardStack />
        </div>
      </div>
    </>
  );
};

export default Results;
