import React from "react";
import { Box, Link } from "@mui/material";
import { Promotion } from "../types/dataTypes";

interface Props {
  promotion?: Promotion;
}

const PromotionPicture: React.FC<Props> = ({ promotion }) => {
  return (
    <Link href={promotion?.link || "/"}>
      <Box
        component="img"
        src={promotion?.picture || "https://dummyimage.com/900x500/000/fff"}
        alt={promotion?.altText || ""}
        sx={{
          p: { xs: 1, sm: 2, md: 2 },
          height: "100%",
          objectFit: "cover",
          width: "100%",
          maxHeight: "300px",
        }}
      />
    </Link>
  );
};

export default PromotionPicture;
