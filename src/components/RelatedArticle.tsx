import React from "react";
import { styled, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";

const DividedLine = styled("div")(({ theme }) => ({
  height: "2px",
  backgroundColor: theme.palette.secondary.dark,
  margin: `${theme.spacing(1.5)} 0`,
}));

const RelatedArticleItem = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
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
      {articles &&
        articles.map((article: Article) => {
          return (
            <RelatedArticleItem className="hover-effect">
              {article.title}
            </RelatedArticleItem>
          );
        })}
    </>
  );
};

export default RelatedArticle;
