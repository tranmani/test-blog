import React from "react";
import "./App.css";
import { alpha, styled, Typography } from "@mui/material";
import Nav from "../components/Nav";
import FeatureArticle from "../components/FeatureArticle";
import SideBar from "../components/SideBar";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

const MainContainer = styled("div")(({ theme }) => ({
  width: "75%",
  padding: `${theme.spacing(7)} ${theme.spacing(7)}`,
}));

const SideBarContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "25%",
  backgroundColor: theme.palette.secondary.main,
  "&::before": {
    position: "absolute",
    content: '""',
    height: "100%",
    width: "1px",
    backgroundColor: alpha(theme.palette.secondary.dark, 0.5),
  },
}));

const App: React.FC = () => {
  return (
    <Container>
      <MainContainer>
        <Typography variant="h5">Blog News Feed</Typography>
        <Nav />
        <FeatureArticle />
      </MainContainer>

      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
    </Container>
  );
};

export default App;
