import React from "react";
import { Link, styled, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";
import truncate from "../utils/truncate";

const CardContainer = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: "100%",
}));

const CardText = styled(Typography)(({ theme }) => ({
  fontWeight: "900",
  fontSize: "1.1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

interface Props {
  article?: Article;
}

const ArticleTitle: React.FC<Props> = ({ article }) => {
  return (
    <Link href={`${article?.category}/${article?.slug}` || "/"}>
      <CardContainer className="hover-effect">
        <CardText variant="h6">{truncate(article?.title || "", 90)}</CardText>
      </CardContainer>
    </Link>
  );
};

export default ArticleTitle;
