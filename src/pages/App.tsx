import React from "react";
import "./App.css";
import { alpha, Grid, styled, Typography } from "@mui/material";
import Nav from "../components/Nav";
import FeatureArticle from "../components/Main/FeatureArticle";
import SideBar from "../components/SideBar/SideBar";
import ArticleCard from "../components/Main/ArticleCard";
import { ArticleType, GUIDES, PromotionType } from "../types/dataTypes";
import TwoArticlesIcon from "../components/Main/TwoArticlesIcon";
import ArticleTitle from "../components/Main/ArticleTitle";
import PromotionPicture from "../components/Main/PromotionPicture";

// Data
import news from "../data/news.json";
import promotions from "../data/promotions.json";
import liveFootballs from "../data/liveFootballs.json";
import advertisement from "../data/advertisement.json";
import casinoWins from "../data/casinoWins.json";
import highProfitBets from "../data/highProfitBets.json";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  fontWeight: 900,
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(2),
  },
}));

const MainContainer = styled("div")(({ theme }) => ({
  width: "75%",
  padding: theme.spacing(7),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
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
    backgroundColor: "white",
  },
}));

const App: React.FC = () => {
  const featureArticle = [...news.news][0];
  const relatedArticles = [...news.news].splice(0, 4);
  const latestNewsCards = [...news.news].splice(0, 6);
  const latestNewsTitles = [...news.news].splice(0, 12);
  const nextArticles = [...news.news].splice(0, 2);
  const bettingGuides = [...news.news]
    .filter((article: ArticleType) => article.category === GUIDES)
    .splice(0, 9);

  return (
    <Container>
      <MainContainer>
        <HeaderText variant="h5">Blog News Feed</HeaderText>
        <Nav />
        {/* Feature article */}
        <FeatureArticle
          featureArticle={featureArticle}
          relatedArticles={relatedArticles}
        />
        <Grid container pt={2}>
          <Grid item xs={6}>
            <ArticleCard article={news.news[0] as ArticleType} />
          </Grid>
          <Grid item xs={6}>
            <ArticleCard article={news.news[1] as ArticleType} />
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
          {latestNewsCards.map((article: ArticleType, index: number) => {
            return (
              <Grid item xs={6} key={article.title}>
                <ArticleCard article={article as ArticleType} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container>
          {latestNewsTitles.map((article: ArticleType, index: number) => {
            return (
              <Grid item xs={12} md={6} key={article.title}>
                <ArticleTitle article={article as ArticleType} />
              </Grid>
            );
          })}
        </Grid>

        {/* Latest Promotions */}
        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3, pl: { xs: 2 } }}>
          Latest Promotions
        </HeaderText>
        <Grid container>
          {promotions.promotions.map((promotion: PromotionType) => {
            return (
              <Grid item xs={6} key={promotion.altText}>
                <PromotionPicture promotion={promotion} />
              </Grid>
            );
          })}
        </Grid>
      </MainContainer>

      <SideBarContainer>
        <SideBar
          liveFootballs={liveFootballs.liveFootballs}
          advertisement={advertisement}
          bettingGuides={bettingGuides}
          casinoWins={casinoWins.casinoWins}
          highProfitBets={highProfitBets.highProfitBets}
        />
      </SideBarContainer>
    </Container>
  );
};

export default App;
