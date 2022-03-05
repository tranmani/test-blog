import React from "react";
import { styled, Typography } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import RelatedArticle from "../Main/RelatedArticle";

const Article = styled("article")(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ArticleContentDiv = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

interface Props {
  article: ArticleType;
  relatedArticles: ArticleType[];
}

const ArticleContent: React.FC<Props> = ({ article, relatedArticles }) => {
  const articleDate = article.date && new Date(article.date);

  return (
    <Article>
      {/* Date */}
      {articleDate && (
        <Typography variant="body2">
          {`${articleDate.getDate()} ${articleDate.toLocaleString("en-us", {
            month: "short",
          })} ${articleDate.getFullYear()}` || ""}
        </Typography>
      )}

      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: "900",
          fontSize: { xs: "1.3rem", sm: "1.5rem" },
        }}>
        {article.title}
      </Typography>

      {/* Category */}
      <Typography
        variant="body2"
        sx={{
          pb: { xs: 1, sm: 4 },
        }}>
        {article.category}
      </Typography>

      {/* Content */}
      <ArticleContentDiv dangerouslySetInnerHTML={{ __html: article.content }} />

      {/* Related articles */}
      {relatedArticles && <RelatedArticle articles={relatedArticles as ArticleType[]} />}
    </Article>
  );
};

export default ArticleContent;
