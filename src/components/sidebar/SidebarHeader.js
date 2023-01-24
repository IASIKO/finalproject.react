import { Link } from "react-router-dom";
import React from "react";
import { styled, Toolbar } from "@mui/material";

export const SidebarHeader = () => {
  const StyledSideBarHeader = styled(Toolbar)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  }));

  return (
    <div>
      <StyledSideBarHeader>
        <Link style={{ textDecoration: "none", width: "250px" }} to="/">
          COMPANY LOGO
        </Link>
      </StyledSideBarHeader>
      <StyledSideBarHeader>
        <Link style={{ textDecoration: "none", width: "250px" }} to="/">
          Home
        </Link>
      </StyledSideBarHeader>
    </div>
  );
};
