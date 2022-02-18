import React from "react";
import { Grid, Link, styled, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";
import truncate from "../utils/truncate";

export const DividedLine = styled("div")(({ theme }) => ({
  height: "2px",
  backgroundColor: theme.palette.secondary.dark,
  margin: `${theme.spacing(1.5)} 0`,
}));

const RelatedArticleItem = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  fontWeight: "bold",
}));

interface Props {
  articles?: Article[];
}

const RelatedArticle: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <DividedLine />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "900",
        }}>
        Related Articles
      </Typography>
      <Grid container spacing={2}>
        {articles &&
          articles.map((article: Article, index: number) => {
            return (
              <Grid
                item
                xs={12}
                lg={6}
                key={article.title}
                sx={{
                  textAlign: index % 2 ? "right" : "initial",
                  "&.MuiGrid-item": {
                    paddingTop: index > 1 ? "0" : 2,
                  },
                }}>
                <RelatedArticleItem className="hover-effect" variant="h6">
                  {truncate(article.title, 40)}
                </RelatedArticleItem>
                {/* <RelatedArticleItem href={`${article.category}/${article.slug}`} className="hover-effect" variant="h6">
                  {truncate(article.title, 40)}
                </RelatedArticleItem> */}
              </Grid>
            );
          })}
      </Grid>
      <DividedLine />
    </>
  );
};

export default RelatedArticle;
