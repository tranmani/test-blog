import React from "react";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  return (
    <>
      <div>{categoryName} Category page</div>
    </>
  );
};

export default CategoryPage;
