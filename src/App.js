import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { instance } from "./application";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { fetchHomePageProducts } from "./redux";
import { RoutesComponent } from "./Routes";

const StyledContentContainer = styled(Box)(() => ({
    padding: "20px",
    marginLeft: "255px",
    marginTop: "70px",
    minHeight: "100vh",
}));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts())
  }, []);
  return (
    <Box>
      <Sidebar/>
      <Header />
      <StyledContentContainer>
        <RoutesComponent />
      </StyledContentContainer>
    </Box>
  );
}

export default App;