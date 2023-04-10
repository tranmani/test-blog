import React from "react";
import { Box, Link, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import truncate from "../../utils/truncate";
import { FootballSubCategories } from "../../types/dataTypes";
import slugify from "../../utils/slugify";

const CardContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
}));

export const ReadMore = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: "900",
}));

interface Props {
  article?: ArticleType;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const isSubCategory = () => {
    if (FootballSubCategories.includes(article?.category || ""))
      return (
        <Typography
          variant="body2"
          sx={{
            pt: 1,
            pb: 2,
          }}
        >
          <Link href={"/news/foodball"}>Foodball</Link> /{" "}
          <Link href={`/news/${slugify(article?.category || "")}`}>
            <span style={{ fontWeight: "900" }}>{article?.category}</span>
          </Link>
        </Typography>
      );
    else
      return (
        <Typography
          variant="body2"
          sx={{
            pt: 1,
            pb: 2,
          }}
        >
          <Link href={"/news/" + slugify(article?.category || "")}>{article?.category}</Link>
        </Typography>
      );
  };

  return (
    <CardContainer className="hover-effect">
      <Box sx={{ height: "100%" }}>
        <Link href={`/news/${slugify(article?.category || "")}/${article?.slug}` || "/"}>
          <Box
            component="img"
            src={article?.picture || "https://dummyimage.com/600x400/000/fff"}
            alt="article"
            sx={{ objectFit: "cover", width: "100%", maxHeight: "325px" }}
          />
        </Link>
        {/* Category */}
        {isSubCategory()}
        {/* Title */}
        <Link
          variant="h5"
          href={`/news/${slugify(article?.category || "")}/${article?.slug}` || "/"}
          sx={{
            fontWeight: { xs: "900", md: "700" },
            pb: 2,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          {truncate(article?.title || "", 70) || "Tranmani last promotional video for affiliate"}
        </Link>
        {/* Excerpt */}
        {!mobile && (
          <Typography
            variant="body2"
            sx={{
              pb: 1,
            }}
          >
            {truncate(article?.excerpt || "", 120) ||
              truncate(
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores pariatur error beatae animi! Molestias explicabo fugit reiciendis, voluptate quis officiis iusto fuga velit animi qui exercitationem dolorum labore ipsam eligendi quam blanditiis placeat aliquam unde ullam eaque maiores corrupti tenetur quisquam! Molestias porro doloribus harum! Expedita aliquam cupiditate eligendi vero nihil obcaecati nesciunt, non quisquam est odio vel, tempore veniam? Laudantium, nobis! Vitae odit iure aspernatur quibusdam doloribus hic eum officiis minus ad ipsam, nesciunt aliquid, dolorem iusto sequi, iste nulla inventore eveniet eius sunt amet.",
                120
              )}{" "}
            <ReadMore href={`/news/${slugify(article?.category || "")}/${article?.slug}` || "/"}>READ MORE</ReadMore>
          </Typography>
        )}
      </Box>
    </CardContainer>
  );
};

export default ArticleCard;
