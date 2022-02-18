import React from "react";
import { Link, styled } from "@mui/material";
import { Article } from "../types/dataTypes";
import truncate from "../utils/truncate";
import { DividedLine } from "./RelatedArticle";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const ArticleItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(1),
}));

const ArticleTitle = styled(Link)(({ theme }) => ({
  "&:hover": {
    fontWeight: "900",
  },
}));

const ArrowIcon = styled(ArrowCircleRightOutlinedIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(1),
}));

interface Props {
  articles?: Article[];
}

const TwoArticlesIcon: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <DividedLine sx={{ ml: 2, mr: 2 }} />
      {articles?.map((article: Article, index: number) => {
        return (
          <ArticleItem key={article.title}>
            <ArrowIcon sx={{ m: 1 }} />
            <ArticleTitle
              href={`${article.category}/${article.slug}`}
              variant={"h6"}>
              {truncate(article.title, 35)}
            </ArticleTitle>
          </ArticleItem>
        );
      })}
      <DividedLine sx={{ ml: 2, mr: 2 }} />
    </>
  );
};

export default TwoArticlesIcon;
