import { AppBar, Badge, Box, Button, styled, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { BsCart4 } from "react-icons/bs";
import { useCartItems } from "../../redux";

const StyledAppBar = styled(AppBar)(() => ({
  background: "#fff",
  color: "#103B66",
  width: "calc(100% - 255px)",
  padding: "0 100px 0 30px",
  display: "flex",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    width: "20px",
    height: "20px",
    color: "#fff",
    background: "#F33451",
    top: "2px",
    right: "-3px",
  },
}));

export const Header = () => {
  const cartItems = useCartItems();
  const cartItemsQuantity = cartItems.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">home</Link>
          <SearchBar />
          <UserIcon />
          <Button>
            <StyledBadge badgeContent={cartItemsQuantity}>
              <BsCart4 size={30} />
            </StyledBadge>
          </Button>
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
};
