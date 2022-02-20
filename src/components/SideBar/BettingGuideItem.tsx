import React from "react";
import { styled, Link } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import slugify from "../../utils/slugify";

const ComponentContainer = styled("div")(({ theme }) => ({
  position: "relative",
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  width: "100%",
  // marginBottom: theme.spacing(0.5),
  fontSize: "0.8rem",
  transform: "translateX(0.5rem)",
  transition: "transform 0.2s ease-in-out",
  "&:before": {
    content: '"•"',
    position: "absolute",
    transform: "translateX(-0.6rem) translateY(-0.2rem)",
    fontSize: "1.2rem",
    transition: "transform 0.2s ease-in-out",
  },
  "&:hover": {
    fontWeight: "900",
    transform: "translateX(0)",
    transition: "transform 0.2s ease-in-out",
    "&:before": {
      content: '""',
      transform: "translateX(0) translateY(-0.2rem)",
    },
  },
}));

interface Props {
  article?: ArticleType;
}

const BettingGuideItem: React.FC<Props> = ({ article }) => {
  return (
    <Link href={`/news/${slugify(article?.category || "")}/${article?.slug}`}>
      <ComponentContainer>{article?.title}</ComponentContainer>
    </Link>
  );
};

export default BettingGuideItem;
