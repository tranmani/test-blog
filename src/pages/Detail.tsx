import React from "react";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";

const Detail: React.FC = () => {
  const params = useParams();
  return (
    <>
      <div>{params.articleName} page</div>
    </>
  );
};

export default Detail;
