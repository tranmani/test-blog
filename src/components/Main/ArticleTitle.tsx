import React from "react";
import { Link, styled, Typography } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import truncate from "../../utils/truncate";

const CardContainer = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: "100%",
  fontWeight: "900",
  fontSize: "1.1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

interface Props {
  article?: ArticleType;
  maxTextLength?: number;
}

const ArticleTitle: React.FC<Props> = ({ article, maxTextLength }) => {
  return (
    <Link href={`${article?.category}/${article?.slug}` || "/"}>
      <CardContainer variant="h6" className="hover-effect">
        {truncate(article?.title || "", maxTextLength || 90)}
      </CardContainer>
    </Link>
  );
};

export default ArticleTitle;
