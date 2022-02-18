import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";
import truncate from "../utils/truncate";
import { FootballSubCategories } from "../types/dataTypes";
import { Link } from "react-router-dom";

const CardContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  // maxHeight: "100%",
}));

export const ReadMore = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

interface Props {
  article?: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const isSubCategory = () => {
    if (FootballSubCategories.includes(article?.category || ""))
      return (
        <Typography
          variant="body2"
          sx={{
            pt: 1,
            pb: 2,
          }}>
          Foodball /{" "}
          <span style={{ fontWeight: "900" }}>{article?.category}</span>
        </Typography>
      );
    else
      return (
        <Typography
          variant="body2"
          sx={{
            pt: 1,
            pb: 2,
          }}>
          {article?.category}
        </Typography>
      );
  };

  return (
    <CardContainer className="hover-effect">
      <Box
        component="img"
        src={article?.picture || "https://dummyimage.com/600x400/000/fff"}
        alt="article"
        sx={{ objectFit: "cover", width: "100%", maxHeight: "325px" }}
      />
      {/* Category */}
      {isSubCategory()}
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}>
        {article?.title || "Betfinal last promotional video for affiliate"}
      </Typography>
      {/* Excerpt */}
      <Typography
        variant="body2"
        sx={{
          pb: 1,
        }}>
        {truncate(article?.excerpt || "", 150) ||
          truncate(
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores pariatur error beatae animi! Molestias explicabo fugit reiciendis, voluptate quis officiis iusto fuga velit animi qui exercitationem dolorum labore ipsam eligendi quam blanditiis placeat aliquam unde ullam eaque maiores corrupti tenetur quisquam! Molestias porro doloribus harum! Expedita aliquam cupiditate eligendi vero nihil obcaecati nesciunt, non quisquam est odio vel, tempore veniam? Laudantium, nobis! Vitae odit iure aspernatur quibusdam doloribus hic eum officiis minus ad ipsam, nesciunt aliquid, dolorem iusto sequi, iste nulla inventore eveniet eius sunt amet.",
            150
          )}{" "}
        <ReadMore to={`${article?.category}/${article?.slug}` || "/"}>
          READ MORE
        </ReadMore>
      </Typography>
    </CardContainer>
  );
};

export default ArticleCard;
