import React, { useContext } from "react";
import { Typography } from "@mui/material";
import "./styles.less";
import { AppContext } from "../../context/AppContext";

/**
 * @description: Entrypoint of our application
 */
const Header: React.FunctionComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="header-container">
      <div className="flex-2">
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          nfTIND
        </Typography>
      </div>

      {state.gameState === "cardScreen" ? (
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {state.cardsRemaining} cards remaining
        </Typography>
      ) : null}
    </div>
  );
};

export default Header;
