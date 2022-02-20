import React from "react";
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
