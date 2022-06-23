import React from "react";

import CardStack from "./components/CardStack";
import "./global.less";

/**
 * @description: Entrypoint of our application
 */
const App = () => {
  return (
    <div className="app-container">
      <CardStack />
    </div>
  );
};

export default App;
