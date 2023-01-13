import { Card, Grid, Typography, Box, styled } from "@mui/material";
import React from "react";

const StyledCardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ProductCard = ({
  name,
  _id,
  image,
  price,
  category,
  brand,
  description,
}) => {
  return (
    <Grid item>
      <Card>
        <img src={image} alt={`${category} ${name} `} width="200px" height="200px"/>
        <StyledCardContent>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
        </StyledCardContent>
      </Card>
    </Grid>
  );
};