import React from "react";
import { Typography } from "@mui/material";
import "./styles.less";

/**
 * @description: Entrypoint of our application
 */
const Header = () => {
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

      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        4 cards remaining
      </Typography>
    </div>
  );
};

export default Header;
