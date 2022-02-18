import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";
import RelatedArticle from "./RelatedArticle";
import news from "../data/news.json";
import truncate from "../utils/truncate";

const NavContainer = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "3px",
  margin: "2rem 0",
}));

interface Props {
  featureArticle?: Article;
}

const FeatureArticle: React.FC<Props> = ({ featureArticle }) => {
  return (
    <>
      {/* Picture */}
      <Box
        component="img"
        src={
          featureArticle?.picture || "https://dummyimage.com/900x500/000/fff"
        }
        alt="feature article"
        sx={{ objectFit: "cover", width: "100%", maxHeight: "500px" }}
      />
      {/* Category */}
      <Typography
        variant="body2"
        sx={{
          pt: 1,
          pb: 2,
        }}>
        {featureArticle?.category || "Affiliate"}
      </Typography>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}>
        {featureArticle?.title ||
          "Betfinal last promotional video for affiliate"}
      </Typography>
      {/* Date */}
      <Typography
        variant="body2"
        sx={{
          pb: 1,
        }}>
        {featureArticle?.date || "05 Nov 2021"}
      </Typography>
      {/* Excerpt */}
      <Typography
        variant="body2"
        sx={{
          pb: 1,
        }}>
        {truncate(featureArticle?.excerpt || "", 500) ||
          truncate(
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores pariatur error beatae animi! Molestias explicabo fugit reiciendis, voluptate quis officiis iusto fuga velit animi qui exercitationem dolorum labore ipsam eligendi quam blanditiis placeat aliquam unde ullam eaque maiores corrupti tenetur quisquam! Molestias porro doloribus harum! Expedita aliquam cupiditate eligendi vero nihil obcaecati nesciunt, non quisquam est odio vel, tempore veniam? Laudantium, nobis! Vitae odit iure aspernatur quibusdam doloribus hic eum officiis minus ad ipsam, nesciunt aliquid, dolorem iusto sequi, iste nulla inventore eveniet eius sunt amet.",
            500
          )}
      </Typography>
      {/* Related articles */}
      <RelatedArticle articles={news.news as Article[]} />
    </>
  );
};

export default FeatureArticle;
