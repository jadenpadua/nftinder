import React from "react";

import CardStack from "./components/CardStack";
import Header from "./components/Header";
import Splash from "./components/Splash";
import "./global.less";

/**
 * @description: Entrypoint of our application
 */
const App = () => {
  return (
    <div className="app-container">
      
      <Splash/>
      <Header />
      <CardStack />
    </div>
  );
};

export default App;
