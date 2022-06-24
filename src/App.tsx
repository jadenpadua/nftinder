import React, { useContext } from "react";

import CardStack from "./components/CardStack";
import Header from "./components/Header";
import Splash from "./components/Splash";
import { AppContext } from "./context/AppContext";
import "./global.less";

/**
 * @description: Entrypoint of our application
 */
const App = () => {
  const { state } = useContext(AppContext);
  const gameState: string = state.gameState;

  let content = <div></div>;

  switch (gameState) {
    case "cardScreen":
      content = <CardStack />;
      break;
    case "splash":
      content = <Splash />;
      break;
    default:
      content = <CardStack />;
      break;
  }

  return (
    <div className="app-container">
      <Header />
      {content}
    </div>
  );
};

export default App;
