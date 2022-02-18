import React from "react";
import "./App.css";
import { alpha, Grid, styled, Typography } from "@mui/material";
import Nav from "../components/Nav";
import FeatureArticle from "../components/FeatureArticle";
import SideBar from "../components/SideBar";
import ArticleCard from "../components/ArticleCard";
import news from "../data/news.json";
import { Article } from "../types/dataTypes";
import TwoArticlesIcon from "../components/TwoArticlesIcon";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(4)} 0 0 ${theme.spacing(4)}`,
  },
}));

const MainContainer = styled("div")(({ theme }) => ({
  width: "75%",
  [theme.breakpoints.up("sm")]: {
    padding: `${theme.spacing(7)} ${theme.spacing(7)}`,
  },
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
  const latestNewsCards = news.news.splice(0, 5);

  return (
    <Container>
      <MainContainer>
        <HeaderText variant="h5" sx={{ fontWeight: 900 }}>
          Blog News Feed
        </HeaderText>
        <Nav />
        <FeatureArticle />
        <Grid container pt={2}>
          <Grid item xs={12} md={6}>
            <ArticleCard article={news.news[0] as Article} />
            <TwoArticlesIcon articles={news.news.slice(0, 2)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ArticleCard article={news.news[1] as Article} />
            <TwoArticlesIcon articles={news.news.slice(0, 2)} />
          </Grid>
        </Grid>

        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3 }}>
          Latest News
        </HeaderText>

        {/* {latestNewsCards.map((article: Article, index: number) => {
          return (
            <ArticleCard article={article as Article} key={article.title} />
          );
        })} */}
      </MainContainer>

      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
    </Container>
  );
};

export default App;
