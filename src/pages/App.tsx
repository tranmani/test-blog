import React from "react";
import "./App.css";
import { alpha, Grid, styled, Typography } from "@mui/material";
import Nav from "../components/Nav";
import FeatureArticle from "../components/FeatureArticle";
import SideBar from "../components/SideBar";
import ArticleCard from "../components/ArticleCard";
import news from "../data/news.json";
import promotions from "../data/promotions.json";
import { Article, Promotion } from "../types/dataTypes";
import TwoArticlesIcon from "../components/TwoArticlesIcon";
import ArticleTitle from "../components/ArticleTitle";
import PromotionPicture from "../components/PromotionPicture";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  // [theme.breakpoints.down("sm")]: {
  //   padding: `${theme.spacing(4)} 0 0 ${theme.spacing(4)}`,
  // },
}));

const MainContainer = styled("div")(({ theme }) => ({
  width: "75%",
  padding: theme.spacing(7),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
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
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const App: React.FC = () => {
  const latestNewsCards = [...news.news].splice(0, 6);
  const latestNewsTitles = [...news.news].splice(0, 12);
  const nextArticles = [...news.news].splice(0, 2);

  return (
    <Container>
      <MainContainer>
        <HeaderText variant="h5" sx={{ fontWeight: 900, pl: 2 }}>
          Blog News Feed
        </HeaderText>
        <Nav />
        {/* Feature article */}
        <FeatureArticle />
        <Grid container pt={2}>
          <Grid item xs={6}>
            <ArticleCard article={news.news[0] as Article} />
          </Grid>
          <Grid item xs={6}>
            <ArticleCard article={news.news[1] as Article} />
          </Grid>
          <Grid item xs={6}>
            <TwoArticlesIcon articles={nextArticles} />
          </Grid>
          <Grid item xs={6}>
            <TwoArticlesIcon articles={nextArticles} />
          </Grid>
        </Grid>

        {/* Latest news */}
        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3, pl: 2 }}>
          Latest News
        </HeaderText>

        <Grid container sx={{ pb: 5 }}>
          {latestNewsCards.map((article: Article, index: number) => {
            return (
              <Grid item xs={6} key={article.title}>
                <ArticleCard article={article as Article} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container>
          {latestNewsTitles.map((article: Article, index: number) => {
            return (
              <Grid item xs={12} md={6} key={article.title}>
                <ArticleTitle article={article as Article} />
              </Grid>
            );
          })}
        </Grid>

        {/* Latest Promotions */}
        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3, pl: 2 }}>
          Latest Promotions
        </HeaderText>
        <Grid container>
          {promotions.promotions.map((promotion: Promotion) => {
            return (
              <Grid item xs={6} key={promotion.altText}>
                <PromotionPicture promotion={promotion} />
              </Grid>
            );
          })}
        </Grid>
      </MainContainer>

      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
    </Container>
  );
};

export default App;
