import React from "react";

import CardStack from "./components/CardStack";
import Header from "./components/Header";
import "./global.less";

/**
 * @description: Entrypoint of our application
 */
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <CardStack />
    </div>
  );
};

export default App;
