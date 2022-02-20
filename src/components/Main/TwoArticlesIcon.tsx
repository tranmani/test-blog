import React from "react";
import { Link, styled, Typography } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import truncate from "../../utils/truncate";
import { DividedLine } from "./RelatedArticle";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import slugify from "../../utils/slugify";

const ArticleItem = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(1),
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  "&:hover": {
    fontWeight: "900",
  },
}));

const ArrowIcon = styled(ArrowCircleRightOutlinedIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(1),
}));

interface Props {
  articles?: ArticleType[];
  maxTitleLength?: number;
}

const TwoArticlesIcon: React.FC<Props> = ({ articles, maxTitleLength }) => {
  return (
    <>
      <DividedLine sx={{ ml: 2, mr: 2 }} />
      {articles?.map((article: ArticleType, index: number) => {
        return (
          <ArticleItem
            key={article.id}
            href={`/news/${slugify(article.category || "")}/${article.slug}`}>
            <ArrowIcon sx={{ m: 1 }} />
            <ArticleTitle variant={"h6"}>
              {truncate(article.title, maxTitleLength || 35)}
            </ArticleTitle>
          </ArticleItem>
        );
      })}
      <DividedLine sx={{ ml: 2, mr: 2 }} />
    </>
  );
};

export default TwoArticlesIcon;
