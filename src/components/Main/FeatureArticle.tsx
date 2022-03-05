import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import RelatedArticle from "./RelatedArticle";
import truncate from "../../utils/truncate";
import slugify from "../../utils/slugify";
import { ReadMore } from "./ArticleCard";

interface Props {
  featureArticle?: ArticleType;
  relatedArticles?: ArticleType[];
}

const FeatureArticle: React.FC<Props> = ({ featureArticle, relatedArticles }) => {
  const articleDate = new Date((featureArticle && featureArticle?.date) || "");

  return (
    <>
      {/* Picture */}
      <Link href={`/news/${slugify(featureArticle?.category || "")}/${featureArticle?.slug}` || "/"}>
        <Box
          component="img"
          src={featureArticle?.picture || "https://dummyimage.com/900x500/000/fff"}
          alt="feature article"
          sx={{ objectFit: "cover", width: "100%", maxHeight: "500px" }}
        />
      </Link>
      <Box sx={{ px: { xs: 2, sm: 0 } }}>
        {/* Category */}
        <Link href={"/news/" + slugify(featureArticle?.category || "") || "/"}>
          <Typography
            variant="body2"
            sx={{
              pt: 1,
              pb: { xs: 0, sm: 2 },
            }}>
            {featureArticle?.category || "Affiliate"}
          </Typography>
        </Link>

        {/* Title */}
        <Link href={`/news/${slugify(featureArticle?.category || "")}/${featureArticle?.slug}` || "/"}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
            }}>
            {featureArticle?.title || "Betfinal last promotional video for affiliate"}
          </Typography>
        </Link>

        {/* Date */}
        <Typography
          variant="body2"
          sx={{
            pb: 1,
          }}>
          {`${articleDate.getDate()} ${articleDate.toLocaleString("en-us", {
            month: "short",
          })} ${articleDate.getFullYear()}` || "05 Nov 2021"}
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

          <ReadMore href={`/news/${slugify(featureArticle?.category || "")}/${featureArticle?.slug}` || "/"}>READ MORE</ReadMore>
        </Typography>
      </Box>

      {/* Related articles */}
      {relatedArticles && <RelatedArticle articles={relatedArticles as ArticleType[]} />}
    </>
  );
};

export default FeatureArticle;
