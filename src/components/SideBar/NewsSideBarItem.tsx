import React from "react";
import { Link, Typography, Box } from "@mui/material";
import { ArticleType } from "../../types/dataTypes";
import slugify from "../../utils/slugify";

interface Props {
  article?: ArticleType;
}

const NewsSideBarItem: React.FC<Props> = ({ article }) => {
  return (
    <Link
      href={
        `/news/${slugify(article?.category || "")}/${article?.slug}` || "/"
      }>
      <Typography
        variant="h6"
        sx={{ fontSize: "1.2rem", fontWeight: "900", p: 0 }}>
        {article?.title}
      </Typography>
      <Box
        component={"img"}
        src={article?.picture}
        sx={{ objectFit: "cover", width: "100%", height: "200px" }}
      />
    </Link>
  );
};

export default NewsSideBarItem;
