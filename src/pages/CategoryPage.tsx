import React, { useEffect } from "react";
import "./App.css";
import { alpha, Grid, Link, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar/SideBar";
import ArticleCard from "../components/Main/ArticleCard";
import { ArticleType, GUIDES, PromotionType } from "../types/dataTypes";
import ArticleTitle from "../components/Main/ArticleTitle";
import PromotionPicture from "../components/Main/PromotionPicture";

// Data
import news from "../data/news.json";
import promotions from "../data/promotions.json";
import liveFootballs from "../data/liveFootballs.json";
import advertisement from "../data/advertisement.json";
import casinoWins from "../data/casinoWins.json";
import highProfitBets from "../data/highProfitBets.json";
import { useNavigate, useParams } from "react-router-dom";
import FeatureArticle from "../components/Main/FeatureArticle";
import getCategoryBySlug from "../utils/getCategoryBySlug";
import slugify from "../utils/slugify";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  fontWeight: 900,
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
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
    "&::before": {
      width: 0,
    },
  },
}));

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const mobileMD = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const featureArticle = [...news.news].filter((article: ArticleType) => {
    return slugify(article.category) === categoryName;
  })[0];
  const relatedArticles = [...news.news].splice(0, 4);
  const latestNewsCards = [...news.news]
    .filter((article: ArticleType) => {
      return slugify(article.category) === categoryName;
    })
    .splice(0, 6);
  const latestNewsTitles = [...news.news]
    .filter((article: ArticleType) => {
      return slugify(article.category) === categoryName;
    })
    .splice(6, 12);
  const bettingGuides = [...news.news].filter((article: ArticleType) => article.category === GUIDES).splice(0, 9);
  const newsSideBar = [...news.news].splice(0, 3);

  useEffect(() => {
    // Check if category exists
    if (!getCategoryBySlug(categoryName || "")) {
      navigate("/error");
    }
  }, [categoryName, navigate]);

  return (
    <Container>
      <MainContainer>
        <Link href="/">
          <HeaderText variant="h5">{getCategoryBySlug(categoryName || "")?.name} News Feed</HeaderText>
        </Link>
        <Nav />

        {/* Feature article */}
        {featureArticle && <FeatureArticle featureArticle={featureArticle} relatedArticles={relatedArticles} />}

        {/* Latest news */}
        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3, pl: 2 }}>
          Latest News
        </HeaderText>

        {/* Latest news CARD */}
        <Grid container sx={{ pb: 5 }}>
          {latestNewsCards.length !== 0 ? (
            latestNewsCards.map((article: ArticleType, index: number) => {
              return (
                <Grid item xs={6} key={article.id}>
                  <ArticleCard article={article as ArticleType} />
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <Typography variant="h2" sx={{ fontSize: "2rem", textAlign: "center" }}>
                No news at the moment
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* Latest news TITLE ONLY */}
        {latestNewsTitles && (
          <Grid container>
            {latestNewsTitles.map((article: ArticleType, index: number) => {
              return (
                <Grid item xs={12} md={6} key={article.title}>
                  <ArticleTitle article={article as ArticleType} />
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* Latest Promotions */}
        <HeaderText variant="h6" sx={{ fontWeight: 900, pt: 3, pl: { xs: 2 } }}>
          Latest Promotions
        </HeaderText>
        <Grid container>
          {promotions.promotions.map((promotion: PromotionType) => {
            return (
              <Grid item xs={6} key={promotion.id}>
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
          newsSideBar={newsSideBar}
        />
      </SideBarContainer>
    </Container>
  );
};

export default CategoryPage;
