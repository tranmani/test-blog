import React from "react";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { articleName } = useParams();
  return (
    <>
      <div>{articleName} Detail page</div>
    </>
  );
};

export default DetailPage;
