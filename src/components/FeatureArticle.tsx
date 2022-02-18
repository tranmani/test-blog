import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Article } from "../types/dataTypes";
import RelatedArticle from "./RelatedArticle";
import news from "../data/news.json";
import truncate from "../utils/truncate";

interface Props {
  featureArticle?: Article;
}

const FeatureArticle: React.FC<Props> = ({ featureArticle }) => {
  const relatedArticles = [...news.news].splice(0, 4);

  return (
    <>
      {/* Picture */}
      <Link href={`${featureArticle?.category}/${featureArticle?.slug}` || "/"}>
        <Box
          component="img"
          src={
            featureArticle?.picture || "https://dummyimage.com/900x500/000/fff"
          }
          alt="feature article"
          sx={{ objectFit: "cover", width: "100%", maxHeight: "500px" }}
        />
      </Link>
      {/* Category */}
      <Box sx={{ px: { xs: 2, sm: 0 } }}>
        <Link href={featureArticle?.category || "/"}>
          <Typography
            variant="body2"
            sx={{
              pt: 1,
              pb: 2,
            }}>
            {featureArticle?.category || "Affiliate"}
          </Typography>
        </Link>
        {/* Title */}
        <Link
          href={`${featureArticle?.category}/${featureArticle?.slug}` || "/"}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}>
            {featureArticle?.title ||
              "Betfinal last promotional video for affiliate"}
          </Typography>
        </Link>
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
      </Box>
      {/* Related articles */}
      <RelatedArticle articles={relatedArticles as Article[]} />
    </>
  );
};

export default FeatureArticle;
