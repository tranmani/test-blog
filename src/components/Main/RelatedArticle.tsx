import React from "react";
import { Grid, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import ArticleTitle from "./ArticleTitle";

export const DividedLine = styled("div")(({ theme }) => ({
  height: "2px",
  backgroundColor: theme.palette.secondary.dark,
  margin: `${theme.spacing(1.5)} 0`,
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2),
  },
}));

const RelatedArticleContainer = styled(Grid)(({ theme }) => ({
  "&::nth-of-type(2) ::nth-of-type(4) .MuiGrid-item": {
    textAlign: "right",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "initial",
    "&.MuiGrid-item": {
      paddingTop: 0,
    },
  },
}));

interface Props {
  articles?: ArticleType[];
}

const RelatedArticle: React.FC<Props> = ({ articles }) => {
  const mobileMD = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <>
      <DividedLine />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "900",
          p: { xs: 1, md: 0 },
        }}>
        Related Articles
      </Typography>
      <Grid container spacing={2}>
        {articles &&
          articles.map((article: ArticleType, index: number) => {
            return (
              <RelatedArticleContainer item xs={12} md={6} key={article.title}>
                <ArticleTitle
                  article={article}
                  maxTextLength={mobileMD ? 70 : 50}
                />
              </RelatedArticleContainer>
            );
          })}
      </Grid>
      <DividedLine />
    </>
  );
};

export default RelatedArticle;
