import { Box, Button, Drawer, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { saveCart, useCartItems, useUserInfo } from "../../redux";
import { Typography } from "../shared";
import { clearCart } from "../../redux";

const StyledBox = styled(Box)(() => ({
  width: 300,
  display: "flex",
  justifyContent: "space-around",
}));

export const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useCartItems();
  const userInfo = useUserInfo();
  const dispatch = useDispatch();
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right">
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id } = product;
        return (
          <StyledBox key={_id}>
            <Typography>{name}</Typography>
            <Typography>x {quantity}</Typography>
            <Typography>{price * quantity}</Typography>
          </StyledBox>
        );
      })}
      <Button
        onClick={() => {
          dispatch(clearCart());
          dispatch(saveCart({userId: userInfo._id, cartItems: []}))
        }}
      >
        clear cart
      </Button>
      {userInfo && (
        <Button
          onClick={() => {
            dispatch(saveCart({ userId: userInfo._id, cartItems }));
          }}
        >
          save cart
        </Button>
      )}
    </Drawer>
  );
};
